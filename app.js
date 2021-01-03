'use strict'

//Tab Code
document.getElementById("defaultOpen").click();

function openIt(evt, cityName) {
    evt.preventDefault();
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


//Charlottesville Chart for Average Increase in Prices
var ctx1=document.getElementById('chartChar').getContext('2d') ;
var chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Venable','Barracks / Rugby','Rose Hill','10th & Page','Lewis Mountain','Jefferson Park Avenue','Fry\'s Spring','Johnson Village','Fifeville','Ridge Street','Starr Hill','North Downtown','The Meadows','Greenbrier','Locust Grove','Martha Jefferson','Woolen Mills','Belmont'],
        
        datasets: [
        {
            label:'Average Percent Change in Sale Price (%)',
            data:[ 265.13,41.36,175.98,340.25,77.90,21.20,122.30,42.67,87.19,33.73,51.95,88.63,48.82,44.36,78.32,55.77,53.03,57.09],
            backgroundColor:'#76D7C4'
        }
        ]
    },
    options: {
        title:{
            display: true,
            text: 'Average Percent Change in Sale Prices of Charlottesville Residential Real Estate with 2 or more Sales 2000-2019'
        },
        scales:{
            xAxes:[{
                scaleLabel:{
                    display: true,
                    labelString: 'Neighborhood'
                }
            }],
            yAxes:[{
                scaleLabel:{
                    display: true,
                    labelString:'Average % Change in Sale Price 2000-2019'
                }
            }]
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,   
        },
        plugins:{
            colorschemes:{
                scheme: 'brewer.Paired12',
            }
        },
        annotation: {
            annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 81.53,
                borderColor: '#117864',
                borderWidth: 4,
                label: {
                    enabled: true,
                    content: 'Charlottesville Average (%)',
                    fontSize:'8',
                    position: 'right',
                    backgroundColor:'#117864',
                    fontColor:'white',
                    yAdjust: 5,   
                }
            }]
        }    
        
    }
});

//Bar Chart of percentage of homes that increased in sales price
var ctx6=document.getElementById('perInc').getContext('2d') ;
var chart6 = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['Venable','Barracks / Rugby','Rose Hill','10th & Page','Lewis Mountain','Jefferson Park Avenue','Fry\'s Spring','Johnson Village','Fifeville','Ridge Street','Starr Hill','North Downtown','The Meadows','Greenbrier','Locust Grove','Martha Jefferson','Woolen Mills','Belmont'],
        
        datasets: [
        {
            label:'Percent of Real Estate Properties that (on Average) Showed an Increase in Sale Price',
            data:[ 91.89,95.17, 100.0,95.35,92.00,64.44,91.45,50.4,81.90,58.56,100.00,90.27,80.77,94.44,83.52,95.60,90.0,91.82],
            backgroundColor:'#ADD8E6'
        }


        ]
    },
    options: {
        title:{
            display: true,
            text: 'Percent of Real Estate Properties that (on Average) Showed an Increase in Sale Price'
        },
        scales:{
            xAxes:[{
                scaleLabel:{
                    display: true,
                    labelString: 'Neighborhood'
                }
            }],
            yAxes:[{
                scaleLabel:{
                    display: true,
                    labelString:'Percent of Real Estate Properties that Increased in Sales Price (%)'
                },
                ticks:{
                    beginAtZero:true,
                }
            }]
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },  
        plugins:{
            colorschemes:{
                scheme: 'brewer.Paired12',
            }
        },
        annotation: {
            annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 84.25,
                borderColor: '#2980B9',
                borderWidth: 4,
                label: {
                    enabled: true,
                    content: 'Charlottesville Average (%)',
                    fontSize:'8',
                    position: 'right',
                    backgroundColor:'#2980B9',
                    fontColor:'white',
                    yAdjust: 5,   
                }
            }]
        }    
        
    }
});



