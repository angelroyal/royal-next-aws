import "swiper/css";
import Image from "next/image";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import LanguageContext from "../../language/LanguageContext";
import { CardHistoryConfig } from "../../config/Others/CardHistoryContent";

import CardHistory from "../../assets/images/others/card-container-h.png";

export function CardsHistoryM() {
  const { languageData } = useContext(LanguageContext);
  return (
    <Swiper
      // id="swiper-about-m"
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
      }}
      className="mySwiper h-[15rem] lg:h-[17rem]"
      autoplay={{
        delay: 7000,
      }}
      breakpoints={{
        390: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        800: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        1010: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      }}
    >
      {CardHistoryConfig.map((info, item) => (
        <SwiperSlide className="relative" key={item}>
          <Image
            className="w-full h-full"
            src={CardHistory}
            alt="content cart history"
          />

          <div className="absolute flex flex-col gap-y-4 md:gap-y-9 z-[3] top-[37px]">
            <div className="flex flex-col items-center">
              <Image
                src={info.image}
                className=" w-[50px]
                h-[50px] lg:w-[60px] lg:h-[60px]"
                width={24}
                height={21}
              />

              <h3 className="m-b text-or-100 text-fs-16 lg:text-fs-24 text-center">
                {languageData.navigation[info.title]}
              </h3>
            </div>

            <h4 className="m-m text-fs-13 lg:text-fs-16 text-gry-100 px-7">
              {languageData.ourHistory[info.description]}
            </h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


//     <Row className="width100 m-0">
//       <Col sm={4} className="service-hotel-tour-transportation">
//         <Image src={Hotel} alt="Hotel" className="service-quality" />
//         <div className="styles-name-icon-service">
//           <div className="name-icon-service">
//             {languageData.ourHistory.titleHotelService}
//           </div>
//         </div>

//         <div className="text-service-quality">
//           {languageData.ourHistory.textHotelService}
//         </div>
//       </Col>

//       <Col sm={4} className="service-hotel-tour-transportation">
//         <Image src={Transfer} alt="Transfer" className="service-quality" />
//         <div className="styles-name-icon-service">
//           <div className="name-icon-service">
//             {languageData.ourHistory.titleTransportationService}
//           </div>
//         </div>

//         <div className="text-service-quality">
//           {languageData.ourHistory.textTransportationService}
//         </div>
//       </Col>

//       <Col sm={4} className="service-hotel-tour-transportation">
//         <Image src={Tour} alt="Tour" className="service-quality" />
//         <div className="styles-name-icon-service">
//           <div className="name-icon-service">
//             {languageData.ourHistory.titleTourService}
//           </div>
//         </div>

//         <div className="text-service-quality">
//           {languageData.ourHistory.textTourService}
//         </div>
//       </Col>
//     </Row>
//   );
// }

// export function CardsHistoryM() {
//   const { languageData } = useContext(LanguageContext);
//   return (
//     <Swiper
//       id="swiper-about-m"
//       slidesPerView={"auto"}
//       spaceBetween={22}
//       pagination={{
//         clickable: true,
//       }}
//       // loop={true}
//       // modules={[Pagination, Autoplay]}
//       className="cart-history-swiper"
//       autoplay={{
//         delay: 7000,
//       }}
//       breakpoints={{
//         390: {
//           slidesPerView: 2.5,
//         },
//       }}
//     >
//       {CardHistoryConfig.map((info, item) => (
//         <SwiperSlide  key={item}>
//           <div className="position-relative width100 height100">
//             <img
//               className="container-card-history"
//               src={CardHistory}
//               alt="content cart history"
//             />
//             {/* <Image src={info.image} alt="info.image" className="icon-card-about"/> */}
//             <div className="container-description-card">
//                 <span className="title-card-about">{languageData.navigation[info.title]}</span>
//                 <span className="description-card-about">{languageData.ourHistory[info.description]}</span>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
