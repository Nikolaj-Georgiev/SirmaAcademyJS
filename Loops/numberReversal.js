function numberReversal(n) {

  let m = Math.abs(n);
  let mStr = m.toString();
  let reversN = "";

  for (let i = mStr.length - 1; i >= 0; i--) {
    reversN = reversN + mStr[i];
  }
  console.log(reversN);
}


numberReversal(123)
numberReversal(9876)
numberReversal(505)
numberReversal(10203)
numberReversal(7)