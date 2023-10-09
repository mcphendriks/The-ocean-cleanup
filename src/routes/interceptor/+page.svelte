<script>
    import TrashRemovedOcean from '../../components/trash-removed.svelte';
    import Infotext from '../../components/infotext.svelte';
	import TrashRemoved from '../../components/trash-removed.svelte';
    import Image from '../../components/image.svelte';
	import { cubicOut } from 'svelte/easing';
    export let data

</script>

    <TrashRemovedOcean data={data.currentInterceptor[0]}/>
    <Infotext data={data.currentInterceptorHygraph[0].riverInfoText} />
    <TrashRemoved data={data.currentInterceptor[0]} />
    <Image data={data.currentInterceptorHygraph[0].riverImage} />

    