//North Downtown Chart
var NDdata=[111.52, 134.74, 143.97, 216.27, 192.35, 219.69, 301.36, 260.02,
    292.84, 292.59, 313.57, 308.53, 260.21, 294.06, 268.83, 380.12,
    331.3 , 479.9 , 415.42, 384.02, 311.69]
var sum=0;

for(var i =0; i<NDdata.length;i++){
  sum+=NDdata[i];
}
var avg=sum/NDdata.length;
  
var ctx2=document.getElementById('chartND').getContext('2d') ;
var chart2=new Chart(ctx2,{
    type: 'line',
    data:{
      labels:[2000,2001, 2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
      datasets:[{
        label:'Percent Change in Sale Price (%)',
        data:NDdata,
        backgroundColor:'transparent',
        borderColor:'#ADD8E6'
      }]
    },
    options: {
      title:{
          display: true,
          text: 'Percent Change in Single Family Real Estate Sales 2000-2019'
      },
      scales:{
          xAxes:[{
              scaleLabel:{
                  display: true,
                  labelString: 'Year'
              }
          }],
          yAxes:[{
              scaleLabel:{
                  display: true,
                  labelString:'Percent Change in Sale Price (%)'
              }
          }]
      },
      maintainAspectRatio: false,
      responsive: true,
      legend: {
          display: false,
      },
      annotation: {
          annotations: [{
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-0',
              value: avg,
              borderColor: 'rgb(0, 0, 190,0.6)',
              borderWidth: 4,
              label: {
                  enabled: true,
                  content: 'Average Percent Change (%)',
                  fontSize:'8',
                  position: 'right',
                  backgroundColor:'rgb(0, 0, 190,0.8)',
                  fontColor:'white',
                  yAdjust: 5,   
              }
          }]
      }    
      
  }
});


//Martha Jefferson  Chart
var MJdata=[ 91.75, 109.34, 151.8 , 132.9 , 161.29, 225.93, 250.82, 248.13,
    282.71, 203.77, 209.45, 222.6 , 176.32, 228.05, 241.32, 305.62,
    245.24, 224.78, 265.51, 284.89, 301.28]
var sum=0;


for(var i =0; i<MJdata.length;i++){
    sum+=MJdata[i];
}
var avg=sum/MJdata.length;
    

var WMdata=[ 80.9 ,  99.25, 101.77, 146.56, 148.66, 130.23, 156.98, 176.18,
    313.57, 152.12, 375.39, 144.2 , 159.01, 160.66, 191.28, 219.36,
    231.03, 226.58, 218.41, 262.14, 283.88]
var LGdata=[108.54, 114.67, 121.14, 154.05, 170.73, 183.55, 206.1 , 194.42,
    193.95, 192.9 , 190.44, 171.38, 187.91, 179.83, 185.2 , 202.44,
    815.61, 235.13, 233.28, 243.  , 248.43]
var GBdata=[ 105.13, 132.11, 145.03, 150.7 , 164.23, 215.07, 210.35, 205.59,
    195.23, 185.79, 193.04, 184.29, 185.19, 179.09, 205.87, 188.86,
    193.93, 240.83, 253.99, 247.29, 242.65]
var MEADdata=[70.31, 339.68, 111.51, 128.36, 143.33, 167.64, 213.21, 201.28,
    179.11, 168.61, 165.99, 121.1 , 292.93, 137.58, 152.64, 156.9 ,
    171.53, 164.69, 184.63, 177.79, 256.52]
var BELdata=[ 83.26, 775.11,  93.85, 119.14, 146.29, 167.57, 208.05, 188.47,
    184.76, 173.58, 159.27, 141.92, 153.26, 156.22, 174.61, 191.78,
    186.59, 225.22, 226.54, 234.02, 236.49]
var FIFEdata=[69.06,  70.99,  85.77, 106.29, 110.35, 138.35, 219.7 , 345.64,
    183.26, 151.55, 182.04, 250.64, 146.52, 149.79, 168.48, 188.13,
    179.16, 181.42, 193.11, 217.65, 188.53]
var JVdata=[107.66, 104.24, 110.83, 138.14, 153.86, 177.67, 122.39, 163.51,
    202.46, 142.99, 549.54, 131.41, 128.96, 138.86, 165.64, 176.02,
    184.14, 190.  , 196.57, 204.15, 213.4]
var RSdata=[ 78.39,  89.35,  90.93, 152.29, 208.7 , 168.07, 355.93, 201.45,
    180.56, 170.87, 192.93, 138.96, 130.73, 144.5 , 160.05, 154.78,
    170.64, 198.64, 211.66, 191.82, 217.24]
var SHdata=[]
var BARRdata=[]
var FSdata=[110.  , 105.34, 139.67, 142.9 , 172.42, 182.02, 200.05, 191.15,
    208.37, 179.07, 174.96, 171.54, 188.45, 185.37, 181.05, 198.42,
    206.85, 264.33, 233.35, 228.17, 258.88]
var JPAdata=[94.5 ,  99.85, 114.27, 129.2 , 153.01, 232.77, 446.3 , 420.71,
    449.78, 256.06, 188.82, 214.59, 198.94, 229.05, 209.29, 195.49,
    258.25, 312.79, 242.83, 268.93, 279.49]
var LMdata=[111.22, 191.2 , 168.31, 168.24, 201.41, 235.91, 229.35, 338.05,
    245.27, 256.13, 234.17, 214.  , 243.16, 238.01, 254.84, 330.87,
    246.41, 281.24, 322.62, 346.48, 275.08]
var VENdata=[108.65,  122.17,  167.81,  122.41,  337.37,  202.09,  195.19,
    1335.34,  240.75,  206.16,  217.42,  187.42,  178.6 ,  222.53,
     229.27,  195.05,  246.62,  281.78,  338.89,  299.98,  398.19]
var TPdata=[51.01,  96.89,  58.31,  78.91,  93.15, 106.35, 114.37, 906.41,
    118.8 , 141.61, 104.96,  99.73,  97.54, 111.49, 110.85, 127.54,
    159.22, 179.62, 168.03, 174.68, 208.16]
var RHdata=[42.52,  86.35,  73.15,  92.68, 116.27, 134.49, 167.64, 895.28,
    94.9 , 123.28,  82.55,  87.91,  81.48, 122.35, 128.76, 151.64,
    99.42, 194.76, 173.81, 161.22, 133.98]
var BARUGdata=[113.34, 130.42, 136.68, 161.49, 178.07, 217.04, 251.82, 250.56,
    215.47, 222.6 , 239.44, 216.6 , 230.71, 206.04, 232.63, 226.55,
    259.18, 260.87, 297.97, 302.04, 319.14]
var ctx3=document.getElementById('chartMJ').getContext('2d') ;
var chart3=new Chart(ctx3,{
    type: 'line',
    data:{
        labels:[2000,2001, 2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
        datasets:[{
        label:'Percent Change in Sale Price (%)',
        data:MJdata,
        backgroundColor:'transparent',
        borderColor:'#ADD8E6'
        }]
    },
    options: {
        title:{
            display: true,
            text: 'Percent Change in Single Family Real Estate Sales 2000-2020'
        },
        scales:{
            xAxes:[{
                scaleLabel:{
                    display: true,
                    labelString: 'Year'
                }
            }],
            yAxes:[{
                scaleLabel:{
                    display: true,
                    labelString:'Percent Change in Sale Price (%)'
                }
            }]
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },
        annotation: {
            annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: avg,
                borderColor: 'rgb(0, 0, 190,0.6)',
                borderWidth: 4,
                label: {
                    enabled: true,
                    content: 'Average Percent Change (%)',
                    fontSize:'8',
                    position: 'right',
                    backgroundColor:'rgb(0, 0, 190,0.8)',
                    fontColor:'white',
                    yAdjust: 5,   
                }
            }]
        }    
        
    }
});

