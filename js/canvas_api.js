fetch('https://api.open-meteo.com/v1/forecast?latitude=43.4254&longitude=-80.5112&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=14')
  .then(response => response.json())
  .then(data => {

    var dates = data.daily.time;

    var maxTemps = data.daily.temperature_2m_max;

    var minTemps = data.daily.temperature_2m_min;

    var totalPrecip = data.daily.precipitation_sum;

    var ctx = document.getElementById('LineChart').getContext('2d');

    var LineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Max Temp',
          data: maxTemps,
          borderColor: 'rgba(255, 99, 132, 0.5)',
          fill: false
        }, {
          label: 'Min Temp',
          data: minTemps,
          borderColor: 'rgba(75, 192, 192, 0.5)',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day'
            },
            grid: {
              display: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            grid: {
              display: false
            }
          }]
        }
      }
    });
  });
