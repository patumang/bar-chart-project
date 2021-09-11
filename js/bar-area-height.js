export default function calculateHeightOfBarChartComponents(yAxisRange, noOfRows, element) {

  let totalHeightChartAreaContainer = element.height();

  let heightOfEachRangePoint = Math.floor(totalHeightChartAreaContainer / (yAxisRange[1] - yAxisRange[0]));
  let chartAreaRowMark = Math.floor((yAxisRange[1] - yAxisRange[0]) / noOfRows);
  let chartAreaRowMarkHeight = heightOfEachRangePoint * chartAreaRowMark;

  return {
    "totalHeightChartAreaContainer": totalHeightChartAreaContainer,
    "chartAreaRowMark": chartAreaRowMark,
    "chartAreaRowMarkHeight": chartAreaRowMarkHeight,
    "heightOfEachRangePoint": heightOfEachRangePoint
  };
}
