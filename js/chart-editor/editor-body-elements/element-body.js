export default function createEditorBodyElementBody(options, parentElement) {
  parentElement.append(
    '<div class="' + options.uniuqeChartId + '_editorBodyElementBody ' + options.class + '"></div>'
  );

  $("." + options.uniuqeChartId + "_editorBodyElementBody").css({
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "stretch",
    "padding-top": "10px",
    "font-size": "11px",
    "text-align": "center"
  });
}
