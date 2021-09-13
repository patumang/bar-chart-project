export default function createYAxisDataPointsContainer(options, element) {
  var currentMark = options.yAxisRangeGap;

  for(var i = 0; i < options.noOfRows; i++) {
    element.append(
      '<div class="' + options.uniuqeChartId + '_yAxisDataPointContainer ' + options.uniuqeChartId + '_yAxisDataPointContainer-' + (i + 1) + '"></div>'
    );
    $("." + options.uniuqeChartId + "_yAxisDataPointContainer-" + (i + 1)).css({
      "flex": "1",
      /* "height": barChartComponentsHeight.chartAreaRowMarkHeight + "px", */
      "display": "flex",
      "justify-content": "flex-end",
      "align-items": "flex-start"
    });

    $("." + options.uniuqeChartId + "_yAxisDataPointContainer-" + (i + 1)).append(
      '<div class="' + options.uniuqeChartId + '_yAxisDataPointText ' + options.uniuqeChartId + '_yAxisDataPointText-' + (i + 1) + '">' + currentMark.toFixed(1) + '</div>'
    );
    $("." + options.uniuqeChartId + "_yAxisDataPointText-" + (i + 1)).css({
      "transform": "translateY(-50%)",
      "margin-right": "5px"
    });

    $("." + options.uniuqeChartId + "_yAxisDataPointContainer-" + (i + 1)).append(
      '<div class="' + options.uniuqeChartId + '_yAxisDataPointMark ' + options.uniuqeChartId + '_yAxisDataPointMark-' + (i + 1) + '"></div>'
    );
    $("." + options.uniuqeChartId + "_yAxisDataPointMark-" + (i + 1)).css({
      "height": "1px",
      "width": "5px",
      "background-color": "gray"
    });

    currentMark += options.yAxisRangeGap;
  }
}
