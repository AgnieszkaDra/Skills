
let customCanvasBackgroundColor;
let color;
document.addEventListener('DOMContentLoaded', init);

function init() {
  const ctxToday = document.getElementById('myChartToday');
  Chart.register(ChartDataLabels);

  const chart = new Chart(ctxToday, {
    type: 'pie',
    data: {

      labels: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
      ],
      datasets: [{
        label: 'My Skills',
        data: [1, 1, 1, 1],

        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(456,19,456'
        ],
      }]
    },
    options: {
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          position: 'bottom',
          align: 'start',
          onHover: false,
          onLeave: false,
        },
        datalabels: {
          formatter: function (value, context) {
            function totalSum(total, datapoint) {
              return total + datapoint
            }
            const datapoints = context.chart.data.datasets[0].data
            console.log(datapoints)
            const totalvalue = datapoints.reduce(totalSum, 0)
            const percentageValue = (value / totalvalue * 100).toFixed(1)

            return ` ${percentageValue}%`

          }
        },
      },

      events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
      'onClick': function (evt, item) {
        customCanvasBackgroundColor = 'lightGreen',
        color='red'
          item[0].element.options.backgroundColor = customCanvasBackgroundColor
         
        item[0].element.options.fontColor = color
      },
    },
  }
  )


  const fields = [
    {name: 'HTML'},
    { name: 'CSS' },
    { name: 'JS' },
    { name: 'React' }
  ]
  const form = document.querySelector('form')
  form.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault()
    fields.forEach(function (field) {
      const { name } = field;
      const HTMLvalue = form.elements['HTML'].value;
      chart.data.datasets[0].data[0] = Number(HTMLvalue)
   
      const CSSvalue = form.elements['CSS'].value;
      chart.data.datasets[0].data[1] = Number(CSSvalue)

      const JSvalue = form.elements['JS'].value;
      chart.data.datasets[0].data[2] = Number(JSvalue)

      const Reactvalue = form.elements['React'].value;
      chart.data.datasets[0].data[3] = Number(Reactvalue)

      chart.update()
  });

}

}

function checkAndSetDefault() {

  const inputs = document.querySelectorAll('#skills__chart input[type="number"]');

  inputs.forEach(input => {
    const value = parseFloat(input.value)
    console.log(value)

    if (isNaN(value)) {
      input.value = 0;
    }
  });
}

checkAndSetDefault();







