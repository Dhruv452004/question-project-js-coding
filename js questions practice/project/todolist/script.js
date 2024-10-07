const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const ul = document.querySelector('#ul');

// Function to add item to the list
function addItem() {
    const inputValue = input.value.trim(); // Input value ko trim kar rahe hain

    if (inputValue === '') {
        return; // Agar input empty hai, to kuch nahi karna
    }

    const li = document.createElement('li');
    li.textContent = inputValue;
    ul.appendChild(li);

    li.classList.add(
        'mt-5',
        'bg-red-500',
        'font-bold',
        // 'mx-5',
        'w-96'
    );

    input.value = ''; // Input ko clear krdia h yani ab input khali h

    // Delete button create kar rahe hain
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    li.appendChild(deletebtn);

    // Tailwind CSS classes use kar rahe hain
    deletebtn.classList.add(
        'mt-5',
        'mx-4',
        'px-3',
        'py-1',
        'bg-blue-500',
        'hover:bg-blue-800',
        'text-white',
        'rounded-lg',
        'focus:outline-none',
        'transition',
        'duration-200'
    );

    deletebtn.addEventListener('click', () => {
        li.remove(); // List item ko remove kar rahe hain
    });
}

// Add event listener to the "Add" button
btn.addEventListener('click', addItem);

// Add event listener for "Enter" key press in the input field
input.addEventListener('keydown', (b) => {
    if (b.key === 'Enter') {
        addItem(); // Item add karne ke function ko call kar rahe hain
    }
});
