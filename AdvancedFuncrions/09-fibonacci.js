function getFibonacci() {
  let current = 0;
  let next = 1;

  return function () {
    let fibonacci = current;
    current = next;
    next = fibonacci + next;
    return current;
  }
}

const fibonacci = getFibonacci();
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());