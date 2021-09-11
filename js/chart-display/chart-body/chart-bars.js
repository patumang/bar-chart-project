export default function createChartBars(data, element) {
  let heightOfCurrentBar;

  for(let i = 0; i < data.noOfColumns; i++) {
    if(data.singleStack) {
      heightOfCurrentBar = data.heightOfEachRangePoint * data.rawDataValues[i];
      // eslint-disable-next-line radix
      heightOfCurrentBar = Math.floor(heightOfCurrentBar) + "px";

      element.append(
        '<div class="chartAreaBar chartAreaBar-' + (i + 1) + '"><span>' + data.rawDataValues[i] + '<span></div>'
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
}
