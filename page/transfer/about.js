function increment(labelValue) { 
    if (Math.abs(Number(labelValue)) >= 1.0e+9)
  return (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
      if (Math.abs(Number(labelValue)) >= 1.0e+6)
  return (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
      if (Math.abs(Number(labelValue)) >= 1.0e+3)
  return (Math.abs(Number(labelValue) / 1.0e+3).toFixed(2)) + " K"
  if (Math.abs(Number(labelValue)) < 1.0e+3)
  return Math.abs(Number(labelValue))
  }
  

//  fetch('https://api.geniidata.com/lordking/api/v1/datasource/12577/results?limit=20&offset=0', {
 //   method: 'GET', 
//    headers: {
//        'Content-Type': 'application/json',
//        'api-key': 'a94fdce0-b66c-11ed-9d24-019c684cbdd6'
//    }
//})
//.then(response => response.json())
//.then(data =>{


//document.getElementById("first-box").innerHTML = increment(data.data.list[0].trxs)
//document.getElementById("second-box").innerHTML = increment(data.data.list[0].Blocks)
//document.getElementById("third-box").innerHTML = increment(data.data.list[0].wallet)
//document.getElementById("fourth-box").innerHTML = increment(data.data.list[0].aptos)

//})

  fetch('https://api.flipsidecrypto.com/api/v2/queries/2f27f80f-6911-4e66-9a5f-9691e2943411/data/latest')
.then(response => response.json())
.then(data =>{


document.getElementById("first-box").innerHTML = increment(data[0]["Total Transfers ECO"])
document.getElementById("second-box").innerHTML = increment(data[0]["Total Users"])
document.getElementById("third-box").innerHTML = increment(data[0]["Total Transfers Volume (USD)"])
document.getElementById("fourth-box").innerHTML = increment(data[0]["Total Transfers Volume (ECO)"])

})


fetch('https://api.flipsidecrypto.com/api/v2/queries/49e8373e-3f00-4faf-a638-55a20ecb37a2/data/latest').then(res=>res.json()).then(data=>{

    const new3= data.reduce((t,i)=>{
      return {...t,
        jjss:[...t.jjss,i.Distribution],
        minss:[...t.minss,i["Number of Transfers ECO"]] 
      }
    
    },{minss:[],jjss:[]});
    
    
    var chart99 = {
      series: [{
        data: new3.minss ,
        name:"Number of Transfers ECO"

      }],
        chart: {
        type: 'bar',
        height: 250
      },
      annotations: {
        xaxis: [{
          x: 10,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: '',
          }
        }],
        yaxis: [{
          y: '',
          y2: '',
          label: {
            text: ''
          }
        }]
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories:new3.jjss ,
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        reversed: false,
        axisTicks: {
          show: true
        }
      }
      };
    
    var chart = new ApexCharts(document.getElementById("chart99"), chart99);
    chart.render();
    
    })

    

    

fetch('https://api.flipsidecrypto.com/api/v2/queries/49e8373e-3f00-4faf-a638-55a20ecb37a2/data/latest').then(res=>res.json()).then(data=>{


    const new3= data.reduce((t,i)=>{
      return {...t,
        jjss:[...t.jjss,i.Distribution],
        minss:[...t.minss,i["Total Users"]] 
      }
    
    },{minss:[],jjss:[]});
    
    
    var chart88 = {
      series: [{
        data: new3.minss ,
        name:"Total Users"

      }],
        chart: {
        type: 'bar',
        height: 250
      },
      annotations: {
        xaxis: [{
          x: 10,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: '',
          }
        }],
        yaxis: [{
          y: '',
          y2: '',
          label: {
            text: ''
          }
        }]
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories:new3.jjss ,
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true
        }
      }
      };
  
  var chart = new ApexCharts(document.getElementById("chart88"), chart88);
  chart.render();
  
  })

  

  fetch('https://api.flipsidecrypto.com/api/v2/queries/5eb9f4e4-3c55-435d-a4b0-ee8a3f304d57/data/latest').then(res=>res.json()).then(data=>{

    const new3= data.reduce((t,i)=>{
      return {...t,
        jjss:[...t.jjss,i.Wallet],
        minss:[...t.minss,i["Total Transfers Volume (USD)"].toFixed(3)] 
      }
    
    },{minss:[],jjss:[]});
    
    
    var chart999 = {
      series: [{
        data: new3.minss ,
        name:"Total Transfers Volume (USD)"

      }],
        chart: {
        type: 'bar',
        height: 400
      },
      annotations: {
        xaxis: [{
          x: 10,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: '',
          }
        }],
        yaxis: [{
          y: '',
          y2: '',
          label: {
            text: ''
          }
        }]
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories:new3.jjss ,
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        reversed: false,
        axisTicks: {
          show: true
        }
      }
      };
    
    var chart = new ApexCharts(document.getElementById("chart999"), chart999);
    chart.render();
    
    })

    

    

    fetch('https://api.flipsidecrypto.com/api/v2/queries/5eb9f4e4-3c55-435d-a4b0-ee8a3f304d57/data/latest').then(res=>res.json()).then(data=>{


    const new3= data.reduce((t,i)=>{
      return {...t,
        jjss:[...t.jjss,i.Wallet],
        minss:[...t.minss,i["Total Transfers ECO"]] 
      }
    
    },{minss:[],jjss:[]});
    
    
    var chart888 = {
      series: [{
        data: new3.minss,
        name:"Total Transfers ECO"
      }],
        chart: {
        type: 'bar',
        height: 400
      },
      annotations: {
        xaxis: [{
          x: 10,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: '',
          }
        }],
        yaxis: [{
          y: '',
          y2: '',
          label: {
            text: ''
          }
        }]
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories:new3.jjss ,
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true
        }
      }
      };
  
  var chart = new ApexCharts(document.getElementById("chart888"), chart888);
  chart.render();
  
  })






  
