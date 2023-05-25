function increment(labelValue) { 
    if (Math.abs(Number(labelValue)) >= 1.0e+9)
  return (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
      if (Math.abs(Number(labelValue)) >= 1.0e+6)
  return (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
      if (Math.abs(Number(labelValue)) >= 1.0e+3)
  return (Math.abs(Number(labelValue) / 1.0e+3).toFixed(2)) + " K"
  }
  


  fetch('https://api.geniidata.com/lordking/api/v1/datasource/12577/results?limit=20&offset=0', {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json',
        'api-key': 'a94fdce0-b66c-11ed-9d24-019c684cbdd6'
    }
})
.then(response => response.json())
.then(data =>{


document.getElementById("first-box").innerHTML = increment(data.data.list[0].trxs)
document.getElementById("second-box").innerHTML = increment(data.data.list[0].Blocks)
document.getElementById("third-box").innerHTML = increment(data.data.list[0].wallet)
document.getElementById("fourth-box").innerHTML = increment(data.data.list[0].aptos)

})


fetch('https://api.flipsidecrypto.com/api/v2/queries/8cb60719-15fb-4842-aa09-9d34baa2a0e8/data/latest').then(res=>res.json()).then(data=>{

    const new3= data.reduce((t,i)=>{
      return {...t,
        jjss:[...t.jjss,i.SYMBOL_OUT],
        minss:[...t.minss,i.TRXS] 
      }
    
    },{minss:[],jjss:[]});
    
    
    var chart99 = {
      series: [{
        data: new3.minss
      }],
        chart: {
        type: 'bar',
        height: 200
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

    

    

fetch('https://api.flipsidecrypto.com/api/v2/queries/1c456377-b1d9-4592-a2ca-406763c882a2/data/latest').then(res=>res.json()).then(data=>{


    const new3= data.reduce((t,i)=>{
      return {...t,
        jjss:[...t.jjss,i.SYMBOL_OUT],
        minss:[...t.minss,i.VOLUME] 
      }
    
    },{minss:[],jjss:[]});
    
    
    var chart88 = {
      series: [{
        data: new3.minss
      }],
        chart: {
        type: 'bar',
        height: 200
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
  
  var chart = new ApexCharts(document.getElementById("chart88"), chart88);
  chart.render();
  
  })

  






  
fetch('https://api.flipsidecrypto.com/api/v2/queries/a7256375-b70d-4ccc-9f53-971826b73f80/data/latest').then(res=>res.json()).then(data=>{

    const new1= data.reduce((t,i)=>{
      return {...t,
        job_states:[...t.job_states,i.DATE],
        com_numms:[...t.com_numms,i.TRXS] 
      }
    
    },{job_states:[],com_numms:[]});
    
    var chart24 = {
      series: [{
        name: 'Swaps',
        type: 'area',
        data: (new1.com_numms)
      }],
      chart: {
      height: 350,
      type: 'line',
      stacked: true,
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
        text: 'Swap Number',
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
    
    
    
    
    fetch('https://api.flipsidecrypto.com/api/v2/queries/a7256375-b70d-4ccc-9f53-971826b73f80/data/latest').then(res=>res.json()).then(data=>{
    
    const new1= data.reduce((t,i)=>{
      return {...t,
        job_states:[...t.job_states,i.DATE],
        com_numms:[...t.com_numms,i.VOLUME] 
      }
    
    },{job_states:[],com_numms:[]});
    
    var chart25 = {
      series: [{
        name: 'Swap Volume',
        type: 'area',
        data: (new1.com_numms)
      }],
      chart: {
      height: 350,
      type: 'line',
      stacked: true,
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
        text: 'Swap Volume',
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
            return y.toFixed(0) + " $";
          }
          return y;
    
        }
      }
    }
    };
    
    var chart = new ApexCharts(document.getElementById("chart25"), chart25);
    chart.render();
    })
    
    
    
    
    
    fetch('https://api.flipsidecrypto.com/api/v2/queries/a7256375-b70d-4ccc-9f53-971826b73f80/data/latest').then(res=>res.json()).then(data=>{
    
    const new1= data.reduce((t,i)=>{
      return {...t,
        job_states:[...t.job_states,i.DATE],
        com_numms:[...t.com_numms,i.USERS] 
      }
    
    },{job_states:[],com_numms:[]});
    
    var chart26 = {
      series: [{
        name: 'Swappers',
        type: 'area',
        data: (new1.com_numms)
      }],
      chart: {
      height: 350,
      type: 'line',
      stacked: true,
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
        text: 'Swappers',
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
    
    var chart = new ApexCharts(document.getElementById("chart26"), chart26);
    chart.render();
    })
    


fetch('https://api.flipsidecrypto.com/api/v2/queries/4db7b90d-b616-4c7d-b349-7f5092d64d20/data/latest').then(res=>res.json()).then(data=>{

    const new1= data.reduce((t,i)=>{
      return {...t,
        job_states:[...t.job_states,i.PLATFORM],
        com_numms:[...t.com_numms,i.VOLUME] 
      }
    
    },{job_states:[],com_numms:[]});
    
    var chart00 = {
      series: [{
        data: new1.com_numms
      }],
        chart: {
        type: 'bar',
        height: 450
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
            text: 'Under 10',
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
        categories:new1.job_states ,
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
    
    var chart = new ApexCharts(document.getElementById("chart00"), chart00);
    chart.render();
    })