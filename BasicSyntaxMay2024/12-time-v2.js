function timeV2(mins) {
  let hours = Math.floor(mins / 60);
  let minutes = mins % 60;
  console.log(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `${minutes}0` : minutes}`);
}


timeV2(60);
timeV2(90);
timeV2(325);