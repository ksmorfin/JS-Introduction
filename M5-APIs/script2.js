console.log("JS cargado correctamente");

const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const container = document.getElementById("data-container");

function displayCharacters(characters) {

    container.innerHTML = "";

    characters.forEach(character => {

        container.innerHTML += `
            <div>
                <h3>${character.name}</h3>
                <img src="${character.image}" width="200" alt="${character.name}">
            </div>
        `;
    });
}

// FETCH
async function getWithFetch() {

    try {

        const response = await fetch(
            "https://api.sampleapis.com/simpsons/characters"
        );

        const data = await response.json();

        displayCharacters(data);

    } catch (error) {
        console.log("Fetch error:", error);
    }
}

// AXIOS
async function getWithAxios() {

    try {

        const response = await axios.get(
            "https://api.sampleapis.com/simpsons/characters"
        );

        displayCharacters(response.data);

    } catch (error) {
        console.log("Axios error:", error);
    }
}

// EVENTS
fetchBtn.addEventListener("click", getWithFetch);
axiosBtn.addEventListener("click", getWithAxios);