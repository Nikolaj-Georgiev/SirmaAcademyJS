function equalSumOfOddAndEvenPositions(start, end) {
  let isFound = false;

  for (let i = start + 1; i < end; i++) {
    let sumEven = 0;
    let sumOdd = 0;
    let currentNumAsString = String(i);
    for (let j = 0; j < currentNumAsString.length; j++) {
      let currentDigit = +currentNumAsString[j];
      if (j % 2 == 0) {
        sumEven += currentDigit;
      } else {
        sumOdd += currentDigit;
      }
    }
    if (sumEven == sumOdd && (sumEven != 0)) {
      console.log(i);
      isFound = true;
    }
  }
  if (!isFound) {
    console.log('None');
  }
}

equalSumOfOddAndEvenPositions(100000, 100050);
equalSumOfOddAndEvenPositions(299900, 300000);
equalSumOfOddAndEvenPositions(100115, 100120);