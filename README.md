# Bar Chart Library

A library that will allow other developers to generate bar charts on their web pages using HTML, CSS, JavaScript and jQuery.

## Final Product

!["Screenshot of single stacked bar chart"](https://github.com/patumang/bar-chart-project/raw/master/img/sample-bar-chart-1.png)

!["Screenshot of single stacked bar chart"](https://github.com/patumang/bar-chart-project/raw/master/img/sample-bar-chart-2.png)

!["Screenshot of multi stacked bar chart"](https://github.com/patumang/bar-chart-project/raw/master/img/sample-bar-chart-3.png)

## Functional Description
The signature of the function is as follows:

drawBarChart(data, options, element);

## Example

```js
const chartData = {};
const chartOptions = {};
const chartElement = $("#chart-container");

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
chartData["yAxisRange"] = {"min": 0, "max": 12, "gap": 3, "type": "number", "prefix": "", "postfix": ""};

chartOptions["chartHeight"] = 600;
chartOptions["chartWidth"] = 600;

drawBarChart(chartData, chartOptions, chartElement);
```
