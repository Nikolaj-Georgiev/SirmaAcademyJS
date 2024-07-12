function pyramidWithIncreasingDigits(n) {
  let resultString = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      resultString += " ";
    }
    for (let k = 1; k <= i; k++) {
      resultString += (k + i - 1);
    }
    for (let l = i - 1; l >= 1; l--) {
      resultString += (l + i - 1);
    }

    console.log(resultString);
    resultString = "";
  }
}

pyramidWithIncreasingDigits(5);
pyramidWithIncreasingDigits(4);
pyramidWithIncreasingDigits(3);