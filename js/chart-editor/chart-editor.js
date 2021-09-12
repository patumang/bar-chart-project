export default function createChartEditor(element) {
  var editorOpen = false;
  element.append('<div class="editorToggle"></div>');
  $(".editorToggle").css({
    "padding": "5px",
    "font-size": "25px"
  });

  $(".editorToggle").append(
    '<img id="menu-icon" src="../../img/menu-icon.png" />'
  );
  $("#menu-icon").css({
    "display": "block",
    "height": "25px",
    "width": "25px"
  });
  $(".editorToggle").append(
    '<img id="close-icon" src="../../img/close-icon.png" />'
  );
  $("#close-icon").css({
    "display": "none",
    "height": "25px",
    "width": "25px"
  });

  $(".editorToggle").on("click", function () {
    if(editorOpen) {
      $(this).children("#close-icon").css("display", "none");
      $(this).children("#menu-icon").css("display", "block");
      $(".editorBody").css("display", "none");
    } else {
      $(this).children("#menu-icon").css("display", "none");
      $(this).children("#close-icon").css("display", "block");
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
