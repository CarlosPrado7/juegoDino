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
