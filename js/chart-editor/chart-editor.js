export default function createChartEditor(element) {
  var editorOpen = false;
  element.append('<div class="editorToggle"><</div>');
  $(".editorToggle").css({
    "padding": "5px",
    "font-size": "25px"
  });
  $(".editorToggle").on("click", function () {
    if(editorOpen) {
      $(this).html("<");
      $(".editorBody").css("display", "none");
    } else {
      $(this).html(">");
      $(".editorBody").css("display", "block");
    }

    editorOpen = !editorOpen;
  });
  $(".editorToggle").on("mouseover", function () {
    $(this).css("cursor", "pointer");
  });

  element.append('<div class="editorBody"></div>');
  $(".editorBody").css({
    "flex": "1",
    "display": "none"
  });
}
