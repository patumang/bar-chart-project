export default function calculateYAxisRangeGap(yAxisRange, noOfRows) {

  return (yAxisRange[1] - yAxisRange[0]) / noOfRows;

}
