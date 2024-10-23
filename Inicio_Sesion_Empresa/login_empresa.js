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
            window.location.href = "perfil_empresa.html"; 
        } else {
            alert(data.message); 
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un problema al intentar iniciar sesión.");
    });
});
