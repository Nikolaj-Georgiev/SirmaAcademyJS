function double(num) {
  return num * 2;
}

function square(num) {
  return num ** 2;
}

function compose(doubleFn, squareFn) {
  return (n) => squareFn(doubleFn(n));
}

const doubleThenSquare = compose(double, square);

// function doubleThenSquare(num) {
//   return square(double(num));
// }

console.log(doubleThenSquare(3));