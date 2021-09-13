export default function createEditorBodyElementTitle(options, parentElement) {
  parentElement.append(
    '<span class="' + options.uniuqeChartId + '_editorBodyElementTitle ' + options.class + '">' + options.title + '</span>'
  );

  $("." + options.uniuqeChartId + "_editorBodyElementTitle").css({
    "display": "block",
    "color": "gray",
    "font-size": "12px",
    "text-align": "center",
    "margin-top": "5px",
    "padding":"5px",
    "border-bottom": "solid 1px lightgray",
    "cursor": "pointer"
  });

  $("." + options.uniuqeChartId + "_editorBodyElementTitle").on("mouseover", function() {
    $(this).css({
      "color": "rgb(153, 38, 0)",
      "border-color": "rgb(153, 38, 0)",
      "font-weight": "bold"
    });
  });
  $("." + options.uniuqeChartId + "_editorBodyElementTitle").on("mouseout", function() {
    $(this).css({
      "color": "gray",
      "border-color": "lightgray",
      "font-weight": "normal"
    });
  });
}
