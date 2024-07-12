function housePattern(n) {
  let resultString = "";
  let len = Math.round(n / 2);

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= len - i; j++) {
      if (n < 5) {
        resultString += "  ";
      } else {
        resultString += " ";
      }
    }
    for (let k = 1; k <= i; k++) {
      if (n < 5) {
        resultString += "* ";
      } else {
        resultString += "*";
      }
      if (n % 2 == 0 && k == i && n < 5) {
        resultString += "* ";
      } else if (n % 2 == 0 && k == i && n > 5) {
        resultString += "*";
      }
    }
    for (let l = 1; l <= i - 1; l++) {
      if (n < 5) {
        resultString += "* ";
      } else {
        resultString += "*";
      }
    }

    console.log(resultString);
    resultString = "";
  }
  for (let o = 0; o <= 1; o++) {
    resultString += "*";
    let loopLen = 0;
    if (n == 3) {
      loopLen = n;
    } else if (n < 5) {
      loopLen = n + 1;
    } else {
      loopLen = n - 2;
    }
    for (let m = 1; m <= loopLen; m++) {
      resultString += " ";
    }
    resultString += "*\n";
  }

  console.log(resultString);
}

housePattern(7);
housePattern(4);
housePattern(3);