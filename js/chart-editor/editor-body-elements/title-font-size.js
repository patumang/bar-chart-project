export default function createTitleFontSizeBody(element) {
  element.css({
    "display": "flex",
    "padding": "10px 0px"
  });

  element.append('<div class="sliderContainer" id="titleFontSizeSliderContainer"></div>');

  $("#titleFontSizeSliderContainer").append(
    '<input type="range" min="10" max="50" value="24" step="1" class="slider" id="titleFontSizeSlider">'
  );
  $("#titleFontSizeSliderContainer").append(
    '<span class="sliderValue" id="titleFontSizeSliderValue">0</span>'
  );

  var titleFontSize= $('#titleFontSizeSlider').val();
  $('#titleFontSizeSliderValue').html(titleFontSize);
  $(".chartHead").css("font-size", titleFontSize + "px");

  rangeSlider(
    "titleFontSize",
    $('#titleFontSizeSlider'),
    $('#titleFontSizeSliderValue')
  );
}
