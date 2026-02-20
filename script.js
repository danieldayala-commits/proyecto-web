// ------------------------
// script.js
// ------------------------

// 1️⃣ Crear un botón de Modo Oscuro
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Modo Oscuro";
darkModeBtn.style.margin = "20px";
darkModeBtn.style.padding = "10px 20px";
darkModeBtn.style.fontSize = "16px";
document.body.appendChild(darkModeBtn);

// Función para alternar Modo Oscuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Evento al hacer click
darkModeBtn.addEventListener("click", toggleDarkMode);

// ------------------------
// 2️⃣ Animaciones simples
// Hacer que el h1 se mueva ligeramente al pasar el mouse
const heading = document.querySelector("h1");

heading.addEventListener("mouseenter", () => {
    heading.style.transition = "transform 0.3s ease";
    heading.style.transform = "scale(1.1) rotate(2deg)";
});

heading.addEventListener("mouseleave", () => {
    heading.style.transform = "scale(1) rotate(0deg)";
});

// ------------------------
// 3️⃣ Eventos de usuario
// Al hacer click en el párrafo, cambiar su color aleatoriamente
const paragraph = document.querySelector("p");

paragraph.addEventListener("click", () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
    paragraph.style.color = randomColor;
});

// ------------------------
// 4️⃣ Estilos para Modo Oscuro
const style = document.createElement("style");
style.textContent = `
.dark-mode {
    background-color: #121212;
    color: #ffffff;
}
button {
    cursor: pointer;
}
`;
document.head.appendChild(style);