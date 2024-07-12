function arrowPattern(n) {
  let resultString = "";
  let len = n - 1;

  for (let i = 1; i <= len; i++) {
    for (let k = 1; k <= len - i; k++) {
      resultString += " ";
    }
    for (let j = 1; j <= i; j++) {
      resultString += "*" + " ";
    }
    console.log(resultString);
    resultString = "";
  }
  for (let o = 0; o < len; o++) {
    let loopLen = n - 2;
    for (let l = 1; l <= Math.round(loopLen / 2); l++) {
      resultString += " ";
    }
    let finalLoopLen = len;
    if (n % 2 != 0) {
      finalLoopLen--;
    }
    for (let m = 1; m <= finalLoopLen; m++) {
      resultString += "*";
    }
    resultString += "\n";
  }

  console.log(resultString);
}

arrowPattern(7);
arrowPattern(4);
arrowPattern(6);