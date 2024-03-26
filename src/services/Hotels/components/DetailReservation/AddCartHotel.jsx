import React, { useContext } from "react";
import { saveToCart } from "../../Api/requestHotel";
import LanguageContext from "@/language/LanguageContext";
import { useCartAxios } from "@/components/Cart/CartAxios";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export default function AddCartHotel() {
    const { fetchData } = useCartAxios();
  const { languageData } = useContext(LanguageContext);
  const { selectedRooms, requestBodyRooms } = useContext(RoomsHotelContext);


  const handleReserveNow = async () => {
    try {
        console.log("entro aqui");
      const uidCart = localStorage.getItem("uid-cart");
      let cartId = "";

      if (uidCart) {
        const { uid } = JSON.parse(uidCart);
        cartId = uid;
      }


      const saveRequestCart = {
        key: requestBodyRooms.code,
        checkIn: requestBodyRooms["check-in"],
        checkOut: requestBodyRooms["check-out"],
        occupancies: selectedRooms.map((room) => ({
          rateCode: room.rateKey,
          roomCode: room.code,
          adults: room.adults,
          children: room.children || [],
          price: room.netPrice,
          boardCode: room.boardCode,
          hash: room.hash,
        })),
      };

      if (cartId) {
        saveRequestCart.cart = cartId;
      }

      console.log(saveRequestCart);
      const response = await saveToCart(saveRequestCart);

      const cartUid = response.cart;
      const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000;
      localStorage.setItem(
        "uid-cart",
        JSON.stringify({ uid: cartUid, expirationTime })
      );
        fetchData(cartUid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="rounded-full bg-yw-100 text-black text-fs-12 m-s-b text-center py-3.5 px-[117px] md:py-3.5 md:px-4 md:h-max"
        onClick={handleReserveNow}
        disabled={!selectedRooms.length > 0}
      >
        {languageData.detailHotel.buttonPrincipal}
      </button>
    </>
  );
}
