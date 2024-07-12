function christmasTree(n) {
  for (let i = 0; i <= n; i++) {
    let stringLine = ''
    for (let j = n - i; j >= 0; j--) {
      stringLine += " ";
      if (j == 0 && i != 0) {
        let counter = 0;
        do {
          stringLine += "*";
          counter++;
        } while (counter != n - (n - i));
      }
    }
    stringLine += " | ";

    for (let k = 0; k < i; k++) {
      stringLine += "*";
    }
    console.log(stringLine);
  }
}

christmasTree(1);
christmasTree(2);
christmasTree(3);
christmasTree(4);