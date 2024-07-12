function printEveryNthElementFromAnArray(inpArr, n) {
  const arr = [...inpArr];
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i += n) {
    newArr[counter] = arr[i];
    counter++;
  }
  console.log(newArr.join(' '));

}

printEveryNthElementFromAnArray(['5', '15', '31', '14', '20'], 2);
printEveryNthElementFromAnArray(['dsa', 'asd', 'demo', 'test'], 2);
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6);