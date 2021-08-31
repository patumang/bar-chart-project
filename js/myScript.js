/* eslint-disable no-inline-comments */
function calculateHeightofBarChartComponents(data, noOfRows) {
  var totalHeightBarContainer = $(".chartAreaContainer").height();
  var heightOfEachRangePoint = Math.floor(totalHeightBarContainer / (data.yAxisRange.max - data.yAxisRange.min));
  var chartAreaRowMark = Math.floor((data.yAxisRange.max - data.yAxisRange.min) / noOfRows);
  var chartAreaRowMarkHeight = heightOfEachRangePoint * chartAreaRowMark;

  return {
    "totalHeightBarContainer": totalHeightBarContainer,
    "chartAreaRowMark": chartAreaRowMark,
    "chartAreaRowMarkHeight": chartAreaRowMarkHeight,
    "heightOfEachRangePoint": heightOfEachRangePoint
  };
}

function createChartElement(chartTitle, chartDescription, element) {
  element.css({
    "display": "flex",
    "flex-direction": "column"
  });

  if(chartTitle) {
    element.append('<div class="chartHead">' + chartTitle + '</div>');
    $(".chartHead").css({
      "background-color": "lemonchiffon",
      "text-align": "center"
    });
  }

  element.append('<div class="chartBody"></div>');
  $(".chartBody").css({
    "background-color": "lightblue",
    "flex": "1",
    "display": "flex"
  });

  if(chartDescription) {
    element.append('<div class="chartFooter">' + chartDescription + '</div>');
    $(".chartFooter").css({
      "background-color": "mistyrose",
      "text-align": "center"
    });
  }
}

function createChartBody(element) {
  element.append('<div class="chartDisplay"></div>');
  $(".chartDisplay").css({
    "flex": "1",
    "padding": "5px",
    "display": "grid",
    "grid-template-columns": "[yAxisTitle-start] auto [yAxisTitle-end yAxis-start] auto [yAxis-end yAxisRuler-start] auto [yAxisRuler-end chartAreaColumn-start] 1fr [chartAreaColumn-end]",
    "grid-template-rows": "[chartAreaRow-start] 1fr [chartAreaRow-end xAxisRuler-start] auto [xAxisRuler-end xAxis-start] auto [xAxis-end xAxisTitle-start] auto [xAxisTitle-end]"
  });

  element.append('<div class="chartEditor">Editor</div>');
  $(".chartEditor").css({
    "background-color": "rgb(0,191,255)"
  });
}

function createChartDisplay(element) {
  element.append('<div class="yAxisTitleContainer"></div>');
  $(".yAxisTitleContainer").css({
    "grid-column": "yAxisTitle-start / yAxisTitle-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  });

  element.append('<div class="yAxisContainer"></div>');
  $(".yAxisContainer").css({
    "grid-column": "yAxis-start / yAxis-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "flex-direction": "column-reverse"
  });

  element.append('<div class="yAxisRulerContainer"><div>');
  $(".yAxisRulerContainer").css({
    "grid-column": "yAxisRuler-start / yAxisRuler-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "background-color": "black",
    "width": "5px"
  });

  element.append('<div class="chartAreaContainer"></div>');
  $(".chartAreaContainer").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex"
  });

  element.append('<div class="xAxisRuler"></div>');
  $(".xAxisRuler").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxisRuler-start / xAxisRuler-end",
    "background-color": "black",
    "height": "5px",
    "margin-left": "-5px"
  });

  element.append('<div class="xAxisContainer"></div>');
  $(".xAxisContainer").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxis-start / xAxis-end",
    "display": "flex"
  });

  element.append('<div class="xAxisTitleContainer"></div>');
  $(".xAxisTitleContainer").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxisTitle-start / xAxisTitle-end",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  });
}

function createYAxisTitleContainer(yAxisTitle, element) {
  element.append('<span class="yAxisTitleSpan">' + yAxisTitle + '<span>');
  $(".yAxisTitleSpan").css({
    "display": "block",
    "-ms-transform": "rotate(-90deg)",
    "-webkit-transform": "rotate(-90deg)",
    "transform": "rotate(-90deg)"
  });
}

function createXAxisTitleContainer(xAxisTitle, element) {
  element.append('<span class="xAxisTitleSpan">' + xAxisTitle + '<span>');
}

