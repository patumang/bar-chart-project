import drawBarChart from './draw-bar-chart.js';

$.when( $.ready ).then(function() {
  console.log("Initial setup!!");

  var chartData = {};
  var chartOptions = {};
  var chartElement = $(".chart-container");

  /* chartData["chartRawData"] = [
    {"movieType": "Comedy", "noOfPeople": 4},
    {"movieType": "Action", "noOfPeople": 5},
    {"movieType": "Action", "noOfPeople": 6},
    {"movieType": "Drama", "noOfPeople": 1},
    {"movieType": "SciFi", "noOfPeople": 4}
  ];
  chartData["chartTitle"] = "Favorite Type of Movie";
  chartData["chartDescription"] = "Description";
  chartData["xAxisTitle"] = "Movies";
  chartData["yAxisTitle"] = "People";
  chartData["yAxisRange"] = {"min": 0, "max": 10, "type": "number", "prefix": "", "postfix": ""}; */

  chartData["chartRawData"] = [
    {"fruitName": "Apple", "noOfPeople": 36},
    {"fruitName": "Orange", "noOfPeople": 30},
    {"fruitName": "Banana", "noOfPeople": 10},
    {"fruitName": "Kiwifruit", "noOfPeople": 25},
    {"fruitName": "Blueberry", "noOfPeople": 40},
    {"fruitName": "Grapes", "noOfPeople": 5}
  ];
  chartData["chartTitle"] = "Nicest Fruit";
  chartData["chartDescription"] = "Description";
  chartData["xAxisTitle"] = "Fruits";
  chartData["yAxisTitle"] = "People";
  chartData["yAxisRange"] = {"min": 0, "max": 40, "type": "number", "prefix": "", "postfix": ""};

  chartOptions["chartHeight"] = 600;  //height in px
  chartOptions["chartWidth"] = 600;   //width in px


  drawBarChart(chartData, chartOptions, chartElement);
});
