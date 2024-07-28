function createPrivateCounter() {
  let initial = 0;

  function increment() {
    return ++initial;
  }

  function getCount() {
    return initial;
  }

  return {
    increment,
    getCount
  }
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());