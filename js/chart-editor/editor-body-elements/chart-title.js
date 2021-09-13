export default function createChartTitleBody(options, element) {
  element.append('<input type="text" size="15px" class="' + options.uniuqeChartId + '_chartTitleModifier" value="' + $("." + options.uniuqeChartId + "_chartHead").html() +'" />');
  $("." + options.uniuqeChartId + "_chartTitleModifier").css({
    "font-size": "12px",
    "color": "#777",
    "border": "solid .5px #0077B6"
  });

  $("." + options.uniuqeChartId + "_chartTitleModifier").on('keyup', function() {
    $("." + options.uniuqeChartId + "_chartHead").html($(this).val());
  });

}
