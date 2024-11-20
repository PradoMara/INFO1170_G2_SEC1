// Función para alternar visibilidad de contraseñas
function togglePasswordVisibility(inputId, iconId) {
    const inputField = document.getElementById(inputId); // campo de entrada
    const icon = document.getElementById(iconId); // icono de font awesome

    icon.addEventListener('click', () => {
        if (inputField.type === 'password') {
            inputField.type = 'text'; // cambiar el campo a texto para mostrar la contrasena
            icon.classList.remove('fa-eye'); // remover el icono de ojo cerrado
            icon.classList.add('fa-eye-slash'); // agregar el icono de ojo abierto
        } else {
            inputField.type = 'password'; // volver a ocultar la contrasena
            icon.classList.remove('fa-eye-slash'); // remover el icono de ojo abierto
            icon.classList.add('fa-eye'); // agregar el icono de ojo cerrado
        }
    });
}

// aplicar la funcion a los campos correspondientes
togglePasswordVisibility('contraseña', 'icono-contraseña');
togglePasswordVisibility('confirmar-contraseña', 'icono-confirmar-contraseña');

document.getElementById("terminos-condiciones").addEventListener("click", function() {
    window.location.href = "terminos_condiciones.html"; // Redirecciona a la página de terminos y condiciones
});

document.getElementById("politica-privacidad").addEventListener("click", function() {
    window.location.href = "PoliticaDePrivacidad.html"; // Redirecciona a la página de politica de privacidad
});

document.getElementById("ayuda").addEventListener("click", function() {
    window.location.href = "contacto.html"; // Redirecciona a la página de ayuda
});

document.getElementById("terminos-footer").addEventListener("click", function() {
    window.location.href = "terminos_condiciones.html"; // Redirecciona a la página de terminos y condiciones
});

document.getElementById("home").addEventListener("click", function() {
    window.location.href = "main.html"; // Redirecciona a la página de inicio
});

document.getElementById('registro-empresa').addEventListener('submit', function(event) {
    let valid = true;
    
    // Verificar campo nombre
    let nombre = document.getElementById('nombre');
    let errorNombre = document.getElementById('error-nombre');
    if (nombre.value === "") {
        errorNombre.textContent = "Este campo es obligatorio";
        errorNombre.style.display = 'block';
        valid = false;
    } else {
        errorNombre.style.display = 'none';
    }

    // Verificar campo rut
    let email = document.getElementById('email');
    let errorEmail = document.getElementById('error-email');
    if (email.value === "") {
        errorEmail.textContent = "Este campo es obligatorio";
        errorEmail.style.display = 'block';
        valid = false;
    } else {
        errorEmail.style.display = 'none';
    }
    
    let rut = document.getElementById('ru');
    let errorRut = document.getElementById('error-rut');
    if (rut.value === "") {
        errorRut.textContent = "Este campo es obligatorio";
        errorRut.style.display = 'block';
        valid = false;
    } else {
        errorRut.style.display = 'none';
    }

    let ciudad = document.getElementById('ciudad');
    let errorCiudad = document.getElementById('error-ciudad');
    if (ciudad.value === "") {
        errorCiudad.textContent = "Este campo es obligatorio";
        errorCiudad.style.display = 'block';
        valid = false;
    } else {
        errorCiudad.style.display = 'none';
    }

    let codigo = document.getElementById('codigo-postal');
    let errorCodigo = document.getElementById('error-codigo');
    if (codigo.value === "") {
        errorCodigo.textContent = "Este campo es obligatorio";
        errorCodigo.style.display = 'block';
        valid = false;
    } else {
        errorCodigo.style.display = 'none';
    }

    let contacto = document.getElementById('contacto');
    let errorContacto = document.getElementById('error-conntacto');
    if (contacto.value === "") {
        errorContacto.textContent = "Este campo es obligatorio";
        errorContacto.style.display = 'block';
        valid = false;
    } else {
        errorContacto.style.display = 'none';
    }

    let telefono = document.getElementById('telefono');
    let errorTelefono = document.getElementById('error-telefono');
    if (telefono.value === "") {
        errorTelefono.textContent = "Este campo es obligatorio";
        errorTelefono.style.display = 'block';
        valid = false;
    } else {
        errorTelefono.style.display = 'none';
    }

    let contraseña = document.getElementById('contraseña');
    let errorContraseña = document.getElementById('error-contraseña');
    if (contraseña.value === "") {
        errorContraseña.textContent = "Este campo es obligatorio";
        errorContraseña.style.display = 'block';
        valid = false;
    } else {
        errorContraseña.style.display = 'none';
    }

    let confirmarContraseña = document.getElementById('confirmar-contraseña');
    let errorConfirmarContraseña = document.getElementById('error-confirmar-contraseña');
    if (confirmarContraseña.value === "") {
        errorConfirmarContraseña.textContent = "Este campo es obligatorio";
        errorConfirmarContraseña.style.display = 'block';
        valid = false;
    } else {
        errorConfirmarContraseña.style.display = 'none';
    }
    if (!valid) {
        event.preventDefault(); // Detener el envío si hay errores
    }


});

document.getElementById("contraseña").addEventListener("input", function () {
    const contraseña = this.value;
    const barra = document.getElementById("indicador-seguridad");
    const mensaje = document.getElementById("mensaje-seguridad");

    // Función para evaluar la contraseña
    const fortaleza = evaluarFortaleza(contraseña);

    // Actualizar la barra y el mensaje según la fortaleza
    if (fortaleza < 2) {
        barra.style.width = "33%";
        barra.style.backgroundColor = "red";
        mensaje.textContent = "Contraseña débil";
        mensaje.style.color = "red";
    } else if (fortaleza === 2) {
        barra.style.width = "66%";
        barra.style.backgroundColor = "yellow";
        mensaje.textContent = "Contraseña moderada";
        mensaje.style.color = "orange";
    } else {
        barra.style.width = "100%";
        barra.style.backgroundColor = "green";
        mensaje.textContent = "Contraseña fuerte";
        mensaje.style.color = "green";
    }
});
