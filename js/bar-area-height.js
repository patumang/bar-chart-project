export default function calculateHeightOfBarChartComponents(data, noOfRows, element) {
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
