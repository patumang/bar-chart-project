export default function createChartElement(options, element) {
  element.css({
    "display": "flex",
    "background-color": "transparent"
  });

  element.append('<div class="' + options.uniuqeChartId + '_chartDisplay"></div>');
  $("." + options.uniuqeChartId + "_chartDisplay").css({
    "flex": "1",
    "display": "flex",
    "flex-direction": "column"
  });

  element.append('<div class="' + options.uniuqeChartId + '_chartEditor"></div>');
  $("." + options.uniuqeChartId + "_chartEditor").css({
    "display": "flex",
    "flex-direction": "column",
    "align-items": "flex-end",
    "padding": "10px 5px",
    "max-width": "150px"
  });
}
