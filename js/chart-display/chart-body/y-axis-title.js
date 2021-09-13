import colorPalette from '../../color-palette.js';

export default function createYAxisTitleContainer(options, element) {
  console.log(options.yAxisTitle);
  element.append('<span class="' + options.uniuqeChartId + '_yAxisTitleSpan">' + options.yAxisTitle + '<span>');
  $("." + options.uniuqeChartId + "_yAxisTitleSpan").css({
    "display": "block",
    "color": colorPalette[0]["light"],
    "-ms-transform": "rotate(-90deg)",
    "-webkit-transform": "rotate(-90deg)",
    "transform": "rotate(-90deg)"
  });
}
