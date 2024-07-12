function armstrongNumberCheck(n) {
  let nStr = '' + n;
  let length = nStr.length;
  let output = "Armstrong";
  let sum = 0;

  for (let i = 0; i < nStr.length; i++) {
    let currentDigit = nStr.charAt(i);
    sum += Math.pow(currentDigit, length);
  }

  if (sum != n) {
    output = "Not Armstrong";
  }

  console.log(output);
}

armstrongNumberCheck(153);
armstrongNumberCheck(370);
armstrongNumberCheck(123);
armstrongNumberCheck(407);
armstrongNumberCheck(1634);