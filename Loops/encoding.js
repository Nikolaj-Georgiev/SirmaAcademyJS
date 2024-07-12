function encoding(input) {
  const digits = String(input);
  for (let i = digits.length - 1; i >= 0; i--) {
    let result = "";
    let digit = +digits.charAt(i);
    let temp = digit;
    if (temp == 0) {
      console.log("ZERO");
    } else {
      temp += 33;
      let ch = String.fromCharCode(temp);
      for (let j = 0; j < digit; j++) {
        result += ch;
      }
      console.log(result);
    }
  }

}

encoding(2049)
encoding(9347439)