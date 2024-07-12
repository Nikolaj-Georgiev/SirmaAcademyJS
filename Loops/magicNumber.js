function magicNumber(start, end, magicNumber) {

  if (start >= end || start < 0 || end > 1000 || magicNumber < 1 || magicNumber > 10000) {
    console.log("Please, enter valid data");
    return;
  }

  let result = "";
  let count = 0;
  let isMagicNumber = false;
  for (let i = start; i <= end; i++) {
    if (isMagicNumber) {
      break;
    }
    for (let j = start; j <= end; j++) {
      count++;
      if (i + j == magicNumber) {
        isMagicNumber = true;
        result = `Combination ${i * j} - (${i} + ${j} = ${magicNumber})`;
      }
    }
  }
  if (!isMagicNumber) {
    result = `${count} combinations - neither equals ${magicNumber}`;
  }

  console.log(result);
}

magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);