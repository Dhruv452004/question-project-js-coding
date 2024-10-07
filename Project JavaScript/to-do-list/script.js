const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTask');
const Ul = document.querySelector('#UL');




const toDoList = () => {
    //  task agr khali h tho alert ayga
    let task = taskInput.value;
    if (task === '') {
        return alert('Please enter a task');
    }

    // li element create krte hai aur use style dete h 
    let li = document.createElement('li');
    li.classList.add('mx-5', 'py-2', 'border-b', 'border-gray-300');
    Ul.appendChild(li);


    // ye li ke andt span element create kr h jiksa name spanText h tu koi sa bhi element add kr skta hai jese [p, div, etc]
    let spanText = document.createElement('span');
    spanText.textContent = task;
    li.appendChild(spanText);
    spanText.classList.add('bg-red-500', 'px-2', 'py-2', 'rounded-xl');

    taskInput.value = ''; // isse jese mene input m task add krlia uske baad kya hoga ki ye  khud hi input ko clear kr dega.



    // ye buttons ka div h jese html m ek div m button add krte h thik vesa hi
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('mt-5', 'flex', 'flex-col', 'mt-2');
    li.appendChild(buttonContainer);


    // ye completeBtn h jese hi ispe click hoga ye spand tag ke text m line through krega
    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('bg-green-500', 'text-white', 'py-1', 'px-3', 'rounded', 'hover:bg-green-600', 'mb-2');
    completeBtn.addEventListener('click', () => {
        spanText.style.textDecoration = 'line-through';
    });

    buttonContainer.appendChild(completeBtn);


    // ye deleteBtn h jese hi ispe click hoga ye li ko delete kre dega
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('bg-red-500', 'text-white', 'py-1', 'px-3', 'rounded', 'hover:bg-red-600');
    deleteBtn.addEventListener('click', () => {
        Ul.removeChild(li);
    });
    buttonContainer.appendChild(deleteBtn);
};
// ye addTaskBtn task add krega jb ispe click hoga
addTaskBtn.addEventListener('click', () => {
    toDoList();
});


// muje nahi pta ye addTaskBtn pr keydown lga rha hu tho ye chl tho rha h mgr pehle ye alert show kr rha h muje ni pta kyo islye mene taskInput pr event listner lga dia aur ye work kr rha h.

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        toDoList();
    }
});
