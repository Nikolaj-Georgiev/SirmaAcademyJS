function hollowRectanglePattern(n, m) {
  let rows = Math.abs(n);
  let cols = Math.abs(m);

  let result = "";

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (col != cols - 1 && col != 0 && row != rows - 1 && row != 0) {
        result += " ";
      } else {
        result += "*";
      }

      if (col == cols - 1) {
        result += "\n";
      }
    }
  }

  console.log(result);
}

hollowRectanglePattern(4, 6);
hollowRectanglePattern(2, 2);
hollowRectanglePattern(3, 4);