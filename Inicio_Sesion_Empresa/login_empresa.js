console.log("El archivo login_empresa.js se cargó correctamente.");

document.getElementById("login-empresa-form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("El botón Iniciar Sesión ha sido presionado.");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const recaptchaResponse = grecaptcha.getResponse();

    if (!recaptchaResponse) {
        alert("Por favor, verifica que no eres un robot.");
        return;
    }

    console.log("Datos ingresados:", { email, password, recaptchaResponse });

    fetch("login_empresa.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            email: email,
            password: password,
            "g-recaptcha-response": recaptchaResponse
        })
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la solicitud: " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Respuesta del servidor:", data);
            if (data.success) {
                document.getElementById("login-container").classList.add("oculto");
                document.getElementById("codigo-container").classList.remove("oculto");
                localStorage.setItem("email", email);
            } else {
                alert(data.message);
            }
        })
        .catch((error) => {
            console.error("Error en la solicitud:", error);
        });
});

document.getElementById("verificar-codigo-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const codigo = document.getElementById("codigo").value;
    const email = localStorage.getItem("email");

    fetch("verificar_codigo.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email: email, codigo: codigo })
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Respuesta del servidor:", data);
            if (data.success) {
                window.location.href = data.redirect;
            } else {
                alert(data.message);
            }
        })
        .catch((error) => {
            console.error("Error en la verificación:", error);
        });
});
