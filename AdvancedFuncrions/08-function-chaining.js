const stringManipulator = {
  string: '',

  setValue(str) {
    if (typeof str === "string") {
      this.string = str;
    }
    return this;
  },
  toUpperCase() {
    this.string = this.string.toLocaleUpperCase();
    return this;
  },
  print() {
    console.log(this.string);
    return this;
  },
  toLowerCase() {
    this.string = this.string.toLocaleLowerCase();
    return this;
  }


}

stringManipulator.setValue('Hello')
  .toUpperCase()
  .print()
  .toLowerCase()
  .print();