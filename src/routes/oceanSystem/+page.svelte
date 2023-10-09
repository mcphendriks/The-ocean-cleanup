<script>
    import Infotext from '../../components/infotext.svelte';
    import TrashRemovedOcean from '../../components/trash-removed.svelte';
    import Image from '../../components/image.svelte';
    export let data
</script>

<svelte:head>
    <title>Ocean System Dashboard</title>
</svelte:head>

<main>
    <h2>{data.dataApi.systems[0]. name}</h2>
    <TrashRemovedOcean data={data.dataApi.systems[0]} />
    <Infotext data={data.dataHygraph.dashboard.ocean.oceanInfotext} />
    <Image data={data.dataHygraph.dashboard.ocean.oceanImage} />
    <section class="map">
        Hier kan de map komen.
    </section>
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

    /* Grid container */
    /* soms staat de grid area al gedefinieerd in de component zelf */

    /* mobiele versie */
   main{
    margin: 8rem 1.5rem 1.5rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr, 1fr;
    grid-template-rows: 0.1fr, 0.3fr, 6fr, 2fr, 1fr, 1fr, 1fr, 1fr;
    gap: 1.2rem;
    grid-template-areas:
        "header header"
        "box-1 box-2"
        "dashboard-info dashboard-info"
        "map map"
        "image image"
    }

    h2 {
        grid-area: header;
    }
    .map{
        grid-area: map;
        width:100%;
        height:15rem;
        background-color: grey;
    }
    /* vanaf 992px */
    @media (min-width:62em) {
    main{
        margin: 5rem 2rem 2rem 22.3rem;
        grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
        grid-template-rows: 0.01fr 0.1fr 0.3fr 0.4fr 0.4fr 0.6fr;
        grid-template-areas:
            "header header header header header"
            "box-1 box-2 map map map"
            "dashboard-info dashboard-info map map map"
            "dashboard-info dashboard-info map map map"
            "dashboard-info dashboard-info map map map"
            "dashboard-info dashboard-info image image image"
            "dashboard-info dashboard-info image image image"
            "dashboard-info dashboard-info image image image"
    }
    .map{
        grid-area: map;
        width:100%;
        height:100%;
        background-color: grey;
    }
}
    
</style>