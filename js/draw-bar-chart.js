import calculateYAxisRangeMin from './y-axis-range-min.js';
import calculateYAxisRangeMax from './y-axis-range-max.js';
import createChartElement from './chart-element.js';
import createChartDisplay from './chart-display/chart-display.js';
import createChartBody from './chart-display/chart-body/chart-body.js';
import createYAxisTitleContainer from './chart-display/chart-body/y-axis-title.js';
import createXAxisTitleContainer from './chart-display/chart-body/x-axis-title.js';
import calculateHeightOfBarChartComponents from './bar-area-height.js';
import calculateWidthOfBarChartComponents from './bar-area-width.js';
//import rangeSlider from './slider-range.js';
import createYAxisDataPointsContainer from './chart-display/chart-body/y-axis-datapoints.js';
import createXAxisDataPointsContainer from './chart-display/chart-body/x-axis-datapoints.js';
import createChartBars from './chart-display/chart-body/chart-bars.js';
import createChartEditor from './chart-editor/chart-editor.js';
import createEditorBodyElements from './chart-editor/editor-body-elements/editor-body-elements.js';

export default function drawBarChart(data, options, element) {
  let chartHeight, chartWidth;

  options.chartHeight > element.height() ? chartHeight = element.height() : chartHeight = options.chartHeight;
  options.chartWidth > element.width() ? chartWidth = element.width() : chartWidth = options.chartWidth;

  let singleStack;
  const rawDataKeys = Object.keys(data["chartRawData"]);
  const rawDataValues = Object.values(data["chartRawData"]);

  const noOfColumns = rawDataKeys.length;
  let noOfRows = 10;

  typeof rawDataValues[0] !== "Object" ? singleStack = true : singleStack = false;

  let yAxisRange = [];

  if(data.yAxisRange) {
    if(data.yAxisRange.min)
      yAxisRange[0] = data.yAxisRange.min;
    else
      yAxisRange[0] = calculateYAxisRangeMin();

    if(data.yAxisRange.max)
      yAxisRange[1] = data.yAxisRange.max;
    else{
      yAxisRange[1] = calculateYAxisRangeMax(singleStack, rawDataValues, noOfRows);
    }
  }
  else {
    yAxisRange[0] = calculateYAxisRangeMin();
    yAxisRange[1] = calculateYAxisRangeMax(singleStack, rawDataValues, noOfRows);
  }

  createChartElement(element);

  createChartDisplay(
    data.chartTitle ? data.chartTitle : undefined,
    {
      "yAxisTitle": data.yAxisTitle,
      "xAxisTitle": data.xAxisTitle
    },
    $(".chartDisplay")
  );

  createChartBody($(".chartBody"));

  if(data.yAxisTitle)
    createYAxisTitleContainer(data.yAxisTitle, $(".yAxisTitleContainer"));

  if(data.xAxisTitle)
    createXAxisTitleContainer(data.xAxisTitle, $(".xAxisTitleContainer"));

  let barChartComponentsHeight = calculateHeightOfBarChartComponents(
    yAxisRange, noOfRows, $(".chartAreaContainer")
  );
  let barChartComponentsWidth = calculateWidthOfBarChartComponents(
    noOfColumns, $(".chartAreaContainer")
  );

  createYAxisDataPointsContainer(noOfRows, barChartComponentsHeight, $(".yAxisContainer"));


  createXAxisDataPointsContainer(
    {
      "rawDataKeys": rawDataKeys,
      "noOfColumns": noOfColumns,
      "widthOfEachBarInPerc": barChartComponentsWidth.widthOfEachBarInPerc
    },
    $(".xAxisContainer")
  );

  createChartBars(
    {
      "singleStack": singleStack,
      "rawDataValues": rawDataValues,
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
