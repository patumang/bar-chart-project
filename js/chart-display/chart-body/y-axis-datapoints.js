export default function createYAxisDataPointsContainer(noOfRows, yAxisRangeGap, element) {
  var currentMark = yAxisRangeGap;

  for(var i = 0; i < noOfRows; i++) {
    element.append(
      '<div class="yAxisDataPointContainer yAxisDataPointContainer-' + (i + 1) + '"></div>'
    );
    $(".yAxisDataPointContainer-" + (i + 1)).css({
      "flex": "1",
      /* "height": barChartComponentsHeight.chartAreaRowMarkHeight + "px", */
      "display": "flex",
      "justify-content": "flex-end",
      "align-items": "flex-start"
    });

    $(".yAxisDataPointContainer-" + (i + 1)).append(
      '<div class="yAxisDataPointText yAxisDataPointText-' + (i + 1) + '">' + currentMark.toFixed(1) + '</div>'
    );
    $(".yAxisDataPointText-" + (i + 1)).css({
      "transform": "translateY(-50%)",
      "margin-right": "5px"
    });

    $(".yAxisDataPointContainer-" + (i + 1)).append(
      '<div class="yAxisDataPointMark yAxisDataPointMark-' + (i + 1) + '"></div>'
    );
    $(".yAxisDataPointMark-" + (i + 1)).css({
      "height": "1px",
      "width": "5px",
      "background-color": "gray"
    });

    currentMark += yAxisRangeGap;
    console.log(currentMark);
  }
}
