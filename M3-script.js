const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const regenerateBtn = document.getElementById("regenerate");
const copyBtn = document.getElementById("copy");

const strengthText = document.getElementById("strength-text");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+";

function generatePassword() {
    let allowedChars = "";
    let password = "";

    if (uppercase.checked) allowedChars += upperChars;
    if (lowercase.checked) allowedChars += lowerChars;
    if (numbers.checked) allowedChars += numberChars;
    if (symbols.checked) allowedChars += symbolChars;

    if (!allowedChars) {
        alert("Select at least one option.");
        return;
    }

    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    passwordField.value = password;
    updateStrength(password);
}

regenerateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordField.value);
});

function updateStrength(password) {
    let score = 0;

    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
        strengthText.textContent = "Weak";
    } else if (score <= 4) {
        strengthText.textContent = "Moderate";
    } else {
        strengthText.textContent = "Strong";
    }
}