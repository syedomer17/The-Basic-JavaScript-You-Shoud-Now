//Comparison operators
//These operators compare two values and return a boolean (true or false)

console.log(5=="5"); //only checks value ; so true
console.log(5==="5"); //checks value AND datatype ; so false
console.log(5!="5"); //checks ONLY value; so false ; they ARE equal
console.log(5!=="5");//checks value AND datatype ; both arent equal 
//cuz diff datatype; so true
console.log(5>2); //true
console.log(5<2); //false
console.log(5>=5); //greater than OR equal to; in "or" one of them needs to be true; so TRUE
console.log(5<=5);// TRUE

let a = true; 
let b = false;
console.log(a && b);
console.log(b && a);
console.log(a && a);
console.log(b && b);

console.log(a || b);
console.log(b || a);
console.log(a || a);
console.log(b || b);

console.log(!a);
console.log(!b);
 