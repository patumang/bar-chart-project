import editorBodyElements from './elements-object-array.js';
import createEditorBodyIndividualElement from './individual-element.js';
import createEditorBodyElementTitle from './element-title.js';
import createEditorBodyElementBody from './element-body.js';
import createBarValuePositionBody from './bar-value-position.js';
import createChartTitleBody from './chart-title.js';
import createTitleFontSizeBody from './title-font-size.js';
import createColorBody from './color-palette.js';
import createBarSpacingBody from './bar-spacing.js';

export default function createEditorBodyElements(barChartComponentsWidth, element) {

  console.log(editorBodyElements);
  for(var editorBodyElement of editorBodyElements) {
    createEditorBodyIndividualElement(
      {"class": editorBodyElement.className},
      element
    );

    createEditorBodyElementTitle(
      {
        "class": editorBodyElement.titleClassName,
        "title": editorBodyElement.title
      },
      $("." + editorBodyElement.className)
    );

    createEditorBodyElementBody(
      {
        "class": editorBodyElement.bodyClassName
      },
      $("." + editorBodyElement.className)
    );
  }
  createBarValuePositionBody($(".barValuePositionBody"));
  createChartTitleBody($(".chartTitleBody"));
  createTitleFontSizeBody($(".titleFontSizeBody"));
  createColorBody("titleColor", $(".titleColorBody"));
  createColorBody("barColor", $(".barColorBody"));
  createColorBody("axisLabelColor", $(".axisLabelColorBody"));
  createColorBody("dataPointColor", $(".dataPointColorBody"));
  createColorBody("barLabelColor", $(".barLabelColorBody"));
  createBarSpacingBody(barChartComponentsWidth.widthOfEachBarInPerc, $(".barSpacingBody"));

  $(".editorBodyElementBody").hide();

  $(".editorBodyElementTitle").on("click", function () {
    $(".editorBodyElementBody").hide();
    $(this).next('.editorBodyElementBody').show();
  });
}
