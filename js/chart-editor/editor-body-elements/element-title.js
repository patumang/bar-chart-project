export default function createEditorBodyElementTitle(elementDedails, parentElement) {
  parentElement.append(
    '<span class="editorBodyElementTitle ' + elementDedails.class + '">' + elementDedails.title + '</span>'
  );

  $(".editorBodyElementTitle").css({
    "display": "block",
    "cursor": "pointer"
  });
}
