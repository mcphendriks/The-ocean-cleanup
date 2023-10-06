import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  
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
      title
    }
  }
  
`
  const dataHygraph = await hygraph.request(query)

  const grrrData = await fetch("https://fdnd-toc-api.netlify.app/total")

        const dataApi = await grrrData.json()
        console.log()
  return {dataHygraph, dataApi}

}
