export default function createChartTitleBody(element) {
  element.css({
    "display": "flex",
    "padding": "10px 0px"
  });

  element.append('<input type="text" id="chartTitleModifier" value="' + $('.chartHead').html() +'" />');

  $('#chartTitleModifier').on('keyup', function() {
    $('.chartHead').html($(this).val());
  });

}
