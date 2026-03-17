console.log("Makeup Products:");

const products = [
    { name: "Foundation", price: 2500, category: "Skin" },
    { name: "Blush", price: 1500, category: "Skin" },
    { name: "Mascara", price: 800, category: "Eyelashes" },
    { name: "Eyeliner", price: 900, category: "Eyelashes" },
    { name: "Lipstick", price: 1400, category: "Lips" },
    { name: "Concealer", price: 2000, category: "Skin" },
    { name: "Highlighter", price: 1800, category: "Skin" },
    { name: "Brow Pencil", price: 1200, category: "Eyebrows" },
    { name: "Setting Spray", price: 2200, category: "Skin" },
    { name: "Contour Kit", price: 3000, category: "Skin" }
];
// Filtrar productos para la piel
const productsbycategory = products.filter(product => product.category === "Skin");

console.log("Skin Products:");
console.log(productsbycategory);

//Ordenar productos por nombre
const sortedproducts = productsbycategory.sort((a, b) =>
a.name.localeCompare(b.name)
);

console.log("Products sorted alphabetically:");
console.log(sortedproducts);

//Obtener solo los nombres de los productos para la piel
const skinproducts = sortedproducts.map(product => product.name);

console.log("Name of the Skin Products:");
console.log(skinproducts);

//Some
const isthere = products.some(product => product.category === "Lips");

console.log("Is there any product for Lips?");
console.log(isthere);