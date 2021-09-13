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
      {
        "uniuqeChartId": options.uniuqeChartId,
        "class": options.uniuqeChartId + '_' + editorBodyElement.className
      },
      element
    );

    createEditorBodyElementTitle(
      {
        "uniuqeChartId": options.uniuqeChartId,
        "class": options.uniuqeChartId + '_' + editorBodyElement.titleClassName,
        "title": editorBodyElement.title
      },
      $("." + options.uniuqeChartId + "_" + editorBodyElement.className)
    );

    createEditorBodyElementBody(
      {
        "uniuqeChartId": options.uniuqeChartId,
        "class": options.uniuqeChartId + '_' + editorBodyElement.bodyClassName
      },
      $("." + options.uniuqeChartId + "_" + editorBodyElement.className)
    );
  }

  createBarValuePositionBody(
    {
      "uniuqeChartId": options.uniuqeChartId
    },
    $("." + options.uniuqeChartId + "_barValuePositionBody")
  );
  createChartTitleBody(
    {
      "uniuqeChartId": options.uniuqeChartId
    },
    $("." + options.uniuqeChartId + "_chartTitleBody")
  );
  createTitleFontSizeBody(
    {
      "uniuqeChartId": options.uniuqeChartId
    },
    $("." + options.uniuqeChartId + "_titleFontSizeBody")
  );
  createColorBody(
    {
      "uniuqeChartId": options.uniuqeChartId,
      "inputType": "titleColor"
    },
    $("." + options.uniuqeChartId + "_titleColorBody")
  );
  createColorBody(
    {
      "uniuqeChartId": options.uniuqeChartId,
      "inputType": "barColor",
      "singleStack": options.singleStack,
      "rawDataStackKeys": options.rawDataStackKeys
    },
    $("." + options.uniuqeChartId + "_barColorBody")
  );
  createColorBody(
    {
      "uniuqeChartId": options.uniuqeChartId,
      "inputType": "axisLabelColor"
    },
    $("." + options.uniuqeChartId + "_axisLabelColorBody")
  );
  createColorBody(
    {
      "uniuqeChartId": options.uniuqeChartId,
      "inputType": "dataPointColor"
    },
    $("." + options.uniuqeChartId + "_dataPointColorBody")
  );
  createColorBody(
    {
      "uniuqeChartId": options.uniuqeChartId,
      "inputType": "barLabelColor"
    },
    $("." + options.uniuqeChartId + "_barLabelColorBody")
  );
  createBarSpacingBody(
    {
      "uniuqeChartId": options.uniuqeChartId,
      "singleStack": options.singleStack,
      "widthOfEachBarInPerc": options.widthOfEachBarInPerc
    },
    $("." + options.uniuqeChartId + "_barSpacingBody")
  );

  $("." + options.uniuqeChartId + "_editorBodyElementBody").hide();

  $("." + options.uniuqeChartId + "_editorBodyElementTitle").on("click", function () {
    $("." + options.uniuqeChartId + "_editorBodyElementBody").hide();
    $(this).next("." + options.uniuqeChartId + "_editorBodyElementBody").show();
  });
}
