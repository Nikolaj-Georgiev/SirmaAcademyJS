function faceOfFigures(form, firstInputNum, secondInputNum) {

  let face = 0;

  switch (form) {
    case "circle": {
      face = Math.PI * Math.pow(firstInputNum, 2);
      break;
    }
    case "rectangle": {
      face = firstInputNum * secondInputNum;
      break;
    }
    case "square": {
      face = Math.pow(firstInputNum, 2);
      break;
    }
    case "triangle": {
      face = (firstInputNum * secondInputNum) / 2;
      break;
    }
  }

  console.log(face.toFixed(2));
}


faceOfFigures("square", 5)
faceOfFigures("rectangle", 10, 3.5)
faceOfFigures("triangle", 4.5, 20)
faceOfFigures("circle", 10)