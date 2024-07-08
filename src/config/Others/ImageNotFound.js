import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "../../language/LanguageContext";

export function ImageNotFound() {
  const [languageActual, setLanguageActual] = useState("es");

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const actualLanguage = language;
    if (actualLanguage) {
      setLanguageActual(actualLanguage);
    }
  }, [language]);

  return languageActual === "es" ? (
    <img
      className="object-cover w-full h-full rounded-lg"
      src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-m-h-es.webp`}
      alt="no-availability-m-h-es"
    />
  ) : (
    <img
      className="object-cover w-full h-full rounded-lg"
      src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-m-h-en.webp`}
      alt="no-availability-m-h-en"
    />
  );
}

export function ImageNotFoundModalHotel() {
  const [languageActual, setLanguageActual] = useState("es");
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const actualLanguage = language;
    if (actualLanguage) {
      setLanguageActual(actualLanguage);
    }
  }, [language]);

  return languageActual === "es" ? (
    <img
      className="object-fit-cover width100 image-modal-hotel selected-image"
      src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-d-h-es.webp`}
      alt="no-availability-d-h-es"
    />
  ) : (
    <img
      className="object-fit-cover width100 image-modal-hotel selected-image"
      src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-d-h-en.webp`}
      alt="no-availability-d-h-en"
    />
  );
}
