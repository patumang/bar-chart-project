import drawBarChart from './draw-bar-chart.js';
import {chartData, chartOptions} from './chart-data.js';

$.when( $.ready ).then(function() {
  console.log("Initial setup!!");

  const chartElement = $(".chart-container");

  drawBarChart(chartData, chartOptions, chartElement);
});
