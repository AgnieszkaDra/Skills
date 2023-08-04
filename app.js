import Canvas from "./classes/Canvas/Canvas.js"

const form1 = document.querySelector('form')

form1.addEventListener('submit', function(el){
  el.preventDefault()

  const dataToday = {
    labels: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
    ],
    datasets: [{
      label: 'My Skills',
      data: [],
      
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(456,19,456'
      ],
    }]
  };

  
   const HTMLVal = document.getElementById('1').value
 
   dataToday.datasets[0].data[0] = HTMLVal
   const CSSVal = document.getElementById('2').value
   dataToday.datasets[0].data[1] = CSSVal
   const JSVal = document.getElementById('3').value
   dataToday.datasets[0].data[2] = JSVal
   const ReactVal = document.getElementById('4').value
   dataToday.datasets[0].data[3] = ReactVal

  const canvas = new Canvas('.skills')
  canvas.init()

const datapoint = ['HTML','CSS','JavaScript','React',]
let total = 0
const ctxToday = document.getElementById('myChartToday');

  const chart = new Chart(ctxToday,{
    type: 'pie',
    data: dataToday,
  //   options: {
  //       plugins: {
  //         tooltip: {
  //           enabled: false, 
  //         },
  //           legend: {
  //           position: 'bottom',
  //           align: 'start',
  //           onHover: false,
  //           onLeave: false,
  //       },
  //       datalabels: {
  //           // formatter: function(value, context) {
  //           //     console.log(context)
  //           //     console.log(context.chart.data.datasets[0].data)
  //           //     console.log(context.chart.data.labels[context.dataIndex])
  //           //     console.log(value)
  //           //     //return context.chart.data.labels[context.dataIndex];
               
  //           //     function totalSum(total, datapoint){
  //           //       alert('sum')
  //           //       return total + datapoint
  //           //     }

  //           //    //   const datapoints1 = context.chart.data.datasets[0].data[0]
  //           //     //   const datapoints2 = context.chart.data.datasets[0].data[1]
  //           //     const datapoints = context.chart.data.datasets[0].data
  //           //     console.log(datapoints)
                
  //           //     const totalvalue = datapoints.reduce(totalSum,0)
  //           //     console.log(totalvalue)
  //           //     const percentageValue = (value/totalvalue *100).toFixed(1)
                
  //           //     return ` ${percentageValue}%`
                
  //           //   }
          
  //           formatter: function(value, context) {
              
  //             return context.chart.data.labels[context.dataIndex];
  //           }
  //       },

  //       events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
  //        'onClick' : function (evt, item) {
  //         alert('click')
  //           console.log ('legend onClick', evt);
  //           console.log('legd item', item[0].element.options);
  //            customCanvasBackgroundColor = 'lightGreen',
  //             text = 'ala'
  //             color= 'black'
              
  //           item[0].element.options.backgroundColor = customCanvasBackgroundColor
  //           item[0].element.options.borderColor= color
            
        
  //       },
  //       'onHover' : function (evt, item) {
  //           console.log ('legend onClick', evt);
  //           console.log('legd item',  item);
  //            customCanvasBackgroundColor = 'lightGreen',
  //             text = 'ala'
              
          
  //       },
       

  //   }, 
  
  // }
})
   }
   )
   
  

  
















