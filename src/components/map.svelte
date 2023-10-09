<script>
	import { onMount } from 'svelte';

	let map;

	onMount(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoibWNwaGVuZHJpa3MiLCJhIjoiY2xuYWpkajM3MDRvNzJxbzdjbGg1YXc0MiJ9.mRRivdosZVdSXQ9FDd0ZwA';

		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/light-v11',
			zoom: 2,
			center: [-103.5917, 40.6699]
		});

		map.on('load', () => {
			map.addSource('interceptors', {
				type: 'geojson',
				data: 'https://raw.githubusercontent.com/mcphendriks/the-ocean-clean-up-GeoJSON-data/main/data.geojson',
				cluster: true,
				clusterMaxZoom: 14,
				clusterRadius: 50
			});

			map.addLayer({
				id: 'interceptor-points',
				type: 'circle',
				source: 'interceptors',
				paint: {
					'circle-radius': 10,
					'circle-stroke-width': 1,
					'circle-stroke-color': '#fff',
					'circle-color': [
						'match',
						['get', 'status'],
						'in_operation',
						'#84CE5F',
						'in_maintenance',
						'#143653',
						'installed_for_testing',
						'#6CCDE1',
						'contract_signed',
						'#B0B0B0',
						'planned',
						'#B0B0B0',
						/* Default color if no match found */ 'red'
					]
				}
			});
		});
	});
</script>

<section id="map" />

<style>
	#map {
		position: relative;
		width: 100%;
		height: 500px;
	}
</style>
