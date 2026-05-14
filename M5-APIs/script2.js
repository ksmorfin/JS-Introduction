console.log("JS cargado");

document.addEventListener("DOMContentLoaded", () => {

    const fetchBtn = document.getElementById("fetch-btn");
    const axiosBtn = document.getElementById("axios-btn");
    const container = document.getElementById("data-container");

    function displayCharacters(characters) {

        container.innerHTML = "";

        characters.forEach(c => {
            container.innerHTML += `
                <div>
                    <h3>${c.name}</h3>
                    <img src="${c.image}" width="150">
                </div>
            `;
        });
    }

    async function getFetch() {
        const res = await fetch("https://api.sampleapis.com/simpsons/characters");
        const data = await res.json();
        displayCharacters(data);
    }

    async function getAxios() {
        const res = await axios.get("https://api.sampleapis.com/simpsons/characters");
        displayCharacters(res.data);
    }

    fetchBtn.addEventListener("click", getFetch);
    axiosBtn.addEventListener("click", getAxios);

});