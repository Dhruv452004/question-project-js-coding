
const toggleButton = document.querySelector('#toggleButton');
const circle = document.querySelector('#circle');
const body = document.body;

toggleButton.addEventListener('click', () => {

    body.classList.toggle('bg-zinc-800')
    body.classList.toggle('text-white');
    circle.classList.toggle('ml-auto');

})