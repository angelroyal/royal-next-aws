import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import CancelPolicyTransportWhite from "../ToulTip/CancelPolicyTransportWhite";
import ModalTransportContext from "../../context/ModalTransportContext";
import { saveToCartTransport } from "../../Api/requestTransport";

export default function TransportPriceCart(props) {
  const { transport } = props;
  const [openPolicy, setOpenPolicy] = useState(false);

  //   STATES CONTEXT TRANSPORT
  const {
    passenger,
    departureDate,
    comebackDate,
    departureTime,
    comebackTime,
  } = useContext(ModalTransportContext);

  
  const priceShared = transport.price * passenger;
  const isButtonEnabled = passenger > 0 && departureDate && departureTime;
  
  const router = useRouter();
  
  const handleReserveNow = async () => {
    let calculatedPrice =
      transport.type === "shared"
        ? transport.price * passenger
        : transport.price;

    try {
      const uidCart = localStorage.getItem("uid-cart");
      let cartId = "";

      if (uidCart) {
        const { uid } = JSON.parse(uidCart);
        cartId = uid;
      }

      // REQUEST BODY ADD CART
      const saveRequestCart = {
        from: 212,
        to: 211,
        pax: passenger,
        vehicleId: transport.id,
        vehicleLabel: transport.label,
        departureDate: departureDate,
        departureTime: departureTime,
        // comebackDate: comebackDate,
        // comebackTime: comebackTime,
        ...(comebackDate ? { comebackDate: comebackDate } : {}),
        ...(comebackTime ? { comebackTime: comebackTime } : {}),
        price: calculatedPrice,
        currency: "MXN",
        destinationId: 719395,
        cancelPolicyHours: transport.cancellation,
      };

      // IF UID EXIST ADD UID
      if (cartId) {
        saveRequestCart.cartId = cartId;
      }

      //   AXIOS POST ADD CART
      const response = await saveToCartTransport(saveRequestCart);

      const cartUid = response.cart;
      const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000;
      localStorage.setItem(
        "uid-cart",
        JSON.stringify({ uid: cartUid, expirationTime })
      );
      //   fetchData(cartUid);
      setTimeout(() => {
        router.push(`/${language}/booking?uid=${cartUid}`);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex justify-between items-center">
        <span className="m-b text-fs-14">Total:</span>

        <span className="m-b text-fs-14">
          MXN{" "}
          {transport.type === "shared" ? (
            <span className="text-fs-20">
              ${" "}
              {Math.floor(priceShared)
                .toLocaleString("es-MX", { currency: "MXN" })
                .replace(".00", "")}
              .<sup>{(priceShared % 1).toFixed(2).slice(2)}</sup>
            </span>
          ) : (
            <span className="text-fs-20">
              ${" "}
              {Math.floor(transport.price)
                .toLocaleString("es-MX", { currency: "MXN" })
                .replace(".00", "")}
              .<sup>{(transport.price % 1).toFixed(2).slice(2)}</sup>
            </span>
          )}
        </span>
      </div>

      <button
        className={`py-[14px] bg-bl-100 text-white m-b text-fs-12 hover:bg-bl-110 rounded-full text-center ${
          !isButtonEnabled ? "cursor-not-allowed	" : ""
        }`}
        onClick={handleReserveNow}
        disabled={!isButtonEnabled}
      >
        Agregar al carrito
      </button>

      <div
        onMouseOver={() => setOpenPolicy(true)}
        onMouseLeave={() => setOpenPolicy(false)}
        className="text-center"
      >
        <span className="relative text-center text-fs-14 m-s-b text-bl-100 cursor-pointer relative">
          {/* {languageData.containerModalHotel.policies} */}
          politicas de cancelacion
          {openPolicy === true && <CancelPolicyTransportWhite />}
        </span>
      </div>
    </div>
  );
}
