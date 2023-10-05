<script>
    import TrashRemovedOcean from '../../components/trash-removed-ocean.svelte';
    export let data

</script>

<h2>{data.dataApi.systems[0]. name}</h2>
<main>

<TrashRemovedOcean></TrashRemovedOcean>

<article>
    <p>{data.dataHygraph.dashboard.trashRemoved.trashRemovedText[0].text}</p>
   <p>{data.dataApi.systems[0].debris_extracted_last_30d}Kg</p>
</article>


<article>
    <p>{data.dataHygraph.dashboard.trashRemoved.trashRemovedText[1].text}</p>
   <p>{data.dataApi.systems[0].debris_extracted_total}Kg</p>
</article>

<section>
    <p>{data.dataHygraph.dashboard.ocean.oceanInfotext.infotext.markdown}</p>
</section>

{#each data.dataHygraph.dashboard.ocean.oceanImage as img}
    <img alt="" src="{img.url}">
{/each}
</main>

<style>
    article{
        color: white;
        background-color: #5CC8DE;
        
    }
    img{
        width: 10rem;
        height: auto;
    }
</style>