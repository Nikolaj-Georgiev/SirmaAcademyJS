function rhombusFromAsterisks(n) {
  let resultString = "";

  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= n - i; k++) {
      resultString += " ";
    }
    for (let j = 1; j <= i; j++) {
      resultString += "*" + " ";
    }
    console.log(resultString);
    resultString = "";
  }
  for (let i = n - 1; i > 0; i--) {
    for (let l = 1; l <= n - i; l++) {
      resultString += " ";
    }
    for (let j = i; j > 0; j--) {
      resultString += "*" + " ";
    }
    console.log(resultString);
    resultString = "";
  }
}

rhombusFromAsterisks(1);
rhombusFromAsterisks(2);
rhombusFromAsterisks(3);
rhombusFromAsterisks(4);