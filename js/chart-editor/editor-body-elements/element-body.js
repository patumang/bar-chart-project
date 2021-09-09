export default function createEditorBodyElementBody(elementDedails, parentElement) {
  parentElement.append(
    '<div class="editorBodyElementBody ' + elementDedails.class + '"></div>'
  );

  $(".editorBodyElementBody").css({
    "display": "block"
  });
}
