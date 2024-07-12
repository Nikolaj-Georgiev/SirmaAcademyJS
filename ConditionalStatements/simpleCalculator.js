function simpleCalculator(a, b, operator) {
  switch (operator) {
    case "add":
      console.log((a + b).toFixed(2));
      break;
    case "subtract":
      console.log((a - b).toFixed(2));
      break;
    case "multiply":
      console.log((a * b).toFixed(2));
      break;
    case "divide":
      if (b == 0) {
        console.log("You can't divide by zero");
        break;
      }
      console.log((a / b).toFixed(2));
      break;
    default:
      console.log("Invalid operator");
  }
}

simpleCalculator(5, 5, "add")
simpleCalculator(10, 12, "subtract")
simpleCalculator(9, 3, "divide")
simpleCalculator(5, 2, "divide")
simpleCalculator(3.1, 0.1, "multiply")