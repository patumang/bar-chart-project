export default function createEditorBodyIndividualElement(options, parentElement) {
  parentElement.append('<div class="' + options.uniuqeChartId + '_editorBodyElement ' + options.class + '"></div>');
}
