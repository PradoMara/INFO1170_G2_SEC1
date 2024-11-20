document.getElementById('login-empresa-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    fetch('login_empresa.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'email': email,
            'password': password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Ocultar formulario de login y mostrar formulario de código
            document.getElementById('login-container').classList.add('oculto');
            document.getElementById('codigo-container').classList.remove('oculto');
            localStorage.setItem('email', email); // Guardar email temporalmente
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un problema al intentar iniciar sesión.");
    });
});

document.getElementById('verificar-codigo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const email = localStorage.getItem('email');

    fetch('verificar_codigo.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'email': email,
            'codigo': codigo
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            window.location.href = "perfil_empresa.html";
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un problema al verificar el código.");
    });
});
