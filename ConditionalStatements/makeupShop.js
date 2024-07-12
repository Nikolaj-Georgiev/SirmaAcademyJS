function makeupShop(renovationPrice, powderCount, lipstickCount, spiralCount, shadowsCount, concealerCount) {

  const powderPrice = 2.60;
  const lipstickPrice = 3;
  const spiralPrice = 4.10;
  const shadowsPrice = 8.20;
  const concealerPrice = 2;


  let markupOrderCount = powderCount + lipstickCount + spiralCount + shadowsCount + concealerCount;
  let totalPrice = (powderPrice * powderCount) + (lipstickPrice * lipstickCount) + (spiralPrice * spiralCount)
    + (concealerPrice * concealerCount) + (shadowsPrice * shadowsCount);

  if (markupOrderCount >= 50) {
    totalPrice = totalPrice * 0.75;
  }

  const finalIncome = totalPrice * 0.90;
  const moneyLeft = finalIncome - renovationPrice;

  if (moneyLeft >= 0) {
    console.log(`Yes! ${moneyLeft.toFixed(2)} BGN left.`);
  } else {
    console.log(`Not enough money! ${Math.abs(moneyLeft).toFixed(2)} BGN needed.`);
  }

}


makeupShop(40.8, 20, 25, 30, 50, 10)
makeupShop(320, 8, 2, 5, 5, 1)