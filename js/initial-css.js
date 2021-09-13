const setInitialCSS = function(uniuqeChartId) {
  $("." + uniuqeChartId + "_sliderContainer").css({
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    "font-size": "11px",
    "color": "rgb(0, 60, 179)"
  });

  $("." + uniuqeChartId + "_slider").css({
    "width": "100%"
  });
}

export default setInitialCSS;
