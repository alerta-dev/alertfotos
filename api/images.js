import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  try {
    const files = fs.readdirSync(imagesDir).filter(file =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
    res.status(200).json(files.map(file => `/images/${file}`));
  } catch (error) {
    res.status(500).json({ error: 'Error al leer la carpeta de imágenes.' });
  }
}
