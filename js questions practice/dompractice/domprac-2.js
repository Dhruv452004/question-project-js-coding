// Quesiton -1
const input = document.querySelector('#input');
const Btn = document.querySelector('#displayBtn');
const container = document.querySelector('#container');

const item = () => {
    const inputValue = input.value.trim(); // Trimmed value save karo
    if (inputValue === '') {
        return;
    };         // Agar input empty ho, to kuch na karo

    const para = document.createElement('p');
    para.textContent = inputValue;
    container.appendChild(para);
    input.value = '';

    para.classList.add(
        'border',
        'border-1',
        'border-black',
        'mt-1',
        'bg-pink-500',
        'px-2'
    );


    // ye ek ek krke paragraph remove krega

    const Remove = document.createElement('button');
    Remove.textContent = 'Remove';
    para.appendChild(Remove);

    const REmove = Remove.addEventListener('click', () => {
        container.removeChild(para);
    });

    // ye mene button banaya h jispe click krte hi reset ho jayga pura container yani jitne bhi paragraph bnenge vo use ek sath delete kr dega

    const Reset = document.querySelector('#resetBtn').addEventListener('click', () => {
        container.removeChild(container.firstChild);
    });

    // remove button style kra h mene using tailwind css 
    Remove.classList.add(
        'mt-1',
        'mb-1',
        'mx-4',
        'px-3',
        'py-1',
        'bg-red-500',
        'text-white',
        'rounded-lg',
        'hover:bg-red-700',
        'focus:outline-none',
        'transition',
        'duration-200'
    );
};


Btn.addEventListener('click', item);

// jese hi mein enter press krunga tho ye jo mene type kra h vo show hoga 
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        item();
    }
});

// Question -2

const spanpara = document.querySelector('#p-hide');
const readMore = document.querySelector('.readmore');
readMore.addEventListener('click', () => {
    if (spanpara.classList.contains('hidden')) {
        spanpara.classList.remove('hidden');
    } else {
        spanpara.classList.add('hidden');
    }
});


// Question -3
function boxhover() {
    const box = document.querySelector('#box');
    const resetBtn1 = document.querySelector('#resetBtn1');


    // Mouse enter event
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'red';
        box.textContent = 'RED';
        box.classList.add('text-white');
    });

    // Mouse leave event
    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = '#5050d1';
        box.textContent = 'BLUE';
    });

    resetBtn1.addEventListener('click', () => {
        console.log("Reset button clicked"); // Ye check karne ke liye
        box.style.backgroundColor = 'white';
        box.textContent = 'RED/BLUE';
        box.classList.add('text-black')
    });

}

boxhover();


// Question -4

let randomColor = () => {
    let r = 0 + Math.floor(Math.random() * 255);
    let g = 0 + Math.floor(Math.random() * 255);
    let b = 0 + Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}


let boxColor = document.querySelectorAll('.BOXES');
let changeColorBtn = document.querySelector('#changeColorBtn');
changeColorBtn.addEventListener('click', () => {
    boxColor.forEach(box => {
        box.style.backgroundColor = randomColor();
    });
});

// ye setInterval krne se ye random color khud change honge

// setInterval(() => {
//     boxColor.forEach(box => {
//         box.style.backgroundColor = randomColor();
//     });
// }, 1000);





// Question -6

const paraCont = document.querySelector('#paraCont');
const btnCont = document.querySelector('#btnCont');
let count = 0;

const countFunction = () => {
    count++;
    paraCont.innerHTML = `Aapne <span class="font-bold border bg-black px-2 py-1 rounded-full">${count}</span> baar click kiya hai button par`;
};


btnCont.addEventListener('click', countFunction);

btnCont.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        countFunction();
    }
})




// Question -7

const doublePara = document.querySelector('.doublePara');
doublePara.addEventListener('dblclick', ()=>{
    doublePara.textContent = 'double click'
})
