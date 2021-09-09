export default function createChartDisplay(chartTitle, chartDescription, element) {
  if(chartTitle) {
    element.append('<div class="chartHead">' + chartTitle + '</div>');
    $(".chartHead").css({
      "text-align": "center",
      "font-weight": "bold"
    });
  }

  element.append('<div class="chartBody"></div>');
  $(".chartBody").css({
    "flex": "1",
    "padding": "5px",
    "display": "grid",
    "grid-template-columns": "[yAxisTitle-start] auto [yAxisTitle-end yAxis-start] auto [yAxis-end yAxisRuler-start] auto [yAxisRuler-end chartAreaColumn-start] 1fr [chartAreaColumn-end]",
    "grid-template-rows": "[chartAreaRow-start] 1fr [chartAreaRow-end xAxisRuler-start] auto [xAxisRuler-end xAxis-start] auto [xAxis-end xAxisTitle-start] auto [xAxisTitle-end]"
  });

  if(chartDescription) {
    element.append('<div class="chartFooter">' + chartDescription + '</div>');
    $(".chartFooter").css({
      "text-align": "center"
    });
  }
}
