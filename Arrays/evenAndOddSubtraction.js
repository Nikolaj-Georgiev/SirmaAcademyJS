function evenAndOddSubtraction(input) {
  let arr = [...input];
  const evenNumsArr = arr.filter((e) => e % 2 === 0);
  const oddNumsArr = arr.filter((e) => e % 2 !== 0);
  console.log(evenNumsArr.reduce((a, c) => a + c, 0) - oddNumsArr.reduce((a, c) => a + c, 0));
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);

// съжалявам, малко е нечетимо но бързах да хвана срока