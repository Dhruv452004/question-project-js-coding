// pop methods ke questions for practice


// Question 1: 
// Ek array ['apple', 'banana', 'orange', 'mango'] hai. Isme se last element ko remove karo aur us array ko print karo.

let fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.pop();
console.log(fruits);


// Question 2:
// Ek array [10, 20, 30, 40, 50] hai. pop() method ka use karke last number ko remove karo aur print karo ki kaunsa number remove hua hai

let numbers = [10, 20, 30, 40, 50];
let rmNum = numbers.pop();
console.log(rmNum);

// Question 3:
// Ek array ['red', 'green', 'blue', 'yellow', 'purple'] hai. Pehle pop() method ka use karke last 2 colors ko remove karo, phir final array ko print karo.

let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
colors.pop()
colors.pop()
console.log(colors);


// Question 4:
// Ek array ['tillu', 'tikka', 'malkhan'] hai. Array mein se last student ko remove karo aur dekho kya array empty hai ya nahi.

let student = ['tillu', 'tikka', 'malkhan'];
student.pop();
console.log(student.length === 0);


// Question 5:
// Ek empty array [] hai. pop() method ka use karke dekho kya hota hai aur array ko print karo.

let emptyArray = [];
emptyArray.pop();
console.log(emptyArray);

// Question 6:
// Ek array ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore'] hai. pop() ka use karke last element ko remove karo, fir bache hue elements ki count ko print karo.

let cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore'];
cities.pop();
console.log(cities.length);


// Question 7:
// Ek array [100, 200, 300, 400, 500] hai. pop() method ko 3 baar use karke last 3 elements ko remove karo aur final array print karo.

let scores = [100, 200, 300, 400, 500];
scores.pop();
scores.pop();
scores.pop();
console.log(scores);

//  Question 8:
// Ek array ['milk', 'bread', 'butter', 'eggs', 'cheese'] hai. Last 2 elements ko pop() se remove karo aur phir shoppingList array mein sirf kitne items bache hain, yeh check karo.

let shoppingList = ['milk', 'bread', 'butter', 'eggs', 'cheese'];
shoppingList.pop(), shoppingList.pop();
console.log(shoppingList);


// Question 9:
// Ek array [1, 2, 3, 4, 5] hai. pop() ka use karke last element ko remove karo, phir ek if condition lagao jo check kare ki array khali hai ya nahi.

let nmbers = [1, 2, 3, 4, 5];
nmbers.pop();
if (nmbers === 0) {
    console.log(`khali hai ${nmbers}`);
} else {
    console.log(`ye abhi khali nahi h isme elements mojud h ye dekho ${nmbers}`);
}

// Question 10:
// Ek array ['English', 'Hindi', 'Spanish', 'French'] hai. pop() ka use karo aur dekho last element kaunsa remove hua hai aur array ko print karo.

let languages = ['English', 'Hindi', 'Spanish', 'French'];
console.log(languages.pop());


// Question 11:
// Ek array [90, 80, 85, 70, 95] hai. pop() ka use karke last 2 elements ko remove karo, aur phir check karo ki marks array ka last element ab kya hai.

let marks = [90, 80, 85, 70, 95];
marks.pop(), marks.pop(), console.log(marks[marks.length - 1]);

// Question 12:
// Ek array ['cat', 'dog', 'rabbit', 'lion'] hai. Pehle pop() ka use karke last element ko remove karo. Phir firse pop() ka use karo aur naya last element print karo.

let animals = ['cat', 'dog', 'rabbit', 'lion'];
animals.pop(), animals.pop(), console.log(animals[animals.length - 1]);



// Question 13:
// Ek array ['Rahul', 'Priya', 'Sita', 'Ram'] hai. Last element ko pop() se remove karne ke baad nayi array ko reverse order mein print karo.

let names = ['tika', 'tillu', 'malkhan', 'tiwaari', 'vibhuti'];
names.pop(), names.reverse(), console.log(names);


