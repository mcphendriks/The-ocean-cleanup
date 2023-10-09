
<script>

    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';
    export let data 
    let trashdata = data

     // de slice -4 pakt de laatste vier months
    const laatsteVierMaanden = trashdata.dataApi.totals.months.slice(-4);

  // Gegevens en configuratie
  const labels = [laatsteVierMaanden[0].month, laatsteVierMaanden[1].month, laatsteVierMaanden[2].month, laatsteVierMaanden[3].month];
  data = {
    labels: labels,
    datasets: [{
      label: 'Trash collected in kilogram',
      data: [laatsteVierMaanden[0].debris_extracted, laatsteVierMaanden[1].debris_extracted ,laatsteVierMaanden[2].debris_extracted, laatsteVierMaanden[3].debris_extracted],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  
  onMount(() => {
    const ctx = document.getElementById('line-chart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: data,
    });
  });

  </script>

<h2>Trash collected over time</h2>
<p>In kilogram</p>

<canvas id="line-chart" width="400" height="200"></canvas>
