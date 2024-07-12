function alternativeConditionsSecond(n) {

  let count = 0;
  let numbers = 0;
  let flag = false;
  while (count != n) {
    count++;
    let currentLine = ''
    for (let j = n - count; j > count; j -= 2) {
      currentLine += ' ';
    }
    for (let i = 1; i <= count; i++) {
      currentLine += ++numbers;
      if (numbers != 1) {
        currentLine += ' ';
      }
      if (numbers == n) {
        flag = true;
        break;
      }
    }
    console.log(currentLine);
    if (flag) {
      break;
    }

  }

}

alternativeConditionsSecond(7);
alternativeConditionsSecond(10);
alternativeConditionsSecond(12);