// const baseURL = "https://taylynnharman.github.io/wdd230/";
// const linksURL = "https://taylynnharman.github.io/wdd230/data/links.json";
// const activity = document.querySelector('#activity');

// async function getLinks() {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     console.log(data);
//     displayLinks(data.links); 
// }

// const displayLinks = (links) => {
//     let heading = document.createElement('h3');
//     let ul = document.createElement('ul');
//     heading.textContent = "Learning Activities";

//     links.forEach((title) => {
//         let li = document.createElement('li');
//         let a = document.createElement('a');
//         a.href = `${baseURL}${title.url}`;
//         a.textContent = title.title;

//         li.appendChild(a);
//         ul.appendChild(li);
//     });

//     activity.appendChild(heading);
//     activity.appendChild(ul);
// }

// getLinks();

const baseURL = "https://taylynnharman.github.io/wdd230/";
const linksURL = "https://taylynnharman.github.io/wdd230/data/links.json";
const activity = document.querySelector('#activity');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    let heading = document.createElement('h3');
    heading.textContent = "Learning Activities";
    activity.appendChild(heading);

    lessons.forEach((lesson) => {
        let lessonHeading = document.createElement('h4');
        lessonHeading.textContent = `Lesson ${lesson.lesson}`;
        activity.appendChild(lessonHeading);

        lesson.links.forEach((link, index) => {
            let listItem = document.createElement('li');
            let a = document.createElement('a');
            a.href = `${baseURL}${link.url}`;
            a.textContent = link.title;

            listItem.appendChild(a);
            activity.appendChild(listItem);
        });
    });
}

getLinks();

