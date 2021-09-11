export default function calculateWidthOfBarChartComponents(noOfColumns, element) {
  let totalWidthChartAreaContainer = element.width();
  let initialWidthOfEachBar = Math.floor(totalWidthChartAreaContainer / noOfColumns);
  let widthOfEachBarInPerc =  Math.floor((100 * initialWidthOfEachBar) / totalWidthChartAreaContainer);

  return {
    "totalWidthChartAreaContainer": totalWidthChartAreaContainer,
    "initialWidthOfEachBar": initialWidthOfEachBar,
    "widthOfEachBarInPerc": widthOfEachBarInPerc
  };
}
