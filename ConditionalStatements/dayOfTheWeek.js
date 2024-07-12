function dayOfWeek(dayAsNum) {

  let day;

  switch (dayAsNum) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      day = "Error";
      break;
  }

  console.log(day);
}

dayOfWeek(1)
dayOfWeek(2)
dayOfWeek(3)
dayOfWeek(4)
dayOfWeek(5)
dayOfWeek(6)
dayOfWeek(7)
dayOfWeek(8) 