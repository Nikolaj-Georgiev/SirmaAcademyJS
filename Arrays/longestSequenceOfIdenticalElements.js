function longestSequenceOfIdenticalElements(input) {
  let arr = [...input];

  let start = 0;
  let end = 0;
  let isLongest = false;
  let longestSeq = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[Math.min((i + 1), arr.length - 1)]) {
      if (!isLongest) {
        start = i;
      }
      isLongest = true;
    }
    if (arr[i] != arr[Math.min((i + 1), arr.length - 1)] && isLongest || isLongest && i == arr.length - 1) {
      end = i;
    }
    if (end != 0 && isLongest) {
      let longest = [];
      for (let j = start; j <= end; j++) {
        longest[Math.max(j - start, 0)] = arr[j];
      }
      if (longest.length > longestSeq.length) {
        longestSeq = longest;
      } else if (longest.length == longestSeq.length) {
        longestSeq = longest;
      }
      isLongest = false;
      end = 0;
      start = 0;
      counter = 0;
    }
    if (isLongest) {
      counter++;
    }
  }

  console.log(longestSeq.join(' '));

}

longestSequenceOfIdenticalElements([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
longestSequenceOfIdenticalElements([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
longestSequenceOfIdenticalElements([1, 1, 2, 3, 4, 5, 6, 2, 2]);
longestSequenceOfIdenticalElements([4, 4, 4, 4]);
longestSequenceOfIdenticalElements([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);

// В условието пише ако са равни да се вземе тази от дясно. Аз го чета като новата най-дълга. Затова аутпута се разминава там където има две най-дълги, спрямо това, което е показано в заданието. Много лесно може да се обърне.