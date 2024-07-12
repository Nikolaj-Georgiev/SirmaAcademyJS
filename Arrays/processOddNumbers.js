function processOddNumbers(input) {
  let resultArr = [];
  let counter = 0;
  for (let i = 1; i < input.length; i++) {
    if (i % 2 != 0) {
      resultArr[counter] = input[i];
      counter++;
    }
  }

  console.log(resultArr.reverse().map((x) => x * 2).join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);