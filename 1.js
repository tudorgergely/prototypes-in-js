var o = {
    a: 1,
    get a() {
        return a;
    },
    set a(v) {
        console.log(v);
        a = v;
    }
}

o.a = 2;

var b = Object.create(o);
b.a = 3;

console.log(o.a);
console.log(b.hasOwnProperty('a'))