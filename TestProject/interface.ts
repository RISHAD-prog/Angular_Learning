export interface User{
    id:number,
    salary?: number, // making property optional
    name: string,
    email: string,
    password: string,
}

let user: User = {  id: 1, name: "John", email: "john@gmail.com", password: "john@123" };

interface Employees extends User{
    salary : number;
}

let employee : Employees = { id: 1, name: "John", email: "", password: "", salary: 10000 };

export interface login{
    Login(): User;
}

let [user1, user2, ...rest] : User[] = [{ id: 1, name: "John", email: "", password: "" }, { id: 2, name: "Mike", email: "", password: "" }, { id: 3, name: "Raj", email: "", password: "" }, { id: 4, name: "Rahul", email: "", password: "" }, { id: 5, name: "Ramesh", email: "", password: "" }];

console.log(user1);
console.log(user2);
console.log(rest);