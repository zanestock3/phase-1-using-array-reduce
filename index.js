const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const sumWithTotal = 0;
const totalBatteries = batteryBatches.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    sumWithTotal
  );
totalBatteries;