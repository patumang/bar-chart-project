/* eslint-disable no-inline-comments */
function calculateHeightOfBarChartComponents(data, noOfRows, element) {
  var totalHeightChartAreaContainer = element.height();
  var heightOfEachRangePoint = Math.floor(totalHeightChartAreaContainer / (data.yAxisRange.max - data.yAxisRange.min));
  var chartAreaRowMark = Math.floor((data.yAxisRange.max - data.yAxisRange.min) / noOfRows);
  var chartAreaRowMarkHeight = heightOfEachRangePoint * chartAreaRowMark;

  return {
    "totalHeightChartAreaContainer": totalHeightChartAreaContainer,
    "chartAreaRowMark": chartAreaRowMark,
    "chartAreaRowMarkHeight": chartAreaRowMarkHeight,
    "heightOfEachRangePoint": heightOfEachRangePoint
  };
}

function calculateWidthOfBarChartComponents(noOfColumns, element) {
  var totalWidthChartAreaContainer = element.width();
  var initialWidthOfEachBar = Math.floor(totalWidthChartAreaContainer / noOfColumns);
  var widthOfEachBarInPerc =  Math.floor((100 * initialWidthOfEachBar) / totalWidthChartAreaContainer);

  return {
    "totalWidthChartAreaContainer": totalWidthChartAreaContainer,
    "initialWidthOfEachBar": initialWidthOfEachBar,
    "widthOfEachBarInPerc": widthOfEachBarInPerc
  };
}

var rangeSlider = function(modifier, range, value){
  range.on('input', function(){
    if(value) {
      $(this).next(value).html(this.value);
    }
    if(modifier === "titleFontSize"){
      $(".chartHead").css("font-size", this.value + "px");
    }
    else if(modifier === "barSpacing"){
      $('.chartAreaBar').css("width", this.value + "%");
      $('.xAxisDataPointContainer').css("width", this.value + "%");
    }
  });
};

function createChartElement(element) {
  element.css({
    "display": "flex",
    "background-color": "transparent"
  });

  element.append('<div class="chartDisplay"></div>');
  $(".chartDisplay").css({
    "flex": "1",
    "display": "flex",
    "flex-direction": "column"
  });

  element.append('<div class="chartEditor"></div>');
  $(".chartEditor").css({
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "border": "solid 1px lightgray",
    "padding": "10px 5px"
  });
}

function createChartDisplay(chartTitle, chartDescription, element) {
  if(chartTitle) {
    element.append('<div class="chartHead">' + chartTitle + '</div>');
    $(".chartHead").css({
      "text-align": "center",
      "font-weight": "bold"
    });
  }

  element.append('<div class="chartBody"></div>');
  $(".chartBody").css({
    "flex": "1",
    "padding": "5px",
    "display": "grid",
    "grid-template-columns": "[yAxisTitle-start] auto [yAxisTitle-end yAxis-start] auto [yAxis-end yAxisRuler-start] auto [yAxisRuler-end chartAreaColumn-start] 1fr [chartAreaColumn-end]",
    "grid-template-rows": "[chartAreaRow-start] 1fr [chartAreaRow-end xAxisRuler-start] auto [xAxisRuler-end xAxis-start] auto [xAxis-end xAxisTitle-start] auto [xAxisTitle-end]"
  });

  if(chartDescription) {
    element.append('<div class="chartFooter">' + chartDescription + '</div>');
    $(".chartFooter").css({
      "text-align": "center"
    });
  }
}

