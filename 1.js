var person = Object.create(null);
person.name = 'person name';

var secondPerson = Object.create(person);

console.log(Object.getPrototypeOf(secondPerson) === person);

person.name = 'person different name';

console.log(secondPerson.name)

secondPerson.name = 'second person name';

console.log(secondPerson.name);
console.log(person.name);