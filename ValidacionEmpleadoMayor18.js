// Función para mostrar/ocultar la sección de ayuda
function toggleHelp() {
    var helpSection = document.getElementById("help-section");
    if (helpSection.style.display === "none" || helpSection.style.display === "") {
        helpSection.style.display = "block"; // Mostrar la sección de ayuda
    } else {
        helpSection.style.display = "none"; // Ocultar la sección de ayuda
    }
}
