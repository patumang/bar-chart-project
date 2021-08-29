/* eslint-disable no-inline-comments */
function drawBarChart(data, options, element) {
  var displayChart;

  var chartHeight;
  var chartWidth;

  options.chartHeight > element.height() ? chartHeight = element.height() : chartHeight = options.chartHeight;
  options.chartWidth > element.width() ? chartWidth = element.width() : chartWidth = options.chartWidth;

  var chartHead = '<div class="chartHead">' + data.chartTitle + '</div>';
  var chartHeadCSS = {
    "background-color": "lemonchiffon",
    "height": "10%",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  };
  element.append(chartHead);
  $(".chartHead").css(chartHeadCSS);

  var chartBody = '<div class="chartBody"></div>';
  var chartBodyCSS = {
    "background-color": "lightblue",
    "height": "80%",
    "display": "grid",
    "grid-template-columns": "[yAxisTitle-start] 1fr [yAxisTitle-end yAxis-start] 1fr [yAxis-end] repeat(10, [chartAreaColumn-start] 1fr [chartAreaColumn-end])",
    "grid-template-rows": "repeat(10, [chartAreaRow-start] 1fr [chartAreaRow-end]) [xAxis-start] 1fr [xAxis-end xAxisTitle-start] 1fr [xAxisTitle-end]",
    "padding": "20px"
  };
  element.append(chartBody);
  $(".chartBody").css(chartBodyCSS);

  var yAxisTitle = '<div class="yAxisTitle"><span class="rotateSpan">' + data.yAxisTitle + '<span></div>';
  var yAxisTitleCSS = {
    "grid-column": "yAxisTitle-start / yAxisTitle-end",
    "grid-row": "chartAreaRow-start 1 / chartAreaRow-end 10",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  };
  $(".chartBody").append(yAxisTitle);
  $(".yAxisTitle").css(yAxisTitleCSS);
  $(".rotateSpan").css({"-ms-transform": "rotate(-90deg)", "-webkit-transform": "rotate(-90deg)", "transform": "rotate(-90deg)"});

  var yAxis = '<div class="yAxis"><span>yAxis<span></div>';
  var yAxisCSS = {
    "grid-column": "yAxis-start / yAxis-end",
    "grid-row": "chartAreaRow-start 1 / chartAreaRow-end 10"
    //"border-right": "solid 3px lightslategray"
  };
  $(".chartBody").append(yAxis);
  $(".yAxis").css(yAxisCSS);

  var chartAreaBlocks = [];
  var chartAreaBlockCSS = [];

  for(var i = 0; i < 10; i++) {
    chartAreaBlocks[i] = [];
    chartAreaBlockCSS[i] = [];

    for(var j = 0; j < 10; j++) {
      chartAreaBlocks[i].push('<div class="chartAreaBlock chartAreaBlock-' + (i + 1) + (j + 1) + '"><span>b' + (i + 1) + (j + 1) + '<span></div>');
      chartAreaBlockCSS[i].push({
        "grid-column": "chartAreaColumn-start " + (i + 1) + " / chartAreaColumn-end " + (i + 1),
        "grid-row": "chartAreaRow-start " + (j + 1) + " / chartAreaRow-end " + (j + 1)
      });
      $(".chartBody").append(chartAreaBlocks[i][j]);
      $(".chartAreaBlock-" + (i + 1) + (j + 1)).css(chartAreaBlockCSS[i][j]);
    }
  }

  var xAxis = '<div class="xAxis"><span>xAxis<span></div>';
  var xAxisCSS = {
    "grid-column": "chartAreaColumn-start 1 / chartAreaColumn-end 10",
    "grid-row": "xAxis-start / xAxis-end"
    //"border-top": "solid 3px lightslategray"
  };
  $(".chartBody").append(xAxis);
  $(".xAxis").css(xAxisCSS);

  var xAxisTitle = '<div class="xAxisTitle"><span>' + data.xAxisTitle + '<span></div>';
  var xAxisTitleCSS = {
    "grid-column": "chartAreaColumn-start 1 / chartAreaColumn-end 10",
    "grid-row": "xAxisTitle-start / xAxisTitle-end",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  };
  $(".chartBody").append(xAxisTitle);
  $(".xAxisTitle").css(xAxisTitleCSS);

  var chartFooter = '<div class="chartFooter">' + data.chartDescription + '</div>';
  var chartFooterCSS = {
    "background-color": "mistyrose",
    "height": "10%",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  };
  element.append(chartFooter);
  $(".chartFooter").css(chartFooterCSS);

  return true;
}

$.when( $.ready ).then(function() {
  console.log("Initial setup!!");

  var chartData = {};
  var chartOptions = {};
  var chartElement = $(".chart-container");

  chartData["chartRawData"] = [
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

  chartOptions["chartHeight"] = 600;  //height in px
  chartOptions["chartWidth"] = 600;   //width in px


  drawBarChart(chartData, chartOptions, chartElement);


  //$(".chart-container").html(displayChart);
});
