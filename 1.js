function Foo() {
    
}

Foo.prototype.ham = () => {
    console.log('ham!');
}

var a = new Foo();
a.ham();

console.log(Object.getPrototypeOf(a) === Foo.prototype);
console.log(Object.getPrototypeOf(Foo) === Foo.prototype);