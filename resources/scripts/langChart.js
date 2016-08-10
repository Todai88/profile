var barChartData = {
        labels: ["Core Java", "C/C++", "C#", "Relational-Databases", "VB.NET", "Erlang", "JavaScript"],
        datasets: [{
            label: 'Programming',
            backgroundColor: ["rgba(102,61,0,0.9)", "rgba(5,32,74,0.9)", "rgba(176,0,255,0.8)", "rgba(101,0,0,0.8)", "rgba(0,115,255,0.8)", "rgba(146,0,0,0.9)", "rgba(236,211,0,0.8)"],
            yAxisID: "y-axis-1",
            data: [40, 30, 50, 40, 60, 20, 30]
        }]
    };
    window.onload = function() {
        var ctx = document.getElementById("canvas").getContext("2d");
        window.myBar = Chart.Bar(ctx, {
            data: barChartData, 
            options: {
                responsive: true,
                hoverMode: 'label',
                hoverAnimationDuration: 400,
                stacked: false,
                title:{
                    display:true,
                    text:"Programming languages",
                    fontSize: 18,
                    fontStyle: 'bold'

                },
                scales: {
                    yAxes: [{
                        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: "left",
                        id: "y-axis-1",
                        ticks: {
                            max: 100,
                            min: 0
                        }
                    }],
                }
            }
        });
    };
  Chart.defaults.global.legend.display = false;

  Number.prototype.roundTo = function(nTo) {
    nTo = nTo || 10;
    return Math.round(this * (1 / nTo) ) * nTo;
}

$(function() {
    var slides = $('#slider ul').children().length;
    var slideWidth = $('#slider').width();
    var min = 0;
    var max = -((slides - 1) * slideWidth);

    $("#slider ul").width(slides*slideWidth).draggable({
        axis: 'x',
        drag: function (event, ui) {
            if (ui.position.left > min) ui.position.left = min;
            if (ui.position.left < max) ui.position.left = max;
        },
        stop: function( event, ui ) {
            $(this).animate({'left': (ui.position.left).roundTo(slideWidth)})
        }
    });
});