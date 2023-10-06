<script>
    import TrashRemovedOcean from '../../components/trash-removed-ocean.svelte';
    export let data

</script>

<h2>{data.dataApi.systems[0]. name}</h2>
<main>

<TrashRemovedOcean data={data.dataApi.systems[0]}></TrashRemovedOcean>

<section>
    <p>{data.dataHygraph.dashboard.ocean.oceanInfotext.infotext.markdown}</p>
</section>

{#each data.dataHygraph.dashboard.ocean.oceanImage as img}
    <img alt="" src="{img.url}">
{/each}
</main>

<style>
        :root {
    --darkBlue: #143653;
    --lightBlue: #5CC8DE;
    --whiteColor: #ffffff;
    --lightGray: #f7f7f7;
    --accentGray: rgb(228, 228, 228);
    --worldmapGray: #dbdbdb;
    --worldmapBorder: #8c8c8c;
    --worldmapbuttons: rgb(235, 235, 235);
    --textColor: #143653;
    --boxShadow: rgba(128, 128, 128, 0.132);
    --color: rgb(212, 212, 212);
    --textSize: 1.2rem;
    --iconSize: 2rem;
    }
    /* article{
        color: white;
        background-color: #5CC8DE;
        
    } */
    img{
        width: 10rem;
        height: auto;
    }
</style>