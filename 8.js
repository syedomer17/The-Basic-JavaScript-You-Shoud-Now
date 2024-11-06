//  DataTypes in JavaScript 

// 1. Primitive Data Type 
// 2, Non Primitive Data Type

/* 
Primitive Data Type : it can stord single type of data 

Non Primitive Data Type : it can store multiple types fo data 


Primitive Data Type

1. string ==> textual data ==> "Hello Hi i am omer ",'Hello i am omer'
2. number ==> integer or decimal ==. 4 and 4.22
3. boolean ==> any 2 vaiues it can be true or false 
4. null ==>denotes to an empty values 
5. undefined ==> a data type type whose variable is not defined 
*/
let a = "hello omer  ";
console.log(a);

let num = 20;
console.log(num);

let marks = true
console.log(marks);

let book = null
console.log(book);

let b;
console.log(b);

// non primitive Data type 
// it can store multiple types fo data types 

/*
6. objects 
7. Arrays 

objects : are the key value pair of collection of data 

example :
*/
// objects
let person = {
    firstName: "Omer ali",
    age : 17,
    phone : "9701889473",
    isAlive : true,
    addhar : 7908356749172,
    text : null,
    sleep : undefined,
};
console.log(person);

console.log(person.age);

// Arrays 
/* it enables storing a collection of 
multiple items under a single variables name */

//Array 

let cfistudents = ["omer","ismail","fatima","sneha","saad"]

// Arrays start from 0 index 

console.log(cfistudents[0],cfistudents[4]);
