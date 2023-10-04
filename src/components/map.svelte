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


       // Add your markers here
       const marker1 = new mapboxgl.Marker()
        .setLngLat([12.554729, 55.70651])
        .addTo(map);

      const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
        .setLngLat([12.65147, 55.608166])
        .addTo(map);

    });
  </script>
  
   
  
  <style>
    #map 
    { position: relative; width: 100%; height:100%;
    }
  </style>
  
   
  
  <section id="map"></section>
  
   
  

  
  <!-- heeft contextmenu -->