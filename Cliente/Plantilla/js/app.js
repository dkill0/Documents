function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const selectElement = document.querySelector('.tipo');
    selectElement.addEventListener('change', (event) => {
        fetchData(`${event.target.value}`);
    });
}

async function fetchData(opcion) {
    try {
        const res = await fetch("http://acnhapi.com/v1/villagers/" + opcion);
        const data = await res.json();
        pintaCard(data);
    } catch (error) {
        console.log(error);
    }
}

function pintaCard(vecino) {
    console.log(vecino);

    const flex = document.querySelector('.flex');
    const template = document.querySelector('#template-card').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();
    clone.querySelector('.card-body-img').setAttribute('src', vecino.image_uri);
    clone.querySelector('.card-body-title').innerHTML = `${vecino.name["name-USen"]}`;
    clone.querySelector('.card-body-text').innerHTML = `"${vecino.saying}"`;


    clone.querySelectorAll(".card-footer-social h4")[0].textContent = vecino.personality;
    clone.querySelectorAll(".card-footer-social h4")[1].textContent = vecino.birthday;
    clone.querySelectorAll(".card-footer-social h4")[2].textContent = vecino.gender;

    fragment.appendChild(clone);
    flex.appendChild(fragment);
}