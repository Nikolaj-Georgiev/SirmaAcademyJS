function movieTicketPrice(age) {
  const childPrice = 5;
  const teenPrice = 8;
  const adultPrice = 10;

  if (age < 0) {
    console.log("invalid age");
    return;
  }

  if (age >= 20) {
    console.log(`$${adultPrice}`);
  } else if (age > 12) {
    console.log(`$${teenPrice}`);
  } else {
    console.log(`$${childPrice}`);
  }
}


movieTicketPrice(10);
movieTicketPrice(16);
movieTicketPrice(25);
movieTicketPrice(13);