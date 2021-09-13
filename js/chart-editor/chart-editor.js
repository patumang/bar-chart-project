export default function createChartEditor(options, element) {
  var editorOpen = false;
  element.append('<div class="' + options.uniuqeChartId + '_editorToggle"></div>');
  $("." + options.uniuqeChartId + "_editorToggle").css({
    "padding": "5px",
    "font-size": "25px"
  });

  $("." + options.uniuqeChartId + "_editorToggle").append(
    '<img class="' + options.uniuqeChartId + '_menu-icon" src="/img/menu-icon.png" />'
  );
  $("." + options.uniuqeChartId + "_menu-icon").css({
    "display": "block",
    "height": "25px",
    "width": "25px"
  });
  $("." + options.uniuqeChartId + "_editorToggle").append(
    '<img class="' + options.uniuqeChartId + '_close-icon" src="/img/close-icon.png" />'
  );
  $("." + options.uniuqeChartId + "_close-icon").css({
    "display": "none",
    "height": "25px",
    "width": "25px"
  });

  $("." + options.uniuqeChartId + "_editorToggle").on("click", function () {
    if(editorOpen) {
      $(this).children("." + options.uniuqeChartId + "_close-icon").css("display", "none");
      $(this).children("." + options.uniuqeChartId + "_menu-icon").css("display", "block");
      $("." + options.uniuqeChartId + "_editorBody").css("display", "none");
    } else {
      $(this).children("." + options.uniuqeChartId + "_menu-icon").css("display", "none");
      $(this).children("." + options.uniuqeChartId + "_close-icon").css("display", "block");
      $("." + options.uniuqeChartId + "_editorBody").css("display", "block");
    }

    editorOpen = !editorOpen;
  });

  $("." + options.uniuqeChartId + "_editorToggle").on("mouseover", function () {
    $(this).css("cursor", "pointer");
  });

  element.append('<div class="' + options.uniuqeChartId + '_editorBody"></div>');
  $("." + options.uniuqeChartId + "_editorBody").css({
    "flex": "1",
    "display": "none"
  });
}
