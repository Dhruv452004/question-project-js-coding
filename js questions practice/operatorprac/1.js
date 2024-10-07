// Question - 1  

const input1 = document.querySelector('#input-1')
const input2 = document.querySelector('#input-2')
const resultDisplay = document.querySelector('#result');


// add all buttons

const add = document.querySelector('#addBtn');
const sub = document.querySelector('#subBtn');
const multi = document.querySelector('#mulBtn');
const divi = document.querySelector('#divBtn');
const parcent = document.querySelector('#percent')


const allClear = document.querySelector('#allClear');



const Calc = (caclculation) => {
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);

    let result;

    if (caclculation === 'add') { result = num1 + num2; }
    else if (caclculation === 'sub') { result = num1 - num2 }
    else if (caclculation === 'multi') { result = num1 * num2 }
    else if (caclculation === 'divi') { result = Math.floor(num1 / num2) }
    else if (caclculation === 'parcent') { result = (num1 / num2) * 100 }



    resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
}

add.addEventListener('click', () => { Calc('add') });
sub.addEventListener('click', () => { Calc('sub') });
multi.addEventListener('click', () => { Calc('multi') });
divi.addEventListener('click', () => { Calc('divi') });
parcent.addEventListener('click', () => { Calc('parcent') });
allClear.addEventListener('click', () => {
    input1.value = '';
    input2.value = '';
    resultDisplay.textContent = '';
    setTimeout(() => {
        alert('all clear success!')
    }, 500);
});






// Question - 2

const numberInput = document.querySelector('#numberInput');

const checkBtn = document.querySelector('#checkBtn');

const ResultDis = document.querySelector('#ResultDis');

const checkOddEven = () => {
    let result;
    const num = parseInt(numberInput.value);

    if (num % 2 === 0) { result = `${num} is Even Number` }
    else { result = `${num} is Odd Number` };

    numberInput.value = '';
    ResultDis.textContent = result;
}

checkBtn.addEventListener('click', () => { checkOddEven() });




// Question - 3

const onenum = document.querySelector('#onenum');
const twonum = document.querySelector('#twonum');
const whoGreaterBtn = document.querySelector('#whoGreaterBtn');
const disCheck = document.querySelector('#disCheck');

const checkGreater = () => {
    const num1 = parseInt(onenum.value);
    const num2 = parseInt(twonum.value);

    let result;

    if (num1 > num2) {
        result = `${num1} is greater than ${num2}`
    } else if (num1 < num2) {
        result = `${num2} is greater than ${num1}`
    } else if (num1 === num2) {
        result = `${num1} and ${num2} both are equal`
    } else { alert('dono input m number dal be') }

    onenum.value = '';
    twonum.value = '';
    disCheck.textContent = result;
};

whoGreaterBtn.addEventListener('click', () => { checkGreater() });



// Question - 4

const numInput = document.querySelector('#numInput');
const checkNumBtn = document.querySelector('#checkNumBtn');
const disCheckNum = document.querySelector('#disCheckNum');

const checkNum = () => {
    const num = parseInt(numInput.value);
    let result;
    if (num > 0) {
        result = `${num} is Positive Number`;
    }
    else if (num < 0) {
        result = `${num} is Negative Number`;
    }
    else if (num === 0) {
        result = `${num} is Zero`;
    }
    else { result = 'Please enter a number' };

    disCheckNum.textContent = result;
};

checkNumBtn.addEventListener('click', () => { checkNum() });


// Question -5
const numInputDiv = document.querySelector('#numInputDiv');
const checkDivBtn = document.querySelector('#checkDivBtn');
const disCheckDiv = document.querySelector('#disCheckDiv');

const checkDiv = () => {
    const num = parseInt(numInputDiv.value);
    let result;
    if (isNaN(num)) {
        result = 'Please enter a number'
    }
    else if (num % 3 === 0 && num % 5 === 0) {
        result = `${num} is divisible by both 3 and 5`;
    }
    else if (num % 3 !== 0 && num % 5 !== 0) {
        result = `${num} is not divisible by both 3 and 5`;
    }
    else if (num % 3 === 0 && num % 5 !== 0) {
        result = `${num} is divisible by 3 but not by 5`;
    }
    else if (num % 3 !== 0 && num % 5 === 0) {
        result = `${num} is divisible by 5 but not by 3`;
    }
    disCheckDiv.textContent = result;
};

checkDivBtn.addEventListener('click', () => { checkDiv() });


// Question -6

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');
const num5 = document.querySelector('#num5');

const calculateBtn = document.querySelector('#calculateBtn');
const disAvg = document.querySelector('#disAvg');


const average = () => {
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);
    const value3 = parseFloat(num3.value);
    const value4 = parseFloat(num4.value);
    const value5 = parseFloat(num5.value);

    let sum = value1 + value2 + value3 + value4 + value5;

    let avg = sum / 5;
    sum;
    disAvg.textContent = `Average is ${avg.toFixed(2)}`
}

calculateBtn.addEventListener('click', () => { average() });


// Question -7

const scoreInput = document.querySelector('#scoreInput');
const calculateGradeBtn = document.querySelector('#calculateGradeBtn');
const disGrade = document.querySelector('#disGrade');

calculateGradeBtn.addEventListener('click', () => {
    const scoreInputValue = parseInt(scoreInput.value);
    let grade;

    if (scoreInputValue >= 90) {
        grade = 'A';
    } else if (scoreInputValue >= 80) {
        grade = 'B';
    } else if (scoreInputValue >= 70) {
        grade = 'C';
    } else if (scoreInputValue >= 60) {
        grade = 'D';
    } else if (scoreInputValue >= 40) {
        grade = 'F';
    } else if (scoreInputValue >= 0) {
        grade = 'fail';
    } else { grade = 'Invalid Score' }

    disGrade.textContent = `Your Grade is: ${grade}`;
});






// Question - 8

const toggleBtn = document.querySelector('#toggleBtn');
const disToggle = document.querySelector('#disToggle');

let isOn = false;
const toggle = () => {
    isOn = !isOn;
    if (isOn) {
        disToggle.textContent = 'LED is ON';
    } else { disToggle.textContent = 'LED is OFF'; }
}

toggleBtn.addEventListener('click', toggle);


