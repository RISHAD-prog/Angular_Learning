let lname : string;
lname = "rishad";
console.log(lname);

let isValid : boolean = false;

console.log(isValid);

let  numberList : Array<number>;

numberList = [1,2,3];
let result = numberList.filter(n=> n>2)
let newResult = numberList.find(n => n === 2);
console.log(result); 
console.log(newResult); 

const enum color {
    red, 
    blue,
    green
}

let addColor : color = color.blue ;
// returns the index of that enums.
console.log(addColor);

let swapNumber : [firstNumber: number, secondNumber: number ];

function swapNumbers(num1: number , num2: number) : [number, number]{
    return [num2, num1]; 
}

swapNumber= swapNumbers(10,20);
console.log(swapNumber);