"use client";


import { useState, useContext, useEffect } from "react";

import LanguageContext from "./LanguageContext";

function getLanguageFromPath(path) {
  const match = path.match(/^\/([a-z]{2})\//);
  return match ? match[1] : null;
}

export function LanguageSelector() {
  const { setLanguage } = useContext(LanguageContext);
  const [actualLanguage, setActualLanguage] = useState();

  useEffect(() => {
    // Intenta obtener el idioma de localStorage, de la URL, o usar 'en' por defecto
    const storedLanguage = localStorage.getItem('language') || getLanguageFromPath(window.location.pathname) || 'en';
    setActualLanguage(storedLanguage);
    setLanguage(storedLanguage);
  }, [setLanguage]);

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);

    const currentPath = window.location.pathname;
    const currentSearch = window.location.search; // Extrae los parámetros de búsqueda actuales
    const newPath = `/${newLanguage}${currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/')}${currentSearch}`;
    window.location.href = newPath; // Cambiar la URL y recargar la página
  };

  return (
    <select onChange={handleChange} value={actualLanguage}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
}

