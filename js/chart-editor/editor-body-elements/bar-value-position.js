export default function createBarValuePositionBody(options, element) {
  /* element.css({
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
    "font-size": "11px",
  }); */
  element.append('<div class="' + options.uniuqeChartId + '_barValuePosition ' + options.uniuqeChartId + '_barValuePositionTop">Top</div>');
  $("." + options.uniuqeChartId + "_barValuePositionTop").on("click", function () {
    $("." + options.uniuqeChartId + "_chartAreaBar").css("align-items", "flex-start");
  });

  element.append('<div class="' + options.uniuqeChartId + '_barValuePosition ' + options.uniuqeChartId + '_barValuePositionCenter">Center</div>');
  $("." + options.uniuqeChartId + "_barValuePositionCenter").on("click", function () {
    $("." + options.uniuqeChartId + "_chartAreaBar").css("align-items", "center");
  });

  element.append('<div class="' + options.uniuqeChartId + '_barValuePosition ' + options.uniuqeChartId + '_barValuePositionBottom">Bottom</div>');
  $("." + options.uniuqeChartId + "_barValuePositionBottom").on("click", function () {
    $("." + options.uniuqeChartId + "_chartAreaBar").css("align-items", "flex-end");
  });

  $("." + options.uniuqeChartId + "_barValuePosition").css({
    "font-size": "11px",
    "padding":"2px",
    /* "border-bottom": "solid 1px rgb(0, 60, 179)", */
    "cursor": "pointer"
  });

  $("." + options.uniuqeChartId + "_barValuePosition").on("mouseover", function() {
    $(this).css({
      "font-weight": "bold",
      "border": "solid .5px #ADE8F4",
      "border-radius": "5px",
      "background-color": "#EDFAFD"
    });
  });
  $("." + options.uniuqeChartId + "_barValuePosition").on("mouseout", function() {
    $(this).css({
      "font-weight": "normal",
      "background-color": "transparent",
      "border": "none"
    });
  });
}
