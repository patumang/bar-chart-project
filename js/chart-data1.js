const chartData = {};
const chartOptions = {};

chartData["chartRawData"] = {
  "Comedy": 4,
  "Action": 5,
  "Action": 6,
  "Drama": 1,
  "SciFi": 4
};
chartData["chartTitle"] = "Favorite Type of Movie";
chartData["xAxisTitle"] = "Movies";
chartData["yAxisTitle"] = "People";
chartData["yAxisRange"] = {"min": 0, "max": 10, "type": "number", "prefix": "", "postfix": ""};

chartOptions["chartHeight"] = 600;  //height in px
chartOptions["chartWidth"] = 600;   //width in px

export {chartData as chartData1, chartOptions as chartOptions1};
