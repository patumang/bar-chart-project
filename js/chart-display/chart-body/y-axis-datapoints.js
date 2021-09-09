export default function createYAxisDataPointsContainer(noOfRows, barChartComponentsHeight, element) {
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
