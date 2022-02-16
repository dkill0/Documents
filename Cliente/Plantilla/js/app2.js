function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function init() {
    let opcion = document.getElementsByClassName(".tipo").value;
    fetchData(opcion);

}

async function fetchData(opcion) {
    try {
        let count = 0;
        let aleatorio;
        let res;
        let data;
        do {
            aleatorio = getRandomInt(1, 300);
            res = await fetch("http://acnhapi.com/v1/villagers/" + aleatorio);
            data = await res.json();
            if (data.personality === opcion) {

                pintaCard(data);
                count++;
            }
        } while (count < 10);
    } catch (error) {
        console.log(error);
    }
}

function pintaCard(vecino) {

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