//loops in javascript 

/* in javascript loops are used to repeatedly execute a block of code 
as long as a specified condition is met. there are two types of loops 

1.entry controlled loops : the condition is checked before
the loop body is execute example are for loop  and  while loops 

2.exit controlled loops : the condition is checked after the body
has been executes at least once an example is the do..while
loops .
*/
/*
1. for loop (entry controlled)
the for loop runs a block of code a specific of times it's typically
used when the number of iterationsis known.
*/ 
// for loop 

// for (initialization;CSSConditionRule;increment/decrement){
//  block of code 
// }
//      1st      2nd   4th
for (let i = 4; i<5; i++)
{
    console.log(i);// 3th
}
/*
step of loops 
1. initialization
2. condition
3. code block 
4.increment or discrement
5. condition 
6.code block
7.
*/
// to print a table 
for(o = 1; o<=100000; o++){
    console.log(`5 x ${o} = ${o*5}`);
}
//  while loop 

/* 
2. while loop : the while loop repeats as long as the specified 
condition is true */

/*
while loop is a keyword 
while is a entry controlled loop 
while is a loop which is used to iterate the code multiple times 

*/
/*
declaration
while (condition) {
// code block to be executed 
incerement/decrement 
} 
*/
let j = 0;
while(j <=10){
    console.log(`5 x ${j} = ${j*5}`);
j++
}
// for and while loop check the condition

/*
2. exit controle loop
do while loops is similar to the while loop but guarantees that the code 
inside the loop runs at least once because the condition is checked after
the loop body

1. do while loop 
do while is a keyword 
do while is a exit controlled loop 
do while is a loop which is used to iterate the code multiple times 
in do while the while condition is checked at the end of the loop
should have to be true and it should have semicolon at the end 

// Declaration
// do {
//  code block to be executed
//     Increment/Decrement
//   }
// while (condition);

*/ // do while loop
let l = 11;
do {
    console.log(`${l} X ${l} = ${l*l}`);
    l++;
}
while(l<=10);

