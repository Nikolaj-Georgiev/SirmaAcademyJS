function staircasePattern(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j < i; j++) {
      for (let k = 1; k < j; k++) {
        result += " ";
      }
    }
    for (let k = 1; k <= i; k++) {
      result += "#"
    }
    console.log(result);
  }
}

staircasePattern(5);
staircasePattern(4);
staircasePattern(2);