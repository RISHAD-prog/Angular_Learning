"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    get Empid() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set Empid(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    constructor(id, name, salary, address) {
        _Employee_id.set(this, void 0); // delared as private property
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.salary = salary;
        this.address = address;
    }
    Login() {
        return { id: __classPrivateFieldGet(this, _Employee_id, "f"), name: this.name, email: "", password: "" };
    }
    getEmployeeDetails() {
        // return "Id:" + this.id + " Name:" + this.name + " Salary:" + this.salary;
        return `Id: ${__classPrivateFieldGet(this, _Employee_id, "f")} Name: ${this.name} Salary: ${this.salary} Address: ${this.address.city} ${this.address.state} ${this.address.pincode} `;
    }
}
_Employee_id = new WeakMap();
let John = new Employee(1, "John", 10000, { city: "Bangalore", state: "Karnataka", pincode: 560001 });
console.log("Before=" + John.getEmployeeDetails());
John.Empid = 3;
console.log("After=" + John.getEmployeeDetails());
class Manager extends Employee {
    constructor(id, name, salary, address) {
        super(id, name, salary, address);
    }
    getEmployeeDetails() {
        return super.getEmployeeDetails();
    }
}
let mike = new Employee(2, "Mike", 20000, { city: "Kolkata", state: "Karnataka", pincode: 560002 });
console.log("The manager details is:" + mike.getEmployeeDetails());
let emp = new Employee(1, "bobby", 10000, { city: "Bangalore", state: "Karnataka", pincode: 560001 });
console.log(emp.Login());
//# sourceMappingURL=class.js.map