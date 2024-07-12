function listOfProducts(inpArr) {
  let arr = [...inpArr];
  arr.sort((a, b) => a.localeCompare(b))
  for (let i = 1; i <= arr.length; i++) {
    console.log(`${i}.${arr[i - 1]}`);
  }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);