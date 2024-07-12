function firstAndLastKNumbers(k, arr) {
  let firstKArr = arr.slice(0, k);
  let lastKArr = arr.slice(-k);
  console.log(firstKArr.join(' '));
  console.log(lastKArr.join(' '));
}

firstAndLastKNumbers(2, [7, 8, 9]);
firstAndLastKNumbers(3, [6, 7, 8, 9]);