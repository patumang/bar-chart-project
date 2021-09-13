import rangeSlider from '../../slider-range.js';

export default function createTitleFontSizeBody(options, element) {
  element.append('<div class="' + options.uniuqeChartId + '_sliderContainer" id="' + options.uniuqeChartId + '_titleFontSizeSliderContainer"></div>');

  $("#" + options.uniuqeChartId + "_titleFontSizeSliderContainer").append(
    '<input type="range" min="10" max="50" value="24" step="1" class="' + options.uniuqeChartId + '_slider" id="' + options.uniuqeChartId + '_titleFontSizeSlider">'
  );
  $("#" + options.uniuqeChartId + "_titleFontSizeSliderContainer").append(
    '<span class="' + options.uniuqeChartId + '_sliderValue" id="' + options.uniuqeChartId + '_titleFontSizeSliderValue">0</span>'
  );

  var titleFontSize= $("#" + options.uniuqeChartId + "_titleFontSizeSlider").val();
  $("#" + options.uniuqeChartId + "_titleFontSizeSliderValue").html(titleFontSize);
  $("." + options.uniuqeChartId + "_chartHead").css("font-size", titleFontSize + "px");

  rangeSlider(
    {
      "uniuqeChartId": options.uniuqeChartId,
      "modifier": "titleFontSize"
    },
    $("#" + options.uniuqeChartId + "_titleFontSizeSlider"),
    $("#" + options.uniuqeChartId + "_titleFontSizeSliderValue")
  );
}