//Line Chart with every neighborhood
var ctxAll=document.getElementById('chartAll').getContext('2d') ;

var optionsAll= {
    title:{
        display: true,
        text: 'Average $/SqFt of Homes Sold 2000-2020'
    },
    scales:{
        xAxes:[{
            scaleLabel:{
                display: true,
                labelString: 'Year'
            }
        }],
        yAxes:[{
            scaleLabel:{
                display: true,
                labelString:'$/SqFt'
            }
        }]
    },
    maintainAspectRatio: false,
    responsive: true,
    legend: {
        display: true,
        onHover: function(event, legendItem) {
            document.getElementById("chartAll").style.cursor = 'pointer';
          },
        onClick: function(e, legendItem) {
        var index = legendItem.datasetIndex;
        var ci = this.chart;
        var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;

        ci.data.datasets.forEach(function(e, i) {
            var meta = ci.getDatasetMeta(i);

            if (i !== index) {
            if (!alreadyHidden) {
                meta.hidden = meta.hidden === null ? !meta.hidden : null;
            } else if (meta.hidden === null) {
                meta.hidden = true;
            }
            } else if (i === index) {
            meta.hidden = null;
            }
        });

        ci.update();
        },
        },
    tooltips: {
        custom: function(tooltip) {
        if (!tooltip.opacity) {
            document.getElementById("chartAll").style.cursor = 'default';
            return;
        }
        }
    },  
}

