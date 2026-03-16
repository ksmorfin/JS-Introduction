const contacts = [
    {
        name: "Korina Morfin",
        role: "CEO",
        company: "FitLife Gym",
        email: "korinamorfin@fitlifegym.com",
        phone: "+1 (555) 123-4567",
    },
    {
        name: "Diana Conforti",
        role: "Personal Trainer",
        company: "FitLife Gym",
        email: "dianaconforti@fitlifegym.com",
        phone: "+1 (555) 987-6543"
    },
    {
        name: "Ana Lucinda",
        role: "Nutritionist",
        company: "FitLife Gym",
        email: "analucinda@fitlifegym.com",
        phone: "+1 (555) 555-5555"
    }
];

const creatcard = (contact) => {
    return `
**********************
* ${contact.name}
* ${contact.role}
* ${contact.company}
* ${contact.email}
* ${contact.phone} 
**********************
`;
};

for (let contact of contacts) {
    console.log(creatcard(contact));
}
