// isse phele ke jo 10 methods h vo mene javascript questio - 1.js vha pr hai



// Method - 11 [join]
/*
 ek method hai jo JavaScript mein arrays ke elements ko ek string
 mein convert karne ke liye use hota hai. Is method se tum array ke 
 elements ko specify kiye hue separator ke sath join kar sakte ho.

Question: Tumhare paas ek array hai ['Hello', 'World'];. I
s array ko space se separate string mein kaise convert karoge?
 */

const words = ['Hello', 'World'];
console.log(words.join(''));






// Method - 12 [split]
/* 

is method se hm string ko array mein convert kr skte hai

Question: Tumhare paas ek string hai "apple,banana,grapes";. 
Is string ko array mein kaise convert karoge using comma as separator?
*/

const str = "apple,banana,grapes";
console.log(str.split(','));






// Method - 14 [sort]
/*

Question: Ek array  [4, 2, 5, 1, 3]; hai. sort() 
method ka use karke array ko ascending order mein sort karo. Array ko print karo.
 */

const numbers = [4, 2, 5, 1, 3];
const accendingNum = numbers.sort((a, b) => { return a - b });
console.log(accendingNum);
// const  deccendingNum = numbers.sort((a,b) => b - a);
// console.log(deccendingNum);

/* 
agr muje custom sort krna h tho ese hoga ye ek arrow function h sort k andr 
ye esa hi iska syntax h custom ka okay to yah a - b se ye accending order m prnt hoga
aur agr muje ye deccending m krna h  tho bs muje b - a krna hoga ye deccending m print kr deta.
*/




// Method - 15 [find]
/* 
Question: Ek array [10, 20, 39, 45, 52]; hai. find() method ka use
 karke array meinelement jo 20 se bada hai, usse find karo. Result ko print ka
*/


const nmbr = [10, 20, 39, 45, 52];
// const found = nmbr.find(function(num){
//     return num > 20
// });

// arrow function se try krte h
const found = nmbr.find((num) => {
    return num > 20
});
console.log(found);


//  ye methods jo h check krta h ki is array m 3 se bda koi nmbr h agr h tho pring hoga vrna undefined.










// Method - 15 [findIndex]
/*
JavaScript mein ek array method hota hai jo humein array ke andar kisi element ka index 
return karta hai, lekin specific condition ke basis pe. Yeh method har ek element ko check 
karta hai aur pehle element ka index return karta hai jo condition ko true kare. Agar koi 
bhi element condition ko satisfy nahi karta, toh yeh -1 return karta hai.

Question: Ek array [12, 23, 34, 45]; hai. findIndex() method ka
 use karke array mein pehla index find karo jahan value 34 hai. Result ko print karo.
*/

const ages = [12, 23, 34, 45];
const findAges = ages.findIndex(function (age) {
    return age === 34;
})
// with arrow function
// const findAges = ages.findIndex((age)=>{
// return age==34});

console.log(findAges);






// Method - 16 [map]
/*
JavaScript mein map() ek array method hota hai jo har element ko ek
 function ke through pass karta hai, aur result ko ek naye array mein 
 return karta hai. Iska matlab, agar aapke paas ek array hai aur aap 
 us array ke har element ko modify ya change karna chahte ho bina original
  array ko touch kiye, toh aap map() ka use kar sakte ho.

Question: Ek array [1, 2, 3, 4]; hai. map() method ka use karke har 
element ko 2 se multiply karo. Result ko print karo.
*/

const number = [1, 2, 3, 4];
const numbmulti = number.map((nm) => {
    return nm * 2
});
console.log(numbmulti);








// Method - 17 [reduce]
/*

JavaScript mein reduce() ek aise method hai jo ek array ke sab elements ko 
ek single value mein convert karta hai. Samjho tumhare paas ek list hai numbers
 ki, aur tumhe inko add karke ek total nikalna hai. Iska kaam reduce karna 
 hota hai, yani array ke elements ko ek single result mein convert karna.


 reduce() ka basic idea:

Ek function har element pe chalti hai jo do cheezen leti hai:

Accumulator: Jo total value ya result rakhti hai (har iteration ke baad badalta hai).

Current value: Jo array ka current element hai jo abhi process ho raha hai.

Tum shuru mein accumulator ko ek initial value de sakte ho.


                                     Syntax:

                      array.reduce(function(accumulator, currentValue) {
                        // yaha tum kuch bhi calculation ya kaam karte ho
                      }, initialValue);



Question: Ek array [1, 2, 3, 4]; hai. reduce() method ka use karke
 array ke elements ka sum find karo. Result ko print karo.
*/

