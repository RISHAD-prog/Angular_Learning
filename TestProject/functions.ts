function add(a:number,b:number){
    return a+b;
}
console.log(add(10,20));

const sub = (a:number,b:number, ...c:number[]): number => a-b+c.reduce((a,b)=> a+b, 0);
var arr = [1,2,3,4,5];
console.log(sub(10,50, ...arr));

const mul = (a:number,b:number): number => a*b;
console.log(mul(10,50));

const div = (a:number,b:number): number => a/b;
console.log(sub(10,5));

function getItems<Type> (arr: Type[]): Type[]{
    return new Array<Type>().concat(arr);
}

let numArr = getItems<number>([1,2,3,4,5]);
console.log(numArr);

let strArr = getItems<string>(["a","b","c","d","e"]);
console.log(strArr);

const getStudents = (arr: string[]): string[] => new Array<string>().concat(arr);
let students = getStudents(["Rishad","Rahman","Rahim","Karim"]);
console.log(students);