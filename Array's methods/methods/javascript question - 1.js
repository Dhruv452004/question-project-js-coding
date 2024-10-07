/* Here are  JavaScript array methods. 
n sab methods ka use karke tum arrays ke upar directly kaafi powerful 
operations kar sakte ho bina loop ya function ke!
*/









// Method -1 [push];
// Question: Tumhare paas ek array hai
// ["apple", "banana"];. Isme grapes ko kaise add karoge?

let fruits = ['apple', 'banana'];
const addFruit = fruits.push('grapes');
console.log(fruits);













// Method -2 [pop]
// Question: Tumhare paas ek array hai [1, 2, 3, 4];. Last element kaise hataoge?

const number = [1, 2, 3, 4,];
const removeLastNumber = number.pop();
console.log(number);














// Method - 3 [shift]
// Question: Tumhare paas ek array hai ["red", "green", "blue"];. Pehla element kaise hataoge?
const color = ['red', 'green', 'blue'];
const removeFirstColor = color.shift();
console.log(color);












//  Method - 4 [unsift]
/* Question: Tumhare paas ek array hai ["dog", "cat"];. Iske start mein
 elephant aur lion ko kaise add karoge */

const animal = ['dog', 'cat'];
const addAnimal = animal.unshift('elephant', 'lion');
console.log(animal);












// Method - 5 [concat]
//  Question: Tumhare paas do arrays hain [1, 2] aur [3, 4];. Inhe kaise combine karo

const arr1 = [1, 2];
const arr2 = [3, 4];
const combine = arr1.concat(arr2);
console.log(combine);











// Method - 6 [slice]
/* Question: Tumhare paas ek array hai  ["Mumbai", "Delhi", "Kolkata", "Chennai"];. Sirf Delhi 
aur Kolkata ko kaise extract karoge?
 */

const cities = ["Mumbai", "Delhi", "Kolkata", "Chennai"];
const slicecities = cities.slice(1, 3);
console.log(slicecities);












// Method - 7 [splice]

/* 
syntax of array.splice(start, deleteCount, item1, item2, ...)
start: Ye index hai jahan se array mein changes start honge.

deleteCount: Ye batata hai kitne elements ko delete karna hai. 
Agar 0 set karo, toh koi element delete nahi hoga.

item1, item2, ...: Ye wo elements hain jo aap array mein add karna chahte ho, start index ke baad.

 Question: Tumhare paas ek array hai let arr = [1, 2, 5, 6];. 
Isme 2 aur 5 ke beech mein 3 aur 4 ko kaise insert karoge? */

const arr = [1, 2, 5, 6];
const addArr = arr.splice(2, 0, 3, 4); // nahi smj aya tho iske thoda upr dekho vha vo line
console.log(arr);








// Method - 8 [indexOf]
/* 
ek JavaScript ka method hai jo kisi string ya array me ek specific element ko 
dhundhne ke liye use hota hai. Ye method element ke pehle occurrence ka index return karta hai.

Question: Tumhare paas ek array hai ['a', 'b', 'c', 'd'];.
 Isme c ka index kaise pata karoge? */

const letters = ['a', 'b', 'c', 'd'];
const indexLetter = letters.indexOf('c');
console.log(indexLetter);







//  Method - 9 [includes] 
/* 

JavaScript mein ek method hai jo array ya string mein kisi specific element 
ya substring ke existence ko check karta hai. Agar wo element ya substring mil 
jata hai, to ye true return karta hai, warna false.

Question: Tumhare paas ek array hai ['John', 'Mike', 'Sara'];. 
Isme Mike hai ya nahi kaise check karoge
 */

const names = ['John', 'Mike', 'Sara'];
const findName = names.includes('hfdds')
// agr ye string array mein hoti h tho ye true print krega aur nhi hogi tho false print krega

console.log(findName);

const nbm = [1, 2, 3, 5];
console.log(nbm.includes(5));






// Methd - 10 [reverse]
/*
ye array ko  reverse kr deta h jese hello ko olleh 12345 ko 54321

Question: Tumhare paas ek array hai [1, 2, 3, 4];. Is array ko reverse kaise karoge?
 */

const nums = [1, 2, 3, 4];
console.log(nums.reverse());


/* baki ke Methods  javascript question - 2.js  mein h vha pr jao 
mene baki Methods yha islye ni kre kyoki fir lines kafi jada hori thi */
