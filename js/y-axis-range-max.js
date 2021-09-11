const calculateYAxisRangeMax = function(singleStack, rawData, noOfRows) {
  let yAxisRangeMax = [];
  let maxRawDataValue;
  if(singleStack) {
    maxRawDataValue = Math.max(...rawData.rawDataValues);
  }
  else {
    let sumOfStackValues = [];

    for(let i = 0; i < rawData.rawDataStackValues.length; i++){
      sumOfStackValues[i] = rawData.rawDataStackValues[i].reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
    }

    maxRawDataValue = Math.max(...sumOfStackValues);
  }

  if(maxRawDataValue % noOfRows !== 0)
    yAxisRangeMax = Math.ceil(maxRawDataValue / noOfRows) * noOfRows;
  else
    yAxisRangeMax = maxRawDataValue;

  return yAxisRangeMax;
}

export default calculateYAxisRangeMax;
