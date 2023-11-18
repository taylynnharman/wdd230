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

        lesson.links.forEach((link) => {
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

