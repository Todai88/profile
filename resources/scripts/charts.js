
var designBarChartData = {
  labels: ["HTML5", "CSS", "jQuery", "JavaScript", "ASP.NET"],
  datasets: [{
    label: 'Design',
    backgroundColor: ["rgba(255,82,0, 0.8)", "rgba(0,100,255,0.8)", "rgba(255,255,255,0.8)", "rgba(231,131,0, 0.8)", "rgba(0,122,204,0.8)"],
    borderColor: ['rgba(255,39,0,1)', 'rgba(0,20,255, 1)', 'rgba(0,0,0, 1)', 'rgba(232, 90,0, 1)', 'rgba(0,70,204, 1)'],
    borderWidth: 1,
    yAxisID: "y-axis-1",
    data: [30, 35, 25, 30, 40]
  }]
};



var langBarChartData = {
  labels: ["Java", "C#", "Coffe drinking", "SQL", "VB.NET", "Japanese"],
  datasets: [{
    label: 'Programming',
    backgroundColor: ["rgba(57,130,255,0.8)", "rgba(168,0,255,0.8)",  "rgba(231,131,0, 0.8)", "rgba(0,0,0,1)", "rgba(0,140,220,0.8)", "rgba(230,0,64,0.8)", "rgba(57,66,255,0.8)"],
    borderColor: ['rgba(230,0,64,0.9)', 'rgba(212,98,197, 1)', 'rgba(232, 90,0, 1)', 'rgba(255,111,0, 1)', 'rgba(212,98,197, 1)', 'rgba(0,0,0,1)', 'rgba(140,194,255)'],
    borderWidth: 1,
    yAxisID: "y-axis-1",
    data: [40, 30, 95, 40, 60, 65]
  }]
};

var theoryBarChartData = {
  labels: ["IT-Sec", "Management", "Scrum", "SW. Methodologies", "Algorithms"],
  datasets: [{
    label: 'Theory',
    backgroundColor: ["rgba(0, 127, 253,0.8)", "rgba(104, 24, 0,0.8)", "rgba(255, 114 , 0, 0.8)", "rgba(0, 155, 0, 0.8)", "rgba(0,122,204,0.8)"],
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    yAxisID: "y-axis-1",
    data: [40, 30, 50, 30, 20]
  }]
};

Number.prototype.roundTo = function(nTo) {
  nTo = nTo || 10;
  return Math.round(this * (1 / nTo)) * nTo;
}


var slides = $('#slider ul').children().length;
var slideWidth = $('#slider').width();
var min = 0;
var max = -((slides - 1) * slideWidth);

$("#slider ul").width(slides * slideWidth).draggable({
  axis: 'x',
  drag: function(event, ui) {
    if (ui.position.left > min) ui.position.left = min;
    if (ui.position.left < max) ui.position.left = max;
  },
  stop: function(event, ui) {
    $(this).animate({
      'left': (ui.position.left).roundTo(slideWidth)
    })
  }
});



window.onload = function() {


  var ctx = document.getElementById("programming").getContext("2d"); 
  window.myBar = Chart.Bar(ctx, {
    data: langBarChartData,
    options: {
      responsive: true,
      hoverMode: 'label',
      hoverAnimationDuration: 400,
      stacked: false,
      title: {
        display: true,
        text: "Programming",
        fontSize: 32
      },
      scales: {
        yAxes: [{
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "left",
        id: "y-axis-1",
        ticks: {
          max: 100,
          min: 0,
          userCallback: function (value, index, values) {
            if (value % 10 == 0){

              if (value == 20){
                return "Slow & Steady";
              }
              if (value == 40) {
                return "White-belt";
              }
              if (value == 60) {
                return "Pretty Good";
              }
              if (value == 80) {
                return "Smokin'";
              }
              if (value == 100) {
                return "Sensei";
              }
            }
          }
        }
      }, {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "right",
        id: "y-axis-2",
        ticks: {
          max: 100,
          min: 0,
            userCallback: function (value, index, values) {
            if (value % 10 == 0){

              if (value == 20){
                return "Slow & Steady";
              }
              if (value == 40) {
                return "White-belt";
              }
              if (value == 60) {
                return "Pretty Good";
              }
              if (value == 80) {
                return "Smokin'";
              }
              if (value == 100) {
                return "Sensei";
              }
            }
          }
        }  
      }], 
    }
  }
}); 

  window.myBar2 = Chart.Bar(document.getElementById("design").getContext("2d"), {
    data: designBarChartData,
    options: {
      responsive: true,
      hoverMode: 'label',
      hoverAnimationDuration: 400,
      stacked: false,
      title: {
        display: true,
        text: "Design",
        fontSize: 32
      },
      scales: {
        yAxes: [{
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "left",
        id: "y-axis-1",
        ticks: {
          max: 100,
          min: 0,
            userCallback: function (value, index, values) {
            if (value % 10 == 0){

              if (value == 20){
                return "Slow & Steady";
              }
              if (value == 40) {
                return "White belt";
              }
              if (value == 60) {
                return "Samurai";
              }
              if (value == 80) {
                return "Ninja";
              }
              if (value == 100) {
                return "Sensei";
              }
            }
          }
        } 
      }, {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "right",
        id: "y-axis-2",
        ticks: {
          max: 100,
          min: 0,
          userCallback: function (value, index, values) {
            if (value % 10 == 0){

              if (value == 20){
                return "Slow & Steady";
              }
              if (value == 40) {
                return "White-belt";
              }
              if (value == 60) {
                return "Pretty Good";
              }
              if (value == 80) {
                return "Smokin'";
              }
              if (value == 100) {
                return "Sensei";
              }
            }
          }
        } 
      }],
    }
  }
});

  window.myBar3 = Chart.Bar(document.getElementById("theory").getContext("2d"), {
    data: theoryBarChartData,
    options: {
      responsive: true,
      hoverMode: 'label',
      hoverAnimationDuration: 400,
      stacked: false,
      title: {
        display: true,
        text: "Theory",
        fontSize: 32
      },
      scales: {
        yAxes: [{
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "left",
        id: "y-axis-1",
        ticks: {
          max: 100,
          min: 0,
            userCallback: function (value, index, values) {
            if (value % 10 == 0){

              if (value == 20){
                return "Slow & Steady";
              }
              if (value == 40) {
                return "White-belt";
              }
              if (value == 60) {
                return "Pretty Good";
              }
              if (value == 80) {
                return "Smokin'";
              }
              if (value == 100) {
                return "Sensei";
              }
            }
          }
        }
      }, {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "right",
        id: "y-axis-2",
        ticks: {
          max: 100,
          min: 0,
            userCallback: function (value, index, values) {
            if (value % 10 == 0){

              if (value == 20){
                return "Slow & Steady";
              }
              if (value == 40) {
                return "White-belt";
              }
              if (value == 60) {
                return "Pretty Good";
              }
              if (value == 80) {
                return "Smokin'";
              }
              if (value == 100) {
                return "Sensei";
              }
            }
          }
        }
      }],
    }
  }
});



};

Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontSize = 18; 
