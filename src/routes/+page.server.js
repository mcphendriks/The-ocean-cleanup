export async function load() {

    const grrrData = await fetch("https://fdnd-toc-api.netlify.app/river")
  
          const dataApi = await grrrData.json()
  
    return {dataApi}

  }