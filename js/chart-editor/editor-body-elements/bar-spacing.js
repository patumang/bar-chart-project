import rangeSlider from '../../slider-range.js';
export default function createBarSpacingBody(singleStack, widthOfEachBarInPerc, element) {
  element.append('<div class="sliderContainer" id="barSpacingSliderContainer"></div>');

  var currentBarSpacing;
  if (widthOfEachBarInPerc / 2 > 1)
    currentBarSpacing = Math.floor(widthOfEachBarInPerc / 2);
  else
    currentBarSpacing = widthOfEachBarInPerc;

  $("#barSpacingSliderContainer").append(
    '<input type="range" min="1" max="' + widthOfEachBarInPerc + '" value="' + currentBarSpacing + '" step="0.1" class="slider" id="barSpacingSlider">'
  );

  var barSpacing= $('#barSpacingSlider').val();
  if(singleStack){
    $('.chartAreaBar').css("width", barSpacing + "%");
  }
  else {
    $('.chartAreaBarColumn').css("width", barSpacing + "%");
  }
  $('.xAxisDataPointContainer').css("width", barSpacing + "%");

  rangeSlider(
    {"modifier":"barSpacing", "singleStack": singleStack},
    $('#barSpacingSlider'),
    undefined
  );
}
