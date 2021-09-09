export default function calculateWidthOfBarChartComponents(noOfColumns, element) {
  var totalWidthChartAreaContainer = element.width();
  var initialWidthOfEachBar = Math.floor(totalWidthChartAreaContainer / noOfColumns);
  var widthOfEachBarInPerc =  Math.floor((100 * initialWidthOfEachBar) / totalWidthChartAreaContainer);

  return {
    "totalWidthChartAreaContainer": totalWidthChartAreaContainer,
    "initialWidthOfEachBar": initialWidthOfEachBar,
    "widthOfEachBarInPerc": widthOfEachBarInPerc
  };
}
