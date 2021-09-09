export default function createBarSpacingBody(widthOfEachBarInPerc, element) {
  element.css({
    "display": "flex",
    "padding": "10px 0px"
  });

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
  $('.chartAreaBar').css("width", barSpacing + "%");
  $('.xAxisDataPointContainer').css("width", barSpacing + "%");

  rangeSlider(
    "barSpacing",
    $('#barSpacingSlider'),
    undefined
  );
}
