document.getElementById("eventForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;
    let message = document.getElementById("message");

    let interests = document.querySelectorAll('input[name="interest"]:checked');
    let schedule = document.querySelector('input[name="schedule"]:checked');

    // -------------------------
    // VALIDACIONES BASE
    // -------------------------

    if (name.length < 3) {
        message.textContent = "El nombre debe tener al menos 3 caracteres.";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Correo electrónico inválido.";
        message.style.color = "red";
        return;
    }

    // -------------------------
    // VALIDACIONES ADICIONALES (REQUISITO)
    // -------------------------

    // 1. Teléfono: solo números y 10 dígitos
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        message.textContent = "El teléfono debe tener exactamente 10 dígitos.";
        message.style.color = "red";
        return;
    }

    // 2. Debe seleccionar al menos 1 interés
    if (interests.length === 0) {
        message.textContent = "Selecciona al menos un interés.";
        message.style.color = "red";
        return;
    }

    // 3. Debe seleccionar horario
    if (!schedule) {
        message.textContent = "Selecciona un horario preferido.";
        message.style.color = "red";
        return;
    }

    // 4. Fecha no puede ser anterior a hoy
    let today = new Date().toISOString().split("T")[0];
    if (date < today) {
        message.textContent = "La fecha no puede ser anterior a hoy.";
        message.style.color = "red";
        return;
    }

    // -------------------------
    // ÉXITO
    // -------------------------

    message.textContent = "Registro exitoso ✔";
    message.style.color = "green";

    this.reset();
});