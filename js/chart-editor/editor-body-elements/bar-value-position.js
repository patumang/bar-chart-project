export default function createBarValuePositionBody(element) {
  element.css({
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
    "font-size": "11px",
  });
  element.append('<div class="barValuePosition barValuePositionTop">Top</div>');
  $(".barValuePositionTop").on("click", function () {
    $(".chartAreaBar").css("align-items", "flex-start");
  });

  element.append('<div class="barValuePosition barValuePositionCenter">Center</div>');
  $(".barValuePositionCenter").on("click", function () {
    $(".chartAreaBar").css("align-items", "center");
  });

  element.append('<div class="barValuePosition barValuePositionBottom">Bottom</div>');
  $(".barValuePositionBottom").on("click", function () {
    $(".chartAreaBar").css("align-items", "flex-end");
  });

  $(".barValuePosition").css({
    "font-size": "11px",
    "padding":"2px",
    /* "border-bottom": "solid 1px rgb(0, 60, 179)", */
    "cursor": "pointer"
  });

  $(".barValuePosition").on("mouseover", function() {
    $(this).css({
      "font-weight": "bold",
      "border": "solid .5px #ADE8F4",
      "border-radius": "5px",
      "background-color": "#EDFAFD"
    });
  });
  $(".barValuePosition").on("mouseout", function() {
    $(this).css({
      "font-weight": "normal",
      "background-color": "transparent",
      "border": "none"
    });
  });
}
