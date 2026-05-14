const planets = require("./planets/planetsData");

const {
    getFavoritePlanets,
    printPlanets,
    countPlanets
} = require("./planets/planetUtils");

// Simulamos planetas favoritos del usuario
const myFavorites = ["Mars", "Jupiter", "Neptune"];

const favoritePlanets = getFavoritePlanets(planets, myFavorites);

printPlanets(favoritePlanets);

console.log(countPlanets(favoritePlanets));