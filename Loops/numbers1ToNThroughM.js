function numbers1ToNThroughM(n, m) {
  if (m == 0) {
    console.log("Please, try different number");
    return;
  }

  for (let i = 1; i <= n; i += m) {
    console.log(i);
  }
}

numbers1ToNThroughM(10, 2);