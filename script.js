const gallery = document.getElementById("gallery");

async function loadImages() {
  try {
    const response = await fetch('/api/images');
    const images = await response.json();

    // Ordena las imágenes aleatoriamente
    images.sort(() => Math.random() - 0.5);

    images.forEach(src => {
      const item = document.createElement('div');
      item.className = 'masonry-item';
      const img = document.createElement('img');
      img.src = src;
      item.appendChild(img);
      gallery.appendChild(item);
    });
  } catch (error) {
    console.error("Error cargando imágenes:", error);
  }
}

loadImages();
