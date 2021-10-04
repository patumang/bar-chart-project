export default function createXAxisDataPointsContainer(options, element) {

  for(let i = 0; i < options.noOfColumns; i++) {
    element.append(
      '<div class="' + options.uniuqeChartId + '_xAxisDataPointContainer ' + options.uniuqeChartId + '_xAxisDataPointContainer-' + (i + 1) + '"></div>'
    );
    $("." + options.uniuqeChartId + "_xAxisDataPointContainer-" + (i + 1)).css({
      "width": options.widthOfEachBarInPerc + "%",
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center"
    });

    $("." + options.uniuqeChartId + "_xAxisDataPointContainer-" + (i + 1)).append(
      '<div class="' + options.uniuqeChartId + '_xAxisDataPointMark ' + options.uniuqeChartId + '_xAxisDataPointMark-' + (i + 1) + '"></div>'
    );
    $("." + options.uniuqeChartId + "_xAxisDataPointMark-" + (i + 1)).css({
      "height": "5px",
      "width": "1px",
      "background-color": "gray"
    });

    $("." + options.uniuqeChartId + "_xAxisDataPointContainer-" + (i + 1)).append(
      '<div class="' + options.uniuqeChartId + '_xAxisDataPointText ' + options.uniuqeChartId + '_xAxisDataPointText-' + (i + 1) + '">' + options.rawDataKeys[i] + '</div>'
    );

    if (options.noOfColumns ===9) {
    $("." + options.uniuqeChartId + "_xAxisDataPointText").css({
      "margin-left": "25px",
      "-ms-transform": "rotate(-90deg) translate(calc(-50% + 15px), -40%)",
      "-webkit-transform": "rotate(-90deg) translate(calc(-50% + 15px), -40%)",
      "transform": "rotate(-90deg) translate(calc(-50% + 5px), -50%)",
      "white-space": "nowrap"
    });
  }
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

    // $(".yAxisDataPointText-" + (i + 1)).css({
    //   "transform": "translateY(-50%)",
    //   "margin-right": "5px"
    // });

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
