function rageExpenses(lostGamesCount, headsetPrice, mousePrice, keyboardPrice, displayPrice) {

  let rageExpenses = 0;

  let displayCounter = 0;
  for (let i = 1; i <= lostGamesCount; i++) {
    if (i % 2 == 0) {
      rageExpenses += headsetPrice;
    }

    if (i % 3 == 0) {
      rageExpenses += mousePrice;
    }

    if (i % 2 == 0 && i % 3 == 0) {
      displayCounter++;
      rageExpenses += keyboardPrice;
    }

    if (displayCounter % 2 == 0 && displayCounter != 0) {
      rageExpenses += displayPrice;
      displayCounter = 0;
    }
  }

  console.log(`Rage expenses: ${rageExpenses.toFixed(2)} lv.`);
}

rageExpenses(7, 2, 3, 4, 5)
rageExpenses(23, 12.5, 21.5, 40, 200)

