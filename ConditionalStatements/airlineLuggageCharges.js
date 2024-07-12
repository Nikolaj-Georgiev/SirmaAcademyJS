function airlineLuggageCharges(weight, size) {

  let overweightFee = 0;
  let oversizeFee = 0;
  let weightText = "";
  let sizeText = "";
  let result = "";

  if (weight > 50) {
    overweightFee = 100;
    weightText = "Overweight";
  }

  if (size > 158) {
    if ((size - 158) > 50) {
      oversizeFee = 200;
      sizeText = "Oversize";
    } else if ((size - 158) > 20) {
      oversizeFee = 100;
      sizeText = "Oversize";
    } else {
      oversizeFee = 50;
      sizeText = "Oversize";
    }
  }

  if (overweightFee > 0 && oversizeFee > 0) {
    result = "$" + (overweightFee + oversizeFee + 50) + " (" + weightText + " + " + sizeText + " + Handling)";
  } else if (overweightFee > 0) {
    result = "$" + overweightFee + " (" + weightText + ")";
  } else {
    result = "$" + oversizeFee + " (" + sizeText + ")";
  }

  console.log(result);
}


airlineLuggageCharges(52, 160);
airlineLuggageCharges(48, 180);
airlineLuggageCharges(55, 190);