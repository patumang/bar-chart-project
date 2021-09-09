import createEditorBodyIndividualElement from './individual-element.js';
import createEditorBodyElementTitle from './element-title.js';
import createEditorBodyElementBody from './element-body.js';
import createBarValuePositionBody from './bar-value-position.js';
import createChartTitleBody from './chart-title.js';
import createTitleFontSizeBody from './title-font-size.js';
import createColorBody from './color-palette.js';
import createBarSpacingBody from './bar-spacing.js';

export default function createEditorBodyElements(barChartComponentsWidth, element) {
  var editorBodyElements = [
    {
      "className": "barValuePositionContainer",
      "titleClassName": "barValuePositionTitle",
      "title": "Bar Values Position",
      "bodyClassName": "barValuePositionBody"
    },
    {
      "className": "chartTitleContainer",
      "titleClassName": "chartTitleTitle",
      "title": "Chart Title",
      "bodyClassName": "chartTitleBody"
    },
    {
      "className": "titleFontSizeContainer",
      "titleClassName": "titleFontSizeTitle",
      "title": "Title Font Size",
      "bodyClassName": "titleFontSizeBody"
    },
    {
      "className": "titleColorContainer",
      "titleClassName": "titleColorTitle",
      "title": "Title Color",
      "bodyClassName": "titleColorBody"
    },
    {
      "className": "barColorContainer",
      "titleClassName": "barColorTitle",
      "title": "Bar Color",
      "bodyClassName": "barColorBody"
    },
    {
      "className": "axisLabelColorContainer",
      "titleClassName": "axisLabelColorTitle",
      "title": "Axis Label Color",
      "bodyClassName": "axisLabelColorBody"
    },
    {
      "className": "dataPointColorContainer",
      "titleClassName": "dataPointColorTitle",
      "title": "Data Points Color",
      "bodyClassName": "dataPointColorBody"
    },
    {
      "className": "barLabelColorContainer",
      "titleClassName": "barLabelColorTitle",
      "title": "Bar Label Color",
      "bodyClassName": "barLabelColorBody"
    },
    {
      "className": "barSpacingContainer",
      "titleClassName": "barSpacingTitle",
      "title": "Bar Spacing",
      "bodyClassName": "barSpacingBody"
    }
  ];

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
