const calculateYAxisRangeMax = function(singleStack, rawDataValues, noOfRows) {
  let yAxisRangeMax = [];
  let maxRawDataValue;
  if(singleStack) {
    maxRawDataValue = Math.max(...rawDataValues);
    if(maxRawDataValue % noOfRows !== 0)
      yAxisRangeMax = Math.ceil(maxRawDataValue / noOfRows) * noOfRows;
    else
      yAxisRangeMax = maxRawDataValue;
  }

  return yAxisRangeMax;
}

export default calculateYAxisRangeMax;
