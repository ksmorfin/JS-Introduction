console.log("Class 3 Exercises");
console.log("-------------------");
console.log("Exercise 1. Approval grades"); //filter()

const grades = [60, 85, 92, 48, 75, 50, 98];
const approved = grades.filter(grade => grade >= 70);

console.log(approved);

console.log("-------------------");
console.log("Exercise 2. Capitalize names"); //map()

const names = ["korina", "martha", "antonio", "diego", "francisco"];
const capitalizednames= names.map(name => name.toUpperCase());

console.log(capitalizednames);

console.log("-------------------");
console.log("Exercise 3. Average ages"); //reduce()

const ages = [27, 65, 76, 41, 6];
const sum = ages.reduce((total, age) => total + age, 0);
const average= sum / ages.length;

console.log(average);

console.log("-------------------");
console.log("Exercise 4. Is there any even number?"); //some()

const numbers = [1, 5, 7, 11, 13, 2];
const pairnumber = numbers.some(number => number % 2 === 0);

console.log(pairnumber);

console.log("-------------------");
console.log("Exercise 5. More than 3 letters long names"); //every()

const names2 = ["Korina", "Martha", "Antonio", "Diego", "Francisco"];
const morethanthree = names2.every(name => name.length > 3);

console.log(morethanthree);

console.log("-------------------");
console.log("Exercise 6. Find a name"); //includes()

const names3 = ["Korina", "Martha", "Antonio", "Diego", "Francisco"];
const findname = names3.includes("Dante");

console.log(findname);

console.log("-------------------");
console.log("Exercise 7. Sort products by price"); //sort()

const products = [
    { name: "Leggings", price: 1200 },
    { name: "Tank top", price: 800 },
    { name: "Socks", price: 500 },
    { name: "Headbands", price: 350 },
    { name: "Shorts", price: 1200 },
    { name: "Sport bra", price: 1000 },
    { name: "Joggings", price: 1500 },
];
products.sort((a, b) => a.price - b.price);

console.log(products);

console.log("-------------------");
console.log("Exercise 8. Users"); //forEach()

const users = [
    { name: "Korina", age: 27, place: "Madrid" },
    { name: "Martha", age: 65, place: "Miguel Hidalgo" },
    { name: "Antonio", age: 76, place: "CDMX" },
    { name: "Diego", age: 41, place: "Colima" },
    { name: "Francisco", age: 6, place: "Manzanillo" }
];
users.forEach(user => {
    console.log(user.name, user.age, user.place);
});