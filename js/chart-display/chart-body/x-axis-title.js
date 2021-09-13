import colorPalette from '../../color-palette.js';

export default function createXAxisTitleContainer(options, element) {
  element.append('<span class="' + options.uniuqeChartId + '_xAxisTitleSpan">' + options.xAxisTitle + '<span>');
  $("." + options.uniuqeChartId + "_xAxisTitleSpan").css({
    "color": colorPalette[0]["light"]
  });
}
