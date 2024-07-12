function alarmAfter15Minutes(hour, minute) {

  let addedMinutes = minute + 15;

  if (addedMinutes > 59) {
    hour += 1;
    addedMinutes = addedMinutes - 60;

    if (hour > 23) {
      hour = 0;
    }
  }

  console.log(`${hour.toString().padStart(2, 0)}:${addedMinutes.toString().padEnd(2, 0)}`);
}


alarmAfter15Minutes(1, 47)
alarmAfter15Minutes(0, 2)
alarmAfter15Minutes(23, 59)
alarmAfter15Minutes(11, 7)