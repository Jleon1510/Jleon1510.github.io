function showCategory(category) {
    // Ocultar todas las categorías
    const categories = document.querySelectorAll('.product-grid');
    categories.forEach(cat => {
        cat.classList.remove('active');
    });

    // Mostrar la categoría seleccionada
    document.getElementById(category).classList.add('active');

    // Cambiar la clase del botón activo
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    const activeButton = document.querySelector(`.tab-button[onclick="showCategory('${category}')"]`);
    activeButton.classList.add('active');
}
