"use client";

import { useRef, useState } from "react";
import "../../../../assets/css/Hotel/GalleryImage.css";
export function GalleryImages({ images }) {
  const carrouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? images.length - 1 : prevIndex + 1
    );
    scrollToCurrentImage();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    scrollToCurrentImage();
  };

  const scrollToCurrentImage = () => {
    // const currentImage = carrouselRef.current.children[currentIndex];
    // currentImage.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  return (
    <div className="flex relative flex-col gap-y-4">
      <div className="w-full" style={{ height: "30rem" }}>
        <img
          className="object-cover w-full h-full rounded-lg"
          src={images[currentIndex]}
          alt="gallery hotel"
        />
      </div>

      {/* <div className="m-b text-fs-16 text-center">{`${currentIndex + 1} / ${images.length}`}</div> */}

      <div className="mx-16 relative truncate">
        <div
          ref={carrouselRef}
          className="flex w-full"
          style={{
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-20 snap-start me-3 cursor-pointer ${
                index === currentIndex
                  ? "border border-4 border-or-100"
                  : "opacity-1"
              }`}
              style={{ flex: "0 0 auto", height: "4rem" }}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                className="object-cover w-full h-full rounded"
                src={image}
                alt={`${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`prev-slice absolute translate-y-2/4 p-3 cursor-pointer left-0 ${
          currentIndex == 0 && "cursor-not-allowed opacity-30"
        }`}
        onClick={prevSlide}
      >
        <img
          src="https://sandboxmexico.com/assets/icons/arrows/left-100.svg"
          alt="left icon"
        />
      </button>

      <button
        className={`nex-slice absolute translate-y-2/4 p-3 cursor-pointer right-0 ${
          currentIndex == images.length - 1 && "cursor-not-allowed opacity-30"
        }`}
        onClick={nextSlide}
      >
        <img
          src="https://sandboxmexico.com/assets/icons/arrows/right-100.svg"
          alt="left icon"
        />
      </button>
    </div>
  );
}
