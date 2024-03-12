// import moment from "moment";
// import React, { useContext, useState } from "react";
// import { Row, Col } from "react-bootstrap";
// import { Card, CircularProgress, Rating } from "@mui/material";
// import "react-lazy-load-image-component/src/effects/blur.css";

// // import { AccordionIM } from "../../Utils/AccordionIM";
// import LanguageContext from "../../../language/LanguageContext";
// import { useCartAxios } from "../../../components/Cart/CartAxios";
// import UnavailableCardHotel from "../others/UnavailableCardHotel";
// import { ImageNotFound } from "../../../config/Others/ImageNotFound";
// import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

// import LocationIcon from "../../../assets/icons/utils/others/location.svg";
// import lineLocationIcon from "../../../assets/icons/utils/others/itinerary-line.webp";
// import { ReactComponent as CloseIcon } from "../../../assets/icons/hotel/modal/close_active.svg";
// import { ReactComponent as BedSharpIcon } from "../../../assets/icons/utils/searchBox/room-autocomplete.svg";
// import { ReactComponent as RoomOutlinedIcon } from "../../../assets/icons/utils/searchBox/location-autocomplete.svg";
// import { ReactComponent as Person2OutlinedIcon } from "../../../assets/icons/utils/searchBox/person-autocomplete.svg";

// export default function CardHotelItinerary(props) {
//   const { itemHotel } = props;
//   const { fetchData } = useCartAxios();

//   const totalRooms = itemHotel.rooms.length;
//   const { languageData } = useContext(LanguageContext);

//   const dateFormatCheckIn = moment(itemHotel.checkIn).format("DD/MM/YY");
//   const dateFormatCheckOut = moment(itemHotel.checkOut).format("DD/MM/YY");

//   const [loader, setLoader] = useState(false);

//   // OBTEIN DAY OF WEEK
//   const dayOfWeek = moment(itemHotel.date).format("dddd");

//   const [iconRemove, setIconRemove] = useState(false);

//   const cancelRemove = () => {
//     if (iconRemove === true) setIconRemove(false);
//   };

//   // REMOVE RESERVATION
//   const searchParams = new URLSearchParams(window.location.search);
//   const cartUid = searchParams.get("uid");
//   const cartHotelId = itemHotel.code;

//   const removeReservation = (uidHotel) => {
//     setLoader(true);
//     if (cartHotelId === uidHotel) {
//       const reservationRemove = async () => {
//         axiosWithInterceptor
//           .delete(`v1/carts/${cartUid}/hotel/${cartHotelId}`)
//           .then((response) => {
//             fetchData(cartUid);
//             setIconRemove(false);
//             setTimeout(() => {
//               setLoader(false);
//             }, 1000);
//           })
//           .catch((error) => {
//             console.error(error);
//             setLoader(false);
//           });
//       };
//       reservationRemove();
//     }
//   };

//   return (
//     <>
//       <Row className="mb-3">
//         <Col sm={2} className="col-location-itinerary d-flex">
//           {/* CHECK IN/OUT */}
//           <div className="itinerary-date-all-hotel-tour">
//             <div className="date-moving-itinerary">
//               {languageData.dayOfWeek[dayOfWeek]}
//             </div>

//             <div className="date-moving-calendar">{dateFormatCheckIn}</div>
//             <div className="time-moving-itinerary">14:00 PM</div>

//             <div className="check-out">
//               <div className="subtitle-data-itinerary">
//                 {languageData.itinerary.hotelItinerary.textCheckOut}
//               </div>
//               <div className="date-moving-calendar">{dateFormatCheckOut}</div>
//               <div className="time-moving-itinerary">14:00 PM</div>
//             </div>

//             <div className="location-moving-itinerary">
//               {itemHotel.destinationName}
//             </div>
//           </div>

//           <div className="d-flex flex-column align-items-center">
//             <img
//               className="icon-location-o"
//               src={LocationIcon}
//               alt="LocationIcon"
//             />
//             <div
//               className="line-location-background"
//               style={{ backgroundImage: `url(${lineLocationIcon})` }}
//             ></div>
//           </div>
//         </Col>

