function gradeCalculator(percent) {

  let isValid = percent >= 0 && percent <= 100;
  let grade = "";

  if (!isValid) {

    return;
  }

  if (percent >= 90) {
    grade = "A";
  } else if (percent >= 80) {
    grade = "B";
  } else if (percent >= 70) {
    grade = "C";
  } else if (percent >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(grade);
}

gradeCalculator(95);
gradeCalculator(82);
gradeCalculator(76);
gradeCalculator(65);
gradeCalculator(45);