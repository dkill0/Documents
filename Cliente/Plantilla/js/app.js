function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const aleatorio = getRandomInt(1, 299);
    fetchData(aleatorio);
}

async function fetchData(id) {
    try {
        const res = await fetch("http://acnhapi.com/v1/villagers/" + id);
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
    clone.querySelector('.card-body-title').innerHTML = `${vecino.name[0]}`;

    clone.querySelector('.card-body-text').innerHTML = `"${vecino.saying}"`;
    //clone.querySelectorAll(".card-footer.social h4")[0].textContent = vecino.personality;
    fragment.appendChild(clone);
    flex.appendChild(fragment);
}