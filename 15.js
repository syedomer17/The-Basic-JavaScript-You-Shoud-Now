//  types  conversions

/*

the process of converting data type tof one type to another type 

Example : string to number 

there are 2 types of conversion in js 

1. implicit conversion 
2. explicit conversion 

implicit conversion happen automatically when 
javascript tries to perform an operation between 
different types  converting values to a comman types .

explicit conversion require functions or methods
to manually convert types .
common functions are string(),number(),and boolean()

list of data types 

1.string ==> number, boolean , null , undefined
2.number ==> string , boolean , null , undefined 
3.boolean ==> string , number ,  null, undefined 
4.null ==> string , number , boolean , underfned 
5.undefined ==> string , number , boolean , null


*/

// implicit conversion 

/* 
1. any data type to string (using + operator)
*/

let number = 2 + "3";
console.log(number, typeof number);

let marks = '3' + true; 
console.log(marks,typeof marks);

let sum = "3" + 4;
console.log(sum,typeof sum);

let div = "5" + null;
console.log(div,typeof div);

let la = false + 10;
console.log(la,typeof la );

let aa = null + "hello";
console.log(aa,typeof aa);

