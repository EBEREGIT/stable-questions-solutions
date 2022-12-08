const stockPairs = (stocks, target) => {
  let distinctPairs = [];

  // loop through the stocks profit array
  for (const stock in stocks) {
    let stockVisited = [];

    // move the pointer to the next item
    for (let index = parseFloat(stock) + 1; index <= stocks.length; index++) {

      // check if their sum is equivalent to the target
      // and if the item has not be used to calculate the target initially
      if (
        stocks[stock] + stocks[index] === target &&
        !stockVisited.includes(stocks[index])
      ) {
        distinctPairs.push([stocks[stock], stocks[index]]);
      }

      // keep track of items that have been visited
      stockVisited.push(stocks[index]);
    }
  }

  console.log(distinctPairs);
};

stockPairs([5, 7, 9, 13, 11, 6, 6, 3, 3], 12);
