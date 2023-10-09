import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'
import { json } from '@sveltejs/kit'

export async function load({ url, params }) {
  
  let query = gql`
  query Assets {
    dashboard(where: {id: "cln32p50anrma0bw03q8fsa54"}) {
      infotext {
        infotext {
          html
          text
        }
        id
      }
      trashRemoved {
        trashRemovedText {
          html
          text
        }
      }
      title
      river {
        id
        slug
        riverImage {
          url
        }
        riverTitle
        riverInfoText {
          infotext {
            markdown
            text
          }
        }
      }
    }
  }  
  `
 

  const dataHygraph = await hygraph.request(query)

  const currentInterceptorHygraph = dataHygraph.dashboard.river.filter(interceptor => {
    return interceptor.slug == url.searchParams.get('id')
  })
  
  const grrrData = await fetch("https://fdnd-toc-api.netlify.app/river")
  const interceptorList = await grrrData.json()

  const currentInterceptor = interceptorList.systems.filter(interceptor => {
    return interceptor.id == url.searchParams.get('id')
  })
  
  return {currentInterceptorHygraph, currentInterceptor}
}

