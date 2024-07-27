function Person(name) {
  return this.name = name;
}
function Employee(name, job) {
  this.name = Person.call(this, [name])[0];
  this.job = job;

  return `Employee {name: '${this.name}', job: '${this.job}'}`
}
const emp = new Employee('Alice', 'Engineer');
console.log(emp);