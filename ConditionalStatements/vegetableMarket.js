function vegetableMarket(vegetable, dayOfWeek, quantity) {

  switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (vegetable) {
        case "tomato":
          console.log((quantity * 2.80).toFixed(2));
          break;
        case "onion":
          console.log((quantity * 1.30).toFixed(2));
          break;
        case "lettuce":
          console.log((quantity * 0.85).toFixed(2));
          break;
        case "cucumber":
          console.log((quantity * 1.75).toFixed(2));
          break;
        case "pepper":
          console.log((quantity * 3.50).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "Saturday":
    case "Sunday":
      switch (vegetable) {
        case "tomato":
          console.log((quantity * 2.50).toFixed(2));
          break;
        case "onion":
          console.log((quantity * 1.20).toFixed(2));
          break;
        case "lettuce":
          console.log((quantity * 0.80).toFixed(2));
          break;
        case "cucumber":
          console.log((quantity * 1.45).toFixed(2));
          break;
        case "pepper":
          console.log((quantity * 5.50).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    default:
      console.log("error");
      break;
  }
}


vegetableMarket("tomato", "Tuesday", 2)
vegetableMarket("onion", "Sunday", 3)
vegetableMarket("pepper", "Monday", 10)
vegetableMarket("banana", "Friday", 5)