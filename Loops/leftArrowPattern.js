function leftArrowPattern(n) {
  for (let i = 1; i < n; i++) {
    let topPart = '';
    for (let j = n - 1; j > i; j--) {
      topPart += ' ';
    }
    for (let k = 0; k < i; k++) {
      topPart += '*';
    }
    console.log(topPart);

  }
  for (let i = n - 1; i > 1; i--) {
    let botPart = ''
    for (let j = i; j <= n - 1; j++) {
      botPart += ' ';
    }
    for (let k = 0; k < i - 1; k++) {
      botPart += '*';
    }
    console.log(botPart);
  }
}

leftArrowPattern(5);
leftArrowPattern(4);
leftArrowPattern(10);