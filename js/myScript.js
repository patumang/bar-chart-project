import drawBarChart from './my-bar-chart.js';
import {chartData1, chartOptions1} from './chart-data1.js';
import {chartData2, chartOptions2} from './chart-data2.js';
import {chartData3, chartOptions3} from './chart-data3.js';
import { chartData4, chartOptions4 } from './chart-data4.js';
import { chartData5, chartOptions5 } from './chart-data5.js';
import { chartData6, chartOptions6 } from './chart-data6.js';

$.when( $.ready ).then(function() {
  const chartElement1 = $("#chart-container1");
  drawBarChart(chartData1, chartOptions1, chartElement1);

  const chartElement2 = $("#chart-container2");
  drawBarChart(chartData2, chartOptions2, chartElement2);

  const chartElement3 = $("#chart-container3");
  drawBarChart(chartData3, chartOptions3, chartElement3);

  const chartElement4 = $("#chart-container4");
  drawBarChart(chartData4, chartOptions4, chartElement4);

  const chartElement5 = $("#chart-container5");
  drawBarChart(chartData5, chartOptions5, chartElement5);

  const chartElement6 = $("#chart-container6");
  drawBarChart(chartData6, chartOptions6, chartElement6);
});
