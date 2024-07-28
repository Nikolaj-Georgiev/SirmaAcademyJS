const multiply = a => b => c => a * b * c;
const a = multiply(2);
const b = a(3);
const c = b(4);
console.log(c);
console.log(multiply(2)(3)(4));