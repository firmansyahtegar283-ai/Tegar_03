document.getElementById("showMessage").addEventListener("click", function () {
    document.getElementById("bucinBox").classList.remove("hidden");
});

document.getElementById("bucinMore").addEventListener("click", function () {
    document.getElementById("extraText").classList.remove("hidden");
});

// ANIMASI HATI JATUH
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.getElementById("falling-hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 250);
