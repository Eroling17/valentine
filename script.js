const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const text = document.querySelector(".will");
const img = document.querySelector("img");

let yesScale = 1;

noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "fixed";

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Yes становится больше
    yesScale += 0.9;
    yesBtn.style.transform = `scale(${yesScale})`;
});
yesBtn.addEventListener("click", () => {
    text.textContent = "Урааа!!!!! Я знала это!!! И я тя люлю💕💕💕";
    img.src = "img/happy-cat.gif";

    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});