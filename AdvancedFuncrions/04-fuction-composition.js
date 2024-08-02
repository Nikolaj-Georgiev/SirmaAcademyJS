const double = (num) => num * 2;
const square = (num) => num ** 2;
const compose = (double, square) => (n) => square(double(n)); 
const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3));

// function double(num) {
//   return num * 2;
// }
  
// function square(num) {
//   return num ** 2;
// }

    // function compose(doubleFn, squareFn) {
      //   return (n) => squareFn(doubleFn(n));
    // }
// function doubleThenSquare(num) {
//   return square(double(num));
// }