function createChartBody(element) {
  element.append('<div class="yAxisTitleContainer"></div>');
  $(".yAxisTitleContainer").css({
    "grid-column": "yAxisTitle-start / yAxisTitle-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  });

  element.append('<div class="yAxisContainer"></div>');
  $(".yAxisContainer").css({
    "grid-column": "yAxis-start / yAxis-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "flex-direction": "column-reverse"
  });

  element.append('<div class="yAxisRulerContainer"><div>');
  $(".yAxisRulerContainer").css({
    "grid-column": "yAxisRuler-start / yAxisRuler-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "background-color": "black",
    "width": "5px"
  });

  element.append('<div class="chartAreaContainer"></div>');
  $(".chartAreaContainer").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "chartAreaRow-start / chartAreaRow-end",
    "display": "flex",
    "justify-content": "space-evenly",
    "align-items": "flex-end"
  });

  element.append('<div class="xAxisRuler"></div>');
  $(".xAxisRuler").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxisRuler-start / xAxisRuler-end",
    "background-color": "black",
    "height": "5px",
    "margin-left": "-5px"
  });

  element.append('<div class="xAxisContainer"></div>');
  $(".xAxisContainer").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxis-start / xAxis-end",
    "display": "flex",
    "justify-content": "space-evenly",
  });

  element.append('<div class="xAxisTitleContainer"></div>');
  $(".xAxisTitleContainer").css({
    "grid-column": "chartAreaColumn-start / chartAreaColumn-end",
    "grid-row": "xAxisTitle-start / xAxisTitle-end",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  });
}

function createYAxisTitleContainer(yAxisTitle, element) {
  element.append('<span class="yAxisTitleSpan">' + yAxisTitle + '<span>');
  $(".yAxisTitleSpan").css({
    "display": "block",
    "-ms-transform": "rotate(-90deg)",
    "-webkit-transform": "rotate(-90deg)",
    "transform": "rotate(-90deg)"
  });
}

function createXAxisTitleContainer(xAxisTitle, element) {
  element.append('<span class="xAxisTitleSpan">' + xAxisTitle + '<span>');
}

function createYAxisDataPointsContainer(noOfRows, barChartComponentsHeight, element) {
  var currentMark = barChartComponentsHeight.chartAreaRowMark;

  for(var i = 0; i < noOfRows; i++) {
    element.append(
      '<div class="yAxisDataPointContainer yAxisDataPointContainer-' + (i + 1) + '"></div>'
    );
    $(".yAxisDataPointContainer-" + (i + 1)).css({
      "height": barChartComponentsHeight.chartAreaRowMarkHeight + "px",
      "display": "flex",
      "justify-content": "flex-end",
      "align-items": "flex-start"
    });

    $(".yAxisDataPointContainer-" + (i + 1)).append(
      '<div class="yAxisDataPointText yAxisDataPointText-' + (i + 1) + '">' + currentMark + '</div>'
    );
    $(".yAxisDataPointText-" + (i + 1)).css({
      "transform": "translateY(-50%)",
      "margin-right": "5px"
    });

    $(".yAxisDataPointContainer-" + (i + 1)).append(
      '<div class="yAxisDataPointMark yAxisDataPointMark-' + (i + 1) + '"></div>'
    );
    $(".yAxisDataPointMark-" + (i + 1)).css({
      "height": "2px",
      "width": "10px",
      "background-color": "black"
    });

    currentMark += barChartComponentsHeight.chartAreaRowMark;
  }
}

function createXAxisDataPointsContainer(data, element) {

  var keys;

  for(var i = 0; i < data.noOfColumns; i++) {

    keys = Object.keys(data.chartRawData[i]);
    element.append(
      '<div class="xAxisDataPointContainer xAxisDataPointContainer-' + (i + 1) + '"></div>'
    );
    $(".xAxisDataPointContainer-" + (i + 1)).css({
      "width": data.widthOfEachBarInPerc + "%",
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center"
    });

    $(".xAxisDataPointContainer-" + (i + 1)).append(
      '<div class="xAxisDataPointMark xAxisDataPointMark-' + (i + 1) + '"></div>'
    );
    $(".xAxisDataPointMark-" + (i + 1)).css({
      "height": "10px",
      "width": "2px",
      "background-color": "black"
    });

    $(".xAxisDataPointContainer-" + (i + 1)).append(
      '<div class="xAxisDataPointText xAxisDataPointText-' + (i + 1) + '">' + data.chartRawData[i][keys[0]] + '</div>'
    );
    $(".yAxisDataPointText-" + (i + 1)).css({
      "transform": "translateY(-50%)",
      "margin-right": "5px"
    });
  }
}

