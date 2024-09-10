import Image from "next/image";
import { useContext, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { BookingContext } from "../context/BookingContext";
import { GetConfirmationPDF, SizePDF } from "../Api/fetchDataItinerary";
import { ShareContainer } from "@/utils/booking/ShareContainer";
import NotificationType from "@/components/Alerts/Notifications/NotificationType";
import { useNotification } from "@/components/Alerts/Notifications/useNotification";

export function TotalPriceBL({ smShow, handleCloseModal, handleIconClick }) {
  const { infoReservation } = useContext(BookingContext);
  const [isDownloading, setIsDownloading] = useState(false);
  const { languageData, language } = useContext(LanguageContext);
  const { notification, showNotification, hideNotification } =
    useNotification();

  const downloadPDF = () => {
    const searchParams = new URLSearchParams(window.location.search);
    // const cartId = "1ef38802-3c19-616c-9b76-3f67f7113acas";
    const cartId = searchParams.get("uid");
    setIsDownloading(true);
    // CHECK TO KNOW IF THE PDF EXISTS
    GetConfirmationPDF(cartId, language)
      .then((response) => {
        if (response.status === 200) {
          // CHECK IF THE PDF HAS CONTENT
          SizePDF(
            `${process.env.NEXT_PUBLIC_ROYAL_URL}dowloand-pdf/${cartId}?lang=${language}`
          )
            .then((response) => {
              if (response > 0) {
                // DOWNLOAD PDF
                window.open(
                  `${process.env.NEXT_PUBLIC_ROYAL_URL}dowloand-pdf/${cartId}?lang=${language}`
                );

                // DOWNLOAD PDF SUCCESSFUL ALERT
                showNotification(
                  "success",
                  languageData.shareLink.downloadSuccess,
                  "",
                  5000
                );
              } else {
                // ALERT EMPTY PDF
                showNotification(
                  "warning",
                  languageData.shareLink.PDFNotFound,
                  "",
                  5000
                );
              }
            })
            .catch((error) => {
              showNotification(
                "error",
                languageData.shareLink.downloadFiledTitle,
                languageData.shareLink.downloadFiledMessage,
                5000
              );
            });
        }
        setIsDownloading(false);
      })
      .catch((error) => {
        setIsDownloading(false);
        if (error.response.status >= 400) {
          showNotification(
            "error",
            languageData.shareLink.downloadFiledTitle,
            languageData.shareLink.downloadFiledMessage,
            5000
          );
        }
      });
  };

  return (
    <div className="hidden lg:flex justify-between mt-[1.6rem] w-full py-[0.9rem] pl-[40px] bg-bl-100 rounded-bl-[2.4rem] !pr-4 !rounded-br-lg">
      <span className="flex items-center gap-x-1 text-white m-b text-fs-14">
        {languageData.confirmation.bookingData.numberConfirmation}:
        <div className="h-[20px] !px-2 !py-1 bg-grn-10 rounded text-fs-10 m-b text-grn-100 text-center">
          {infoReservation.booking.reference}
        </div>
      </span>

      <div className="flex flex-row gap-4 items-center">
        <span className="flex gap-x-2 text-white m-b text-fs-16 items-center">
          {languageData.confirmation.total}

          <p className="text-fs-20 m-0">
            $
            {Math.floor(infoReservation.totalPrice)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .<sup>{(infoReservation.totalPrice % 1).toFixed(2).slice(2)}</sup>
          </p>
        </span>
        {/* BTN SHARE */}
        <button
          className="border border-white rounded-full flex gap-2 py-[.4rem] px-4"
          onClick={handleIconClick}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}icons/share/share-w.svg`}
            alt="icon-share"
            width={16}
            height={18}
          />

          <span className="m-b text-white text-fs-12">
            {languageData.shareLink.share}
          </span>
        </button>

        {/* BTN DOWNLOAD */}
        <button
          className="bg-or-100 rounded-full flex gap-2 py-2 px-4"
          onClick={downloadPDF}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}icons/download-i/download-w.svg`}
            alt="icon-download"
            width={16}
            height={18}
          />

          <span className="m-b text-white text-fs-12">
            {isDownloading
              ? languageData.shareLink.downloadingItinerary
              : languageData.shareLink.downloadItinerary}
          </span>
        </button>

        <ShareContainer smShow={smShow} handleCloseModal={handleCloseModal} />

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
    </div>
  );
}
