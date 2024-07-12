function uniqueCodes(firstNumber, secondNumber, thirdNumber) {

  for (let i = 2; i <= firstNumber; i += 2) {
    for (let j = 2; j <= secondNumber; j += 2) {
      for (let k = 2; k <= thirdNumber; k += 2) {
        console.log(i + " " + j + " " + k);
      }
      if (j == 2) {
        j--;
      }

    }
  }
}

uniqueCodes(3, 5, 5);
uniqueCodes(6, 2, 6);