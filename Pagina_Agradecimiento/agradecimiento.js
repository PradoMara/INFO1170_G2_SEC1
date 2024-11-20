document.addEventListener("DOMContentLoaded", function () {
    const confettiContainer = document.getElementById("confetti-container");

    function createConfetti() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        const size = Math.random() * 10 + 5 + "px";
        const left = Math.random() * 100 + "%";
        const animationDuration = Math.random() * 3 + 2 + "s";
        const backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

        confetti.style.width = size;
        confetti.style.height = size;
        confetti.style.backgroundColor = backgroundColor;
        confetti.style.position = "absolute";
        confetti.style.left = left;
        confetti.style.animation = `fall ${animationDuration} ease-in-out infinite`;

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, parseFloat(animationDuration) * 1000);
    }

    setInterval(createConfetti, 100);
});

const style = document.createElement("style");
style.textContent = `
@keyframes fall {
    0% {
        transform: translateY(-50px) rotate(0);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
