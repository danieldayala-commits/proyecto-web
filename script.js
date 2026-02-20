
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Modo Oscuro";
darkModeBtn.style.margin = "20px";
darkModeBtn.style.padding = "10px 20px";
darkModeBtn.style.fontSize = "16px";
document.body.appendChild(darkModeBtn);

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
};


darkModeBtn.addEventListener("click", toggleDarkMode);


const heading = document.querySelector("h1");

heading.addEventListener("mouseenter", () => {
    heading.style.transition = "transform 0.3s ease";
    heading.style.transform = "scale(1.1) rotate(2deg)";
});

heading.addEventListener("mouseleave", () => {
    heading.style.transform = "scale(1) rotate(0deg)";
});


const paragraph = document.querySelector("p");

paragraph.addEventListener("click", () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
    paragraph.style.color = randomColor;
});


const style = document.createElement("style");
style.textContent = `
.dark-mode {
    background-color: #121212;
    color: #ffffff;
}
button {
    cursor: pointer;
}
;
document.head.appendChild(style);
