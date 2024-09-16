let currentIndex = 0;
const images = document.querySelectorAll("#carousel .carousel-item");
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

// Avanza al siguiente slide
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

// Rotación automática de las imágenes cada 5 segundos
setInterval(nextImage, 5000);

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);
