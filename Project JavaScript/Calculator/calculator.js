const numberInput = document.querySelector('#numberInput');
const buttons = document.querySelectorAll('#buttons button');

let currentNum = '';
let operator = ''; // [+, -, *, /]
let previousNum = '';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const btnText = event.target.innerText;

        if (btnText >= '0' && btnText <= '9') {
            currentNum += btnText; // currentNum = currentNum + btnText;
            numberInput.value = currentNum;
        }
        else if (btnText === ('+') || btnText === ('-') || btnText === ('*') || btnText === ('/')) {
            operator = btnText;
            previousNum = currentNum;
            currentNum = '';
            console.log(`Operator set: ${operator}, Previous Number: ${previousNum}`);
        }

        else if (btnText === ('=')) {
            let result;
            console.log(`Calculating: ${previousNum} ${operator} ${currentNum}`);
            if (operator === ('+')) {
                result = parseFloat(currentNum) + parseFloat(previousNum);
            }
            else if (operator === ('-')) {
                result = parseFloat(currentNum) - parseFloat(previousNum);
            }
            else if (operator === ('*')) {
                result = parseFloat(currentNum) * parseFloat(previousNum);
            }

            else if (operator === ('/')) {
                if (parseFloat(currentNum) === 0) {
                    alert("Error: Division by zero is not allowed!");
                    // Clear input if division by zero
                    currentNum = '';
                    numberInput.value = '';
                    return; // Exit the function
                } else {
                    result = parseFloat(previousNum) / parseFloat(currentNum);
                }
            }
            numberInput.value = result;
            currentNum = result.toString(); // Yeh ensure karega ki next operation sahi ho
            operator = '';
        }
        else if (btnText === 'C') {
            currentNum = '';
            operator = '';
            previousNum = '';
            numberInput.value = '';
        }
    });
});
