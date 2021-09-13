import calculateYAxisRangeMin from './y-axis-range-min.js';
import calculateYAxisRangeMax from './y-axis-range-max.js';
import calculateYAxisRangeGap from './y-axis-range-gap.js';
import createChartElement from './chart-element.js';
import createChartDisplay from './chart-display/chart-display.js';
import createChartBody from './chart-display/chart-body/chart-body.js';
import createYAxisTitleContainer from './chart-display/chart-body/y-axis-title.js';
import createXAxisTitleContainer from './chart-display/chart-body/x-axis-title.js';
import calculateHeightOfBarChartComponents from './bar-area-height.js';
import calculateWidthOfBarChartComponents from './bar-area-width.js';
import createYAxisDataPointsContainer from './chart-display/chart-body/y-axis-datapoints.js';
import createXAxisDataPointsContainer from './chart-display/chart-body/x-axis-datapoints.js';
import createChartBars from './chart-display/chart-body/chart-bars.js';
import createChartEditor from './chart-editor/chart-editor.js';
import createEditorBodyElements from './chart-editor/editor-body-elements/editor-body-elements.js';

export default function drawBarChart(data, options, element) {

  const uniuqeChartId = Date.now();
  /* options.chartHeight > element.height() ? chartHeight = element.height() : chartHeight = options.chartHeight;
  options.chartWidth > element.width() ? chartWidth = element.width() : chartWidth = options.chartWidth; */
  options.chartHeight ? element.css("height", options.chartHeight) : element.css("min-height", "500px");
  options.chartWidth ? element.css("width", options.chartWidth) : element.css("min-width", "500px");

  const rawDataKeys = Object.keys(data["chartRawData"]);
  const rawDataValues = Object.values(data["chartRawData"]);
  let rawDataStackKeys;
  let rawDataStackValues = [];

  const noOfColumns = rawDataKeys.length;
  let noOfRows;

  const singleStack =  typeof rawDataValues[0] !== "object" ? true : false;

  if(!singleStack) {
    rawDataStackKeys = Object.keys(rawDataValues[0]);
    for(let i = 0; i < rawDataValues.length; i++){
      rawDataStackValues[i] = [];
      rawDataStackValues[i] = Object.values(rawDataValues[i]);
    }
  }

  let yAxisRange = [];
  let yAxisRangeGap;

  if(data.yAxisRange) {
    if(data.yAxisRange.min >= 0 && data.yAxisRange.max >= 0 && data.yAxisRange.gap >= 0)
      noOfRows = Math.ceil((data.yAxisRange.max - data.yAxisRange.min) / data.yAxisRange.gap);
    else
      noOfRows = 10;

    if(data.yAxisRange.min)
      yAxisRange[0] = data.yAxisRange.min;
    else
      yAxisRange[0] = calculateYAxisRangeMin();

    if(data.yAxisRange.max)
      yAxisRange[1] = data.yAxisRange.max;
    else{
      yAxisRange[1] = calculateYAxisRangeMax(
        singleStack,
        {"rawDataValues": rawDataValues, "rawDataStackValues": rawDataStackValues},
        noOfRows
      );
    }

    if(data.yAxisRange.gap) {
      yAxisRangeGap = data.yAxisRange.gap;
    }
    else{
      yAxisRangeGap = calculateYAxisRangeGap(yAxisRange, noOfRows);
    }
  }
  else {
    noOfRows = 10;
    yAxisRange[0] = calculateYAxisRangeMin();
    yAxisRange[1] = calculateYAxisRangeMax(
      singleStack,
      {"rawDataValues": rawDataValues, "rawDataStackValues": rawDataStackValues},
      noOfRows
    );
    yAxisRangeGap = calculateYAxisRangeGap(yAxisRange, noOfRows);
  }

  createChartElement(uniuqeChartId, element);

  createChartDisplay(
    {
      "uniuqeChartId": uniuqeChartId,
      "chartTitle": data.chartTitle ? data.chartTitle : undefined,
      "yAxisTitle": data.yAxisTitle,
      "xAxisTitle": data.xAxisTitle
    },
    $("." + uniuqeChartId + "_chartDisplay")
  );

  createChartBody(
    {
      "uniuqeChartId": uniuqeChartId,
      "yAxisTitle": data.yAxisTitle,
      "xAxisTitle": data.xAxisTitle
    },
    $("." + uniuqeChartId + "_chartBody")
  );

  if(data.yAxisTitle)
    createYAxisTitleContainer(
      {
        "uniuqeChartId": uniuqeChartId,
        "yAxisTitle": data.yAxisTitle
      },
      $("." + uniuqeChartId + "_yAxisTitleContainer")
    );

  if(data.xAxisTitle)
    createXAxisTitleContainer(
      {
        "uniuqeChartId": uniuqeChartId,
        "xAxisTitle": data.xAxisTitle
      },
      $("." + uniuqeChartId + "_xAxisTitleContainer")
    );

  let barChartComponentsHeight = calculateHeightOfBarChartComponents(
    yAxisRange, noOfRows, $("." + uniuqeChartId + "_chartAreaContainer")
  );
  let barChartComponentsWidth = calculateWidthOfBarChartComponents(
    noOfColumns, $("." + uniuqeChartId + "_chartAreaContainer")
  );

  createXAxisDataPointsContainer(
    {
      "uniuqeChartId": uniuqeChartId,
      "rawDataKeys": rawDataKeys,
      "noOfColumns": noOfColumns,
      "widthOfEachBarInPerc": barChartComponentsWidth.widthOfEachBarInPerc
    },
    $("." + uniuqeChartId + "_xAxisContainer")
  );

  createYAxisDataPointsContainer(
    {
      "uniuqeChartId": uniuqeChartId,
      "noOfRows": noOfRows,
      "yAxisRangeGap": yAxisRangeGap
    },
    $("." + uniuqeChartId + "_yAxisContainer")
  );

  createChartBars(
    {
      "uniuqeChartId": uniuqeChartId,
      "singleStack": singleStack,
      "yAxisRange": yAxisRange,
      "yAxisRangeGap": yAxisRangeGap,
      "rawDataValues": rawDataValues,
      "rawDataStackKeys": rawDataStackKeys,
      "rawDataStackValues": rawDataStackValues,
      "noOfColumns": noOfColumns,
      "noOfRows": noOfRows
    },
    $("." + uniuqeChartId + "_chartAreaContainer")
  );

  /* createChartEditor($("." + uniuqeChartId + "_chartEditor"));

  createEditorBodyElements(
    {
      "singleStack": singleStack,
      "rawDataStackKeys": rawDataStackKeys,
      "widthOfEachBarInPerc": barChartComponentsWidth.widthOfEachBarInPerc
    },
    $("." + uniuqeChartId + "_editorBody")
  ); */

  $("." + options.uniuqeChartId + "_chartFooter").append(
    '<span>Bar Chart by <a href="https://github.com/patumang" target="_blank" >Umang Patel</a></span>'
  );

  return true;
}
