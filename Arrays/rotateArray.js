function rotateArray(input, rotations) {
  let inpArr = [...input];
  if (rotations == inpArr.length || rotations % inpArr.length == 0) {
    console.log(inpArr.join(' '));
    return;
  }
  const actualRotations = rotations % inpArr.length;
  for (let i = 0; i < actualRotations; i++) {
    let temp = inpArr.pop();
    inpArr.unshift(temp)
  }
  console.log(inpArr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);