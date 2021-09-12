import editorBodyElements from './elements-object-array.js';
import createEditorBodyIndividualElement from './individual-element.js';
import createEditorBodyElementTitle from './element-title.js';
import createEditorBodyElementBody from './element-body.js';
import createBarValuePositionBody from './bar-value-position.js';
import createChartTitleBody from './chart-title.js';
import createTitleFontSizeBody from './title-font-size.js';
import createColorBody from './color-body.js';
import createBarSpacingBody from './bar-spacing.js';

export default function createEditorBodyElements(options, element) {

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
  createColorBody({"inputType": "titleColor"}, $(".titleColorBody"));
  createColorBody(
    {
      "inputType": "barColor",
      "singleStack": options.singleStack,
      "rawDataStackKeys": options.rawDataStackKeys
    },
    $(".barColorBody")
  );
  createColorBody({"inputType": "axisLabelColor"}, $(".axisLabelColorBody"));
  createColorBody({"inputType": "dataPointColor"}, $(".dataPointColorBody"));
  createColorBody({"inputType": "barLabelColor"}, $(".barLabelColorBody"));
  createBarSpacingBody(options.singleStack, options.widthOfEachBarInPerc, $(".barSpacingBody"));

  $(".editorBodyElementBody").hide();

  $(".editorBodyElementTitle").on("click", function () {
    $(".editorBodyElementBody").hide();
    $(this).next('.editorBodyElementBody').show();
  });
}