const nbr = [1, 2, 3, 4];
const nbrRes = nbr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
// initial value ko mene 0 kr h yani nmbr jb add hoga tho vo 0 se add hona shuru hoga.
console.log(nbrRes);

// agr abhi bhi smj ni aya tho ye niche pd le isme ye kese ans aya iska vo likha h.
/*

 Ab array ke har element par function chalta hai:

Pehle 1 aur 0 ko add kiya, result 1 aaya. Ab accumulator mein 1 hai.

Phir 1 mein 2 add kiya, result 3 aaya. Ab accumulator mein 3 hai.

Phir 3 mein 3 add kiya, result 6 aaya. Ab accumulator mein 6 hai.

Phir 6 mein 4 add kiya, result 10 aaya. Ab accumulator mein 10 hai.

[END] ab sab elements pe process ho gaya, final value 10 return hoti hai.
*/







// Method -18 [some]
/*
some() JavaScript mein ek array method hai jo check karta hai ki array
 ke kisi bhi element ke liye provided condition true hai ya nahi. Agar 
 koi bhi ek element condition ko satisfy karta hai, toh some() true return
  karta hai, warna false return karta hai. Yeh method first true value milte 
  hi array ko pura check nahi karta, seedha return kar deta hai.

Question: Ek array [15, 22, 18, 30]; hai. some() method ka use karke
 check karo ki array mein koi element 18 se bada hai ya nahi.
 */


const ageS = [15, 22, 18, 30];
const resAges = ageS.some((age) => {
    return age > 18;
})
console.log(resAges);


/*
Yahan pe some() check karega ki kya array mein koi bhi number 18
 bada  hai. aur is array mein 18 se bde number sirf two h (22 and 30)
 yani ye ise satisfy kr rha tho ye true return krega.

 some() bas yeh dekhne ke liye use hota hai ki array mein koi ek bhi
 element ya item condition ko  satisfy karta hai ya nahi.
Agar haan, toh true, warna false.

ye bs true aur false hi return krta h.
 */






// Method - 19 [every]
/*
ye methods lg bhag some() jesa h bs isme kya h ki Ye method check karta hai 
ki array ke saare elements ek condition ko satisfy karte hain ya nahi.
jese ki niche dekho mene isse kha ki kya element m 60 se bda koi nmbr h 
aur element m sare nmbr 60 se bde h tho isne ture return kra
yadhi element m koi ek nmbr bhi 60 se chota hota tho ye false return krta
kyoki ye methods chata h ki sare elements  ke item isko satisfy kre.

Question: Ek array [90, 80, 70]; hai. every() method ka use karke
 check karo ki array ke sabhi elements 60 se bade hain ya nahi.
*/

const scores = [90, 80, 70]; 
const resScore = scores.every((result)=>{
    return result > 60;
})

console.log(resScore);








// Method - 20 [at]
/*

at() method JavaScript mein array ya string se kisi specific position pe value ko 
access karne ke liye use hoti hai. Iska fayda yeh hai ke yeh negative index ko bhi 
handle kar sakti hai, jisse hum array ke end se value ko access kar sakte hain.

Question: Ek array ['John', 'Paul', 'George', 'Ringo']; hai. at() method ka
 use karke array ke second last element ko access karo. Result ko print karo.
*/

const names = ['John', 'Paul', 'George', 'Ringo'];
const resNames = names.at(-2); 
/* ye bina minus lgaye bhi same chiz print krega lekin iska use negative value ko
access krne k liye use hota hai. */
console.log(resNames);



/*  array's ke total methdos vese 37 hota hai ji se hmnse sirf 20 kre h 
ye 20 common methods h tho beginner level ke hisab se phele hme ispe 
master krna hoga uske baad jo baki ke jo 17methods rhe rhe h vo bhi kr
lenge ab mene isme 20 common methods kre h ab bs hme in 20 methods 
ke upr master krne k liye practice krni hogi aur in methods se realted 
question solve krne jada se jada. */