function discountCalculator(age, membership) {

  let discount = 10;

  if (age <= 0) {
    return;
  }

  if (age > 65) {
    discount = 30;
  } else if (age > 17) {
    if (membership) {
      discount = 20;
    }
  }

  console.log(discount + "% discount");
}

discountCalculator(20, 'Yes');
discountCalculator(15, 'No');
discountCalculator(70, 'No');