import { Autoplay, Pagination } from "swiper";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row } from "react-bootstrap";

import LanguageContext from "../../language/LanguageContext";
import { CardHistoryConfig } from "../../config/Others/CardHistoryContent";

import Tour from "../../assets/images/others/tour.svg";
import Hotel from "../../assets/images/others/hotel.svg";
import Transfer from "../../assets/images/others/transfer.svg";
import CardHistory from "../../assets/images/others/card-container-h.png";
import Image from "next/image";

export function CartHistoryW() {
  const { languageData } = useContext(LanguageContext);

  return (
    <Row className="width100 m-0">
      <Col sm={4} className="service-hotel-tour-transportation">
        <Image src={Hotel} className="service-quality" />
        <div className="styles-name-icon-service">
          <div className="name-icon-service">
            {languageData.ourHistory.titleHotelService}
          </div>
        </div>

        <div className="text-service-quality">
          {languageData.ourHistory.textHotelService}
        </div>
      </Col>

      <Col sm={4} className="service-hotel-tour-transportation">
        <Image  src={Transfer} className="service-quality" />
        <div className="styles-name-icon-service">
          <div className="name-icon-service">
            {languageData.ourHistory.titleTransportationService}
          </div>
        </div>

        <div className="text-service-quality">
          {languageData.ourHistory.textTransportationService}
        </div>
      </Col>

      <Col sm={4} className="service-hotel-tour-transportation">
        <Image src={Tour} className="service-quality" />
        <div className="styles-name-icon-service">
          <div className="name-icon-service">
            {languageData.ourHistory.titleTourService}
          </div>
        </div>

        <div className="text-service-quality">
          {languageData.ourHistory.textTourService}
        </div>
      </Col>
    </Row>
  );
}

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
//             <info.image className="icon-card-about"/>
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
