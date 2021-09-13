import drawBarChart from './my-bar-chart.js';
import {chartData1, chartOptions1} from './chart-data1.js';
import {chartData2, chartOptions2} from './chart-data2.js';
import {chartData3, chartOptions3} from './chart-data3.js';

$.when( $.ready ).then(function() {
  const chartElement1 = $("#chart-container1");
  drawBarChart(chartData1, chartOptions1, chartElement1);

  const chartElement2 = $("#chart-container2");
  drawBarChart(chartData2, chartOptions2, chartElement2);

  const chartElement3 = $("#chart-container3");
  drawBarChart(chartData3, chartOptions3, chartElement3);
});
