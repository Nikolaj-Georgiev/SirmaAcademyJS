function newBuilding(n, m) {
  let floors = Math.abs(n);
  let rooms = Math.abs(m);
  let type = "";

  for (let i = floors; i >= 1; i--) {

    if (i == floors) {
      type = "L";
    } else if (i % 2 == 1) {
      type = "A";
    } else {
      type = "O";
    }

    let result = "";

    for (let j = 0; j < rooms; j++) {
      result += type + i + j + " ";
    }
    console.log(result);
  }
}

newBuilding(6, 4);
newBuilding(3, 3);
newBuilding(4, 4);