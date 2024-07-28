function multiply(a, b) {
  return a * b;
}

function multiplyByFive(num) {
  const a = num;
  const b = multiply.bind(this, ...[a, 5]);
  return b(num);
}

console.log(multiplyByFive(3));