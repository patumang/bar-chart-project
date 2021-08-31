/* eslint-disable no-inline-comments */
function createChartElement(chartTitle, chartDescription, element) {
  var elementCSS = {
    "display": "flex",
    "flex-direction": "column"
  };
  element.css(elementCSS);

  if(chartTitle) {
    var chartHead = '<div class="chartHead">' + chartTitle + '</div>';
    var chartHeadCSS = {
      "background-color": "lemonchiffon",
      "text-align": "center"
    };
    element.append(chartHead);
    $(".chartHead").css(chartHeadCSS);
  }

  var chartBody = '<div class="chartBody"></div>';
  var chartBodyCSS = {
    "background-color": "lightblue",
    "flex": "1",
    "display": "flex"
  };
  element.append(chartBody);
  $(".chartBody").css(chartBodyCSS);

  if(chartDescription) {
    var chartFooter = '<div class="chartFooter">' + chartDescription + '</div>';
    var chartFooterCSS = {
      "background-color": "mistyrose",
      "text-align": "center"
    };
    element.append(chartFooter);
    $(".chartFooter").css(chartFooterCSS);
  }
}

function createChartBody(element) {
  var chartDisplay = '<div class="chartDisplay"></div>';
  var chartDisplayCSS = {
    "flex": "1",
    "display": "grid",
    "grid-template-columns": "[yAxisTitle-start] auto [yAxisTitle-end yAxis-start] auto [yAxis-end chartAreaColumn-start] 1fr [chartAreaColumn-end]",
    "grid-template-rows": "[chartAreaRow-start] 1fr [chartAreaRow-end xAxis-start] auto [xAxis-end xAxisTitle-start] auto [xAxisTitle-end]"
  };
  element.append(chartDisplay);
  $(".chartDisplay").css(chartDisplayCSS);

  var chartEditor = '<div class="chartEditor">Editor</div>';
  var chartEditorCSS = {
    "background-color": "rgb(0,191,255)"
  };
  element.append(chartEditor);
  $(".chartEditor").css(chartEditorCSS);
}

