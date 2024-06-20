"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImageNotFoundType } from "./ImageNotFoundType";

export default function ImageGet({ imageUrl, type, language, width, height, altDescription }) {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0, url: "" });

  useEffect(() => {
    axios
      .get(`/api/image?imageUrl=${imageUrl}`)
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
    <>
      {imageSize.url ? (
        <img
          src={imageSize.url}
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-105"
          width={width}
          height={height}
          alt={altDescription}
        />
      ) : (
        <img
          src={ImageNotFoundType(type, language)}
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-105"
          width={width}
          height={height}
          alt={altDescription}
        />
      )}
    </>
  );
}
