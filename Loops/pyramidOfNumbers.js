function pyramidOfNumbers(n) {
  if (n == 0) {
    console.log("No pyramid of numbers");
    return;
  }

  let resultString = "";
  let counter = 1;
  let flag = false;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (counter > n) {
        flag = true;
        break;
      }

      resultString += counter + " ";
      counter++;
    }

    console.log(resultString);
    resultString = "";

    if (flag) {
      break;
    }
  }
}

pyramidOfNumbers(7)
pyramidOfNumbers(10)
pyramidOfNumbers(15)