function collatzConjecture(input) {

  let n = Math.abs(input);


  if (n <= 0) {
    console.log("Try again with a valid number (higher then 0)");
    return;
  }

  let result = n + " ";

  while (n > 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }

    if (n == 1) {
      result += n;
    } else {
      result += n + " ";
    }
  }

  console.log(result);

}

collatzConjecture(6);
collatzConjecture(12);
collatzConjecture(9);
collatzConjecture(200);
collatzConjecture(15);