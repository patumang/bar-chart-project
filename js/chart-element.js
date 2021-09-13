export default function createChartElement(uniuqeChartId, element) {
  element.css({
    "display": "flex",
    "background-color": "transparent"
  });

  element.append('<div class="' + uniuqeChartId + '_chartDisplay"></div>');
  $("." + uniuqeChartId + "_chartDisplay").css({
    "flex": "1",
    "display": "flex",
    "flex-direction": "column"
  });

  element.append('<div class="' + uniuqeChartId + '_chartEditor"></div>');
  $("." + uniuqeChartId + "_chartEditor").css({
    "display": "flex",
    "flex-direction": "column",
    "align-items": "flex-end",
    "padding": "10px 5px",
    "max-width": "150px"
  });
}