function createChartDisplay(noOfColumns, element) {
  var yAxisTitleContainer = '<div class="yAxisTitleContainer"></div>';
  var yAxisTitleContainerCSS = {
    "grid-column": "yAxisTitle-start / yAxisTitle-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  };
  element.append(yAxisTitleContainer);
  $(".yAxisTitleContainer").css(yAxisTitleContainerCSS);

  var yAxisContainer = '<div class="yAxisContainer"></div>';
  var yAxisContainerCSS = {
    "grid-column": "yAxis-start / yAxis-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex"
  };
  element.append(yAxisContainer);
  $(".yAxisContainer").css(yAxisContainerCSS);

  var chartAreaContainer = '<div class="chartAreaContainer"></div>';
  var chartAreaContainerCSS = {
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "padding-top": "10px"
  };
  element.append(chartAreaContainer);
  $(".chartAreaContainer").css(chartAreaContainerCSS);

  var xAxisContainer = '<div class="xAxisContainer"></div>';
  var xAxisContainerCSS = {
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxis-start / xAxis-end",
    "display": "flex",
    "flex-direction": "column"
  };
  element.append(xAxisContainer);
  $(".xAxisContainer").css(xAxisContainerCSS);

  var xAxisTitleContainer = '<div class="xAxisTitleContainer"></div>';
  var xAxisTitleContainerCSS = {
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxisTitle-start / xAxisTitle-end",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  };
  element.append(xAxisTitleContainer);
  $(".xAxisTitleContainer").css(xAxisTitleContainerCSS);
}

function createYAxisTitleContainer(yAxisTitle, element) {
  var yAxisTitleSpan = '<span class="yAxisTitleSpan">' + yAxisTitle + '<span>';
  var yAxisTitleSpanCSS = {
    "display": "block",
    "-ms-transform": "rotate(-90deg)",
    "-webkit-transform": "rotate(-90deg)",
    "transform": "rotate(-90deg)"
  };
  element.append(yAxisTitleSpan);
  $(".yAxisTitleSpan").css(yAxisTitleSpanCSS);
}

function createXAxisTitleContainer(xAxisTitle, element) {
  var xAxisTitleSpan = '<span class="xAxisTitleSpan">' + xAxisTitle + '<span>';
  element.append(xAxisTitleSpan);
}

function createYAxisDataPointsContainer(element) {
  var yAxisDataPointsContainer = '<div class="yAxisDataPointsContainer"><div>';
  var yAxisDataPointsContainerCSS = {
    "padding-top": "10px",
    "position": "relative"
  };
  element.append(yAxisDataPointsContainer);
  $(".yAxisDataPointsContainer").css(yAxisDataPointsContainerCSS);
}

function createYAxisDataPointsMarkContainer(element) {
  var yAxisDataPointsMarkContainer = '<div class="yAxisDataPointsMarkContainer"><div>';
  var yAxisDataPointsMarkContainerCSS = {
    "padding-top": "10px",
    "position": "relative"
  };
  element.append(yAxisDataPointsMarkContainer);
  $(".yAxisDataPointsMarkContainer").css(yAxisDataPointsMarkContainerCSS);
}

function createYAxisRulerContainer(element) {
  var yAxisRulerContainer = '<div class="yAxisRulerContainer"><div>';
  var yAxisRulerContainerCSS = {
    "background-color": "black",
    "width": "5px"
  };
  element.append(yAxisRulerContainer);
  $(".yAxisRulerContainer").css(yAxisRulerContainerCSS);
}

function createXAxisRulerContainer(element) {
  var xAxisRulerContainer = '<div class="xAxisRulerContainer"><div>';
  var xAxisRulerContainerCSS = {
    "background-color": "black",
    "height": "5px",
    "margin-left": "-5px"
  };
  element.append(xAxisRulerContainer);
  $(".xAxisRulerContainer").css(xAxisRulerContainerCSS);
}

function createXAxisDataPointsMarkContainer(element) {
  var xAxisDataPointsMarkContainer = '<div class="xAxisDataPointsMarkContainer"><div>';
  /* var xAxisDataPointsMarkContainerCSS = {
    "border": "solid 1px black"
  }; */
  element.append(xAxisDataPointsMarkContainer);
  /* $(".xAxisDataPointsMarkContainer").css(xAxisDataPointsMarkContainerCSS); */
}

function createXAxisDataPointsContainer(element) {
  var xAxisDataPointsContainer = '<div class="xAxisDataPointsContainer">points<div>';
  /* var xAxisDataPointsContainerCSS = {
    "border": "solid 1px black"
  }; */
  element.append(xAxisDataPointsContainer);
  /* $(".xAxisDataPointsContainer").css(xAxisDataPointsContainerCSS); */
}

function createChartAreaContainer(noOfColumns, element) {
  var chartAreaDynamicColumns = [];
  var chartAreaDynamicColumnsCSS = [];

  for(var i = 0; i < noOfColumns; i++) {
    chartAreaDynamicColumns.push('<div class="chartAreaDynamicCoumn chartAreaDynamicColumn-' + (i + 1) + '"></div>');
    chartAreaDynamicColumnsCSS.push({
      "flex": "1",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "flex-end",
      "align-items": "center"
    });
    element.append(chartAreaDynamicColumns[i]);
    $(".chartAreaDynamicColumn-" + (i + 1)).css(chartAreaDynamicColumnsCSS[i]);
  }
}

function calculateHeightofBarChartComponents(data, noOfRows) {
  var totalHeightBarContainer = $(".chartAreaDynamicCoumn").height();
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

function createChartBars(chartRawData, noOfColumns, barChartComponentsHeight) {
  var heightOfCurrentBar;
  for(var i = 0; i < noOfColumns; i++) {
    heightOfCurrentBar = barChartComponentsHeight.heightOfEachRangePoint * chartRawData[i]["noOfPeople"];
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

function createYAxisDataPointsMark(noOfRows, chartAreaRowMarkHeight, element) {
  var currentMarkHeight = chartAreaRowMarkHeight;
  for(var i = 0; i < noOfRows; i++) {
    console.log(currentMarkHeight);
    element.append('<div class="yAxisDataPointMark yAxisDataPointMark-' + (i + 1) + '"></div>');
    $(".yAxisDataPointMark-" + (i + 1)).css({
      "position": "absolute",
      "right": "0",
      "bottom": currentMarkHeight + "px",
      "height": "3px",
      "width": "7px",
      "background-color": "black"
    });

    currentMarkHeight += chartAreaRowMarkHeight;
  }
}

function createYAxisDataPoints(noOfRows, barChartComponentsHeight, element) {
  var currentMark = barChartComponentsHeight.chartAreaRowMark;
  var currentMarkHeight = barChartComponentsHeight.chartAreaRowMarkHeight;

  for(var i = 0; i < noOfRows; i++) {
    console.log(currentMarkHeight);
    element.append('<div class="yAxisDataPoint yAxisDataPoint-' + (i + 1) + '">' + currentMark + '</div>');
    $(".yAxisDataPoint-" + (i + 1)).css({
      "position": "absolute",
      "right": "5px",
      "bottom": currentMarkHeight + "px",
      "transform": "translateY(50%)"
    });

    currentMark += barChartComponentsHeight.chartAreaRowMark;
    currentMarkHeight += barChartComponentsHeight.chartAreaRowMarkHeight;
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

  createChartDisplay(noOfColumns, $(".chartDisplay"));

  createYAxisTitleContainer(data.yAxisTitle, $(".yAxisTitleContainer"));

  createXAxisTitleContainer(data.xAxisTitle, $(".xAxisTitleContainer"));

  createYAxisDataPointsContainer($(".yAxisContainer"));
  createYAxisDataPointsMarkContainer($(".yAxisContainer"));
  createYAxisRulerContainer($(".yAxisContainer"));

  createXAxisRulerContainer($(".xAxisContainer"));
  createXAxisDataPointsMarkContainer($(".xAxisContainer"));
  createXAxisDataPointsContainer($(".xAxisContainer"));

  createChartAreaContainer(noOfColumns, $(".chartAreaContainer"));

  var barChartComponentsHeight = calculateHeightofBarChartComponents(data, noOfRows);

  createChartBars(data.chartRawData, noOfColumns, barChartComponentsHeight);

  createYAxisDataPointsMark(noOfRows, barChartComponentsHeight.chartAreaRowMarkHeight, $(".yAxisDataPointsMarkContainer"));

  createYAxisDataPoints(noOfRows, barChartComponentsHeight, $(".yAxisDataPointsContainer"));

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
    {"fruitName": "Apple", "noOfPeople": 35},
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
