export default function handler(req, res) {
  // Obtiene la marca de tiempo actual del servidor
  const serverNextTimeStamp = Math.floor(Date.now() / 1000);

  // Devuelve la marca de tiempo al cliente como respuesta
  res.status(200).json({ serverNextTimeStamp });
}
