function treePattern(n) {
  let resultString = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      resultString += " ";
    }
    for (let k = 1; k <= i; k++) {
      resultString += "*";
    }
    for (let l = 1; l <= i - 1; l++) {
      resultString += "*";
    }

    console.log(resultString);
    resultString = "";
  }

  for (let m = 1; m <= n - 1; m++) {
    resultString += " ";
  }
  resultString += "*";
  console.log(resultString);

}

treePattern(6);
treePattern(4);
treePattern(3);