fetch('https://api.flipsidecrypto.com/api/v2/queries/69cebf56-2969-4140-bb51-9fd53a6eb1e4/data/latest').then(res=>res.json()).then(data=>{

    const new1= data.reduce((t,i)=>{
      return {...t,
        job_states:[...t.job_states,i.Date],
        com_numms:[...t.com_numms,i["Total Transfers ECO"]] ,
        com_nummss:[...t.com_nummss,i["Growth in Transfers ECO"]] 

      }
    
    },{job_states:[],com_numms:[],com_nummss:[]});
    
    var chart24 = {
      series: [{
        name: 'Number of Transfers ECO',
        type: 'area',
        data: (new1.com_numms)
      },{
        name: 'Growth in Transfers ECO',
        type: 'area',
        data: (new1.com_nummss)
      }],
      chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '100%'
      }
    },
    
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: new1.job_states,
    markers: {
      size: 0
    },
    xaxis: {
      type: 'Century'
    },
    yaxis: {
      title: {
        text: 'Number of Transfers ECO',
      },
      min: 0
    },
    annotations: {
      xaxis: [{
        x: 775 ,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Hack',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " ";
          }
          return y;
    
        }
      }
    }
    };
    
    var chart = new ApexCharts(document.getElementById("chart24"), chart24);
    chart.render();
    })
    
    
    
    
    fetch('https://api.flipsidecrypto.com/api/v2/queries/69cebf56-2969-4140-bb51-9fd53a6eb1e4/data/latest').then(res=>res.json()).then(data=>{
    
    const new1= data.reduce((t,i)=>{
      return {...t,
        job_states:[...t.job_states,i.Date],
        com_numms:[...t.com_numms,i["Total Transfers Volume (USD)"].toFixed(5)] ,
        com_nummss:[...t.com_nummss,i["Growth in Transfers Volume (USD)"].toFixed(5)] 

      }
    
    },{job_states:[],com_numms:[],com_nummss:[]});
    
    var chart25 = {
      series: [{
        name: 'Transfers Volume (Million USD)',
        type: 'area',
        data: (new1.com_numms)
      },
      {
        name: 'Growth Transfers Volume (Million USD)',
        type: 'area',
        data: (new1.com_nummss)
      }],
      chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '100%'
      }
    },
    
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: new1.job_states,
    markers: {
      size: 0
    },
    xaxis: {
      type: 'Century'
    },
    yaxis: {
      title: {
        text: 'Transfers Volume (USD)',
      },
      min: 0
    },
    annotations: {
      xaxis: [{
        x: 775 ,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Hack',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y + " $";
          }
          return y;
    
        }
      }
    }
    };
    
    var chart = new ApexCharts(document.getElementById("chart25"), chart25);
    chart.render();
    })
    
    
    
    
    
    fetch('https://api.flipsidecrypto.com/api/v2/queries/69cebf56-2969-4140-bb51-9fd53a6eb1e4/data/latest').then(res=>res.json()).then(data=>{
    
    const new12= data.reduce((t,i)=>{
      return {...t,
        job_states:[...t.job_states,i.Date],
        com_numms:[...t.com_numms,i["Total Transfers Volume (ECO)"].toFixed(5)] ,
        com_nummss:[...t.com_nummss,i["Growth in Transfers Volume (ECO)"].toFixed(5)] 

      }
    
    },{job_states:[],com_numms:[],com_nummss:[]});
    
    var chart26 = {
      series: [{
        name: 'Total Transfers Volume (Million ECO)',
        type: 'area',
        data: new12.com_numms
      },
      {
        name: 'Growth in Transfers Volume (Million ECO)',
        type: 'area',
        data: new12.com_nummss
      }],
      chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '100%'
      }
    },
    
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: new12.job_states,
    markers: {
      size: 0
    },
    xaxis: {
      type: 'Century'
    },
    yaxis: {
      title: {
        text: '* Number of Transfers ECO',
      },
      min: 0
    },
    annotations: {
      xaxis: [{
        x: 775 ,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Hack',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y + " ";
          }
          return y;
    
        }
      }
    }
    };
    
    var chart = new ApexCharts(document.getElementById("chart26"), chart26);
    chart.render();
    })
    


fetch('https://api.flipsidecrypto.com/api/v2/queries/69cebf56-2969-4140-bb51-9fd53a6eb1e4/data/latest').then(res=>res.json()).then(data=>{

    const new1= data.reduce((t,i)=>{
      return {...t,
        job_states:[...t.job_states,i.Date],
        com_numms:[...t.com_numms,i["Total Users"]] ,
        com_nummss:[...t.com_nummss,i["Growth in Users"]] 

      }
    
    },{job_states:[],com_numms:[],com_nummss:[]});
    
    var chart27 = {
      series: [{
        name: 'Total Users',
        type: 'area',
        data: new1.com_numms
      },
      {
        name: 'Growth in Users',
        type: 'area',
        data: new1.com_nummss
      }],
      chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '100%'
      }
    },
    
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: new1.job_states,
    markers: {
      size: 0
    },
    xaxis: {
      type: 'Century'
    },
    yaxis: {
      title: {
        text: 'Total Users',
      },
      min: 0
    },
    annotations: {
      xaxis: [{
        x: 775 ,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Hack',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y + " ";
          }
          return y;
    
        }
      }
    }
    };
    var chart = new ApexCharts(document.getElementById("chart27"), chart27);
    chart.render();
    })