function negativePositiveNumbers(inpArr) {
  let positive = [];
  let negative = [];
  let positiveCount = 0;
  let negativeCount = 0;
  for (let i = 0; i < inpArr.length; i++) {
    if (inpArr[i] >= 0) {
      positive[positiveCount] = inpArr[i];
      positiveCount++;
    } else {
      negative[negativeCount] = inpArr[i];
      negativeCount++;
    }
  }
  for (let j = negative.length - 1; j >= 0; j--) {
    console.log(negative[j]);
  }
  for (let k of positive) {
    console.log(k);
  }
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);