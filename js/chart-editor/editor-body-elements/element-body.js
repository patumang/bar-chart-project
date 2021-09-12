export default function createEditorBodyElementBody(elementDedails, parentElement) {
  parentElement.append(
    '<div class="editorBodyElementBody ' + elementDedails.class + '"></div>'
  );

  $(".editorBodyElementBody").css({
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "stretch",
    "padding-top": "10px"
  });
}
