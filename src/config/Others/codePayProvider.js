function codePayProvider(code) {
    const codeMap = {
      cp: 'CLIP',
      op: 'OPENPAY',
      ca: 'CONEKTA',
    };
  
    return codeMap[code] || 'DESCONOCIDO';
  }
  
  module.exports = codePayProvider;