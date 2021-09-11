export default function createChartBody(element) {
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
    "display": "flex",
    "justify-content": "space-evenly",
    "align-items": "flex-end"
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
    "display": "flex",
    "justify-content": "space-evenly"
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
