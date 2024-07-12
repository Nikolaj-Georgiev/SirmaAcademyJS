function coinsAndNotes(oneLvCoins, twoLvCoins, fiveLvCoins, sumOfLeva) {
  let versions = 0;

  for (let i = 0; i <= oneLvCoins; i++) {
    for (let j = 0; j <= twoLvCoins; j++) {
      for (let k = 0; k <= fiveLvCoins; k++) {
        let tempSum = i * 1 + j * 2 + k * 5;
        if (tempSum == sumOfLeva) {
          console.log(`Version: ${++versions}`);
          console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sumOfLeva} lv.`);
        }
      }
    }
  }
}

coinsAndNotes(3, 2, 3, 10)
coinsAndNotes(5, 3, 1, 7)