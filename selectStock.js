const selectStock = (saving, currentValue, futureValue) => {
  let currentValuePairs = [];
  let futureValuePairs = [];
  let profit = 0;

  // if there is just one stock
  if (currentValue.length === 1) {
    profit = futureValue[0] - currentValue[0];
    console.log("The Best Current Stock Values to buy are: ", currentValue[0]);
    console.log("The Future Stock Values will be: ", futureValue[0]);
    console.log("The Profit will be: ", profit);
    return;
  }

  // loop through the current stocks value array
  for (let val in currentValue) {
    // move the pointer to the next value and loop through the current stocks value array
    for (
      let index = parseFloat(val) + 1;
      index <= currentValue.length;
      index++
    ) {
      // Check if the sum of the first and second pointer is less than or equal to the saving
      if (currentValue[val] + currentValue[index] <= saving) {
        totalCurrentValuePairs = currentValue[val] + currentValue[index];
        totalFutureValuePairs = futureValue[val] + futureValue[index];

        // get the difference between the first and second pointer of the future value
        // and the the first and second pointer of the current value
        const tempProfit = totalFutureValuePairs - totalCurrentValuePairs;

        // keep track of the maximum profit
        if (tempProfit > profit) {
          profit = tempProfit;
          currentValuePairs = [currentValue[val], currentValue[index]];
          futureValuePairs = [futureValue[val], futureValue[index]];
        }
      } else {
        // check if the first pointer is a worthy investment 
        if (currentValue[val] > saving) return;

        const singleTempProfit = futureValue[val] - currentValue[val];

        // keep track of the maximum profit
        if (singleTempProfit > profit) {
          profit = singleTempProfit;
          currentValuePairs = [currentValue[val]];
          futureValuePairs = [futureValue[val]];
        }
      }
    }
  }

  console.log("The Best Current Stock Values to buy are: ", currentValuePairs);
  console.log("The Future Stock Values will be: ", futureValuePairs);
  console.log("The Profit will be: ", profit);
};

selectStock(250, [175, 133, 109, 210, 97], [200, 125, 128, 228, 133]);

selectStock(250, [175], [200]);

selectStock(250, [248, 133, 109, 210, 97], [2000, 125, 128, 228, 133]);
