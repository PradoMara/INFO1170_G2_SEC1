function toggleHelp() {
    var helpSection = document.getElementById("help-section");
    if (helpSection.style.display === "none" || helpSection.style.display === "") {
        helpSection.style.display = "block"; 
    } else {
        helpSection.style.display = "none"; 
    }
}
