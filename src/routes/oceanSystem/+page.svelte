<script>
    import Infotext from '../../components/infotext.svelte';
    import TrashRemovedOcean from '../../components/trash-removed-ocean.svelte';
    import LastPortCall from '../../components/lastportcall.svelte'
    import Image from '../../components/image.svelte';
	import Startdate from '../../components/startdate.svelte';
	import Lastportcall from '../../components/lastportcall.svelte';
    export let data
</script>

<main>
    <h2>{data.dataApi.systems[0]. name}</h2>
    <TrashRemovedOcean data={data.dataApi.systems[0]}/>
    <Infotext data={data.dataHygraph.dashboard.ocean.oceanInfotext} />
    <Startdate data={data.dataHygraph.dashboard.ocean.oceanStartDate} />
    <Lastportcall data={data} />
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