/* function createXAxisDataPointsContainer(chartRawData, dataPointsOptions,  element) {

  var parentElement;
  var childElement;
  var keys;

  for(var i = 0; i < dataPointsOptions.noOfColumns; i++) {

    keys = Object.keys(chartRawData[i]);
    element.append(
      '<div class="xAxisDataPointContainer xAxisDataPointContainer-' + (i + 1) + '"></div>'
    );
    $(".xAxisDataPointContainer-" + (i + 1)).css({
      "width": dataPointsOptions.chartAreaEachColumnWidth + "px",
      "display": "inline-block",
      "margin": "5px 0",
      "text-align": "center"
    });

    $(".xAxisDataPointContainer-" + (i + 1)).append(
      '<div class="xAxisDataPointText">' + chartRawData[i][keys[0]] + '</div>'
    );

    if(dataPointsOptions.noOfColumns > 6 && dataPointsOptions.noOfColumns <= 15){
      console.log(Math.pow((chartRawData[i][keys[0]]).length, 2));
      $(".xAxisDataPointText").css({
        "display": "inline-block",
        "-ms-transform": "rotate(-45deg) translate(calc(-50% + 5px), -40%)",
        "-webkit-transform": "rotate(-45deg) translate(calc(-50% + 5px), -40%)",
        "transform": "rotate(-45deg) translate(calc(-50% + 5px), -40%)",
        "white-space": "nowrap"
      });

      parentElement = $(".xAxisDataPointContainer-" + (i + 1));
      childElement = parentElement.children('.xAxisDataPointText');

      //checking if child height (we rotate to 90degree, so child height become width,
      //... so we are comaring parent height with child width)
      //... is greater than parent height
      if (childElement.width() > parentElement.height()) {
        parentElement.css({
          "height": childElement.width()
        });
      }
    } else if(dataPointsOptions.noOfColumns > 15){
      console.log(Math.pow((chartRawData[i][keys[0]]).length, 2));
      $(".xAxisDataPointText").css({
        "display": "inline-block",
        "-ms-transform": "rotate(-90deg) translate(calc(-50% + 15px), -40%)",
        "-webkit-transform": "rotate(-90deg) translate(calc(-50% + 15px), -40%)",
        "transform": "rotate(-90deg) translate(calc(-50% + 15px), -40%)",
        "white-space": "nowrap"
      });

      parentElement = $(".xAxisDataPointContainer-" + (i + 1));
      childElement = parentElement.children('.xAxisDataPointText');

      //checking if child height (we rotate to 90degree, so child height become width,
      //... so we are comaring parent height with child width)
      //... is greater than parent height
      if (childElement.width() > parentElement.height()) {
        parentElement.css({
          "height": childElement.width()
        });
      }
    }
  }
} */

function createChartBars(data, element) {
  var heightOfCurrentBar;
  var keys;

  for(var i = 0; i < data.noOfColumns; i++) {
    keys = Object.keys(data.chartRawData[i]);
    heightOfCurrentBar = data.heightOfEachRangePoint * data.chartRawData[i][keys[1]];
    // eslint-disable-next-line radix
    heightOfCurrentBar = Math.floor(heightOfCurrentBar) + "px";
    element.append(
      '<div class="chartAreaBar chartAreaBar-' + (i + 1) + '"><span>' + data.chartRawData[i]["noOfPeople"] + '<span></div>'
    );
    $(".chartAreaBar-" + (i + 1)).css({
      "height": heightOfCurrentBar,
      "width": data.widthOfEachBarInPerc + "%",
      "background-color": "lightgrey",
      "display": "flex",
      "justify-content": "center"
    });
  }
}

function createChartEditor(element) {
  var editorOpen = false;
  element.append('<div class="editorToggle"><</div>');
  $(".editorToggle").css({
    "padding": "5px",
    "font-size": "25px"
  });
  $(".editorToggle").on("click", function () {
    if(editorOpen) {
      $(this).html("<");
      $(".editorBody").css("display", "none");
    } else {
      $(this).html(">");
      $(".editorBody").css("display", "block");
    }

    editorOpen = !editorOpen;
  });
  $(".editorToggle").on("mouseover", function () {
    $(this).css("cursor", "pointer");
  });

  element.append('<div class="editorBody"></div>');
  $(".editorBody").css({
    "flex": "1",
    "display": "none"
  });
}

