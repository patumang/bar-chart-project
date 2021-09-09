export default function createChartBars(data, element) {
  var heightOfCurrentBar;
  var keys;

  for(var i = 0; i < data.noOfColumns; i++) {
    keys = Object.keys(data.chartRawData[i]);
    heightOfCurrentBar = data.heightOfEachRangePoint * data.chartRawData[i][keys[1]];
    // eslint-disable-next-line radix
    heightOfCurrentBar = Math.floor(heightOfCurrentBar) + "px";
    element.append(
      '<div class="chartAreaBar chartAreaBar-' + (i + 1) + '"><span>' + data.chartRawData[i][keys[1]] + '<span></div>'
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
