function getFavoritePlanets(planets, favorites) {
    return planets.filter((planet) => favorites.includes(planet));
}

function printPlanets(planets) {
    console.log("🌌 Your Favorite Planets:");
    planets.forEach((planet, index) => {
        console.log(`${index + 1}. ${planet}`);
    });
}

module.exports = {
    getFavoritePlanets,
    printPlanets
};

function countPlanets(planets) {
    return `Total favorite planets: ${planets.length}`;
}

module.exports = {
    getFavoritePlanets,
    printPlanets,
    countPlanets
};