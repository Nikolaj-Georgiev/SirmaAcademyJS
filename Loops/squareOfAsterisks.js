function squareOfAsterisks(n) {
  let resultString = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      resultString += "*" + " ";
    }
    console.log(resultString.trim());
    resultString = "";
  }
}

squareOfAsterisks(2);
squareOfAsterisks(3);