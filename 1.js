var person = Object.create(null);
person.name = 'Test';

var secondPerson = Object.create(person);
console.log(secondPerson.name); // logs Test