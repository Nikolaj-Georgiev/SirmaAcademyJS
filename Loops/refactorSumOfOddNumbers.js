function refactorSumOfOddNumbers(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    console.log(2 * i + 1);
    sum += 2 * i + 1;
  }
  console.log(`Sum: ${sum}`);
}

refactorSumOfOddNumbers(5);