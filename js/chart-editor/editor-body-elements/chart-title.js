export default function createChartTitleBody(element) {
  element.append('<input type="text" size="15px" id="chartTitleModifier" value="' + $('.chartHead').html() +'" />');

  $('#chartTitleModifier').on('keyup', function() {
    $('.chartHead').html($(this).val());
  });

}
