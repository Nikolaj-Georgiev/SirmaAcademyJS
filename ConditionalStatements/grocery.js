function grocery(product, city, quantity) {
  let price;

  switch (product) {
    case "tea": {
      switch (city) {
        case "Sofia": {
          price = quantity * 0.50;
          break;
        }
        case "Plovdiv": {
          price = quantity * 0.40;
          break;
        }
        case "Varna": {
          price = quantity * 0.45;
          break;
        }
      }
      break;
    }
    case "water": {
      switch (city) {
        case "Sofia": {
          price = quantity * 0.80;
          break;
        }
        case "Plovdiv":
        case "Varna": {
          price = quantity * 0.70;
          break;
        }
      }
      break;
    }
    case "juice": {
      switch (city) {
        case "Sofia": {
          price = quantity * 1.20;
          break;
        }
        case "Plovdiv": {
          price = quantity * 1.15;
          break;
        }
        case "Varna": {
          price = quantity * 1.10;
          break;
        }
      }
      break;
    }
    case "sweets": {
      switch (city) {
        case "Sofia": {
          price = quantity * 1.45;
          break;
        }
        case "Plovdiv": {
          price = quantity * 1.30;
          break;
        }
        case "Varna": {
          price = quantity * 1.35;
          break;
        }
      }
      break;
    }
    case "chips": {
      switch (city) {
        case "Sofia": {
          price = quantity * 1.60;
          break;
        }
        case "Plovdiv": {
          price = quantity * 1.50;
          break;
        }
        case "Varna": {
          price = quantity * 1.55;
          break;
        }
      }
    }
  }

  console.log(price.toFixed(2));
}

grocery("tea", "Varna", 2)
grocery("chips", "Plovdiv", 1)
grocery("juice", "Sofia", 6)
grocery("sweets", "Plovdiv", 1)