function adventureGamePathDecision(rightHand, leftHand) {

  let result = "Wander aimlessly";

  if (rightHand === "sword" || leftHand === "sword") {
    if (leftHand === "shield" || rightHand === "shield") {
      result = "Take the path to the castle.";
    } else {
      result = "Take the path to the forest.";
    }
  } else if (rightHand === "map" || leftHand === "map") {
    if (leftHand === "coins" || rightHand === "coins") {
      result = "Go to the town.";
    } else {
      result = "Camp at the current spot and prepare for the next day.";
    }
  }

  console.log(result);
}


adventureGamePathDecision('sword', 'shield');
adventureGamePathDecision('map', 'coins');
adventureGamePathDecision('torch', 'flower');
adventureGamePathDecision('sword', 'pouch');
adventureGamePathDecision('map', 'compass');