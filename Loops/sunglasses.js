function sunglasses(n) {
  let stringLine = "";
  if (3 <= n && n <= 100) {
    for (let i = 1; i <= n; i++) {
      let innerStringLine = "";
      for (let j = 1; j <= n * 2; j++) {
        if (i == 1 || i == n) {
          innerStringLine += "*";
        } else {
          if (j == 1 || j == n * 2) {
            innerStringLine += "*";
          } else {
            innerStringLine += "/";
          }
        }
      }

      if (i == Math.round(n / 2)) {
        for (let k = 1; k <= n; k++) {
          innerStringLine += "|";
        }
      } else {
        for (let m = 1; m <= n; m++) {
          innerStringLine += " ";
        }
      }
      for (let l = 1; l <= n * 2; l++) {
        if (i == 1 || i == n) {
          innerStringLine += "*";
        } else {
          if (l == 1 || l == n * 2) {
            innerStringLine += "*";
          } else {
            innerStringLine += "/";
          }
        }
      }
      stringLine += innerStringLine + "\n";
    }
    console.log(stringLine);
  }
}

sunglasses(3);
sunglasses(4);
sunglasses(5);