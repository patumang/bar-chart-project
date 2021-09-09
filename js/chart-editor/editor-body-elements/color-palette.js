export default function createColorBody(inputType, element) {
  var inputTypeClass;
  var colorPalette = [
    {"name": "ColorWhite", "value": "rgb(255, 255, 255)"},
    {"name": "ColorGreen", "value": "rgb(30, 132, 73)"},
    {"name": "ColorRed", "value": "rgb(176, 58, 46)"},
    {"name": "ColorBlue", "value": "rgb(40, 116, 166)"},
    {"name": "ColorGray", "value": "rgb(97, 106, 107)"},
    {"name": "ColorBlack", "value": "rgb(0, 0, 0)"}
  ];

  element.css({
    "display": "flex",
    "flex-direction": "column",
    "align-content": "center",
    "height": "150px"
  });

  var inputTypeGeneralClass = inputType + "ColorPalette";

  for(var currentColor of colorPalette) {
    inputTypeClass = inputType + currentColor.name;
    element.append('<div class="' + inputTypeClass + ' ' + inputTypeGeneralClass + '"></div>');
    $("." + inputTypeClass).css({
      "flex": "1",
      "background-color": currentColor.value
    });
  }

  if(inputType === "titleColor") {
    $("." + inputTypeGeneralClass).on("click", function () {
      $(".chartHead").css("color", $(this).css("background-color"));
    });
  }
  else if(inputType === "barColor") {
    $("." + inputTypeGeneralClass).on("click", function () {
      $(".chartAreaBar").css("background-color", $(this).css("background-color"));
    });
  }
  else if(inputType === "axisLabelColor") {
    $("." + inputTypeGeneralClass).on("click", function () {
      $(".yAxisTitleSpan").css("color", $(this).css("background-color"));
      $(".xAxisTitleSpan").css("color", $(this).css("background-color"));
    });
  }
  else if(inputType === "dataPointColor") {
    $("." + inputTypeGeneralClass).on("click", function () {
      $(".yAxisDataPointMark").css("background-color", $(this).css("background-color"));
      $(".yAxisDataPointContainer").css("color", $(this).css("background-color"));
      $(".xAxisDataPointMark").css("background-color", $(this).css("background-color"));
      $(".xAxisDataPointContainer").css("color", $(this).css("background-color"));
    });
  }
  else if(inputType === "barLabelColor") {
    $("." + inputTypeGeneralClass).on("click", function () {
      $(".chartAreaBar").css("color", $(this).css("background-color"));
    });
  }

  element.children().css("border", "solid 1px lightgray");

  element.children().on("mouseover", function () {
    $(this).css("cursor", "pointer");
  });
}
