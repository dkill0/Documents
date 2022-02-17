function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function init() {
    let opcion = document.getElementById("tipo").value;
    fetchData(opcion);

}

async function fetchData(opcion) {
    try {
        let count = 0;
        let aleatorio;
        let res;
        let data;
		const flex =  document.querySelector('#imprime');
		flex.innerHTML = "";
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
    const flex = document.querySelector('#imprime');
    const template = document.querySelector('#template-card').content;
    const clone = template.cloneNode(true);

    const fragment = document.createDocumentFragment();

    clone.querySelector('.card-img').setAttribute('src', vecino.image_uri);
    clone.querySelector('.card-title').innerHTML = `${vecino.name["name-USen"]}`;
    clone.querySelector('.card-text').innerHTML = `"${vecino.saying}"`;
    clone.querySelectorAll(".col-4 p")[0].textContent = vecino.personality;
    clone.querySelectorAll(".col-4 p")[1].textContent = vecino.birthday;
    clone.querySelectorAll(".col-4 p")[2].textContent = vecino.gender;


    fragment.appendChild(clone);
    flex.appendChild(fragment);

}