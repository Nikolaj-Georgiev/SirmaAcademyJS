function padawanEquipment(money, students, lightSaberPrice, robePrice, beltPrice) {
  let equipmentPrice = lightSaberPrice * Math.ceil(students * 1.1);

  for (let i = 1; i <= students; i++) {
    if (i % 6 == 0) {
      equipmentPrice += robePrice;
    } else {
      equipmentPrice += beltPrice + robePrice;
    }
  }

  if (money >= equipmentPrice) {
    console.log(`The money is enough - it would cost ${equipmentPrice.toFixed(2)}lv.`);
  } else {
    console.log(`George Lucas will need ${(equipmentPrice - money).toFixed(2)}lv more.`);
  }

}

padawanEquipment(100, 2, 1.0, 2.0, 3.0)
padawanEquipment(100, 42, 12.0, 4.0, 3.0)