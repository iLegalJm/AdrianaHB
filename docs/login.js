document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const password = document.getElementById("password").value;

    if (birthdate === "2003-09-27" && password === "Arely") {
        window.location.href = "cargando.html";
    } else {
        alert("Fecha de nacimiento o contraseña incorrecta. Intente de nuevo.");
    }
});
