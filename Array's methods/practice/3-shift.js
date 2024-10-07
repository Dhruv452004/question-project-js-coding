// shft methods ke questions for practice

// Question 1
// Ek array hai: [1, 2, 3, 4, 5]. shift() method use karke array ka pehla element remove karo aur updated array print karo.

let number = [1, 2, 3, 4, 5];
number.shift();
console.log(number);


// Question 2
// Ek empty array hai: []. shift() method use karke check karo ki remove karne par kya return hota hai.

let empty = [];
let e = empty.shift();
console.log(empty,e);


// Question 3
// Ek array hai: ['apple', 'banana', 'cherry']. shift() method use karne ke baad, array ke contents aur removed element ko print karo

let fruits = ['apple', 'banana', 'cherry'];
let fruitsCheck = fruits.shift(); console.log(fruits, fruitsCheck);

// Question 4
// Ek array hai: [10, 20, 30, 40]. shift() method ko do baar use karo aur array aur removed elements ko print karo.

let array = [10, 20, 30, 40];
console.log(array.shift());


// Question 5
// Ek array hai: [5, 10, 15, 20, 25]. shift() method ka use karne se pehle array ka length kya hoga aur method use karne ke baad length kya hoga?

let arnum = [5, 10, 15, 20, 25];
// before remove array's first element and  array's length
console.log(arnum.length);

arnum.shift();
// after remove array's first element and  array's length
console.log(arnum.length);


// Question 6
// Ek array hai: [7, 14, 21, 28]. shift() method ko use karne ke baad, array ke contents aur removed element ko print karo. Fir se shift() method use karke updated array aur removed element ko print karo.
 
let numAr = [7, 14, 21, 28];
let rarr = numAr.shift(); console.log(numAr, rarr); 
let rarr2 = numAr.shift(); console.log(numAr, rarr2);


// Question 7
// Ek array hai: [1, 2, 3]. shift() method ko use karne se array ke size par kya asar padega? Array ka size pehle aur baad mein print karo.

let brnum = [1, 2, 3];
console.log(brnum.length);
brnum.shift(); console.log(brnum.length);