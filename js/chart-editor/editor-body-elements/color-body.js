import colorPalette from '../../color-palette.js';

export default function createColorBody(options, element) {
  let inputTypeClass;

  if(options.singleStack !== undefined){
    if(options.singleStack === false) {
      element.append('<ul class="barStackColorEditor"></ul>');
      $('.barStackColorEditor').css({
        "display": "flex",
        "flex-wrap": "wrap",
        "justify-content": "space-evenly",
        "font-size": "11px",
        "margin-bottom": "5px"
      });

      for(let i = 0; i < options.rawDataStackKeys.length; i++) {
        $('.barStackColorEditor').append(
          '<li class="barStackColorEditorItem" id="barStackColorEditorItem-' + (i + 1) +'"></li>'
        );

        $('#barStackColorEditorItem-' + (i + 1)).append(
          '<a class="barStackColorEditorItemLink" id="barStackColorEditorItemLink-' + (i + 1) +'">' + options.rawDataStackKeys[i] + '</a>'
        );

      }
      $('#barStackColorEditorItem-1').addClass("active");
      $(".barStackColorEditor").on('click','li',function(){
        $(".barStackColorEditor").find('li.active').removeClass("active");
        $(this).addClass("active");
        $('.barStackColorEditorItem').css({
          "background-color": "transparent",
          "color": "#777",
          "border": "none"
        });
        $('.barStackColorEditor li.active').css({
          "border": "solid .5px #ADE8F4",
          "border-radius": "5px",
          "background-color": "#EDFAFD"
        });
      });

      $('.barStackColorEditorItem').css({
        "list-style-type": "none",
        "padding": "3px"
      });

      $('.barStackColorEditor li.active').css({
        "border": "solid .5px #ADE8F4",
        "border-radius": "5px",
        "background-color": "#EDFAFD"
      });

      $('.barStackColorEditorItemLink').css({
        "cursor": "pointer"
      });
    }
  }

  element.append('<div class="colorPalette"></div>');
  element.children('.colorPalette').css({
    "display": "flex",
    "flex-wrap": "wrap",
    "justify-content": "center"
  });

  let inputTypeGeneralClass = options.inputType + "ColorPalette";

  for(let currentColor of colorPalette) {
    inputTypeClass = options.inputType + currentColor.name;
    element.children('.colorPalette').append('<div class="' + inputTypeClass + ' ' + inputTypeGeneralClass + '"></div>');
    $("." + inputTypeClass).css({
      "height": "30px",
      "width": "30px",
      "background-color": currentColor.dark,
      "color": currentColor.fontColor,
      "border": "solid 1px lightgray",
      "cursor": "pointer"
    });
  }

  if(options.inputType === "titleColor") {
    $("." + inputTypeGeneralClass).on("click", function () {
      $(".chartHead").css("color", $(this).css("background-color"));
    });
  }
  else if(options.inputType === "barColor") {
    let currentBarStack;
    $("." + inputTypeGeneralClass).on("click", function () {
      currentBarStack = options.rawDataStackKeys.indexOf(
        $(".barStackColorEditor").find('li.active').children("a").html()
      )
      if(options.singleStack !== undefined){
        if(options.singleStack === false) {
          $(".chartAreaBar-" + (currentBarStack + 1)).css({
            "background-color": $(this).css("background-color"),
            "color": $(this).css("color")
          });
          $("#stackAliasItemColor-" + (currentBarStack + 1)).css({
            "background-color": $(this).css("background-color")
          });
        }
      }
      else{
        $(".chartAreaBar").css({
          "background-color": $(this).css("background-color"),
          "color": $(this).css("color")
        });
      }
    });
  }
  else if(options.inputType === "axisLabelColor") {
    $("." + inputTypeGeneralClass).on("click", function () {
      $(".yAxisTitleSpan").css("color", $(this).css("background-color"));
      $(".xAxisTitleSpan").css("color", $(this).css("background-color"));
    });
  }
  else if(options.inputType === "dataPointColor") {
    $("." + inputTypeGeneralClass).on("click", function () {
      $(".yAxisDataPointMark").css("background-color", $(this).css("background-color"));
      $(".yAxisDataPointContainer").css("color", $(this).css("background-color"));
      $(".xAxisDataPointMark").css("background-color", $(this).css("background-color"));
      $(".xAxisDataPointContainer").css("color", $(this).css("background-color"));
    });
  }
  else if(options.inputType === "barLabelColor") {
    $("." + inputTypeGeneralClass).on("click", function () {
      $(".chartAreaBar").css("color", $(this).css("background-color"));
    });
  }

  /* element.children().css("border", "solid 1px lightgray");

  element.children().on("mouseover", function () {
    $(this).css("cursor", "pointer");
  }); */
}
