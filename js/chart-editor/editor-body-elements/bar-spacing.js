import rangeSlider from '../../slider-range.js';
export default function createBarSpacingBody(options, element) {
  element.append('<div class="' + options.uniuqeChartId + '_sliderContainer" id="' + options.uniuqeChartId + '_barSpacingSliderContainer"></div>');

  var currentBarSpacing;
  if (options.widthOfEachBarInPerc / 2 > 1)
    currentBarSpacing = Math.floor(options.widthOfEachBarInPerc / 2);
  else
    currentBarSpacing = options.widthOfEachBarInPerc;

  $("#" + options.uniuqeChartId + "_barSpacingSliderContainer").append(
    '<input type="range" min="1" max="' + options.widthOfEachBarInPerc + '" value="' + currentBarSpacing + '" step="0.1" class="' + options.uniuqeChartId + '_slider" id="' + options.uniuqeChartId + '_barSpacingSlider">'
  );

  var barSpacing= $("#" + options.uniuqeChartId + "_barSpacingSlider").val();
  if(options.singleStack){
    $("." + options.uniuqeChartId + "_chartAreaBar").css("width", barSpacing + "%");
  }
  else {
    $("." + options.uniuqeChartId + "_chartAreaBarColumn").css("width", barSpacing + "%");
  }
  $("." + options.uniuqeChartId + "_xAxisDataPointContainer").css("width", barSpacing + "%");

  rangeSlider(
    {
      "uniuqeChartId": options.uniuqeChartId,
      "modifier":"barSpacing",
      "singleStack": options.singleStack
    }
    ,
    $("#" + options.uniuqeChartId + "_barSpacingSlider"),
    undefined
  );
}
