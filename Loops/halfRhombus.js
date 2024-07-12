function halfRhombus(n) {
  let resultString = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      resultString += "*" + " ";
    }
    console.log(resultString.trim());
    resultString = "";
  }
  for (let i = n - 1; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      resultString += "*" + " ";
    }
    console.log(resultString.trim());
    resultString = "";
  }
}

halfRhombus(1)
halfRhombus(2)
halfRhombus(3)
halfRhombus(4)