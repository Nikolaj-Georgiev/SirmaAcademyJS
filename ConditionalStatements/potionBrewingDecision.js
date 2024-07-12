function potionBrewingDecision(ingredient1, ingredient2) {

  let result = "Can't brew any potion.";

  if (ingredient1 == "herbs" || ingredient2 == "herbs") {
    if (ingredient1 == "water" || ingredient2 == "water") {
      result = "Brew a health potion.";
    } else if (ingredient1 == "oil" || ingredient2 == "oil") {
      result = "Brew a stealth potion.";
    } else {
      result = "Brew a minor stamina potion.";
    }
  } else if (ingredient1 == "berries" || ingredient2 == "berries") {
    if (ingredient1 == "sugar" || ingredient2 == "sugar") {
      result = "Brew a speed potion.";
    } else {
      result = "Brew a minor energy potion.";
    }
  }

  console.log(result);

}

potionBrewingDecision("herbs", "water");
potionBrewingDecision("herbs", "oil");
potionBrewingDecision("herbs", "banana");
potionBrewingDecision("berries", "sugar");
potionBrewingDecision("berries", "banana");
potionBrewingDecision("herbs", "sugar");
potionBrewingDecision("sugar", "salt");