function addAndRemoveElementsFromArray(input) {
  let n = input.length;
  let resultArr = [];
  let counter = 1;
  let isEmpty = false;
  for (let i = 0; i < n; i++) {
    if (input[i] === 'add') {
      resultArr.push(counter);
      counter++;
    } else {
      if (resultArr.length < 1) {
        console.log('Empty');
        isEmpty = true;
        break;
      }
      resultArr.pop();
      counter++;
    }
  }
  if (!isEmpty) {
    console.log(resultArr.join(' '));
  }
}

addAndRemoveElementsFromArray(['add', 'add', 'add', 'add']);
addAndRemoveElementsFromArray(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElementsFromArray(['remove', 'remove', 'remove']);
addAndRemoveElementsFromArray(['add', 'remove', 'add']);