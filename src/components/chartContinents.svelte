<script>
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';
	export let data 

	let chartInstance;
	let continentData = data

// Data from endpoint /total

// "totals" {
//    "world_ratio": {
// 			"asia": 10,
// 			"africa": 15,
// 			"north_america": 25,
// 			"south_america": 5,
// 			"europe": 30,
// 			"antarctica": 0,
// 			"oceania": 15
//     }
//  }

// Gegevens & configuratie 
    data = {
		labels: ['Asia', 'Africa', 'North America', 'South America', 'Europe', 'Antarctica', 'Oceania'],
		datasets: [
			{
				label: 'Kilograms of removed plastic from this continent',
				data: [
					continentData.dataApi.totals.world_ratio.asia, 
					continentData.dataApi.totals.world_ratio.africa, 
					continentData.dataApi.totals.world_ratio.north_america, 
					continentData.dataApi.totals.world_ratio.south_america, 
					continentData.dataApi.totals.world_ratio.europe, 
					continentData.dataApi.totals.world_ratio.antarctica, 
					continentData.dataApi.totals.world_ratio.oceania], 
				backgroundColor: [
					'#5CC8DE',
					'#79CFE1',
					'#95D6E3',
					'#B2DDE6',
					'#EBEBEB',
                    '#EBECDC',
                    '#EBEBCB'
				]
			}
		]
	};

	const config = {
		type: 'polarArea',
		data: data,
		options: {}
	};



// Functie om de kleurinstelling voor Chart.js te configureren op basis van dark mode
function configureChartColor() {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// Dark mode wordt gebruikt
			Chart.defaults.color = 'white';
		} else {
			// Dark mode wordt niet gebruikt
			Chart.defaults.color = '#143653';
		}
	}
		


	onMount(() => {
		configureChartColor();

		const ctx = document.getElementById('polar-area-chart').getContext('2d');
		chartInstance = new Chart(ctx, config);
	});
</script>


	<canvas id="polar-area-chart" width="400" height="200" />


 


