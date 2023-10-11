<script>
	import { onMount } from 'svelte';
	``;
	export let data;
	console.log(data.latitude, data.longitude);
	let map;

	onMount(() => {
		// toegangscode in voor mapbox weer te geven
		mapboxgl.accessToken =
			'pk.eyJ1IjoibWNwaGVuZHJpa3MiLCJhIjoiY2xuYWpkajM3MDRvNzJxbzdjbGg1YXc0MiJ9.mRRivdosZVdSXQ9FDd0ZwA';
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/light-v11',
			zoom: 2,
			center: [-103.5917, 40.6699]
		});
		// lijst van GeoJSON-functies (geografische kenmerken) op basis van gegevens in data.riverDataJson.systems
		const geojsonFeatures = data.riverDataJson.systems.map((interceptor) => ({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [interceptor.longitude, interceptor.latitude]
			},
			properties: interceptor
		}));

		const geojsonFeaturesOcean = data.oceanDataJson.systems.map((ocean) => ({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [ocean.longitude, ocean.latitude]
			},
			properties: ocean
		}));

		map.on('load', () => {
			map.addSource('interceptor-locations', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: geojsonFeatures, geojsonFeaturesOcean
				}
			});

			// Add a layer for the circles
			map.addLayer({
				id: 'interceptor-circles',
				type: 'circle',
				source: 'interceptor-locations',
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
						/* Default color */ 'blue'
					]
				}
			});

			map.on('click', 'interceptor-circles', (e) => {
				const interceptorId = e.features[0].properties.id;
				const coordinates = e.features[0].geometry.coordinates;

				const slug = `/interceptor?id=${interceptorId}`;
				window.location.href = slug;
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
