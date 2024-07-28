function partialSum(a) {
  let partial = a;
  return (b, c, d) => partial + b + c + d;
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3));
const addSix = partialSum(6)
console.log(addSix(7, 8, 9));