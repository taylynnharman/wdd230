const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    if (input.value != '') {
    
    }
    else {
       return console.log('Please enter a book and chapter');
    }
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button')
    li.textContent = input.value;

    input.value = '';

    editButton.textContent = 'EDIT';
    deleteButton.textContent = '❌';
    li.append(editButton);
    li.append(deleteButton);
    list.append(li);

// Delete Function
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
    })
// Edit Function
    editButton.addEventListener('click', function(){
        if (listItem) {
            const inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.value = listItem.textContent;
    
            // Replace the list item with the input box
            listItem.parentNode.replaceChild(inputElement, listItem);
    
            // Add an event listener to the input box to handle saving the edited item
            inputElement.addEventListener('blur', saveEditedItem);
            inputElement.focus();
        }
    })
    input.focus();

});
button.addEventListener('click', () => {});



// Get the button and list elements
const replaceButton = document.getElementById('replaceButton');
const list = document.getElementById('list');

// Add an event listener to the button
replaceButton.addEventListener('click', replaceListItemWithInput);

// Function to replace a list item with an input box
function replaceListItemWithInput() {
    const listItem = list.querySelector('li'); // You can replace this with your desired logic to select the specific list item you want to replace.

    if (listItem) {
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.value = listItem.textContent;

        // Replace the list item with the input box
        listItem.parentNode.replaceChild(inputElement, listItem);

        // Add an event listener to the input box to handle saving the edited item
        inputElement.addEventListener('blur', saveEditedItem);
        inputElement.focus();
    }
}

// Function to save the edited item and replace the input box with a list item
function saveEditedItem(event) {
    const inputElement = event.target;
    const newText = inputElement.value;

    const listItem = document.createElement('li');
    listItem.textContent = newText;

    // Replace the input box with the list item
    inputElement.parentNode.replaceChild(listItem, inputElement);
}
