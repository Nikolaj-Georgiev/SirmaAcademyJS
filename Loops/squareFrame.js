function squareFrame(n) {
  for (let i = 1; i <= n; i++) {
    let lineString = '';
    for (let j = 1; j <= (n + (n - 1)); j++) {
      if (j == 1 || j == (n + (n - 1))) {
        if (i == 1 || i == n) {
          lineString += "*";
        } else {
          lineString += "|";
        }
      } else if (j % 2 == 0) {
        lineString += " ";
      } else {
        lineString += "-";
      }
    }
    console.log(lineString);
    lineString = '';
  }
}

squareFrame(3);
squareFrame(4);
squareFrame(5);
squareFrame(6);