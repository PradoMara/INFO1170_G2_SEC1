// Redirigir a páginas cuando se hace clic en los botones
document.getElementById('postulanteBoton').addEventListener('click', function() {
    window.location.href = '../Registro_del_Postulante/registro.html'; 
});

document.getElementById('empresaBoton').addEventListener('click', function() {
    window.location.href = '../registros-empresas/empresaRg.html'; 
});

document.getElementById('adminBoton').addEventListener('click', function() {
    window.location.href = '../Login_Admin/login_admin.html'; 
});
