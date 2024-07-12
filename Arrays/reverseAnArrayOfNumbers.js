function reverseAnArrayOfNumbers(n, inputArr) {
  let arr = [...inputArr];
  let resultArr = arr.splice(0, n).reverse();
  console.log(resultArr.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);