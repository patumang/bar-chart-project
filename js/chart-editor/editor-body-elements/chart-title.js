export default function createChartTitleBody(element) {
  element.append('<input type="text" size="15px" id="chartTitleModifier" value="' + $('.chartHead').html() +'" />');
  $('#chartTitleModifier').css({
    "font-size": "12px",
    "color": "#777",
    "border": "solid .5px #0077B6"
  });

  $('#chartTitleModifier').on('keyup', function() {
    $('.chartHead').html($(this).val());
  });

}
