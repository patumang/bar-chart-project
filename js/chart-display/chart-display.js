export default function createChartDisplay(chartTitle, axisTitles, element) {
  if(chartTitle) {
    element.append('<div class="chartHead">' + chartTitle + '</div>');
    $(".chartHead").css({
      "text-align": "center",
      "font-weight": "bold"
    });
  }

  element.append('<div class="chartBody"></div>');
  let gridColumns, gridRows;

  if(axisTitles.yAxisTitle)
    gridColumns = "[yAxisTitle-start] auto [yAxisTitle-end yAxis-start] auto [yAxis-end yAxisRuler-start] auto [yAxisRuler-end chartAreaColumn-start] 1fr [chartAreaColumn-end]";
  else
    gridColumns = "[yAxis-start] auto [yAxis-end yAxisRuler-start] auto [yAxisRuler-end chartAreaColumn-start] 1fr [chartAreaColumn-end]";

  if(axisTitles.xAxisTitle)
    gridRows = "[chartAreaRow-start] 1fr [chartAreaRow-end xAxisRuler-start] auto [xAxisRuler-end xAxis-start] auto [xAxis-end xAxisTitle-start] auto [xAxisTitle-end]";
  else
    gridRows = "[chartAreaRow-start] 1fr [chartAreaRow-end xAxisRuler-start] auto [xAxisRuler-end xAxis-start] auto [xAxis-end]";

  $(".chartBody").css({
    "flex": "1",
    "padding": "5px",
    "display": "grid",
    "grid-template-columns": gridColumns,
    "grid-template-rows": gridRows
  });

  element.append('<div class="chartFooter"></div>');
  $(".chartFooter").css({
    "display":"flex",
    "flex-direction": "column",
    "align-items": "center"
  });
}
