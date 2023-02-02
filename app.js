

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
// function getVal() {
    
//     const val = document.querySelector('.HTMLData').value;
    
    
//   }

 

// function updateChart(){
//     const HTMLData = document.querySelector('.HTMLData')
//     const HTMLDataValue = HTMLData.value
//     console.log(HTMLDataValue)

// async function fetchData(){
//     const HTMLData = document.querySelector('.HTMLData')
//     const response = await fetch(HTMLData)


//     const datapoints = await response 
//     console.log(datapoints)
// }
// }
// updateChart()


 
 


// const dataYesterday = {
//     labels: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//     ],
   
//     datasets: [{
//       label: 'My Skills',
//       data: [getVal(), 10, 10, 40],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)',
//         'rgb(456,19,456'
//       ],
//       hoverOffset: 4
//     }],
//     textposition: "outside",
//   };


           
//                 const HTMLDataNumber = function(){
//   const HTMLData = document.querySelector('.HTMLData')
//   console.log(HTMLData)
//   HTMLData.addEventListener('blur',function(e){
//     const HTMLDataNumber = Number(e.target.value);
  
//     return HTMLDataNumber
//   })
//                 }
//                 HTMLDataNumber()

  const dataToday = {
 
    labels: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
    ],
    datasets: [{
      label: 'My Skills',
      data: [val5, 2, 4,5 ],
      
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(456,19,456'
      ],
    }]
  };

  options = {
    scaleShowLabels : false
  };
  
  var barChartData = {
    labels : ["test "],
    datasets : [
    {
     fillColor : "#153b63",
     data : [61]
   },
   {
     fillColor : "#e99555",
     data : [25]
   }
   ]                           
  };
  
  
 Chart.register(ChartDataLabels);
  const datapoint = ['HTML','CSS','JavaScript','React',]
let total = 0
  
  const chart = new Chart(ctxToday,{
    type: 'pie',
    data: dataToday,
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
  Chart.register(ChartDataLabels);
 const val = document.querySelector('.HTMLData').value;
 console.log(typeof val)
 const valNumber = Number(val)
    //context.chart.data.datasets[0].data[0] = valNumber
    chart.update()
  console.dir(chart)
//const HTMLDataValue = chart.dataToday.datasets[0].data[0]

function getVal(){
    
                      const HTMLData = document.querySelector('.HTMLData').value;
           
                const HTMLDataNumber = Number(HTMLData)
                return HTMLDataNumber
}
  

// function addExcursions(htmlVal) {
//   const form = document.querySelector('form');
//   // form.addEventListener('submit', e => {
//   //     e.preventDefault();
// const htmlVal2 = htmlVal.value
//       // const {html, css, javascript, react} = e.target.elements;
      
//       // const data = {
//       //     html:html.value, css: css.value, javascript: javascript.value,
//       //     react: react.value
//       // };

//     //return data.html, data.css, data.javascript, data.react
//     console.log(htmlVal2)
// }

// function addResult(){

// }


  



