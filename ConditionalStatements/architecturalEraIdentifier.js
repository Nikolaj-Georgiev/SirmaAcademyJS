function architecturalEraIdentifier(year, material) {

  let result = "";

  if (year < 500 && material === "stone") {
    result = "Ancient";
  } else if (year >= 500 && year <= 1500 && material === "stone") {
    result = "Medieval";
  } else if (year >= 1500 && year <= 1800 && material === "wood") {
    result = "Colonial";
  } else if (year >= 1800 && year <= 1900 && material === "steel") {
    result = "Industrial";
  } else if (year > 1900 && material === "steel") {
    result = "Modern";
  } else {
    result = "Uncertain";
  }

  console.log(result);
}

architecturalEraIdentifier(300, "stone");
architecturalEraIdentifier(1500, "wood");
architecturalEraIdentifier(1500, "stone");
architecturalEraIdentifier(2000, "steel");
architecturalEraIdentifier(1100, "wood");

