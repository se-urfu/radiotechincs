google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawScoreChart);

function drawScoreChart() {
    var data = google.visualization.arrayToDataTable([
          ['Год', 'Минимальный балл', 'Средний балл'],
          ['2014', 144, 187],
          ['2015', 188, 196],
          ['2016', 161, 180],
          ['2017', 172, 185],
          ['2018', 207, 220]
        ]);

    var options = {
        /*vAxis: {
          title: 'Score'
        },
        hAxis: {
          title: 'Time'
        },
        title: 'Radiotechnics scores by year',*/
        colors: ['#D32F2F', '#388E3C'],
        legend: {
            position: 'bottom'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('score_chart'));

    chart.draw(data, options);
}

/*FOR ADAPTIVITY*/
$(window).resize(function(){
  drawScoreChart();
});