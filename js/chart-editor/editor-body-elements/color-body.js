import colorPalette from '../../color-palette.js';

export default function createColorBody(options, element) {
  let inputTypeClass;

  if(options.singleStack !== undefined){
    if(options.singleStack === false) {
      element.append('<ul class="' + options.uniuqeChartId + '_barStackColorEditor"></ul>');
      $("." + options.uniuqeChartId + "_barStackColorEditor").css({
        "display": "flex",
        "flex-wrap": "wrap",
        "justify-content": "space-evenly",
        "font-size": "11px",
        "margin-bottom": "5px"
      });

      for(let i = 0; i < options.rawDataStackKeys.length; i++) {
        $("." + options.uniuqeChartId + "_barStackColorEditor").append(
          '<li class="' + options.uniuqeChartId + '_barStackColorEditorItem" id="' + options.uniuqeChartId + '_barStackColorEditorItem-' + (i + 1) +'"></li>'
        );

        $("#" + options.uniuqeChartId + "_barStackColorEditorItem-" + (i + 1)).append(
          '<a class="' + options.uniuqeChartId + '_barStackColorEditorItemLink" id="' + options.uniuqeChartId + '_barStackColorEditorItemLink-' + (i + 1) +'">' + options.rawDataStackKeys[i] + '</a>'
        );

      }
      $("#" + options.uniuqeChartId + "_barStackColorEditorItem-1").addClass("active");
      $("." + options.uniuqeChartId + "_barStackColorEditor").on('click','li',function(){
        $("." + options.uniuqeChartId + "_barStackColorEditor").find('li.active').removeClass("active");
        $(this).addClass("active");
        $("." + options.uniuqeChartId + "_barStackColorEditorItem").css({
          "background-color": "transparent",
          "border": "none"
        });
        $("." + options.uniuqeChartId + "_barStackColorEditor li.active").css({
          "border": "solid .5px #ADE8F4",
          "border-radius": "5px",
          "background-color": "#EDFAFD"
        });
      });

      $("." + options.uniuqeChartId + "_barStackColorEditorItem").css({
        "list-style-type": "none",
        "padding": "3px"
      });

      $("." + options.uniuqeChartId + "_barStackColorEditor li.active").css({
        "border": "solid .5px #ADE8F4",
        "border-radius": "5px",
        "background-color": "#EDFAFD"
      });

      $("." + options.uniuqeChartId + "_barStackColorEditorItemLink").css({
        "cursor": "pointer"
      });
    }
  }

  element.append('<div class="' + options.uniuqeChartId + '_colorPalette"></div>');
  element.children("." + options.uniuqeChartId + "_colorPalette").css({
    "display": "flex",
    "flex-wrap": "wrap",
    "justify-content": "center"
  });

  let inputTypeGeneralClass = options.uniuqeChartId + "_" + options.inputType + "ColorPalette";

  for(let currentColor of colorPalette) {
    inputTypeClass = options.uniuqeChartId + "_" + options.inputType + currentColor.name;
    element.children("." + options.uniuqeChartId + "_colorPalette").append('<div class="' + options.uniuqeChartId + '_' + inputTypeClass + ' ' + options.uniuqeChartId + '_' + inputTypeGeneralClass + '"></div>');
    $("." + options.uniuqeChartId + "_" + inputTypeClass).css({
      "height": "30px",
      "width": "30px",
      "background-color": currentColor.dark,
      "color": currentColor.fontColor,
      "border": "solid 1px lightgray",
      "cursor": "pointer"
    });
  }

  if(options.inputType === "titleColor") {
    $("." + options.uniuqeChartId + "_" + inputTypeGeneralClass).on("click", function () {
      $("." + options.uniuqeChartId + "_chartHead").css("color", $(this).css("background-color"));
    });
  }
  else if(options.inputType === "barColor") {
    let currentBarStack;
    $("." + options.uniuqeChartId + "_" + inputTypeGeneralClass).on("click", function () {
      if(options.singleStack) {
        $("." + options.uniuqeChartId + "_chartAreaBar").css({
          "background-color": $(this).css("background-color"),
          "color": $(this).css("color")
        });
      }
      else {
        currentBarStack = options.rawDataStackKeys.indexOf(
          $("." + options.uniuqeChartId + "_barStackColorEditor").find('li.active').children("a").html()
        )
        $("." + options.uniuqeChartId + "_chartAreaBar-" + (currentBarStack + 1)).css({
          "background-color": $(this).css("background-color"),
          "color": $(this).css("color")
        });
        $("#" + options.uniuqeChartId + "_stackAliasItemColor-" + (currentBarStack + 1)).css({
          "background-color": $(this).css("background-color")
        });
      }
    });
  }
  else if(options.inputType === "axisLabelColor") {
    $("." + options.uniuqeChartId + "_"+ inputTypeGeneralClass).on("click", function () {
      $("." + options.uniuqeChartId + "_yAxisTitleSpan").css("color", $(this).css("background-color"));
      $("." + options.uniuqeChartId + "_xAxisTitleSpan").css("color", $(this).css("background-color"));
    });
  }
  else if(options.inputType === "dataPointColor") {
    $("." + options.uniuqeChartId + "_" + inputTypeGeneralClass).on("click", function () {
      $("." + options.uniuqeChartId + "_yAxisDataPointMark").css("background-color", $(this).css("background-color"));
      $("." + options.uniuqeChartId + "_yAxisDataPointContainer").css("color", $(this).css("background-color"));
      $("." + options.uniuqeChartId + "_xAxisDataPointMark").css("background-color", $(this).css("background-color"));
      $("." + options.uniuqeChartId + "_xAxisDataPointContainer").css("color", $(this).css("background-color"));
    });
  }
  else if(options.inputType === "barLabelColor") {
    $("." + options.uniuqeChartId + "_" + inputTypeGeneralClass).on("click", function () {
      $("." + options.uniuqeChartId + "_chartAreaBar").css("color", $(this).css("background-color"));
    });
  }

  /* element.children().css("border", "solid 1px lightgray");

  element.children().on("mouseover", function () {
    $(this).css("cursor", "pointer");
  }); */
}
