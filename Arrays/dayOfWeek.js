function dayOfWeek(day) {
  const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (1 <= day && day <= 7) {
    console.log(daysArr[day - 1]);
  } else {
    console.log('Invalid day!');
  }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);