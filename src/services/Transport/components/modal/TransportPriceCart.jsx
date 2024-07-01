import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { useCartAxios } from "@/components/Cart/CartAxios";
import { saveToCartTransport } from "../../Api/requestTransport";
import ModalTransportContext from "../../context/ModalTransportContext";
import CancelPolicyTransportWhite from "../ToolTip/CancelPolicyTransportWhite";
import NotificationType from "@/components/Alerts/Notifications/NotificationType";
import { useNotification } from "@/components/Alerts/Notifications/useNotification";
import { EntitiesRecommendations } from "@/components/Recommended/Entities/Entities";

export default function TransportPriceCart(props) {
  const { transport } = props;
  const router = useRouter();
  const { fetchData } = useCartAxios();
  const { language } = useContext(LanguageContext);
  const [openPolicy, setOpenPolicy] = useState(false);
  const { languageData } = useContext(LanguageContext);
  const [isLoader, setIsLoader] = useState(false);
  const { notification, showNotification, hideNotification } =
    useNotification();

  // const [alert, setAlert] = useState({
  //   isAlert: false,
  //   title: null,
  //   message: null,
  // });

  //   STATES CONTEXT TRANSPORT
  const {
    passenger,
    departureDate,
    comebackDate,
    departureTime,
    comebackTime,
  } = useContext(ModalTransportContext);

  const codeNameTransport = (name) => {
    return name.replace(/ /g, "-").toLowerCase();
  };

  // PRICE AND BUTTON ENABLED
  const priceShared = transport.price * passenger;
  const isButtonEnabled = passenger > 0 && departureDate && departureTime;

  const handleReserveNow = async () => {
    setIsLoader(true);
    // PARSE TRANSPORT TYPE TO NUMBER
    const typeTransport =
      transport.type === "shared" ? 1 : transport.type === "private" ? 2 : "";

    // PRICE RESERVED
    let calculatedPrice =
      transport.type === "shared"
        ? transport.price * passenger
        : transport.price;

    // QUERY PARAMS BY POST ADD CART
    const searchParams = new URLSearchParams(window.location.search);
    const destinationId = searchParams.get("destinationId");
    const zoneFromId = searchParams.get("zoneFromId");
    const zoneToId = searchParams.get("zoneToId");

    try {
      const uidCart = localStorage.getItem("uid-cart");
      let cartId = "";

      if (uidCart) {
        const { uid } = JSON.parse(uidCart);
        cartId = uid;
      }

      // REQUEST BODY ADD CART
      const saveRequestCart = {
        from: parseInt(zoneFromId),
        to: parseInt(zoneToId),
        pax: passenger,
        type: typeTransport,
        price: calculatedPrice,
        vehicleId: transport.id,
        destinationId: parseInt(destinationId),
        departureDate: departureDate,
        departureTime: departureTime,
        ...(comebackDate ? { comeBackDate: comebackDate } : {}),
        ...(comebackTime ? { comeBackTime: comebackTime } : {}),
        currency: "MXN",
        vehicleImage: transport.image,
        vehicleLabel: transport.label,
        cancelPolicyHours: transport.cancellation,
        places: transport.places,
        suitcases: [
          {
            largeSuitcase: transport.large_suitcase,
            handSuitcase: transport.hand_suitcase,
          },
        ],
        round: transport.round,
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
      fetchData(cartUid);

      const InfoTransport = {
        name: transport.label,
        date: departureDate,
        codeName: codeNameTransport(transport.label),
      };

      showNotification(
        "success",
        languageData.Alerts.notification.transport.successTitle,
        languageData.Alerts.notification.transport.successSubtitle,
        3000
      );

      setTimeout(() => {
        router.push(
          EntitiesRecommendations(language, "transport", InfoTransport, cartUid)
        );
      }, 2000);
    } catch (error) {
      console.error("error", error);
      setIsLoader(false);

      switch (error.response.data.message) {
        // The price does not correspond
        case "PRE":
          showNotification(
            "warning",
            languageData.Alerts.notification.transport.doesNotPriceTitle,
            languageData.Alerts.notification.transport.doesNotPriceMessage,
            5000
          );
          break;

        // SELECT OTHER DATE
        case "DIP":
          showNotification(
            "warning",
            languageData.Alerts.notification.transport.selectOtherDateTitle,
            languageData.Alerts.notification.transport.selectOtherDateMessage,
            5000
          );
          break;

        // NOT AVAILABILITY
        case "DHV":
          showNotification(
            "warning",
            languageData.Alerts.notification.transport.notAvailableTitle,
            languageData.Alerts.notification.transport.notAvailableMessage,
            5000
          );
          break;

        // PAXES LIMIT
        case "NBE":
          showNotification(
            "warning",
            languageData.Alerts.notification.transport.paxesLimitTitle,
            languageData.Alerts.notification.transport.paxesLimitMessage,
            5000
          );
          break;

        // EXPENSIVE PRICE
        // case "":
        //   showNotification(
        //     "warning",
        //     languageData.Alerts.notification.transport.expensivePriceTitle,
        //     languageData.Alerts.notification.transport.expensivePriceMessage,
        //     5000
        //   );
        //   break;

        default:
          showNotification(
            "error",
            languageData.Alerts.notification.transport.errorTitle,
            languageData.Alerts.notification.transport.errorSubtitle,
            3000
          );
          break;
      }
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
        className={`py-[14px] text-white m-b text-fs-12 rounded-full text-center ${
          !isButtonEnabled || isLoader
            ? "cursor-not-allowed bg-bl-70"
            : "hover:bg-bl-110 bg-bl-100"
        }`}
        onClick={handleReserveNow}
        disabled={!isButtonEnabled}
      >
        {isLoader
          ? languageData.cart.loadingText
          : languageData.modalArrive.buttonArrive}
      </button>

      <div
        onMouseOver={() => setOpenPolicy(true)}
        onMouseLeave={() => setOpenPolicy(false)}
        className="text-center"
      >
        <span className="relative text-center text-fs-14 m-s-b text-bl-100 cursor-pointer">
          {languageData.containerModalHotel.policies}
          {openPolicy === true && (
            <CancelPolicyTransportWhite cancellation={transport.cancellation} />
          )}
        </span>
      </div>

      {notification && notification.visible && (
        <NotificationType
          type={notification.type}
          title={notification.title}
          message={notification.message}
          duration={notification.duration}
          onClose={hideNotification}
          transport={true}
        />
      )}
    </div>
  );
}
