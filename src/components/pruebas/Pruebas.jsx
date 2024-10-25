"use client"
import { useEffect, useState } from 'react';


const API_KEY = 'test_861e71f6-1daa-4077-a6b5-98ce48f2a304'; // Reemplaza con tu API Key real

function App() {
  const [cardTokenID, setCardTokenID] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.clip.mx/js/clip-sdk.js';
    script.async = true;
    script.onload = () => {
      if (window.ClipSDK) {
        const clip = new window.ClipSDK(API_KEY);

        if (API_KEY === 'XXXXXXXXXX') {
          alert('Favor de ingresar tu API Key (https://dashboard.developer.clip.mx/applications)');
        }

        const card = clip.element.create('Card', {
          theme: 'light',
          locale: 'es',
        });
        card.mount('checkout');

        // Agrega el manejador para el formulario de pago directamente aquí
        document.querySelector("#payment-form").addEventListener("submit", async (event) => {
          event.preventDefault();
          try {
            const cardToken = await card.cardToken();
            const cardTokenID = cardToken.id;
            console.log('Card Token ID:', cardTokenID);
            setCardTokenID(cardTokenID);
          } catch (error) {
            switch (error.code) {
              case 'CL2200':
              case 'CL2290':
                alert('Error: ' + error.message);
                break;
              case 'AI1300':
                console.log('Error:', error.message);
                break;
              default:
                console.log('Unhandled Error:', error);
                break;
            }
          }
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Transparent Checkout SDK</h1>
      <form id="payment-form">
        <div id="checkout"></div>
        <button type="submit">Get Card Token ID</button>
        {cardTokenID && <p>Card Token ID: {cardTokenID}</p>}
      </form>
    </div>
  );
}

export default App;