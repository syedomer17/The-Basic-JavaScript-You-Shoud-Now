// arrow functions 

// arrw function were introdiced in ES6(2015)
// arrow functions allows us t write shorte functions syntax

// before arrow functions 

// function sayhello(){
//     console.log("hello"); // first type 
// }sayhello();

// let sayhello = function ()
// {
//     console.log("hello"); // second type 
// }
// sayhello();

// // Arrow functions 
// // in arrow functions we just remove function keyword in arrow function 
// let sayhello = () => 
// {
//      console.log("hello");
// };
// sayhello();

// // before arrow functions we use 
// function sumNumbers(a,b){
//     return a + b;
// }
// sumNumbers(2,4);

// in arrow functions 
let sumNumbers =(a,b) => a+b;
console.log(sumNumbers(2,3));

let multNumbers = (a,b)=> a*b;
console.log(multNumbers(5,5));

// hosting 
/* in javascript, hosting is a mechanism where variables and function 
declarations are moved (or hoisted ) to the topp of there scope 
before code is  execution this means that you can use variables 
and functions before declaritiong them in the code.

*/ 
// function hoisting 
// function hoisting declarations are fully hoisted meaning you can
// call the function before its declared 

sayHello();
function sayHello() {
    console.log("hello!");
}
// with arrow function and function experation we cannot use hoisting 

// in let and const you can't  call before let and const 

// test();// you cant call before the function 
let test = () =>{
    console.log("hello");
}
test();// in arrow function you can call only after the function 


// anonymous function

/* 
an anonymous functon un javascript is a function tat does not have
a name it's often used when you need a function a sa value , particularly
in cases where you don't need to  reference the function later.

anonymous functions are useful for single-use function or for functions 
passed as argument.
*/
// let sayhello = function (){ // sayhello is a variable 
//     console.log("hello");
// }
// // IIFE (immediately invoked functions expression)
// (function (){ 
//     console.log("hello"); // in IIFE function you can call only once in TTFE function 
// })();

// recursion
// recursion is a process in whice a function call itsalf directly or
// indirectly in order to solve a problem by breaking it down into samller
// similar sub - problems.this repeated self-calling continues until it 
// reached a base case which is a condition where is a condition where 
//no further recursion is needed alllowing the function 
// to start returing values bake up through each call

// simpler terms recursion is when something is defined or done in terms of itself until it 
// reache to stop

// print number up to n 
// function call(number){
//     console.log(number);
//     call(10); // this call will make infinite calls 
// }call(10);

// function sum(number){
//     if(number<4){ // if it is lesss then it will print 4 
//         return console.log("stop"); // if it <=4 it will print stop
//     }
// console.log(number);
// sum(number - 1);
// }sum(10);

// function all(number){
//     if(number<=1){
//         return console.log("stop");
//     }
//     console.log(number );
//     all(++number );
// }all(10);

// function number(sum){
//     if(sum<1){
//         return console.log("stop");
//     }
//     console.log(sum);
//     number(10);

// }number(100);



function factorial(aim){
    if(aim==0||aim==1){
      return 1;
    }
    return aim*factorial(aim -1);
}
console.log(factorial(5));