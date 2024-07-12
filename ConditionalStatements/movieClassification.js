function movieClassification(age) {

  let movies = "";

  if (age <= 0) {
    return;
  }

  if (age >= 18) {
    movies = "All movies.";
  } else if (age >= 13) {
    movies = "U and PG-13 rated movies.";
  } else {
    movies = "Only U-rated movies.";
  }

  console.log(movies);
}

movieClassification(10);
movieClassification(16);
movieClassification(21);