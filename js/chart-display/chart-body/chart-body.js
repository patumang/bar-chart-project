export default function createChartBody(axisTitles, element) {
  if(axisTitles.yAxisTitle) {
    element.append('<div class="yAxisTitleContainer"></div>');
    $(".yAxisTitleContainer").css({
      "grid-column": "yAxisTitle-start / yAxisTitle-end",
      "grid-row": "chartAreaRow-start / chartAreaRow-end",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center",
      "width": "40px"
    });
  }

  element.append('<div class="yAxisContainer"></div>');
  $(".yAxisContainer").css({
    "grid-column": "yAxis-start / yAxis-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "flex-direction": "column-reverse"
  });

  element.append('<div class="yAxisRuler"><div>');
  $(".yAxisRuler").css({
    "grid-column": "yAxisRuler-start / yAxisRuler-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "background-color": "gray",
    "width": "1px"
  });

  element.append('<div class="chartAreaContainer"></div>');
  $(".chartAreaContainer").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "justify-content": "space-evenly",
    "align-items": "flex-end"
  });

  element.append('<div class="xAxisRuler"></div>');
  $(".xAxisRuler").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxisRuler-start / xAxisRuler-end",
    "background-color": "gray",
    "height": "1px",
    "margin-left": "-1px"
  });

  element.append('<div class="xAxisContainer"></div>');
  $(".xAxisContainer").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxis-start / xAxis-end",
    "display": "flex",
    "justify-content": "space-evenly"
  });

  if(axisTitles.xAxisTitle) {
    element.append('<div class="xAxisTitleContainer"></div>');
    $(".xAxisTitleContainer").css({
      "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
      "grid-row": "xAxisTitle-start / xAxisTitle-end",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    });
  }
}
