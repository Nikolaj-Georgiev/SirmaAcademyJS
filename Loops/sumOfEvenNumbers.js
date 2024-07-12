function sumOfEvenNumbers(n) {
  let sum = 0;
  let length = 0;

  if (n % 2 == 0) {
    length = 2 * n;
  } else {
    length = 2 * n + 1;
  }

  for (let i = 0; i <= length; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }

  console.log(sum);
}


sumOfEvenNumbers(3)
sumOfEvenNumbers(5)
sumOfEvenNumbers(1)
sumOfEvenNumbers(0)
sumOfEvenNumbers(10)