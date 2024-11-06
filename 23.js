// let marks = 95;
// if(marks >=90){
//     console.log("A+");{
//            else if(marks >= 85)
//             console.log(A);
//     }
// }if(marks >=75){
//     console.log("B+");{
//         else if (marks >= 70)
//             console.log("B");
//     }
// }
// if (marks >=65){
//     console.log("C+") 
//     {
//       else if (marks >=60)
//         console.log("C");   
//     }
// }
// if(marks >=55){
//     console.log("D+") 
//     {
//         else if (marks <= 50)
//             console.log("D");
//     }
// }




// functions 
/*
functions is a block of code which performs sepecific tassk 

there are 2 types of functions 

1. Built-in functions
2.user defiend functions 

*/

// 1.Built -in functions 
// have types of 
// string functions 
/*Array functions 
math functions // advance 
date functions 
number functions 
json functions 
console functions 

2 user defiend functions */

// declaring  a functions 
/* synatx 

keyword  nameof Function
function name of function ()
{
}
// calling the functions 
name of functions()

// decalalaring the function
function box()
{

}
calling the functions 
box()


important points in functions 

1.a function is declared using the function keyword 
2.always use camelCase for declaring functions name 
3. the body of functions is written is code block {}
4. functions are reusable 
5. functions are the fundeamentals block of javascript 
6.functions is a group of code designed to perform specific task
7. javascript , functions can be called anywhere in your program 

*/
// declaring the function 
function sayHello()
{
    console.log("hello world");
}
// calling the function 
sayHello() // it is must to call the function if you don't it will does 
sayHello()//not print any thing 

// types user defined functions 
/*
1. simple functions 
2. function parameters
3. functions with return 
4. function expression 
5.arrow functions 
6.anonmus fuction
7. IIFE (immediately invoked functions expression)
*/

// simple functions 
/* A  basic functions that performs actions and doesn't return a value 
*/

function greet(){
    console.log("hello, world!");
}
greet();// output will be "hello , world!"

// 2. functions with parameters 
// function with parameters withot return
// you pass parameters to the functions which are used within the function
// the function perform an action but it doesn't give anything back when it's done 
// without 
function sayHello(firstName){
    console.log(`hello ${firstName}`);// any thing you want to print with 
}//then use `` and ${}
sayHello("omer");

function sumNumbers (num1 , num2){
    console.log(num1 + num2);
}
sumNumbers(4,5);

// mult
function mult2(number1 , number2) {
    console.log(number1*number2);
}
mult2(2,4);

// sub
function subst(numb1,numb2){
    console.log(numb1-numb2);
}
subst(12,6)

// with quation 
function greet(name){
    console.log("Hello," + name + "!");
    console.log(`hello ${name} !`);
}
greet("omer");

// explanation
/*
here , number is a parament so we can pass any name when we call greet
greet("omer") prints "Hello omer!"to the console but doesn't return any value
this function is used for 
*/
// function table(num) {
//     let i =1;
//     for(i;i<+10;i++){
//         console.log(`${num} X ${i}= ${num*i}`);
//     }
// }
// table(5);

// function suu(all){
//     let i = 1;
//     for(i; i<=10;i++){
//         console.log(`${all} X ${i} = ${all * i}`);
//     }
// } suu(10)

// function area(l,b){
//     console.log(l*b);
// }
// area(2,3);

// function areaofsq(s , s){
//     console.log(s*s);
// }
// areaofsq(2,2);

// function areaofrecta(a,l,w){
//     console.log(a=l+w);
// }
// areaofrecta(2,4,5)

// function areaoftr(b,h){
//     let area = 0.5 *b*h;

// console.log(`areaoftr ${area} `);
// }areaoftr(2,3)


// //here, name is a parameter so we can pass any name when we call greet

// //printing 5's multiplication table in functions

// function table(num) {
//   let i = 1;
//   for (i; i <= 10; i++) {
//     console.log(${num} x ${i}= ${num * i});
//   }
// }
// table(5);

// console.log("------------------");

// //lets try printing 6

// function tableOf(num) {
//   let i = 1;
//   for (i; i <= 10; i++) {
//     console.log(${num} x ${i}= ${num * i});
//   }
// }
// tableOf(6);

// console.log("------------------");

// //lb area of rectangle

// function areaOfRect(l, b) {
//   console.log(l * b);
// }
// areaOfRect(5, 2);

// console.log("------------------");

// //area of triangle

// function areaOfTriangle(b, h) {
//   console.log(0.5 * b * h);
