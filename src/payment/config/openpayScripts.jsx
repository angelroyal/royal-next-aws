export const loadOpenpayScripts = () => {
    const scripts = [
      { src: "https://js.openpay.mx/openpay.v1.min.js" },
      { src: "https://js.openpay.mx/openpay-data.v1.min.js" }
    ];
  
    scripts.forEach(scriptInfo => {
      const script = document.createElement('script');
      script.src = scriptInfo.src;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    });
  };
  
  export const unloadOpenpayScripts = () => {
    const scripts = document.querySelectorAll("script[src*='openpay.v1.min.js'], script[src*='openpay-data.v1.min.js']");
    scripts.forEach(script => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });
  };
  