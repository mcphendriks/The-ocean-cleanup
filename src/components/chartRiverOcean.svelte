<script>
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';
    export let data

	let chartInstance;
    let oceanRiverData = data

// Data from endpoint /total

// // "totals" {
// //    "ocean_river_ratio": {
// //         "percent_river": 65,
// //          "percent_ocean": 35
// //     }
// //  }

// Gegevens & configuratie 
	data = {
		labels: ['River', 'Ocean'],
		datasets: [
			{
				label: 'Percentage of removed plastic',
				data: [oceanRiverData.dataApi.totals.ocean_river_ratio.percent_river, oceanRiverData.dataApi.totals.ocean_river_ratio.percent_ocean],
				backgroundColor: ['#5CC8DE', '#95D6E3'],
				hoverOffset: 4
			}
		]
	};

	const config = {
		type: 'doughnut',
		data: data
	};

onMount(() => {
    const ctx = document.getElementById('donut-chart').getContext('2d');
    chartInstance = new Chart(ctx, config);
});
</script>

<canvas id="donut-chart" width="400" height="200" />
