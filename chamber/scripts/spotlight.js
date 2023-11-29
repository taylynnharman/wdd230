//Pull Data from github
const url = "https://raw.githubusercontent.com/taylynnharman/wdd230/main/chamber/data/members.json"
const memberCards = document.getElementById('memberCards');


    async function getMemberData() {
        try {
            console.log('calling');
            const response = await fetch(url);
            const data = await response.json();
            console.table(data.members);
            displaySpotlight(data.members);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    //filter out gold members
    function filterMembers(members) {
        return members.filter(member => member.membership === "Gold");
    }

    function pickRandomMember(members) {
        const randomIndex = Math.floor(Math.random() * members.length);
        return members[randomIndex];
    }

    function createMemberCard(member) {
        let div = document.createElement('div');
        div.classList.add('mySlides', 'fade');
        console.log("Div Created")

        // let slide = 1;
        // let numberDiv = document.createElement('div');
        // numberDiv.classList.add('numbertext');
        // numberDiv.textContent = `${slide}/3`;

        let image = document.createElement('img');
        image.src = member.spotlight;
        image.alt = `${member.name} Spotlight`;
        image.loading = 'lazy';
        image.width = '300';
        image.height = '300';

        // div.appendChild(numberDiv);
        div.appendChild(image);

        return div;
    }

    function createSpotlights() {
        let container = document.createElement('div');
        const goldMembers = filterMembers();
        for (let i = 0; i < 3; i++) {
            const randomMember = pickRandomMember(goldMembers);
            console.log('Random Member', randomMember)
            const memberCard = createMemberCard(randomMember);
            container.appendChild(memberCard);
        }
        return container;
    }

    function displaySpotlight(members) {
        goldMembers = filterMembers(members);
        console.log('Filtered gold members:', goldMembers);
        memberCards.appendChild(createSpotlights());
    }

    // Call the function to fetch and display data
    getMemberData();
