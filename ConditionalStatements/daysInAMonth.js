function daysInAMonth(month) {

  if (month % 2 == 0 && month != 2 && month != 8) {
    console.log(30);
  } else if (month % 2 != 0 || month == 8) {
    console.log(31);
  } else {
    console.log(28);
  }
}


daysInAMonth(1);
daysInAMonth(2);
daysInAMonth(4);
daysInAMonth(7);