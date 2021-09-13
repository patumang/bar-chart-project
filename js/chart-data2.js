const chartData = {};
const chartOptions = {};

chartData["chartRawData"] = {
  "Apple": 36,
  "Orange": 30,
  "Banana": 10,
  "Kiwifruit": 25,
  "Blueberry": 40,
  "Grapes": 5
};
chartData["chartTitle"] = "Nicest Fruit";
chartData["xAxisTitle"] = "Fruits";
chartData["yAxisTitle"] = "People";
//chartData["yAxisRange"] = {"min": 0, "max": 40, "type": "number", "prefix": "", "postfix": ""};

chartOptions["chartHeight"] = 600;  //height in px
chartOptions["chartWidth"] = 600;   //width in px

export {chartData as chartData2, chartOptions as chartOptions2};
