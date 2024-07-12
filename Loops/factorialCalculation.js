function factorialCalculation(n) {

  let m = Math.abs(n);
  let fact = 1;

  for (let i = 1; i <= m; i++) {
    fact *= i;
  }

  console.log(fact);
}

factorialCalculation(5)
factorialCalculation(3)
factorialCalculation(0)
factorialCalculation(1)
factorialCalculation(10)