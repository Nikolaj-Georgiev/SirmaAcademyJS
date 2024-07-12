function reverseAnArrayOfStrings(input) {
  let arr = [...input];
  arr = arr.reverse();
  console.log(arr.join(' '));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);