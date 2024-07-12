function hourglassPattern(n) {
  let top = '';
  let topCone = '';
  let botCone = '';
  let bot = '';
  for (let i = 0; i < n + 2; i++) {
    top += '#';
  }
  console.log(top);
  // Горна част
  for (let i = 1; i <= (n + 1) / 2; i++) {
    for (let j = 0; j < i; j++) {
      topCone += ' ';
    }
    topCone += '#';
    for (let j = 0; j < n - 2 * i; j++) {
      topCone += ' ';
    }

    if (n - 2 * i >= 0) {
      topCone += '#';
    }
    console.log(topCone);
    topCone = '';
  }
  // Долна част
  for (let i = Math.floor((n + 1) / 2) - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      botCone += ' ';
    }
    botCone += '#';
    for (let j = 0; j < n - 2 * i; j++) {
      botCone += ' ';
    }
    if (n - 2 * i >= 0) {
      botCone += '#';
    }
    console.log(botCone);
    botCone = '';
  }
  for (let i = 0; i < n + 2; i++) {
    bot += '#';
  }
  console.log(bot);
}

hourglassPattern(5);
hourglassPattern(8);
hourglassPattern(2);
hourglassPattern(20);
hourglassPattern(21);
hourglassPattern(55);