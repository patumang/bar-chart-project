export default function createBarValuePositionBody(element) {
  element.css({
    "display": "flex",
    "flex-direction": "column",
    "align-content": "center"
  });
  element.append('<div class="barValuePositionTop">Top</div>');
  $(".barValuePositionTop").on("click", function () {
    $(".chartAreaBar").css("align-items", "flex-start");
  });

  element.append('<div class="barValuePositionCenter">Center</div>');
  $(".barValuePositionCenter").on("click", function () {
    $(".chartAreaBar").css("align-items", "center");
  });

  element.append('<div class="barValuePositionBottom">Bottom</div>');
  $(".barValuePositionBottom").on("click", function () {
    $(".chartAreaBar").css("align-items", "flex-end");
  });

  element.children().css("border", "solid 1px lightgray");

  element.children().on("mouseover", function () {
    $(this).css("cursor", "pointer");
  });
}
