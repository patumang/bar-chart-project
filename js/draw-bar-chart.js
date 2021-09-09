import createChartElement from './chart-element.js';
import createChartDisplay from './chart-display/chart-display.js';
import createChartBody from './chart-display/chart-body/chart-body.js';
import createYAxisTitleContainer from './chart-display/chart-body/y-axis-title.js';
import createXAxisTitleContainer from './chart-display/chart-body/x-axis-title.js';
import calculateHeightOfBarChartComponents from './bar-area-height.js';
import calculateWidthOfBarChartComponents from './bar-area-width.js';
import rangeSlider from './slider-range.js';
import createYAxisDataPointsContainer from './chart-display/chart-body/y-axis-datapoints.js';
import createXAxisDataPointsContainer from './chart-display/chart-body/x-axis-datapoints.js';
import createChartBars from './chart-display/chart-body/chart-bars.js';
import createChartEditor from './chart-editor/chart-editor.js';
import createEditorBodyElements from './chart-editor/editor-body-elements/editor-body-elements.js';

export default function drawBarChart(data, options, element) {
  var chartHeight;
  var chartWidth;

  options.chartHeight > element.height() ? chartHeight = element.height() : chartHeight = options.chartHeight;
  options.chartWidth > element.width() ? chartWidth = element.width() : chartWidth = options.chartWidth;

  var noOfColumns = data["chartRawData"].length;
  var noOfRows = 10;

  createChartElement(element);

  createChartDisplay(
    data.chartTitle ? data.chartTitle : undefined,
    data.chartDescription ? data.chartDescription : undefined,
    $(".chartDisplay")
  );

  createChartBody($(".chartBody"));

  createYAxisTitleContainer(data.yAxisTitle, $(".yAxisTitleContainer"));

  createXAxisTitleContainer(data.xAxisTitle, $(".xAxisTitleContainer"));

  var barChartComponentsHeight = calculateHeightOfBarChartComponents(
    data, noOfRows, $(".chartAreaContainer")
  );
  var barChartComponentsWidth = calculateWidthOfBarChartComponents(
    noOfColumns, $(".chartAreaContainer")
  );

  createYAxisDataPointsContainer(noOfRows, barChartComponentsHeight, $(".yAxisContainer"));


  createXAxisDataPointsContainer(
    {
      "chartRawData": data.chartRawData,
      "noOfColumns": noOfColumns,
      "widthOfEachBarInPerc": barChartComponentsWidth.widthOfEachBarInPerc
    },
    $(".xAxisContainer")
  );

  createChartBars(
    {
      "chartRawData": data.chartRawData,
      "noOfColumns": noOfColumns,
      "heightOfEachRangePoint": barChartComponentsHeight.heightOfEachRangePoint,
      "widthOfEachBarInPerc": barChartComponentsWidth.widthOfEachBarInPerc
    },
    $(".chartAreaContainer")
  );

  createChartEditor($(".chartEditor"));

  createEditorBodyElements(barChartComponentsWidth, $(".editorBody"));

  return true;
}
