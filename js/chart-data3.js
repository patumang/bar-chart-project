const chartData = {};
const chartOptions = {};

chartData["chartRawData"] = {
  "Apples": {"John": 5, "Jane": 2, "Joe": 3},
  "Oranges": {"John": 3, "Jane": 2, "Joe": 4},
  "Pears": {"John": 4, "Jane": 3, "Joe": 4},
  "Grapes": {"John": 7, "Jane": 2, "Joe": 2},
  "Bananas": {"John": 2, "Jane": 1, "Joe": 5}
};
chartData["chartTitle"] = "Fruit Conception";
chartData["xAxisTitle"] = "Fruits";
chartData["yAxisTitle"] = "Conception";
chartData["yAxisRange"] = {"type": "number"};
//chartData["yAxisRange"] = {"type": "number", "prefix": "", "postfix": ""};
//chartData["yAxisRange"] = {"min": 0, "max": 12, "type": "number", "prefix": "", "postfix": ""};
//chartData["yAxisRange"] = {"min": 0, "max": 12, "gap": 3, "type": "number", "prefix": "", "postfix": ""};

chartOptions["chartHeight"] = 600;  //height in px
chartOptions["chartWidth"] = 600;   //width in px

export {chartData as chartData3, chartOptions as chartOptions3};
