// Asegurarse de que el DOM esté completamente cargado antes de aplicar el evento
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase 'circle'
    const circles = document.querySelectorAll('.circle');

    // Itera sobre cada círculo y agrega un evento 'click'
    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            alert('You clicked on ' + this.querySelector('h3').textContent.trim());
        });
    });
});
