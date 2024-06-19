import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";

import LanguageContext from "../../../language/LanguageContext";
import { useCartAxios } from "../../../components/Cart/CartAxios";
import UpdateAutocomplete from "../../../config/Others/UpdateAutocomplete";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

export default function UnavailableCardHotel(props) {
  const router = useRouter();
  const { destination } = props;
  const { fetchData } = useCartAxios();
  const roomData = [{ adults: 2, children: [] }];
  const [fetchSend, setFetchSend] = useState(false);
  const { languageData, language } = useContext(LanguageContext);

  const sendDataSearch = (destination) => {
    const dataLocalSend = destination;
    UpdateAutocomplete({ dataLocalSend });
  };

  const handleCloseModal = () => {
    if (fetchSend) {
      fetchData(cartUid);
    }
  };

  // DELETED CART HOTEL

  const searchParams = new URLSearchParams(window.location.search);
  const cartUid = searchParams.get("uid");
  const cartHotelId = destination.code;

  const handleDeleteClick = () => {
    axiosWithInterceptor
      .delete(`v1/carts/${cartUid}/hotel/${cartHotelId}`)
      .then((response) => {
        setFetchSend(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // GOO DETAILS HOTEL
  const handleDetailsHotel = () => {
    handleDeleteClick();
    handleCloseModal();
    router.push(
      `/${language}/mx/${destination.destinationCodeName}-mexico/${destination.destinationCodeName}-hotels/${destination.codeName}`
    );
  };

  //   LISTING
  const sendListingHotel = (destination) => {
    handleDeleteClick();
    const encodedRoomData = encodeURIComponent(JSON.stringify(roomData));

    const requestBody = {
      codeNameHotel: destination.destinationCodeName,
      destination: destination.destinationName,
      codeName: destination.destinationCodeName,
      code: destination.destinationCode,
      "check-in": destination.checkIn,
      "check-out": destination.checkOut,
      occupancies: encodedRoomData,
    };
    sendDataSearch(destination);
    // PUSH RESULT HOTEL
    const query = new URLSearchParams(requestBody).toString();
    handleCloseModal();

    setTimeout(() => {
      router.push(
        `/${language}/mx/${destination.destinationCodeName}-mexico/hotels?${query}`
      );
    }, 1200);
  };

  return (
    <>
      <div className="absolute right-[20px] bottom-[2rem] gap-x-[12px] flex z-[1]">
        <button
          onClick={() => handleDetailsHotel()}
          className="text-white m-m text-fs-14 rounded-md bg-or-100 !py-1 !px-2 hover:bg-or-110"
        >
          {languageData.unavailableCardHotel.updateDate}
        </button>

        <button
          onClick={() => sendListingHotel(destination)}
          className="text-white m-m text-fs-14 rounded-md bg-or-100 !py-1 !px-2 hover:bg-or-110"
        >
          {languageData.unavailableCardHotel.changeHotel}
        </button>
      </div>
    </>
  );
}
