// push methods ke questions for practice

/*
Spread operator (...) JavaScript mein ek useful tool hai jo array ya object ke 
elements ko ek nayi array ya object mein "spread" karne ka kaam karta hai. 
Yeh operator elements ko easily copy ya combine karne mein help karta hai.
*/

/*
Basic Usage:

 Question 1:Ek array banao jisme kuch elements hain, aur us array me push() method
  use karke ek naya element add karo. Dekho array ka result kya hota hai */

const fal = ['apple', 'banana', 'watermelon'];
const fal2 = fal.push('grapes');
console.log(fal);

/*
Question 2: 
Multiple Elements:

Ek array banao aur push() method ka use karke ek baar me multiple
 elements add karo. Check karo ki elements sahi se add hue hain ya nahi.
*/

const arr = ['sher', 'cheetah'];
const arr2 = arr.push('lion', 'tiger', 'bear', 'monkey');
console.log(arr)



/*
Array Length:

Question 3: Ek array banao, usme push() method use karke ek element add karo aur 
phir array ki length check karo.
 */
const nam = ['loha', 'hatoda', 'laptop', 'computer'];
nam.push('Phone');
console.log(nam.length);




/*
Combining Arrays:

Question 4: Ek array aur ek dusra array banao. push() method ka use karke dusre
 array ke elements ko pehle array me add karo.
 */
const fst = ['loha', 'hatoda', 'laptop', 'computer'];
const scnd = ['loha2', 'hatoda2', 'laptop2', 'computer2'];
fst.push(...scnd);
console.log(fst);


/*
Function Return Value:

Question 5: Ek array banao aur push() method use karke ek element add karo.
 Check karo ki push() method kya return karta hai.
*/
const items = ['pen', 'notebook'];
const addItem = items.push('eraser');
console.log(addItem);
// return 3 krega yani ab array ki length 3 ho gyi kese kyoki usme ek element aur add ho gya hai.


/*
Array of Objects:

Question 6: Ek array banao jisme objects hain. push() method ka use karke ek naya object add karo.
 */

const array = [{ name: 'loha', }, { name: 'hatoda' }];
const addAraay = array.push({ name: 'laptop' });
console.log(array);


/*
Array of Objects:

Question 7: Ek array banao jisme objects hain. push() method ka use karke ek dusra array
 bnao jisme object hain use add karo.
 */

const array1 = [{
    name: 'bear',
    age: 155,
    favorite: 'sehed'
}]
const array2 = [{
    name: 'deer',
    age: 150,
    favorite: 'ghaas'
}]

const addArray = array1.push(...array2);
console.log(array1);


/*
Edge Cases:

Question 8: Ek khaali array banao aur push() method ka use karke ek element add karo.
*/

const empty = [];
empty.push('ye ek array hai')
console.log(empty);

/*
Array with Different Data Types:

Question 9: Ek array banao jisme alag-alag data types (string, number, boolean) ke elements hain.
 push() method use karke ek element of each type add karo aur result check karo.
*/

const diffArray = ['hello', 150, true];
diffArray.push('world', 200, false);
console.log(diffArray);

/*
Nested Arrays: 
nested array ka matlab hai ek array ke andar ek aur array hona.

Question 10: Ek array banao jisme nested arrays hain. push() method ka
 use karke ek aur nested array add karo.
*/

const nestedarray = [[1, 2], ['male, female']];
nestedarray.push(['kya h be']);
console.log(nestedarray);

/*
Push with Function Call:

Question 11: Ek function banao jo ek array ko accept kare aur push() method use
 karke ek element add kare.
*/

const myFunc = (arr1, arr2) => { // yaad h na fucntion mein 2 parameter hote h para1 para 2
    arr1.push(arr2);
    return arr1;
}

let myarr = ['lllu', 50, 'male'];
myFunc(myarr, 'hello'); //myarr ko pehla argument aur 'hello' ko doosra argument de rahe ho.
console.log(myarr);


/*
Removing Last Element:

Question 12: Ek array banao, push() method se kuch elements add karo, aur pop() 
method use karke last element remove karo.
*/

const arrrry = ['hllo', 'world'];
arrrry.push('namste', 'duniya');
arrrry.pop();
console.log(arrrry);



/*
Push and Spread Operator:

Question 13: Ek array banao aur push() method use karke ek aur array
 ke elements ko add karo using the spread operator.
*/

const naya = ['tillu', 'tika'];
const naya2 = ['malkhan'];
naya.push(...naya2);
console.log(naya);


/*
Push with Undefined and Null:

Question 14: Ek array banao aur push() method ka use karke undefined aur null values add karo.are.
*/

const dya = [1, 2];
dya.push(undefined, null);
console.log(dya);


/*
Push Method with Empty Array:

Question 15: Ek empty array banao aur push() method se ek empty array add karo.
*/

const kuchni = [];
kuchni.push([]);
console.log(kuchni);


/*
Push with String and Array:

Question 16: Ek array banao aur push() method ka use karke ek string aur ek array add karo
*/

const kyabe = ['150 rupya dega'];
kyabe.push('', []);
console.log(kyabe);



/*
Push with Mixed Data Types:

Question 17: Ek array banao jisme string aur number data types ke elements hain. push() 
method ka use karke ek string aur ek number element add karo, aur phir push()
 method use karke ek object bhi add karo. Dekho array me changes kaise aate hain.
*/

const dataType = [150, 'rupiya dega'];
dataType.push(50, 'rupiya km krlo', { name: 'kedibatchit' })
console.log(dataType);


/*
Push with Duplicate Values:

Question 18: Ek array banao jisme kuch elements already hain. push() method ka
 use karke array me ek duplicate value add karo. Dekho ki array me duplicate value
  kaise reflect hoti hai.
*/

const bnao = ['kha rhete ho?'];
bnao.push('kha rhete ho?')
console.log(bnao);


/*
Push with Different Data Types in Nested Arrays:

Question 19: Ek array banao jisme nested arrays hain. push() method ka use karke 
ek nested array me mixed data types (string, number, boolean) add karo
 aur dekho ki final array ka result kya hota hai.
*/

const zinda = [['arr1', ['arr2', ['arr3'], ['arr4']]]];
zinda.push(['bharat', 5, true, false]);
console.log(zinda);


/*
Push with Multiple Arrays:

Question 20: Ek array banao jisme kuch initial elements hain. push()
 method ka use karke ek aur array ko push karo. Phir ek aur array banao
  aur pehle array me us array ke elements ko push() method ka use karke
   add karo. Dekho final array ka result kya hota hai.
*/

const dddd = [1, 2];
const gg = [3, 4];
const hh = ['hlo'];

dddd.push(gg, hh);
console.log(dddd);


