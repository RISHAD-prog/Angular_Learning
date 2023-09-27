"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { id: 1, name: "John", email: "john@gmail.com", password: "john@123" };
let employee = { id: 1, name: "John", email: "", password: "", salary: 10000 };
let [user1, user2, ...rest] = [{ id: 1, name: "John", email: "", password: "" }, { id: 2, name: "Mike", email: "", password: "" }, { id: 3, name: "Raj", email: "", password: "" }, { id: 4, name: "Rahul", email: "", password: "" }, { id: 5, name: "Ramesh", email: "", password: "" }];
console.log(user1);
console.log(user2);
console.log(rest);
//# sourceMappingURL=interface.js.map