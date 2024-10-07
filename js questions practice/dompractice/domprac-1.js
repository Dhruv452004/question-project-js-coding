const para1 = document.querySelector('#para-1');
const btn1 = document.querySelector('#btn-1');


btn1.addEventListener(('click'), () => {
  if (para1.textContent === '') {
    para1.textContent = 'dekh button pr click krte hi text change ho gya'
  } else {
    para1.textContent = ''
  }
})



// Questions 2


const para2 = document.querySelector('#para-2');
const btn2 = document.querySelector('#btn-2');

btn2.addEventListener(('click'), () => {
  if (para2.classList.contains('hidden')) {
    para2.classList.remove('hidden')
    btn2.textContent = 'Hide'
  } else {
    para2.classList.add('hidden');
    btn2.textContent = 'Show'
  }
})


// Question 3

const box3 = document.querySelector('#box-3');
const btn3 = document.querySelector('#btn-3');



// btn3.addEventListener('click', () => {
//   // Check the current background color  
//   if (box3.style.backgroundColor === 'rgb(30, 64, 175)') {
//     // Change to red color if it's currently blue  
//     box3.style.backgroundColor = 'red';
//     btn3.textContent = 'Change to Blue';
//   } else {
//     // Change to blue color if it's currently red  
//     box3.style.backgroundColor = '#1E40AF'; // Hex code for blue
//     btn3.textContent = 'Change to Red';
//   }
// });

// ye  dusra trika h jo tailwind css ke liye hoga upr vala b aap koi sa bhi krlo

btn3.addEventListener('click', () => {
  // Check the current background color class  
  if (box3.classList.contains('bg-blue-700')) {
    // Remove blue color class and add red color class  
    box3.classList.remove('bg-blue-700');
    box3.classList.add('bg-red-500');
    btn3.textContent = 'Change to Blue';
  } else {
    // Remove red color class and add blue color class  
    box3.classList.remove('bg-red-500');
    box3.classList.add('bg-blue-700');
    btn3.textContent = 'Change to Red';
  }
});





// Question 4 

const display = document.querySelector('#counter');
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');

let counter = 0;

increment.addEventListener(('click'), () => {
  counter++;
  display.textContent = counter;
});

decrement.addEventListener(('click'), () => {
  counter--;
  display.textContent = counter;
})





// Question 5

const login = document.querySelector('#loginForm');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

login.addEventListener('submit', (event) => {
  if (username.value === '' || password.value === '') {
    event.preventDefault();
    alert('bhai username aur password tho daal');
  } else {
    event.defaultPrevented;
    confirm('kya tum form submit krna chate ho')
  }
});



const colorPicker = document.querySelector('#colorPicker');
const box = document.querySelector('#box');

colorPicker.addEventListener('input', () => {
  box.style.backgroundColor = colorPicker.value;

})


// Question - 6

const UL = document.querySelector('#ul');
const add = document.querySelector('#Add');
const dbtn = document.querySelector('#dbtn');

add.addEventListener('click', () => {
 const li = document.createElement('li');
 li.textContent = 'new text';
 UL.appendChild(li);
});

dbtn.addEventListener('click', (e) => {
  const removeli = UL.lastElementChild;
  UL.removeChild(removeli);
});