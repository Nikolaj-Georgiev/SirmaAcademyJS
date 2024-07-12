function speedFn(speed) {

  let outputText = "";

  if (speed > 160) {
    outputText = "turbo-fast";
  } else if (speed <= 10) {
    outputText = "slow";
  } else if (speed <= 60) {
    outputText = "average";
  } else if (speed <= 120) {
    outputText = "fast";
  } else if (speed <= 160) {
    outputText = "super-fast";
  }

  console.log(outputText);
}

speedFn(10)
speedFn(59)
speedFn(120)
speedFn(121)
speedFn(183)
speedFn(59.99)
speedFn(60.001)