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
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');

// Cambiar entre abrir y cerrar el menú al hacer clic
menuIcon.addEventListener('click', () => {
  menu.classList.toggle('open'); // Agregar/quitar la clase "open"
  
  // Cambiar el ícono dinámicamente
  if (menu.classList.contains('open')) {
    menuIcon.src = 'assets/cerrar.png'; // Ícono de cerrar
  } else {
    menuIcon.src = 'assets/menu.png'; // Ícono de abrir
  }
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
//Blanco y negro de la pagina
document.getElementById("blanco-negro").addEventListener("click", function() {
  var body = document.body;

  if (body.style.filter === "grayscale(100%)") {
      body.style.filter = "";
  } else {
      body.style.filter = "grayscale(100%)";
  }
});

//Pantalla completa de la aplicacion
const pantallaCompleta = document.getElementById('pantallaCompleta');

pantallaCompleta.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    // Entrar en pantalla completa
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(`Error al intentar entrar en pantalla completa: ${err.message}`);
    });
  } else {
    // Salir de pantalla completa
    document.exitFullscreen().catch((err) => {
      console.error(`Error al intentar salir de pantalla completa: ${err.message}`);
    });
  }
});
