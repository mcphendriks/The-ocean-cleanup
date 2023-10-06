<script>
    import Infotext from '../../components/infotext.svelte';
    import TrashRemovedOcean from '../../components/trash-removed-ocean.svelte';
    import Image from '../../components/image.svelte';
    export let data

</script>

<h2>{data.dataApi.systems[0]. name}</h2>
<main>

<TrashRemovedOcean data={data.dataApi.systems[0]}></TrashRemovedOcean>

<Infotext data={data.dataHygraph.dashboard.ocean.oceanInfotext} />

<Image data={data.dataHygraph.dashboard.ocean.oceanImage} />

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
    
</style>