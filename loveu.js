const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
// const obj4 = { obj1: obj1, obj2: obj2 };
// console.log(obj3, obj4);

const { c, d } = obj3;
const a = obj3.a;
const b = obj1["b"];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
