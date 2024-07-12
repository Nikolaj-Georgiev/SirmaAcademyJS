function addressByAgeAndGender(age, gender) {

  let address;

  if (age < 16 && age > 0) {
    if (gender === "m") {
      address = "Master";
    } else {
      address = "Miss";
    }
  } else if (age >= 16) {
    if (gender === "m") {
      address = "Mr.";
    } else {
      address = "Ms.";
    }
  }

  console.log(address);
}


addressByAgeAndGender(14, "f")
addressByAgeAndGender(17, "m")
addressByAgeAndGender(10, "m")
addressByAgeAndGender(32, "f")