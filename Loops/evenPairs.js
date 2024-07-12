function evenPairs(firstStart, secondStart, firstEnd, secondEnd) {
  let pairOneEnd = firstStart + firstEnd;
  let pairTwoEnd = secondStart + secondEnd;
  let isOnePrime = false;
  let isTwoPrime = false;

  for (let i = firstStart; i <= pairOneEnd; i++) {
    for (let j = secondStart; j <= pairTwoEnd; j++) {
      let result = i + "" + j;
      if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
        isOnePrime = true;
      }

      if (j % 2 != 0 && j % 3 != 0 && j % 5 != 0 && j % 7 != 0) {
        isTwoPrime = true;
      }

      if (isOnePrime && isTwoPrime) {
        console.log(result);

      }
      isOnePrime = false;
      isTwoPrime = false;
    }
  }
}

evenPairs(10, 20, 5, 5);
evenPairs(10, 30, 9, 6);