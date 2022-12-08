const degreeOfArray = (arr) => {
  // get the degree of the parent Array
  const degOfParentArray = getDegOfArray(arr);
  const parentArrayMap = degOfParentArray.mapObj;
  const parentArrayDeg = degOfParentArray.deg;
  console.log("The degree of parent array is", parentArrayDeg);
  console.log("\n");

  // get all numbers that reoccured the most
  const mostReoccurringInts = getMostOccuringInts(parentArrayMap, parentArrayDeg);
  console.log("The most re-occuring int(s)", mostReoccurringInts);
  console.log("\n");

  // get the sub arrays
  const subArrays = getSubArrays(mostReoccurringInts, arr, parentArrayDeg);
  console.log("The Sub arrays are", subArrays);
  console.log("\n");

  // get the shortest subarray lenght
  const shortestArrayLength = getShortestArrayLength(subArrays);
  console.log("The shortest length of sub arrays", shortestArrayLength);
  console.log("\n");
};

const getDegOfArray = (arr) => {
  let mapObj = {};

  // map each item of the array to the number of times it re-occur 
  for (element of arr) {
    if (mapObj.hasOwnProperty(element)) {
      mapObj[element]++;
    } else {
      mapObj[element] = 1;
    }
  }

  // get the values of the mapObj and sort it.
  const values = Object.values(mapObj).sort();

  // the highest becomes the degree
  const deg = values[values.length - 1];
  return { deg, mapObj };
};

const getMostOccuringInts = (mapObj, deg) => {
  let degNum = [];

  // loop through the mapObj
  for (element in mapObj) {
    // keep ints that occurs the most
    if (mapObj[element] === deg) {
      degNum.push(parseFloat(element));
    }
  }
  return degNum;
};

const getSubArrays = (reoccurringInts, parentArr, parentArrayDeg) => {
  let finalArr = [];

  // loop through the most occuring ints
  for (num of reoccurringInts) {
    let subArry = [];
    let degNumCounter = 0;

    // loop through the parent array
    for (item of parentArr) {
      // the first number to keep has to be one of the most re-occurring int
      if (item === num) {
        subArry.push(item);
        // keep track of how many times that most re-occuring int has been added
        // this is important in order to know when to stop the loop
        degNumCounter++;
      }

      // continue adding other ints encountered
      if (degNumCounter > 0 && degNumCounter < parentArrayDeg && item !== num) {
        subArry.push(item);
      }

      // stop the loop if most re-ocuring int has been added the number of times it re-occurred 
      if (degNumCounter === parentArrayDeg) {
        finalArr.push(subArry);

        // reset the sub array and counter
        subArry = [];
        degNumCounter = 0;
      }
    }
  }
  return finalArr;
};

const getShortestArrayLength = (arr) => {
  // set the initial length of the shortest sub-array to infinity
  // This is because we are looking for the shortest lenght
  let shortestSubArrayLength = 1 / 0;

  for (element of arr) {
    if (element.length < shortestSubArrayLength) {
      shortestSubArrayLength = element.length;
    }
  }

  return shortestSubArrayLength;
};

degreeOfArray([1,2,2,3,1]);
