
export function ImageNotFoundType( type, language) {
  switch (type) {
    case "hotel":
      return `${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/${
        language === "es"
          ? "no-availability-d-h-es.webp"
          : "no-availability-d-h-en.webp"
      }`;
    case "tour":
      return `${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/${
        language === "es"
          ? "no-availability-d-to-es.webp"
          : "no-availability-d-to-en.webp"
      }`;
    case "transport":
      return `${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/${
        language === "es"
          ? "no-availability-d-tr-es.webp"
          : "no-availability-d-tr-en.webp"
      }`;
  }
}
