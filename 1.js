var a = {};

Object.defineProperty(a, 'foo', {
    value: 'test'
});

delete a.foo;
console.log(a.foo);
a.foo = '';
console.log(a.foo);


var b = Object.create(a, {
    bar: {
        configurable: true,
        get: () => {
            console.log('I will return: ' + this.bar);
            return this.bar;
        },
        set: value => this.bar = value,
    } 
});
b.bar = 0;
console.log(b.bar);

var c = Object.create(b);

c.bar = 1;
console.log(c.bar, b.bar);
console.log(c.hasOwnProperty('bar'))