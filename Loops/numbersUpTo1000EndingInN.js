function numbersUpTo1000EndingInN(n) {
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 == n) console.log(i);
  }
}

numbersUpTo1000EndingInN(6)
numbersUpTo1000EndingInN(8)
