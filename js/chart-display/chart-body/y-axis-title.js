export default function createYAxisTitleContainer(yAxisTitle, element) {
  element.append('<span class="yAxisTitleSpan">' + yAxisTitle + '<span>');
  $(".yAxisTitleSpan").css({
    "display": "block",
    "-ms-transform": "rotate(-90deg)",
    "-webkit-transform": "rotate(-90deg)",
    "transform": "rotate(-90deg)"
  });
}
