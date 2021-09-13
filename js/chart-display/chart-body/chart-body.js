export default function createChartBody(options, element) {
  if(options.yAxisTitle) {
    element.append('<div class="' + options.uniuqeChartId + '_yAxisTitleContainer"></div>');
    $("." + options.uniuqeChartId + "_yAxisTitleContainer").css({
      "grid-column": "yAxisTitle-start / yAxisTitle-end",
      "grid-row": "chartAreaRow-start / chartAreaRow-end",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center",
      "width": "40px"
    });
  }

  element.append('<div class="' + options.uniuqeChartId + '_yAxisContainer"></div>');
  $("." + options.uniuqeChartId + "_yAxisContainer").css({
    "grid-column": "yAxis-start / yAxis-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "flex-direction": "column-reverse"
  });

  element.append('<div class="' + options.uniuqeChartId + '_yAxisRuler"><div>');
  $("." + options.uniuqeChartId + "_yAxisRuler").css({
    "grid-column": "yAxisRuler-start / yAxisRuler-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "background-color": "gray",
    "width": "1px"
  });

  element.append('<div class="' + options.uniuqeChartId + '_chartAreaContainer"></div>');
  $("." + options.uniuqeChartId + "_chartAreaContainer").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "justify-content": "space-evenly",
    "align-items": "flex-end"
  });

  element.append('<div class="' + options.uniuqeChartId + '_xAxisRuler"></div>');
  $("." + options.uniuqeChartId + "_xAxisRuler").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxisRuler-start / xAxisRuler-end",
    "background-color": "gray",
    "height": "1px",
    "margin-left": "-1px"
  });

  element.append('<div class="' + options.uniuqeChartId + '_xAxisContainer"></div>');
  $("." + options.uniuqeChartId + "_xAxisContainer").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxis-start / xAxis-end",
    "display": "flex",
    "justify-content": "space-evenly"
  });

  if(options.xAxisTitle) {
    element.append('<div class="' + options.uniuqeChartId + '_xAxisTitleContainer"></div>');
    $("." + options.uniuqeChartId + "_xAxisTitleContainer").css({
      "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
      "grid-row": "xAxisTitle-start / xAxisTitle-end",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    });
  }
}