// Question 14:
// Ek array ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] hai. pop() ka use karke array mein se last 3 months remove karo, aur bachi hui array ko join karke ek string banakar print karo.


let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
months.pop();
months.pop();
months.pop();
console.log(months.join(', '));



// Question 15:
// Ek array ['Math', 'Science', 'History', 'English'] hai. pop() method ka use karke array mein se saare elements ek ek karke remove karo jab tak array khali nahi ho jata, aur har step ke baad array ko print karo.

let books = ['Math', 'Science', 'History', 'English'];
books.pop(),console.log(books);
books.pop(),console.log(books);
books.pop(),console.log(books);
books.pop(),console.log(books);



// Question 16:
// Ek array 100, 200, 300, 400] hai. pop() method ka use karke array mein last 2 prices ko remove karo, phir check karo ki array ka first element kya hai.

let prices = [100, 200, 300, 400];
prices.pop(), prices.pop(), console.log(prices[0]);


// Question 17:
// Ek array ['phone', 'tablet', 'laptop', 'smartwatch'] hai. pop() se last gadget ko remove karo aur fir check karo ki kya 'smartwatch' ab array mein hai ya nahi.

let gadgets = ['phone', 'tablet', 'laptop', 'smartwatch'];
gadgets.pop(), console.log(gadgets.includes('smartwatch'));


// Question 18:
// Ek array ['car', 'doll', 'ball', 'bat'] hai. pop() ka use karke last element ko remove karo aur check karo ki naya length kitna hai.

let  toys = ['car', 'doll', 'ball', 'bat'];
toys.pop(), console.log(toys.length);


// Question 19:
// Ek array [30, 25, 28, 32, 31] hai. pop() method ka use karke last temperature ko remove karo aur bache hue temperatures ka average 


let  temperatures = [30, 25, 28, 32, 31];
temperatures.pop();
let total = temperatures.reduce((a,b)=>{
    return a + b;
})
let average = total / temperatures.length;
console.log(average);



// Question 20:
// Ek array ['Inception', 'Interstellar', 'Matrix', 'Avatar'] hai. pop() method ka use karo last element remove karne ke liye, phir array ko alphabetically sort karke print karo.

let movies = [ 'Avatar','Interstellar', 'Matrix',  'Inception'];
movies.pop();
movies.sort();
console.log(movies);


// Question 21:
// Ek array ['BMW', 'Audi', 'Mercedes', 'Tesla', 'Ford'] hai. pop() ka use karke last car ko remove karo aur phir array mein sab cars ko uppercase letters mein print kar


let cars = ['BMW', 'Audi', 'Mercedes', 'Tesla', 'Ford'];
cars.pop();
let capitalLtr = cars.map((car)=>{
    return car.toUpperCase();
});

console.log(capitalLtr);



// Question 22:
// Ek array ['rose', 'lily', 'tulip', 'sunflower', 'daisy'] hai. pop() ka use karke last flower ko remove karo, aur phir array ko ek string mein convert karke print karo, jisme har flower ke beech mein " & " lagao.

let flowers = ['rose', 'lily', 'tulip', 'sunflower', 'daisy'];
flowers.pop();
console.log(flowers.join(' & '))


// Question 23:
// Ek array [5, 10, 15, 20, 25] hai. pop() ka use karke array ke last number ko remove karo aur check karo ki kya ab jo last element hai, vo 15 se chhota hai ya nahi.

let num = [5, 10, 15, 20, 25];
num.pop();
console.log(num[num.length -1] <15);

/*
dekho upr question khera h ki array m se last element remove krdo fir dekho jo ek last element new vala bna h vo kya 15 se bada h bs ye question h
*/



// Question 24:
// Ek array ['Math', 'Science', 'English', 'History', 'Geography'] hai. pop() ka use karke last subject ko remove karo aur check karo ki bachi hui array mein 'Math' aur 'Science' dono subjects hain ya nahi.


let subjects = ['Math', 'Science', 'English', 'History', 'Geography'];
subjects.pop();
let subCheck = subjects.includes('Math', 'Science');
console.log(subCheck);



