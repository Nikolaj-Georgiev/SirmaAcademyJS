function holiday(budget, season) {

  if (budget < 10 || budget > 5000) {
    return;
  }
  /* this range is declared in the condition, therefore the program does not work out of it. */

  if (budget <= 100) {
    if (season === "summer") {
      console.log(`Somewhere in Bulgaria\nCamp - ${(budget * 0.30).toFixed(2)}`);
    } else if (season === "winter") {
      console.log(`Somewhere in Bulgaria\nHotel - ${(budget * 0.70).toFixed(2)}`);
    }
  } else if (budget <= 1000) {
    if (season === "summer") {
      console.log(`Somewhere in Europe\nCamp - ${(budget * 0.40).toFixed(2)}`);
    } else if (season === "winter") {
      console.log(`Somewhere in Europe\nHotel - ${(budget * 0.80).toFixed(2)}`);
    }
  } else if (budget > 1000) {
    switch (season) {
      case "summer":
      case "winter":
        console.log(`Somewhere in Asia\nHotel - ${(budget * 0.90).toFixed(2)}`);
        break;
    }

  }
}

holiday(50, "summer")
holiday(75, "winter")
holiday(312, "summer")
holiday(678.53, "winter")
holiday(1500, "summer")