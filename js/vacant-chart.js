google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawVacantChart);

function drawVacantChart() {
    var data = google.visualization.arrayToDataTable([
          ['Год', 'Бюджетные места', 'Контрактные места'],
          ['2014', 15, 40],
          ['2015', 20, 30],
          ['2016', 30, 40],
          ['2017', 35, 30],
          ['2018', 40, 30]
        ]);

    var options = {
        /*vAxis: {
          title: 'Score'
        },
        hAxis: {
          title: 'Time'
        },
        title: 'Radiotechnics vacant places by year',*/
        colors: ['#3F51B5', '#00897B'],
        legend: {
            position: 'bottom'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('vacant_chart'));
    chart.draw(data, options);
}

/*FOR ADAPTIVITY*/
$(window).resize(function(){
  drawVacantChart();
});
