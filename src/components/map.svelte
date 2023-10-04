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
  
      for (const input of inputs) {
        input.onclick = (layer) => {
          const layerId = layer.target.id;
          map.setStyle('mapbox://styles/mapbox/' + layerId);
        };
      }
    });
  </script>
  
   
  
  <style>
    body { margin: 0; padding: 0; }
    #map { position: absolute; top: 0; bottom: 0; width: 100%; }
    #menu {
      position: absolute;
      background: #efefef;
      padding: 10px;
      font-family: 'Open Sans', sans-serif;
    }
  </style>
  
   
  
  <section id="map"></section>
  
   
  
  <div id="menu">
  <input id="satellite-streets-v12" type="radio" name="rtoggle" value="satellite" checked="checked">
  <label for="satellite-streets-v12">satellite streets</label>
  <input id="light-v11" type="radio" name="rtoggle" value="light">
  <label for="light-v11">light</label>
  <input id="dark-v11" type="radio" name="rtoggle" value="dark">
  <label for="dark-v11">dark</label>
  <input id="streets-v12" type="radio" name="rtoggle" value="streets">
  <label for="streets-v12">streets</label>
  <input id="outdoors-v12" type="radio" name="rtoggle" value="outdoors">
  <label for="outdoors-v12">outdoors</label>
  </div>
  
  
  <!-- heeft contextmenu -->