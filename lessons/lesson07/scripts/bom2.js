const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Set up an array to hold chapters for local storage
let chaptersArray = getChapterList() || []; 

// Iterate through each chapter in the array
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
        }
    });

    function displayList(item){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        li.textContent = input.value;

        input.value = '';

        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);
    // Delete Function
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
    });}
    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
      }

    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
      }

    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
      }




