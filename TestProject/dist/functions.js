"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
const sub = (a, b, ...c) => a - b + c.reduce((a, b) => a + b, 0);
var arr = [1, 2, 3, 4, 5];
console.log(sub(10, 50, ...arr));
const mul = (a, b) => a * b;
console.log(mul(10, 50));
const div = (a, b) => a / b;
console.log(sub(10, 5));
function getItems(arr) {
    return new Array().concat(arr);
}
let numArr = getItems([1, 2, 3, 4, 5]);
console.log(numArr);
let strArr = getItems(["a", "b", "c", "d", "e"]);
console.log(strArr);
const getStudents = (arr) => new Array().concat(arr);
let students = getStudents(["Rishad", "Rahman", "Rahim", "Karim"]);
console.log(students);
//# sourceMappingURL=functions.js.map