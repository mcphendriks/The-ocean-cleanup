<script>
    import TrashRemovedOcean from '../../components/trash-removed.svelte';
    import Infotext from '../../components/infotext.svelte';
	import TrashRemoved from '../../components/trash-removed.svelte';
    import Image from '../../components/image.svelte';
	import { cubicOut } from 'svelte/easing';
    export let data

</script>

<section>
    <h2>Interceptor {data.currentInterceptor[0].name}</h2>
    <TrashRemovedOcean data={data.currentInterceptor[0]}/>
    <Infotext data={data.currentInterceptorHygraph[0].riverInfoText} />
    <TrashRemoved data={data.currentInterceptor[0]} />
    <Image data={data.currentInterceptorHygraph[0].riverImage} />
    <div class="map">
        Hier kan de map komen.
    </div>
</section>
   



    <style>
        
    /* mobiele versie */
    section{
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
     section{
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