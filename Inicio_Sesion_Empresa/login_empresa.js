document.getElementById('login-empresa-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Aquí es donde realizarías la autenticación con la base de datos

    // Si es exitoso, redirige al perfil de la empresa
    window.location.href = "perfil_empresa.html";
});
