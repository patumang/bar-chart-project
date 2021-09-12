export default function createEditorBodyElementTitle(elementDedails, parentElement) {
  parentElement.append(
    '<span class="editorBodyElementTitle ' + elementDedails.class + '">' + elementDedails.title + '</span>'
  );

  $(".editorBodyElementTitle").css({
    "display": "block",
    "color": "gray",
    "font-size": "12px",
    "text-align": "center",
    "margin-top": "5px",
    "padding":"5px",
    "border-bottom": "solid 1px lightgray",
    "cursor": "pointer"
  });

  $(".editorBodyElementTitle").on("mouseover", function() {
    $(this).css({
      "color": "rgb(153, 38, 0)",
      "border-color": "rgb(153, 38, 0)",
      "font-weight": "bold"
    });
  });
  $(".editorBodyElementTitle").on("mouseout", function() {
    $(this).css({
      "color": "gray",
      "border-color": "lightgray"
    });
  });
}
