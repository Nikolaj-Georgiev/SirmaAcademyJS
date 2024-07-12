function passwordGenerator(n, l) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 97; k < 97 + l; k++) {
        for (let m = 97; m < 97 + l; m++) {
          for (let o = 1; o <= n; o++) {
            if (o > i && o > j) {
              console.log(`${i}${j}${String.fromCharCode(k)}${String.fromCharCode(m)}${o}`);
            }
          }
        }
      }
    }
  }
}

passwordGenerator(2, 4);
passwordGenerator(3, 1);