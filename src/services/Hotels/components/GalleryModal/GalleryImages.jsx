"use client";

import { useRef, useState } from "react";
import "../../../../assets/css/Hotel/GalleryImage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export function GalleryImages({ images }) {
  const carrouselRef = useRef(null);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  // console.log(thumbsSwiper);
  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };
  return (
    <div className="h-[390px] select-none">
      <Swiper
        navigation={true}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[80%]"
        onSlideChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              className="h-full object-cover w-full"
              alt={`${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-[15%] mt-2 select-none"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className={`object-cover w-full h-full ${
                index === currentSlideIndex
                  ? "opacity-100 border-4 border-or-100"
                  : "opacity-25"
              }`}
              src={image}
              alt={`${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
// export function GalleryImages({ images }) {
//   const carrouselRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? images.length - 1 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
//   };

//   return (
//     <div className="flex relative flex-col gap-y-4">
//       <div className="w-full" style={{ height: "27rem" }}>
//         <img
//           className="object-cover w-full h-full rounded-lg"
//           src={images[currentIndex]}
//           alt="gallery hotel"
//         />

//         <button
//           className={`prev-slice absolute translate-y-2/4 p-3 cursor-pointer left-0 ${
//             currentIndex == 0 && "cursor-not-allowed opacity-30"
//           }`}
//           onClick={prevSlide}
//         >
//           <img
//             src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/left-w.svg`}
//             alt="left icon"
//           />
//         </button>

//         <button
//           className={`nex-slice absolute translate-y-2/4 p-3 cursor-pointer right-0 ${
//             currentIndex == images.length - 1 && "cursor-not-allowed opacity-30"
//           }`}
//           onClick={nextSlide}
//         >
//           <img
//             src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/right-w.svg`}
//             alt="left icon"
//           />
//         </button>
//       </div>

//       <div className="relative truncate">
//         <div
//           ref={carrouselRef}
//           className="flex w-full"
//           style={{
//             transition: "transform 0.5s ease-in-out",
//           }}
//         >
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`w-20 snap-start me-3 cursor-pointer ${
//                 index === currentIndex
//                   ? "border border-4 border-yw-100"
//                   : "opacity-1"
//               }`}
//               style={{ flex: "0 0 auto", height: "4rem" }}
//               onClick={() => setCurrentIndex(index)}
//             >
//               <img
//                 className="object-cover w-full h-full rounded"
//                 src={image}
//                 alt={`${index + 1}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
