function smallestTwoNumbers(input) {
  let inpArr = [...input];
  let sortedArr = inpArr.sort((a, b) => a - b);
  sortedArr = sortedArr.slice(0, 2);
  console.log(sortedArr.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);