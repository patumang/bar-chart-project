const chartData = {};
const chartOptions = {};

chartData["chartRawData"] = {
  "A": {"John": 5, "Jane": 2, "Joe": 3},
  "B": {"John": 3, "Jane": 2, "Joe": 4},
  "C": {"John": 4, "Jane": 3, "Joe": 4},
  "D": {"John": 7, "Jane": 2, "Joe": 2},
  "E": {"John": 2, "Jane": 1, "Joe": 5},
  "F": { "John": 5, "Jane": 2, "Joe": 3 },
  "G": { "John": 3, "Jane": 2, "Joe": 4 },
  "H": { "John": 4, "Jane": 3, "Joe": 4 },
  "I": { "John": 7, "Jane": 2, "Joe": 2 },
  "J": { "John": 5, "Jane": 2, "Joe": 3 },
  "K": { "John": 3, "Jane": 2, "Joe": 4 },
  "L": { "John": 4, "Jane": 3, "Joe": 4 },
  "M": { "John": 7, "Jane": 2, "Joe": 2 },
  "N": { "John": 2, "Jane": 1, "Joe": 5 },
  "O": { "John": 5, "Jane": 2, "Joe": 3 },
  "P": { "John": 3, "Jane": 2, "Joe": 4 },
  "Q": { "John": 4, "Jane": 3, "Joe": 4 },
  "R": { "John": 7, "Jane": 2, "Joe": 2 }
};
chartData["chartTitle"] = "Fruit Conception";
chartData["xAxisTitle"] = "Fruits";
chartData["yAxisTitle"] = "Conception";
chartData["yAxisRange"] = {"type": "number"};
//chartData["yAxisRange"] = {"type": "number", "prefix": "", "postfix": ""};
//chartData["yAxisRange"] = {"min": 0, "max": 12, "type": "number", "prefix": "", "postfix": ""};
chartData["yAxisRange"] = {"min": 0, "max": 12, "gap": 3, "type": "number", "prefix": "", "postfix": ""};

chartOptions["chartHeight"] = 600;  //height in px
chartOptions["chartWidth"] = 600;   //width in px

export {chartData as chartData6, chartOptions as chartOptions6};
