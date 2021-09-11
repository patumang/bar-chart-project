const chartData = {};
const chartOptions = {};

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

/* chartData["chartRawData"] = {
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
//chartData["yAxisRange"] = {"min": 0, "max": 40, "type": "number", "prefix": "", "postfix": ""}; */

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
//chartData["yAxisRange"] = {"min": 0, "max": 40, "type": "number", "prefix": "", "postfix": ""};

chartOptions["chartHeight"] = 600;  //height in px
chartOptions["chartWidth"] = 600;   //width in px

export {chartData, chartOptions};
