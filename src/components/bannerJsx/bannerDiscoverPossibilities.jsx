"use client";

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import NotificationType from "../Alerts/Notifications/NotificationType";

export default function BannerDiscoverPossibilities() {
  const phoneRegex = /^\d{0,10}$/;
  const [phoneValue, setPhone] = useState("");
  const nameRegexIndividual = /^[A-Za-z ]{1,40}$/;
  const [namePerson, setNamePerson] = useState("");
  const { languageData } = useContext(LanguageContext);
  const [valueInputs, setValuesInputs] = useState(false);

  const [showNotificationDone, setShowNotificationDone] = useState(false);
  const [showNotificationError, setShowNotificationError] = useState(false);
  const [showNotificationWarning, setShowNotificationWarning] = useState(false);

  // ADD NAME
  const addNamePerson = (e) => {
    const value = e.target.value;
    if (nameRegexIndividual.test(value) || value === "") {
      setNamePerson(value);
    }
  };

  // ADD PHONE
  const addPhone = (event) => {
    const value = event.target.value;
    if (phoneRegex.test(value) || value === "") {
      setPhone(value);
    }
  };

  // VALIDATE INPUTS ISN'T EMPTY
  useEffect(() => {
    const isValid =
      phoneValue &&
      namePerson &&
      nameRegexIndividual.test(namePerson) &&
      phoneRegex.test(phoneValue) &&
      phoneValue.length === 10;

    setValuesInputs(isValid);
  }, [phoneValue, namePerson]);

  // SEND MESSAGE TO TELEGRAM GROUP
  const handleSubmit = () => {
    if (!valueInputs) {
      setShowNotificationWarning(true);
      setTimeout(() => {
        setShowNotificationWarning(false);
      }, 5000);
      return;
    }

    axios
      .post(
        "https://api.telegram.org/bot6413785790:AAFbmewlmcgnSngod5XWED_h8Iib7mlCJiE/sendMessage",
        {
          chat_id: "-1002030618875",
          text: `⚡ NUEVO CONTACTO ⚡ \n \nNOMBRE: ${namePerson}\nTELEFONO: ${phoneValue}`,
        }
      )
      .then((response) => {
        if (response) {
          setShowNotificationDone(true);
          setNamePerson("");
          setPhone("");
          setTimeout(() => {
            setShowNotificationDone(false);
          }, 5000);
        }
      })
      .catch((error) => {
        setShowNotificationError(true);
        setTimeout(() => {
          setShowNotificationError(false);
        }, 5000);
      });
  };

  return (
    <>
      <div className="relative w-full flex items-center my-32 max-lg:items-start ">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}banners/transport/banner-baggage.jpg`}
          alt="banner baggage"
          className="w-full max-lg:hidden select-none"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_URL}banners/transport/banner-baggage-mobile.jpg`}
          alt="banner baggage mobile"
          className="lg:hidden w-full h-[822px] select-none"
        />

        <div className="absolute flex flex-col ml-[60px] max-lg:mx-[40px] max-lg:mt-[90px] max-sm:mt-[40px]">
          <h2 className="m-b text-fs-34 ">
            {languageData.bannerTransportHome.discoverOptions}
          </h2>
          <span className="m-s-b text-fs-16 w-[70%] mt-[10px]">
            {languageData.bannerTransportHome.getKnowBetter}
          </span>

          <div className="flex gap-2 mt-[35px] max-lg:flex-col">
            <input
              placeholder={languageData.alertHelp.name}
              className="h-[44px] rounded-[4px] w-[257px] pl-[10px] m-s-b text-fs-12 max-lg:w-full focus:outline-none italic"
              value={namePerson}
              onChange={(event) => addNamePerson(event)}
            />

            <input
              placeholder={languageData.alertHelp.number}
              className="h-[44px] pl-[10px] w-[257px] rounded-[4px] m-s-b text-fs-12 max-lg:w-full focus:outline-none italic"
              onChange={(event) => addPhone(event)}
              value={phoneValue}
            />
            <button
              onClick={handleSubmit}
              className={`text-white px-[40px] py-[10px] rounded-full flex items-center justify-center max-lg:w-full bg-bl-100 hover:bg-bl-110 cursor-pointer`}
            >
              {languageData.bannerTransportHome.sendBtn}
            </button>
          </div>
        </div>
      </div>

      {showNotificationDone && (
        <NotificationType
          type="success"
          title="Enviado"
          message="Mensaje enviado correctamente."
        />
      )}

      {showNotificationError && (
        <NotificationType
          type="error"
          title="Error"
          message="Ups ocurrio un error al enviar su informacion."
        />
      )}

      {showNotificationWarning && (
        <NotificationType
          type="warning"
          title="Advertencia"
          message="Por favor, completa todos los campos correctamente."
        />
      )}
    </>
  );
}
