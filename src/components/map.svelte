<!-- src/routes/Map.svelte -->
<script>

    import { onMount } from 'svelte';
  
    let map;
  

    onMount(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoibWNwaGVuZHJpa3MiLCJhIjoiY2xuYWpkajM3MDRvNzJxbzdjbGg1YXc0MiJ9.mRRivdosZVdSXQ9FDd0ZwA';
  
      map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
        center: [-2.81361, 36.77271], // starting position [lng, lat]
        zoom: 13 // starting zoom
      });
  
      const layerList = document.getElementById('menu');
      const inputs = layerList.getElementsByTagName('input');

    });
  </script>
  
   
  
  <style>
    #map { position: absolute; top: 0; bottom: 0; width: 100%; }
  </style>
  
   
  
  <section id="map"></section>
  
   
  

  
  <!-- heeft contextmenu -->