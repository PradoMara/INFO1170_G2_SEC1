console.log("El archivo login_empresa.js se cargó correctamente.");

// Funcionalidad de mostrar/ocultar contraseña
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

        // Cambiar el ícono según el estado de la contraseña
        togglePassword.innerHTML = isPassword ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
    });
});

// Enviar formulario
document.getElementById("login-empresa-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("El botón Iniciar Sesión ha sido presionado.");
    console.log("Datos ingresados:", { email, password });

    fetch("login_empresa.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            email: email,
            password: password,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la respuesta del servidor.");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Respuesta del servidor:", data);

            if (data.success) {
                alert(data.message);
                window.location.href = data.redirect;
            } else {
                alert(data.message);
            }
        })
        .catch((error) => {
            console.error("Error en la solicitud:", error);
        });
});