function createBarValuePositionBody(element) {
  element.css({
    "display": "flex",
    "flex-direction": "column",
    "align-content": "center"
  });
  element.append('<div class="barValuePositionTop">Top</div>');
  $(".barValuePositionTop").on("click", function () {
    $(".chartAreaBar").css("align-items", "flex-start");
  });

  element.append('<div class="barValuePositionCenter">Center</div>');
  $(".barValuePositionCenter").on("click", function () {
    $(".chartAreaBar").css("align-items", "center");
  });

  element.append('<div class="barValuePositionBottom">Bottom</div>');
  $(".barValuePositionBottom").on("click", function () {
    $(".chartAreaBar").css("align-items", "flex-end");
  });

  element.children().css("border", "solid 1px lightgray");

  element.children().on("mouseover", function () {
    $(this).css("cursor", "pointer");
  });
}

function createChartTitleBody(element) {
  element.css({
    "display": "flex",
    "padding": "10px 0px"
  });

  element.append('<input type="text" id="chartTitleModifier" value="' + $('.chartHead').val() +'" />');

  $('#chartTitleModifier').on('keyup', function() {
    $('.chartHead').html($(this).val());
  });

}

function createTitleFontSizeBody(element) {
  element.css({
    "display": "flex",
    "padding": "10px 0px"
  });

  element.append('<div class="sliderContainer" id="titleFontSizeSliderContainer"></div>');

  $("#titleFontSizeSliderContainer").append(
    '<input type="range" min="10" max="50" value="24" step="1" class="slider" id="titleFontSizeSlider">'
  );
  $("#titleFontSizeSliderContainer").append(
    '<span class="sliderValue" id="titleFontSizeSliderValue">0</span>'
  );

  var titleFontSize= $('#titleFontSizeSlider').val();
  $('#titleFontSizeSliderValue').html(titleFontSize);
  $(".chartHead").css("font-size", titleFontSize + "px");

  rangeSlider(
    "titleFontSize",
    $('#titleFontSizeSlider'),
    $('#titleFontSizeSliderValue')
  );
}

