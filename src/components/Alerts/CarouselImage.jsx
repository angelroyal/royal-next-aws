import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Url = process.env.NEXT_PUBLIC_URL;
const Images = [
  `${Url}general/carousel-1.jpg`,
  `${Url}general/carousel-2.jpg`,
  `${Url}general/carousel-3.jpg`,
  `${Url}general/carousel-4.jpg`,
  `${Url}general/carousel-5.jpg`,
];
export function CarouselImage() {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
      }}
      loop={true}
    >
      {Images.map((image, index) => (
        <SwiperSlide key={index} className="!h-[380px] md:!h-[530px]">
          <Image
            src={image}
            alt="inactivity banner home rounded-md"
            width={452}
            height={350}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
