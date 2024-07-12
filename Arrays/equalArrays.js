function equalArrays(inp1, inp2) {
  const arr1 = [...inp1];
  const arr2 = [...inp2];
  const len = Math.max(arr1.length, arr2.length);
  let isIdentical = true;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    if (arr1[i] != arr2[i]) {
      isIdentical = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    }
  }
  if (isIdentical) {
    for (let i = 0; i < len; i++) {
      sum += Number(arr1[i]);
    }
    console.log(`Arrays are identical.Sum: ${sum}`);
  }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);