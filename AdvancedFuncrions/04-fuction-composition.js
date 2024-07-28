function double(num) {
  return num * 2;
}

function square(num) {
  return num ** 2;
}

function doubleThenSquare(num) {
  return square(double(num));
}

console.log(doubleThenSquare(3));