function climateZoneIdentifier(latitude, hemisphere) {

  // for this task you do not need the hemisphere variable, the condition i made to be able to skip this. :)
  let result = "";

  if (latitude >= -90 && latitude <= 90 && latitude != 0) {
    if (Math.abs(latitude) > 66.5) {
      result = "Arctic Zone";
    } else if (Math.abs(latitude) > 23.5) {
      result = "Temperate Zone";
    } else if (Math.abs(latitude) > 0) {
      result = "Tropic Zone";
    }
  } else if (latitude == 0) {
    result = "Equator";
  }

  console.log(result);
}


climateZoneIdentifier(70, "N");
climateZoneIdentifier(45, "S");
climateZoneIdentifier(10, "N");
climateZoneIdentifier(0, "N");
climateZoneIdentifier(-85, "S");