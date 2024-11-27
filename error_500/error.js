document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.createElement("p");
    countdownElement.textContent = "Serás redirigido al inicio en 5 segundos...";
    document.querySelector(".error-container").appendChild(countdownElement);

    let countdown = 5;
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = `Serás redirigido al inicio en ${countdown} segundos...`;
        if (countdown === 0) {
            clearInterval(timer);
            window.location.href = "/inicio-18años/main.html";
        }
    }, 1000);
});
