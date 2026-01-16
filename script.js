// Seleccionamos el modal y sus elementos
const modal = document.getElementById("modalImagen");
const imgModal = document.getElementById("imgGrande");
const captionTexto = document.getElementById("caption-modal");
const spanCerrar = document.getElementsByClassName("cerrar-modal")[0];

// Buscamos todas las imágenes dentro de las galerías
const imagenes = document.querySelectorAll('.galeria img, .galeria-repuestos img');

// Añadimos el evento clic a cada imagen
imagenes.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        imgModal.src = this.src; // Pone la misma imagen
        captionTexto.innerHTML = this.alt; // Usa el texto descriptivo como pie de foto
    }
});

// Cerrar al dar clic en la X
spanCerrar.onclick = function() {
    modal.style.display = "none";
}

// Cerrar al dar clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}