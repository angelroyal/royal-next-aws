"use client";

import { createContext, useState } from "react";
const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [getImg, setGetImg] = useState(null);

  return (
    <ImageContext.Provider
      value={{
        getImg,
        setGetImg,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };
