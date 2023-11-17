const baseURL = "https://taylynnharman.github.io/wdd230/";
const linksURL = "https://taylynnharman.github.io/wdd230/data/links.json";
const activity = document.querySelector('#activity');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.lessons); // Assuming the property name is "lessons" based on your previous JSON structure
}

const displayLinks = (lessons) => {
    let heading = document.createElement('h3');
    let ul = document.createElement('ul');
    heading.textContent = "Learning Activities";

    lessons.forEach((lesson) => {
        let li = document.createElement('li');

        lesson.links.forEach((link) => {
            let a = document.createElement('a');
            a.href = `${baseURL}${link.url}`;
            a.textContent = link.title;

            let div = document.createElement('div');
            div.appendChild(a);

            li.appendChild(div);
        });

        ul.appendChild(li);
    });

    activity.appendChild(heading);
    activity.appendChild(ul);
}

getLinks();
