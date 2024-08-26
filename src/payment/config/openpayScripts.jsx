// export const loadOpenpayScripts = () => {
//     const scripts = [
//       { src: "https://js.openpay.mx/openpay.v1.min.js" },
//       { src: "https://js.openpay.mx/openpay-data.v1.min.js" }
//     ];
  
//     scripts.forEach(scriptInfo => {
//       const script = document.createElement('script');
//       script.src = scriptInfo.src;
//       script.type = 'text/javascript';
//       document.body.appendChild(script);
//     });
//   };
  
//   export const unloadOpenpayScripts = () => {
//     const scripts = document.querySelectorAll("script[src*='openpay.v1.min.js'], script[src*='openpay-data.v1.min.js']");
//     scripts.forEach(script => {
//       if (script && script.parentNode) {
//         script.parentNode.removeChild(script);
//       }
//     });
//   };
  

export const loadOpenpayScripts = () => {
  const scripts = [
    { src: "https://js.openpay.mx/openpay.v1.min.js" },
    { src: "https://js.openpay.mx/openpay-data.v1.min.js" }
  ];

  const loadScript = (scriptInfo) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = scriptInfo.src;
      script.type = 'text/javascript';
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  // Load all scripts sequentially
  Promise.all(scripts.map(loadScript))
    .then(() => {
      if (window.OpenPay) {
        window.OpenPay.setId(process.env.NEXT_PUBLIC_OPENPAY_ID);
        window.OpenPay.setApiKey(process.env.NEXT_PUBLIC_OPENPAY_API_KEY);
        window.OpenPay.setSandboxMode(true);
        console.log("OpenPay credentials set");
      } else {
        console.error("OpenPay library is not loaded");
      }
    })
    .catch(error => console.error("Failed to load OpenPay scripts:", error));
};

export const unloadOpenpayScripts = () => {
  const scripts = document.querySelectorAll("script[src*='openpay.v1.min.js'], script[src*='openpay-data.v1.min.js']");
  scripts.forEach(script => {
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }
  });
};
