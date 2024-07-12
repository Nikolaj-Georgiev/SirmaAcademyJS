function fibonacciSequenceSum(input) {

  let n = Math.abs(input);

  if (n == 0 || n == 1) {
    console.log(n);
    return;
  }

  let sum = 0;
  let a = 0;
  let b = 1;

  for (let i = 0; i <= n; i++) {
    sum += a;
    let next = a + b;
    a = b;
    b = next;
  }

  console.log(sum);

}

fibonacciSequenceSum(3);
fibonacciSequenceSum(5);
fibonacciSequenceSum(1);
fibonacciSequenceSum(0);
fibonacciSequenceSum(10);