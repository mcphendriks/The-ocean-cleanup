<script>
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';
	export let data;
	let trashdata = data;

	// de slice -4 pakt de laatste vier months
	const laatsteVierMaanden = trashdata.dataApi.totals.months.slice(-4);
	console.log(laatsteVierMaanden[0].debris_extracted);

	// Gegevens en configuratie
	const labels = [
		laatsteVierMaanden[0].month,
		laatsteVierMaanden[1].month,
		laatsteVierMaanden[2].month,
		laatsteVierMaanden[3].month
	];


	data = {
		labels: labels,
		datasets: [
			{
				label: 'Trash collected in kilogram',
				data: [
					laatsteVierMaanden[0].debris_extracted,
					laatsteVierMaanden[1].debris_extracted,
					laatsteVierMaanden[2].debris_extracted,
					laatsteVierMaanden[3].debris_extracted
				],
				fill: true,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			}
		]
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

		const ctx = document.getElementById('line-chart').getContext('2d');
		new Chart(ctx, {
			type: 'line',
			data: data
		});
	});
</script>

<h2>Trash collected over time</h2>
<p>In kilogram</p>

<canvas id="line-chart" width="400" height="200" />

<style>
	:root {
		--darkBlue: #143653;
		--lightBlue: #5cc8de;
		--whiteColor: #ffffff;
		--lightGray: #f7f7f7;
		--accentGray: rgb(228, 228, 228);
		--textColor: #143653;
		--boxShadow: rgba(128, 128, 128, 0.132);
		--color: rgb(212, 212, 212);
		--textSize: 1.2rem;
		--iconSize: 2rem;
	}

	/* Als darkmode de standaard instelling is */
	@media (prefers-color-scheme: dark) {
		:root {
			--darkBlue: #ffffff;
			--lightBlue: #5cc8de;
			--whiteColor: #143653;
			--lightGray: #0d2437;
			--accentGray: rgb(228, 228, 228);
			--textColor: #ffffff;
			--boxShadow: rgba(128, 128, 128, 0);
			--color: rgb(212, 212, 212);
			--textSize: 1.2rem;
			--iconSize: 2rem;
		}
	}
</style>
