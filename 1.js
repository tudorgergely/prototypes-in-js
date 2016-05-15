function Foo() {
    
}

Foo.prototype.ham = () => {
    console.log('ham!');
}

var a = new Foo();
a.ham();

console.log(a instanceof Foo);
console.log(a.constructor);
console.log(Foo.prototype.constructor);

a.constructor = Array;

console.log(a.constructor);
console.log(Foo.prototype.constructor);
console.log(a instanceof Array);