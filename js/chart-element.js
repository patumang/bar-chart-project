export default function createChartElement(element) {
  element.css({
    "display": "flex",
    "background-color": "transparent"
  });

  element.append('<div class="chartDisplay"></div>');
  $(".chartDisplay").css({
    "flex": "1",
    "display": "flex",
    "flex-direction": "column"
  });

  element.append('<div class="chartEditor"></div>');
  $(".chartEditor").css({
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "border": "solid 1px lightgray",
    "padding": "10px 5px"
  });
}
