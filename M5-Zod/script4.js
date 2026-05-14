// Schema con Zod
const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

// Elements
const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Real-time validation
nameInput.addEventListener("input", validateField);
emailInput.addEventListener("input", validateField);
passwordInput.addEventListener("input", validateField);

function validateField() {
    const result = schema.safeParse({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    });

    clearErrors();

    if (!result.success) {
        const errors = result.error.format();

        if (errors.name?._errors) {
            nameError.textContent = errors.name._errors[0];
        }

        if (errors.email?._errors) {
            emailError.textContent = errors.email._errors[0];
        }

        if (errors.password?._errors) {
            passwordError.textContent = errors.password._errors[0];
        }
    }
}

// Submit validation
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const result = schema.safeParse({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    });

    clearErrors();

    if (!result.success) {
        const errors = result.error.format();

        if (errors.name?._errors) {
            nameError.textContent = errors.name._errors[0];
        }

        if (errors.email?._errors) {
            emailError.textContent = errors.email._errors[0];
        }

        if (errors.password?._errors) {
            passwordError.textContent = errors.password._errors[0];
        }

        return;
    }

    alert("Form submitted successfully!");
    form.reset();
});

function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
}