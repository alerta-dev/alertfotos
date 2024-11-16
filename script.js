const gallery = document.getElementById("gallery");

// Esta función carga todas las imágenes de la carpeta "images"
async function loadImages() {
  try {
    const response = await fetch('./images');
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const images = Array.from(doc.querySelectorAll('a'))
      .filter(link => link.href.match(/\.(jpg|jpeg|png|gif)$/i))
      .map(link => link.href);

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
