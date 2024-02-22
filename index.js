function getNumbersWithNoLoops(start, end, resultArray = []) {
  if (start <= end) {
    resultArray.push(start);
    getNumbersWithNoLoops(start + 1, end, resultArray);
  }

  const result = resultArray.join(",");

  return result;
}

const resultArray = getNumbersWithNoLoops(7, 10);
console.log(resultArray);
