// bitwise operator
let a = 5;
let b = 1;
console.log(a&b);
console.log(a|b);
console.log(a^b);

// other operator 
// 1. terenory 
// 2. typeof 
// terenory operator 
// the ternary operator provides a shortthand way to writte on 
//if-else condition
let cfiTotalMarks = 100;
let cfiPassMarks = 70;

let check = cfiTotalMarks <= cfiPassMarks ? "pass" : "fail";
console.log(check);

let omerage = 17;

let checkage = omerage >= 18 ? "ok" : "papa ku leke aao";
console.log(checkage);


let Marks = 65;
let pass = Marks  <= 35 ? "pass" : "fail";
console.log(pass);

let age = 19;
let vote = age >=18 ? "he can vote" : "not vote";
console.log(vote);
// typeof operator
console.log(typeof []); // object it shows , because this a bug but 
//it should be array.
console.log(typeof {}); // object 
console.log(typeof "hello"); // string 
console.log(typeof 24); // number 
console.log(typeof null); // it is also a bug but it should be null 
console.log(typeof undefined); // undefined 

