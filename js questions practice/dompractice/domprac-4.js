// Elements 
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result');

// Buttons
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const mulBtn = document.getElementById('mulBtn');
const divBtn = document.getElementById('divBtn');

// Functin 
const calculate = (operation) => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    let result;

    if (operation === 'add') { result = num1 + num2 }

    else if (operation === 'subtract') { result = num1 - num2 }

    else if (operation === 'multi') { result = num1 * num2 }

    else if (operation === 'divide') { result = num1 / num2 };

    resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
}


addBtn.addEventListener('click', () => { calculate('add') });
subBtn.addEventListener('click', () => { calculate('subtract') });
mulBtn.addEventListener('click', () => { calculate('multi') });
divBtn.addEventListener('click', () => { calculate('divide') });


