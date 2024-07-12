function extractANonDecreasingSubsequenceFromAnArray(arr) {
  let biggest = 0;
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= biggest) {
      biggest = arr[i];
      newArr[counter] = arr[i];
      counter++;
    }
  }
  console.log(newArr.join(' '));
}

extractANonDecreasingSubsequenceFromAnArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractANonDecreasingSubsequenceFromAnArray([1, 2, 3, 4]);
extractANonDecreasingSubsequenceFromAnArray([20, 3, 2, 15, 6, 1]);