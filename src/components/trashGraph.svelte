
<!-- stappenplan
        npm install chart.js 
    import onmount en chart
    definieer de data en options van de grafiek
    maak de onmount functie zet daar de type, data en options in

    maak een canvas waarin de grafiek komt te staan
 -->

<script>

    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';
    export let trashdata
    console.log(trashdata)

  // Gegevens en configuratie
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Trash collected in kilogram',
      data: [65, 59, 80, 81, 56, 55, 40],
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
<!-- <h2>{data.dataApi.totals.months[0].year}</h2> -->

<canvas id="line-chart" width="400" height="200"></canvas>
