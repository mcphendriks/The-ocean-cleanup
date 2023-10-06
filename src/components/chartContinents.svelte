<script>
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';

	let chartInstance;
    

    const data = {
		labels: ['Asia', 'Africa', 'North America', 'South America', 'Europe', 'Antarctica'],
		datasets: [
			{
				label: 'My First Dataset',
				data: [11, 16, 7, 3, 14, 12, 2],  // deze data ophalen uit API
				backgroundColor: [
					'#5CC8DE',
					'#79CFE1',
					'#95D6E3',
					'#B2DDE6',
					'#EBEBEB',
                    '',
                    ''
				]
			}
		]
	};

	const config = {
		type: 'polarArea',
		data: data,
		options: {}
	};

	onMount(() => {
		const ctx = document.getElementById('line-chart').getContext('2d');
		chartInstance = new Chart(ctx, config);
	});
</script>

<canvas id="line-chart" width="400" height="200" />
