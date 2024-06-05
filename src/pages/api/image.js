import axios from 'axios';

export default async function handler(req, res) {
  const imageUrl = 'https://staywuw.com/api2/assets/images/hotels/16/006882a_hb_p_001.webp';
  
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary').toString('base64');
    const dataUrl = `data:image/webp;base64,${buffer}`;

    res.status(200).json({ imageUrl: dataUrl });
  } catch (error) {
    console.error('Error al obtener la imagen:', error);
    res.status(500).json({ error: 'Error al obtener la imagen' });
  }
}
