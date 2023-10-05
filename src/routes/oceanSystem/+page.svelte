<script>
    export let data
    console.log(data)
</script>

<h2>{data.dataApi.systems[0]. name}</h2>

<article>
   <p>{data.dataApi.systems[0].debris_extracted_last_30d}Kg</p>
   <p>{data.dataHygraph.dashboard.trashRemoved.trashRemovedtext}</p>
    
</article>