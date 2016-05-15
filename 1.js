function Foo() {
    
}

function Boo() {
    
}

Object.setPrototypeOf(Boo.prototype, Foo.prototype);

var a = new Boo();

console.log(a instanceof Foo);
console.log(a instanceof Boo);