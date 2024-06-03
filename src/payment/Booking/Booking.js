import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";

import ClientDataT from "./Forms/FormClientData";
// import ClientData from "./ClientData";
import { ActivityForm } from "./ActivityForm";
import { FormClientRH } from "./ClientDataRH";
import PaymentConektaF from "./PaymentConektaF";
import AlertTextBooking from "./AlertTextBooking";
import LanguageContext from "../../language/LanguageContext";
import { FormDataProvider } from "../context/FormDataContext";
// import { getCombinedActivitys } from "../Services/PaybokingServices.js";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import { SkeletonActivitiesTourP } from "../../utils/skeleton/SkeletonActivitiesTourP.js";
import { ActivityFormT } from "./ActivityFormT";
import PaymentConektaFT from "./PaymentConektaFT";
import FormCentral from "./Forms/FormCentral";

export default function Booking(props) {
  const { dataItinerary, hasActivities } = props;

  console.log(hasActivities);
  const [userData, setUserData] = useState({});
  const [showAlert, setShowAlert] = useState(null);
  const [hotelRH, setRoomsRH] = useState([]);
  const [formActivityItems, setFormActivityItems] = useState(null);
  const [activityPreBooking, setActivityPreBooking] = useState(null);

  // const [isRH, setRH] = useState(false);
  // const isMobile = useIsMobile();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [showAlert]);

  // CLIENT DATA
  const handleUserDataChange = (data) => {
    setUserData(data);
  };

  // RH DATA
  const handleRHChange = (data) => {
    setRoomsRH(data);
  };

  const handleAlertDataChange = (data) => {
    setShowAlert(data);
    scrollToTop();
  };

  const { languageData } = useContext(LanguageContext);

  const fetchData = async () => {
    try {
      const url = "/v1/pre-booking/";
      const searchParams = new URLSearchParams(window.location.search);
      const cartId = searchParams.get("uid");
      const response = await axiosWithInterceptor.get(`${url}${cartId}`);
      setActivityPreBooking(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FormDataProvider>
      <div>
        {/* SHOW ALERTS MSG */}
        <AlertTextBooking showAlert={showAlert} />

        <div className="flex !gap-x-2 w-full items-start justify-start items-start !mb-2">
          <Image
            className="w-[27px] h-[25px]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
            width={27}
            height={25}
          />
          <h1 className="text-fs-24 m-b text-black">
            {languageData.booking.titleVacations}
          </h1>
        </div>

        <h2 className="text-fs-14 m-m text-black mb-3">
          {languageData.booking.subtitleComplete}
        </h2>

        <FormCentral
          activityPreBooking={activityPreBooking}
          dataItinerary={dataItinerary.items}
          activityTrue={hasActivities}
        />

        <div className="pt-[36px] flex flex-col gap-y-[36px]">
          {/* Passing the handleUserDataChange function as a prop */}

          {/* <ClientData onUserDataChange={handleUserDataChange} /> */}
          {/* <ClientDataT onUserDataChange={handleUserDataChange} /> */}

          {/* <FormClientRH
            dataItinerary={dataItinerary.items}
            onRHDataChange={handleRHChange}
          /> */}

          {/* {activityPreBooking && activityPreBooking.length > 0 && (
            <div className="py-[32px] px-[24px] w-full rounded-[19px] bg-white">
              <h2 className="m-b text-fs-21 text-black">
                {languageData.paymentActivities.activities}
              </h2>

              <ActivityFormT
                activityPreBooking={activityPreBooking}
                setFormActivityItems={setFormActivityItems}
              />
            </div>
          )} */}

          {/* {!activityPreBooking && <SkeletonActivitiesTourP />} */}

          {/* <PaymentConektaF
            hotelRH={hotelRH}
            userData={userData}
            changeButton={changeButton}
            onAlertDataChange={handleAlertDataChange}
            formActivityItems={formActivityItems}
          /> */}
          {/*      <PaymentConektaFT
            hotelRH={hotelRH}
            userData={userData}
            changeButton={changeButton}
            onAlertDataChange={handleAlertDataChange}
            formActivityItems={formActivityItems}
          /> */}
        </div>
      </div>
    </FormDataProvider>
  );
}
