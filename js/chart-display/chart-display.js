import colorPalette from '../color-palette.js';

export default function createChartDisplay(options, element) {
  if(options.chartTitle) {
    element.append('<div class="' + options.uniuqeChartId + '_chartHead">' + options.chartTitle + '</div>');
    $("." + options.uniuqeChartId + "_chartHead").css({
      "text-align": "center",
      "font-weight": "bold",
      "color": colorPalette[0]["light"]
    });
  }

  element.append('<div class="' + options.uniuqeChartId + '_chartBody"></div>');
  let gridColumns, gridRows;

  if(options.yAxisTitle)
    gridColumns = "[yAxisTitle-start] auto [yAxisTitle-end yAxis-start] auto [yAxis-end yAxisRuler-start] auto [yAxisRuler-end chartAreaColumn-start] 1fr [chartAreaColumn-end]";
  else
    gridColumns = "[yAxis-start] auto [yAxis-end yAxisRuler-start] auto [yAxisRuler-end chartAreaColumn-start] 1fr [chartAreaColumn-end]";

  if(options.xAxisTitle)
    gridRows = "[chartAreaRow-start] 1fr [chartAreaRow-end xAxisRuler-start] auto [xAxisRuler-end xAxis-start] auto [xAxis-end xAxisTitle-start] auto [xAxisTitle-end]";
  else
    gridRows = "[chartAreaRow-start] 1fr [chartAreaRow-end xAxisRuler-start] auto [xAxisRuler-end xAxis-start] auto [xAxis-end]";

  $("." + options.uniuqeChartId + "_chartBody").css({
    "flex": "1",
    "padding": "5px",
    "display": "grid",
    "grid-template-columns": gridColumns,
    "grid-template-rows": gridRows
  });

  element.append('<div class="' + options.uniuqeChartId + '_chartFooter"></div>');
  $("." + options.uniuqeChartId + "_chartFooter").css({
    "display":"flex",
    "flex-direction": "column-reverse",
    "align-items": "center"
  });

  $("." + options.uniuqeChartId + "_chartFooter").append(
    '<span>Bar Chart by <a href="https://github.com/patumang" target="_blank" >Umang Patel</a></span>'
  );
}
