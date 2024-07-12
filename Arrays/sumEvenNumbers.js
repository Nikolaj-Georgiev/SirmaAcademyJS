function sumEvenNumbers(input) {
  let arr = [...input];
  let sum = arr.reduce((a, c) => Number(c) % 2 == 0 ? Number(c) + Number(a) : a, 0);
  console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);