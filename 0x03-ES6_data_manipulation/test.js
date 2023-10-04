// const arrayLike = {
//   0: 'a',
//   1: 'b',
//   length: 2,
// };
// console.log(Array.prototype.join.call(arrayLike, '+')); // 'a+b'

// console.log(Array.prototype.flat.call({})); // []

// const a = { length: 0.7 };
// Array.prototype.push.call(a);
// console.log(a.length); // 0

// function f() {
//   console.log(Array.prototype.join.call(arguments, '+'));
// }

// f('a', 'b'); // 'a+b'

// const arrayEmpty = new Array(2);

// console.log(arrayEmpty.length); // 2
// console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
// console.log(0 in arrayEmpty); // false
// console.log(1 in arrayEmpty); // false

// const arrayOfOne = new Array('2'); // Not the number 2 but the string "2"

// console.log(arrayOfOne.length); // 1
// console.log(arrayOfOne[0]); // "2"

// const fruits = new Array('Apple', 'Banana');

// console.log(fruits.length); // 2
// console.log(fruits[0]); // "Apple"

// // Create a function that takes two arguments, and returns the sum of those arguments
// const adder = new Function('a', 'b', 'return a + b');

// // Call the function
// adder(2, 6);
// // 8

// // behind the scenes
// const adder = function (a, b) {  return a + b; };

// The function constructor can take in multiple statements separated by a semicolon. Function expressions require a return statement with the function's name

// // Observe that new Function is called. This is so we can call the function we created directly afterwards
// const sumOfArray = new Function(
//   'const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray',
// )();

// // call the function
// sumOfArray([1, 2, 3, 4]);
// // 10
// console.log(sumOfArray([1, 2, 3, 4]));

// // If you don't call new Function at the point of creation, you can use the Function.call() method to call it
// const findLargestNumber = new Function(
//   'function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber',
// );

// // call the function
// findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// console.log(findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]));
// // 8

// // Function declarations do not require a return statement
// const sayHello = new Function(
//   'return function (name) { return `Hello, ${name}` }',
// )();

// // call the function
// sayHello('world');
// console.log(sayHello('world'));
// // Hello, world

//  maps ...............
// .............................................................................

// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get('a'));
// // Expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// // Expected output: 2

// sets ...............
// .............................................................................

// const contacts = new Map();
// contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });
// contacts.has('Jessie'); // true
// contacts.get('Hilary'); // undefined
// contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });
// contacts.get('Jessie'); // {phone: "213-555-1234", address: "123 N 1st Ave"}
// contacts.delete('Raymond'); // false
// contacts.delete('Jessie'); // true
// console.log(contacts.get('Hilary')); // 1

// map constructor
// const myMap = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]);

// console.log(myMap); // 3

// set
// .............................................................................

// const mySet1 = new Set();

// mySet1.add(1); // Set(1) { 1 }
// mySet1.add(5); // Set(2) { 1, 5 }
// mySet1.add(5); // Set(2) { 1, 5 }
// mySet1.add('some text'); // Set(3) { 1, 5, 'some text' }
// console.log(mySet1); // Set(3) { 1, 5, 'some text' }
// const o = { a: 1, b: 2 };
// mySet1.add(o);

// mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

// mySet1.has(1); // true
// mySet1.has(3); // false, since 3 has not been added to the set
// mySet1.has(5); // true
// mySet1.has(Math.sqrt(25)); // true
// mySet1.has('Some Text'.toLowerCase()); // true
// mySet1.has(o); // true

// mySet1.size; // 5

// mySet1.delete(5); // removes 5 from the set
// mySet1.has(5); // false, 5 has been removed

// mySet1.size; // 4, since we just removed one value

// mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

// console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }

// Iterating sets
// // .............................................................................

// for (const item of mySet1) {
//   console.log(item);
// }
// // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// for (const item of mySet1.keys()) {
//   console.log(item);
// }
// // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// for (const item of mySet1.values()) {
//   console.log(item);
// }
// // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// // key and value are the same here
// for (const [key, value] of mySet1.entries()) {
//   console.log(key);
// }
// // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// // Convert Set object to an Array object, with Array.from
// const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// // the following will also work if run in an HTML document
// mySet1.add(document.body);
// mySet1.has(document.querySelector('body')); // true

// // converting between Set and Array
// const mySet2 = new Set([1, 2, 3, 4]);
// console.log(mySet2.size); // 4
// console.log([...mySet2]); // [1, 2, 3, 4]

// // intersect can be simulated via
// const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// // difference can be simulated via
// const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// // Iterate set entries with forEach()
// mySet2.forEach((value) => {
//   console.log(value);
// });
// // 1
// // 2
// // 3
// // 4