function createColorBody(inputType, element) {
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

function createBarSpacingBody(widthOfEachBarInPerc, element) {
  element.css({
    "display": "flex",
    "padding": "10px 0px"
  });

  element.append('<div class="sliderContainer" id="barSpacingSliderContainer"></div>');

  var currentBarSpacing;
  if (widthOfEachBarInPerc / 2 > 1)
    currentBarSpacing = Math.floor(widthOfEachBarInPerc / 2);
  else
    currentBarSpacing = widthOfEachBarInPerc;

  $("#barSpacingSliderContainer").append(
    '<input type="range" min="1" max="' + widthOfEachBarInPerc + '" value="' + currentBarSpacing + '" step="0.1" class="slider" id="barSpacingSlider">'
  );

  var barSpacing= $('#barSpacingSlider').val();
  $('.chartAreaBar').css("width", barSpacing + "%");
  $('.xAxisDataPointContainer').css("width", barSpacing + "%");

  rangeSlider(
    "barSpacing",
    $('#barSpacingSlider'),
    undefined
  );
}

function createEditorBodyIndividualElement(elementDedails, parentElement) {
  parentElement.append('<div class="editorBodyElement ' + elementDedails.class + '"></div>');
}

function createEditorBodyElementTitle(elementDedails, parentElement) {
  parentElement.append(
    '<span class="editorBodyElementTitle ' + elementDedails.class + '">' + elementDedails.title + '</span>'
  );

  $(".editorBodyElementTitle").css({
    "display": "block",
    "cursor": "pointer"
  });
}
function createEditorBodyElementBody(elementDedails, parentElement) {
  parentElement.append(
    '<div class="editorBodyElementBody ' + elementDedails.class + '"></div>'
  );

  $(".editorBodyElementBody").css({
    "display": "block"
  });
}

function createEditorBodyElements(barChartComponentsWidth, element) {
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

function drawBarChart(data, options, element) {
  var chartHeight;
  var chartWidth;

  options.chartHeight > element.height() ? chartHeight = element.height() : chartHeight = options.chartHeight;
  options.chartWidth > element.width() ? chartWidth = element.width() : chartWidth = options.chartWidth;

  var noOfColumns = data["chartRawData"].length;
  var noOfRows = 10;

  createChartElement(element);

  createChartDisplay(
    data.chartTitle ? data.chartTitle : undefined,
    data.chartDescription ? data.chartDescription : undefined,
    $(".chartDisplay")
  );

  createChartBody($(".chartBody"));

  createYAxisTitleContainer(data.yAxisTitle, $(".yAxisTitleContainer"));

  createXAxisTitleContainer(data.xAxisTitle, $(".xAxisTitleContainer"));

  var barChartComponentsHeight = calculateHeightOfBarChartComponents(
    data, noOfRows, $(".chartAreaContainer")
  );
  var barChartComponentsWidth = calculateWidthOfBarChartComponents(
    noOfColumns, $(".chartAreaContainer")
  );

  createYAxisDataPointsContainer(noOfRows, barChartComponentsHeight, $(".yAxisContainer"));

  /* createChartAreaContainer(noOfColumns, $(".chartAreaContainer"));

  createXAxisDataPointsContainer(
    data.chartRawData,
    {"noOfColumns": noOfColumns, "chartAreaEachColumnWidth": $(".chartAreaDynamicCoumn").width()},
    $(".xAxisContainer")
  );

  createChartBars(data.chartRawData, noOfColumns, barChartComponentsHeight); */

  createXAxisDataPointsContainer(
    {
      "chartRawData": data.chartRawData,
      "noOfColumns": noOfColumns,
      "widthOfEachBarInPerc": barChartComponentsWidth.widthOfEachBarInPerc
    },
    $(".xAxisContainer")
  );

  createChartBars(
    {
      "chartRawData": data.chartRawData,
      "noOfColumns": noOfColumns,
      "heightOfEachRangePoint": barChartComponentsHeight.heightOfEachRangePoint,
      "widthOfEachBarInPerc": barChartComponentsWidth.widthOfEachBarInPerc
    },
    $(".chartAreaContainer")
  );

  createChartEditor($(".chartEditor"));

  createEditorBodyElements(barChartComponentsWidth, $(".editorBody"));

  return true;
}

$.when( $.ready ).then(function() {
  console.log("Initial setup!!");

  var chartData = {};
  var chartOptions = {};
  var chartElement = $(".chart-container");

  /* chartData["chartRawData"] = [
    {"movieType": "Comedy", "noOfPeople": 4},
    {"movieType": "Action", "noOfPeople": 5},
    {"movieType": "Action", "noOfPeople": 6},
    {"movieType": "Drama", "noOfPeople": 1},
    {"movieType": "SciFi", "noOfPeople": 4}
  ];
  chartData["chartTitle"] = "Favorite Type of Movie";
  chartData["chartDescription"] = "Description";
  chartData["xAxisTitle"] = "Movies";
  chartData["yAxisTitle"] = "People";
  chartData["yAxisRange"] = {"min": 0, "max": 10, "type": "number", "prefix": "", "postfix": ""}; */

  chartData["chartRawData"] = [
    {"fruitName": "Apple", "noOfPeople": 36},
    {"fruitName": "Orange", "noOfPeople": 30},
    {"fruitName": "Banana", "noOfPeople": 10},
    {"fruitName": "Kiwifruit", "noOfPeople": 25},
    {"fruitName": "Blueberry", "noOfPeople": 40},
    {"fruitName": "Grapes", "noOfPeople": 5}
  ];
  chartData["chartTitle"] = "Nicest Fruit";
  chartData["chartDescription"] = "Description";
  chartData["xAxisTitle"] = "Fruits";
  chartData["yAxisTitle"] = "People";
  chartData["yAxisRange"] = {"min": 0, "max": 40, "type": "number", "prefix": "", "postfix": ""};

  chartOptions["chartHeight"] = 600;  //height in px
  chartOptions["chartWidth"] = 600;   //width in px


  drawBarChart(chartData, chartOptions, chartElement);
});
