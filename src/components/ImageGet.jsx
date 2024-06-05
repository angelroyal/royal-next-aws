"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ImageGet() {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0, url: "" });

  useEffect(() => {
    axios
      .get("/api/image")
      .then((response) => {
        const { imageUrl } = response.data;
        const image = new Image();
        image.src = imageUrl;

        image.onload = () => {
          setImageSize({
            width: image.width,
            height: image.height,
            url: imageUrl,
          });
        };

        image.onerror = () => {
          console.error("Error al cargar la imagen.");
        };
      })
      .catch((error) => {
        console.error("Error al obtener la imagen desde el endpoint:", error);
      });
  }, []);

  return (
    <div>
      {imageSize.url && (
        <div>
          <img src={imageSize.url} alt="Imagen" />
          <p>
            Tamaño de la imagen: {imageSize.width}x{imageSize.height} px
          </p>
        </div>
      )}
    </div>
  );
}
