document.getElementById("registro-empresa").addEventListener("submit", function(event) {
    const contraseña = document.getElementById("contraseña").value;
    const confirmarContraseña = document.getElementById("confirmar-contraseña").value;
    const email = document.getElementById("email").value;

    // validar contrasenas coincidan
    if (contraseña !== confirmarContraseña) {
        event.preventDefault();
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Validar fortaleza de contraseña
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(contraseña)) {
        event.preventDefault();
        alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.");
        return;
    }

    // Validar formato de correo
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        event.preventDefault();
        alert("Correo electrónico inválido.");
        return;
    }
});
