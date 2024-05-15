document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && addButton.value) {
            const li = document.createElement('li');
            li.textContent = addButton.value;
            li.setAttribute('contenteditable', false);
            todoList.appendChild(li);
            addButton.value = ''; // Clear input box

            // Double-click to edit
            li.addEventListener('dblclick', () => {
                li.setAttribute('contenteditable', true);
                li.focus(); // Automatically focus the item to trigger the focus event
            });

            // Focus event to change the background color
            li.addEventListener('focus', () => {
                li.style.backgroundColor = 'lightblue'; // Change background color on focus
                li.classList.add('editing');
            }, true); // Use capture phase to ensure the event is captured during the focusing phase

            // Blur event to stop editing and revert styles
            li.addEventListener('blur', () => {
                li.setAttribute('contenteditable', false);
                li.style.backgroundColor = ''; // Revert background color on blur
                li.classList.remove('editing');
            }, true); // Use capture phase for consistency with the focus event

            // Right-click to delete
            li.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                if (confirm('Delete this item?')) {
                    li.remove();
                }
            });
        }
    });
});


// The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts (<script defer src="…"> and <script type="module">) 
// have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.