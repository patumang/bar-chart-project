export default function createEditorBodyIndividualElement(elementDedails, parentElement) {
  parentElement.append('<div class="editorBodyElement ' + elementDedails.class + '"></div>');
}
