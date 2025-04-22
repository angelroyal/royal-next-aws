const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

export function encodeBase64(value) {
  const textToEncode = `${value}:${secretKey}`;
  return btoa(unescape(encodeURIComponent(textToEncode)));
}

export function decodeBase64(encoded) {
  const decoded = decodeURIComponent(escape(atob(encoded)));
  const [value, key] = decoded.split(":");

  if (key !== secretKey) {
    throw new Error("Clave secreta inválida");
  }

  return value;
}
