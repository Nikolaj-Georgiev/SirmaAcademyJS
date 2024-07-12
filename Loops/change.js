function change(enteredValue) {

  let valueInCoins = Math.floor(enteredValue * 100);
  let numberOfCoins = 0;

  if (valueInCoins >= 200) {
    numberOfCoins += Math.floor(valueInCoins / 200);
    valueInCoins %= 200;
  }
  if (valueInCoins >= 100) {
    numberOfCoins += Math.floor(valueInCoins / 100);
    valueInCoins %= 100;
  }
  if (valueInCoins >= 50) {
    numberOfCoins += Math.floor(valueInCoins / 50);
    valueInCoins %= 50;
  }
  if (valueInCoins >= 20) {
    numberOfCoins += Math.floor(valueInCoins / 20);
    valueInCoins %= 20;
  }
  if (valueInCoins >= 10) {
    numberOfCoins += Math.floor(valueInCoins / 10);
    valueInCoins %= 10;
  }
  if (valueInCoins >= 5) {
    numberOfCoins += Math.floor(valueInCoins / 5);
    valueInCoins %= 5;
  }
  if (valueInCoins >= 2) {
    numberOfCoins += Math.floor(valueInCoins / 2);
    valueInCoins %= 2;
  }
  if (valueInCoins >= 1) {
    numberOfCoins += Math.floor(valueInCoins / 1);
    valueInCoins %= 1;
  }

  console.log(numberOfCoins);
}

change(1.23)
change(2)
change(0.56)
change(2.73)