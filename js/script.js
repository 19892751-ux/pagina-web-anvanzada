// Mostrar / ocultar menú móvil
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Simular envío de formulario
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("¡Gracias por contactarnos! Te responderemos pronto.");
  e.target.reset();
});