function createYAxisDataPointsContainer(noOfRows, barChartComponentsHeight, element) {
  var currentMark = barChartComponentsHeight.chartAreaRowMark;

  for(var i = 0; i < noOfRows; i++) {
    element.append(
      '<div class="yAxisDataPointContainer yAxisDataPointContainer-' + (i + 1) + '"></div>'
    );
    $(".yAxisDataPointContainer-" + (i + 1)).css({
      "height": barChartComponentsHeight.chartAreaRowMarkHeight + "px",
      "display": "flex",
      "justify-content": "flex-end",
      "align-items": "flex-start"
    });

    $(".yAxisDataPointContainer-" + (i + 1)).append(
      '<div class="yAxisDataPointText yAxisDataPointText-' + (i + 1) + '">' + currentMark + '</div>'
    );
    $(".yAxisDataPointText-" + (i + 1)).css({
      "transform": "translateY(-50%)",
      "margin-right": "5px"
    });

    $(".yAxisDataPointContainer-" + (i + 1)).append(
      '<div class="yAxisDataPointMark yAxisDataPointMark-' + (i + 1) + '"></div>'
    );
    $(".yAxisDataPointMark-" + (i + 1)).css({
      "height": "2px",
      "width": "10px",
      "background-color": "black"
    });

    currentMark += barChartComponentsHeight.chartAreaRowMark;
  }
}

function createXAxisDataPointsContainer(chartRawData, noOfCols, element) {
  var keys;

  for(var i = 0; i < noOfCols; i++) {
    keys = Object.keys(chartRawData[i]);
    element.append(
      '<div class="xAxisDataPointContainer xAxisDataPointContainer-' + (i + 1) + '">' + chartRawData[i][keys[0]] + '</div>'
    );
    $(".xAxisDataPointContainer-" + (i + 1)).css({
      "flex": "1",
      "text-align": "center"
    });
  }
}

function createChartAreaContainer(noOfColumns, element) {
  for(var i = 0; i < noOfColumns; i++) {
    element.append(
      '<div class="chartAreaDynamicCoumn chartAreaDynamicColumn-' + (i + 1) + '"></div>'
    );
    $(".chartAreaDynamicColumn-" + (i + 1)).css({
      "flex": "1",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "flex-end",
      "align-items": "center"
    });
  }
}

function createChartBars(chartRawData, noOfColumns, barChartComponentsHeight) {
  var heightOfCurrentBar;
  var keys;

  for(var i = 0; i < noOfColumns; i++) {
    keys = Object.keys(chartRawData[i]);
    heightOfCurrentBar = barChartComponentsHeight.heightOfEachRangePoint * chartRawData[i][keys[1]];
    // eslint-disable-next-line radix
    heightOfCurrentBar = Math.floor(heightOfCurrentBar) + "px";
    $(".chartAreaDynamicColumn-" + (i + 1)).append(
      '<div class="chartAreaBar chartAreaBar-' + (i + 1) + '"><span>' + chartRawData[i]["noOfPeople"] + '<span></div>'
    );
    $(".chartAreaBar-" + (i + 1)).css({
      "height": heightOfCurrentBar,
      "width": "50%",
      "background-color": "rgb(253,245,230)",
      "text-align": "center"
    });
  }
}

function drawBarChart(data, options, element) {
  var chartHeight;
  var chartWidth;

  options.chartHeight > element.height() ? chartHeight = element.height() : chartHeight = options.chartHeight;
  options.chartWidth > element.width() ? chartWidth = element.width() : chartWidth = options.chartWidth;

  var noOfColumns = data["chartRawData"].length;
  var noOfRows = 10;

  createChartElement(
    data.chartTitle ? data.chartTitle : undefined,
    data.chartDescription ? data.chartDescription : undefined,
    element
  );

  createChartBody($(".chartBody"));

  createChartDisplay($(".chartDisplay"));

  createYAxisTitleContainer(data.yAxisTitle, $(".yAxisTitleContainer"));

  createXAxisTitleContainer(data.xAxisTitle, $(".xAxisTitleContainer"));

  var barChartComponentsHeight = calculateHeightofBarChartComponents(data, noOfRows);

  createYAxisDataPointsContainer(noOfRows, barChartComponentsHeight, $(".yAxisContainer"));

  createXAxisDataPointsContainer(data.chartRawData, noOfColumns, $(".xAxisContainer"));

  createChartAreaContainer(noOfColumns, $(".chartAreaContainer"));

  createChartBars(data.chartRawData, noOfColumns, barChartComponentsHeight);

  return true;
}

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
