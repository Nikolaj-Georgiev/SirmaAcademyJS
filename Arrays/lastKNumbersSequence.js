function lastKNumbersSequence(n, k) {
  let arr = [1];
  for (let i = 1; i < n; i++) {
    let tempArr = [];
    if (i - k < 0) {
      tempArr = [...arr];
    } else {
      tempArr = arr.slice(i - k);
    }
    let sum = tempArr.reduce((a, c) => a + c, 0);
    arr[i] = sum;
  }

  console.log(arr.join(' '));
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);