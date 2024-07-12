function survivalInTheWilderness(timeOfDay, environment, items) {

  let result = "";

  if (timeOfDay === "day") {
    if (environment === "forest") {
      if (items === "knife") {
        result = "Hunt for food.";
      } else if (items === "container") {
        result = "Collect berries.";
      } else {
        result = "Explore.";
      }
    } else if (environment === "desert") {
      if (items === "hat") {
        result = "Search for water.";
      } else {
        result = "Find shade.";
      }
    }
  }
  if (timeOfDay === "night") {
    if (environment === "forest") {
      if (items === "firestarter") {
        result = "Make a campfire.";
      } else {
        result = "Climb a tree for safety.";
      }
    } else if (environment === "desert") {
      if (items === "blanket") {
        result = "Sleep.";
      } else {
        result = "Keep moving to stay warm.";
      }
    }
  }

  console.log(result);
}


survivalInTheWilderness("day", "forest", "knife");
survivalInTheWilderness("day", "forest", "container");
survivalInTheWilderness("night", "forest", "firestarter");
survivalInTheWilderness("day", "forest", "bag");
survivalInTheWilderness("night", "desert", "blanket");
survivalInTheWilderness("day", "desert", "hat");
survivalInTheWilderness("night", "desert", "sword");
survivalInTheWilderness("night", "forest", "hat");