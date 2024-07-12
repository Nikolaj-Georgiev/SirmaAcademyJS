function arrayManipulations(input) {
  let inpArr = [...input];
  let arr = inpArr.splice(0, 1)[0].split(' ').map(x => Number(x));
  for (let i = 0; i < inpArr.length; i++) {
    let commandLine = inpArr[i].split(' ');
    switch (commandLine[0]) {
      case 'Add':
        arr.push(Number(commandLine[1]));
        break;
      case 'Remove':
        arr = arr.filter((x) => x !== Number(commandLine[1]));
        break;
      case 'RemoveAt':
        arr.splice(Number(commandLine[1]), 1);
        break;
      case 'Insert':
        arr.splice(Number(commandLine[2]), 0, Number(commandLine[1]))
        break;
    }
  }
  console.log(arr.join(' '));
}

arrayManipulations(["4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3"]);