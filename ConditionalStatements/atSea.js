function atSea(daysToStay, typeOfRoom, assessment) {
  let totalPrice = daysToStay - 1;
  const isValidRoom = typeOfRoom === "single room" || typeOfRoom === "apartment" || typeOfRoom === "president apartment";
  const isValidAssessment = assessment === "positive" || assessment === "negative";
  const isValidDays = daysToStay >= 0 && daysToStay <= 365;

  if (!isValidDays || !isValidAssessment || !isValidRoom) {
    return;
  }

  if (daysToStay < 10) {
    switch (typeOfRoom) {
      case "single room":
        totalPrice = totalPrice * 25;
        break;
      case "apartment":
        totalPrice = (totalPrice * 50) * 0.70;
        break;
      case "president apartment":
        totalPrice = (totalPrice * 100) * 0.90;
        break;
    }
  } else if (daysToStay <= 15) {
    switch (typeOfRoom) {
      case "single room":
        totalPrice = totalPrice * 25;
        break;
      case "apartment":
        totalPrice = (totalPrice * 50) * 0.65;
        break;
      case "president apartment":
        totalPrice = (totalPrice * 100) * 0.85;
        break;
    }
  } else {
    switch (typeOfRoom) {
      case "single room":
        totalPrice = totalPrice * 25;
        break;
      case "apartment":
        totalPrice = (totalPrice * 50) * 0.50;
        break;
      case "president apartment":
        totalPrice = (totalPrice * 100) * 0.80;
        break;
    }
  }

  if (assessment === "positive") {
    totalPrice = totalPrice * 1.25;
  } else {
    totalPrice = totalPrice * 0.90;
  }

  console.log(totalPrice.toFixed(2));
}


atSea(11, "apartment", "positive")
atSea(30, "president apartment", "negative")
atSea(12, "single room", "positive")
atSea(2, "apartment", "positive")