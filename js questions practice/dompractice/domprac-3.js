// Question -1

const passwordInput = document.querySelector('#passwordInput');
const toggleButton = document.querySelector('#toggleButton');

const passwordSubmit = () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'hide password';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'show password';
    };
}

toggleButton.addEventListener('click', passwordSubmit);



// Question -2

const boxranColor = document.querySelector('#boxranColor');
const changeButton = document.querySelector('#changeButton');

const randomColor = () => {
    let colors = ['red', 'green', 'blue', 'yellow']; // yha color aur add kr skte h jitne mrji
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


changeButton.addEventListener('click', () => {
    const newColor = randomColor();
    boxranColor.style.backgroundColor = newColor;

    changeButton.textContent = newColor; // Button ka text  color ke hisaab se set hota hai
});
// keyboard enter ki se abhi button work krega
changeButton.addEventListener('keydown', (e) => {
    const newColor = randomColor();
    boxranColor.style.backgroundColor = newColor;

    changeButton.textContent = newColor; // Button ka text  color ke hisaab se set hota hai
});



// Question -3

const images = [
    // image one
    'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',


    // image two
    'https://images.pexels.com/photos/1111367/pexels-photo-1111367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    // image three
    'https://images.pexels.com/photos/28292132/pexels-photo-28292132/free-photo-of-aerial-view-of-a-group-of-people-on-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',

    // image four
    'https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];



const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateImage() {
    sliderImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    };
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0
    };
    updateImage();
});


// Question -4

const countdownDisplay = document.querySelector('#countdownDisplay');
const startButton = document.querySelector('#startButton');


let contDisplay = 10;
startButton.addEventListener('click', () => {
    countdownDisplay.textContent = contDisplay;

    let contdown = setInterval(() => {
        contDisplay--;
        countdownDisplay.textContent = contDisplay;

        if (contDisplay <= 0) {
            clearInterval(contdown);
            countdownDisplay.textContent = `Time's Up`;
        }
    }, 1000);
});



// Question -5

const changetextBtn = document.querySelector('#changetextBtn');
const changePara = document.querySelector('#change-p');

const textFunction = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
};

changetextBtn.addEventListener('click', () => {
    changePara.style.color = textFunction();
});


