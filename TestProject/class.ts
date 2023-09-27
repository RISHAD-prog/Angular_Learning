import { login, User } from "./interface";

interface Address{
    city: string,
    state: string,
    pincode: number
}
class Employee implements login {
    #id!: number; // delared as private property
    protected name!: string;
    salary!: number;
    address!: Address;
    get Empid(): number {
        return this.#id;    
    }

    set Empid(id: number) { 
        this.#id = id;
    }
    constructor(id: number, name: string, salary: number, address: Address) {
        this.#id = id;
        this.name = name;
        this.salary = salary;
        this.address = address;
    }
    Login(): User {
        return { id: this.#id, name: this.name, email: "", password: "" };
    }
    getEmployeeDetails() {
        // return "Id:" + this.id + " Name:" + this.name + " Salary:" + this.salary;
        return `Id: ${this.#id} Name: ${this.name} Salary: ${this.salary} Address: ${this.address.city} ${this.address.state} ${this.address.pincode} `;
    }
}

let John  = new Employee(1,"John", 10000, {city: "Bangalore", state: "Karnataka", pincode: 560001});

console.log("Before="+John.getEmployeeDetails());
John.Empid = 3;
console.log("After="+John.getEmployeeDetails());

class Manager extends Employee {
    constructor(id: number, name: string, salary: number, address: Address) {
        super(id, name, salary, address);
    }
    
    getEmployeeDetails() {
        return super.getEmployeeDetails();
    }
}
let mike  = new Employee(2,"Mike", 20000, {city: "Kolkata", state: "Karnataka", pincode: 560002});
console.log("The manager details is:"+mike.getEmployeeDetails());

let emp: login = new Employee(1,"bobby", 10000, {city: "Bangalore", state: "Karnataka", pincode: 560001});

console.log(emp.Login());