var chartlabelAll = [2000,2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2019,2020];

var dataAll={
    labels: chartlabelAll,
    datasets:[{
        label: 'North Downtown',
        borderColor:'#F1948A',
        data: NDdata,
        fill: false
    },{
        label: 'Martha Jefferson',
        borderColor:'#BB8FCE',
        data:MJdata,
        fill: false
    },{
        label: 'Woolen Mills',
        borderColor:'#85C1E9',
        data:WMdata,
        fill: false
    },{
        label: 'Locust Grove',
        borderColor:'#73C6B6',
        data:LGdata,
        fill: false
    },{
        label: 'Greenbrier',
        borderColor:'#82E0AA',
        data:GBdata,
        fill: false
    },{
        label: 'The Meadows',
        borderColor:'#F8C471',
        data:MEADdata,
        fill: false
    },{
        label: 'Belmont',
        borderColor:'#F7DC6F',
        data:BELdata,
        fill: false
    },{
        label: 'Fifeville',
        borderColor:'#0033cc',
        data:FIFEdata,
        fill: false
    },{
        label: 'Johnson Village',
        borderColor:'#ff33cc',
        data:JVdata,
        fill: false
    },{
        label: 'Ridge Street',
        borderColor:'#33cc33',
        data: RSdata,
        fill: false
    },{
        label: 'Fry\'s Spring',
        borderColor:'#ccffff',
        data:FSdata,
        fill: false
    },{
        label: 'Jefferson Park Avenue',
        borderColor:'#0099ff',
        data:JPAdata,
        fill: false
    },{
        label: 'Lewis Mountain',
        borderColor:'#006600',
        data:LMdata,
        fill: false
    },{
        label: 'Venable',
        borderColor:'#ffcc99',
        data:VENdata,
        fill: false
    },{
        label: '10th & Page',
        borderColor:'#9966ff',
        data:TPdata,
        fill: false
    },{
        label: 'Rose Hill',
        borderColor:'#99ff66',
        data:RHdata,
        fill: false
    },{
        label: 'Barracks / Rugby',
        borderColor:'#6600cc',
        data:BARUGdata,
        fill: false
    },
]

}
var lineChartAll=new Chart(ctxAll,{
    type: 'line',
    data: dataAll,
    options: optionsAll
});