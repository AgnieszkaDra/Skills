const ctxToday = document.getElementById('myChartToday');
const HTML = document.querySelector('.HTMLData')
const htmlVal = document.querySelector('.html')
console.log(htmlVal.value)
const val5 = function getVal(){
    alert('val')
  const HTMLData = document.querySelector('.html').value;

const HTMLDataNumber = Number(HTMLData)
return console.log(HTMLData)
}



 
 




  
  
 Chart.register(ChartDataLabels);
  const datapoint = ['HTML','CSS','JavaScript','React',]
let total = 0
  
  const chart = new Chart(ctxToday,{
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
        data: [1, 1, 1,1 ],
        
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
            formatter: function(value, context) {
                console.log(context)
                console.log(context.chart.data.datasets[0].data)
                console.log(context.chart.data.labels[context.dataIndex])
                console.log(value)
                //return context.chart.data.labels[context.dataIndex];
               
                function totalSum(total, datapoint){
                  return total + datapoint
                }

               //   const datapoints1 = context.chart.data.datasets[0].data[0]
                //   const datapoints2 = context.chart.data.datasets[0].data[1]
                const datapoints = context.chart.data.datasets[0].data
                console.log(datapoints)
                
                const totalvalue = datapoints.reduce(totalSum,0)
                console.log(totalvalue)
                const percentageValue = (value/totalvalue *100).toFixed(1)
                
                return ` ${percentageValue}%`
                
              }
          },
        },

        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
         'onClick' : function (evt, item) {
            console.log ('legend onClick', evt);
            console.log('legd item', item[0].element.options);
             customCanvasBackgroundColor = 'lightGreen',
              text = 'ala'
              color= 'black'
              
            item[0].element.options.backgroundColor = customCanvasBackgroundColor
            item[0].element.options.borderColor= color
            
        
        },
        'onHover' : function (evt, item) {
            console.log ('legend onClick', evt);
            console.log('legd item',  item);
             customCanvasBackgroundColor = 'lightGreen',
              text = 'ala'
              
          
        },
       

    }, 
  
   
 }


  )





const HTMLVal = document.getElementById('1')

HTMLVal.addEventListener('input', function (el) {

const valHTML = el.target.value
  chart.data.datasets[0].data[0] = Number(valHTML)
    chart.update()



});

const CSSVal = document.getElementById('2')

CSSVal.addEventListener('input', function (el) {

const valCSS = el.target.value
  chart.data.datasets[0].data[1] = Number(valCSS)
    chart.update()



});


const JSVal = document.getElementById('3')

CSSVal.addEventListener('input', function (el) {

const valJS = el.target.value
  chart.data.datasets[0].data[2] = Number(valJS)
    chart.update()



});


const ReactVal = document.getElementById('4')

CSSVal.addEventListener('input', function (el) {

const valReact = el.target.value
  chart.data.datasets[0].data[3] = Number(valReact)
    chart.update()



});




  