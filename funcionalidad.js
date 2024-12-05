//Reloj 
function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    const tiempo = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').textContent = tiempo;
}

// Actualiza el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Inicia el reloj
actualizarReloj();

//Menu de la pagina 
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const menuIcon = document.getElementById('menu-icon');

    menuIcon.addEventListener('click', function () {
        // Alternar la clase "open" para mostrar/ocultar el menú
        menu.classList.toggle('open');

        // Cambiar el icono del menú
        if (menu.classList.contains('open')) {
            menuIcon.src = 'assets/cerrar.png'; // Cambiar a "cerrar"
        } else {
            menuIcon.src = 'assets/menu.png'; // Cambiar a "menu"
        }
    });
});
//Abrir el modal de informacion
const infoImage = document.getElementById("info");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("closeButton");

// Abrir el modal
infoImage.addEventListener("click", () => {
  modal.style.display = "flex"; 
});

// Cerrar el modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none"; 
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