//         <Col sm={10} className="d-flex flex-column gap-3">
//           {[...Array(totalRooms)].map((totalRoom, itemRooms) => (
//             <div key={itemRooms} className="padding-card-hotel-i">
//               <Card
//                 className={`${
//                   iconRemove && "card-opacity"
//                 } card-itinerary position-relative`}
//               >
//                 <Row
//                   onClick={() => cancelRemove()}
//                   className="row-card-itinerary container"
//                 >
//                   <Col sm={3} className="image-carousel-itinerary">
//                     {itemHotel.image ? (
//                       <img
//                         width="100%"
//                         height={300}
//                         style={{
//                           objectFit: "cover",
//                           objectPosition: "center",
//                         }}
//                         src={itemHotel.image}
//                         alt={languageData.allAlt.altRoyalVacations}
//                         className="image-hotel-itinerary height100"
//                         effect="blur"
//                       />
//                     ) : (
//                       <ImageNotFound />
//                     )}
//                   </Col>

//                   <Col sm={4} className="card-itinerary-col">
//                     <div className="name-hotel-card">Hotel</div>
//                     <div className="itinerary-card-titles padding-bottom">
//                       {itemHotel.name}
//                     </div>

//                     <div className="itinerary-location padding-bottom">
//                       <RoomOutlinedIcon className="icon-location-itinerary" />
//                       <div className="text-info-itinerary p-icon-left">
//                         {itemHotel.address}
//                       </div>
//                     </div>

//                     <Rating
//                       name="size-small"
//                       style={{ paddingBottom: "16px" }}
//                       defaultValue={itemHotel.stars}
//                       max={itemHotel.stars}
//                       size="small"
//                       readOnly
//                     />

//                     <div className="people-card-itinerary">
//                       <Person2OutlinedIcon className="icon-person-total" />
//                       <div className="info-people-card-itinerary">
//                         {itemHotel.totalAdults}{" "}
//                         {itemHotel.totalAdults > 1
//                           ? languageData.itinerary.hotelItinerary.textAdults
//                           : languageData.itinerary.hotelItinerary.textAdult}
//                         {itemHotel.totalChildren !== 0 ? (
//                           <>
//                             , {itemHotel.totalChildren}{" "}
//                             {itemHotel.totalChildren > 1
//                               ? languageData.itinerary.hotelItinerary
//                                   .textChildren
//                               : languageData.itinerary.hotelItinerary.textChild}
//                           </>
//                         ) : null}
//                       </div>
//                     </div>

//                     <div className="people-card-itinerary">
//                       <BedSharpIcon className="icon-person-total" />
//                       <div className="info-people-card-itinerary">
//                         {itemHotel.totalRooms}{" "}
//                         {itemHotel.totalRooms > 1
//                           ? languageData.modalHotel.rooms
//                           : languageData.modalHotel.room}
//                       </div>
//                     </div>

//                     <div className="v-line-itinerary" />
//                   </Col>

//                   <Col sm={5} className="card-itinerary-col2">
//                     {itemHotel.rooms &&
//                       itemHotel.rooms.map((room, indexR) => (
//                         <div key={indexR}>
//                           {indexR === itemRooms && (
//                             // <AccordionIM room={room} />
//                             <></>
//                           )}
//                         </div>
//                       ))}
//                   </Col>
//                 </Row>
//                 {iconRemove ? (
//                   <div
//                     className="button-remove-reservation"
//                     onClick={() => removeReservation(itemHotel.code)}
//                   >
//                     {languageData.SearchBox.tabHotel.roomBox.buttonDelete}
//                   </div>
//                 ) : (
//                   <div className="icon-remove-reservation">
//                     <button onClick={() => setIconRemove(true)}>
//                       <CloseIcon />
//                     </button>
//                   </div>
//                 )}

//                 {itemHotel.available === false && (
//                   <>
//                     <UnavailableCardHotel destination={itemHotel} />
//                     <div
//                       className={`${iconRemove === false && "overlay"}`}
//                     ></div>
//                   </>
//                 )}
//               </Card>
//             </div>
//           ))}
//         </Col>
//       </Row>

//       {loader && (
//         <div className="progress-loader">
//           <CircularProgress />
//         </div>
//       )}
//     </>
//   );
// }
