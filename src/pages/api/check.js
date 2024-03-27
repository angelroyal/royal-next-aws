// pages/api/check.js

export default function handler(req, res) {
    // Verifica si el método de solicitud es GET
    if (req.method === 'GET') {
      // Devuelve true como respuesta
      res.status(200).json({ success: true });
    } else {
      // Si el método de solicitud no es GET, devuelve un error
      res.status(405).json({ error: 'Método no permitido' });
    }
  }
  