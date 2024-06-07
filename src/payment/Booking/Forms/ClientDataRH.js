import Image from "next/image";
// import { Form } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { PaymentContext } from "@/payment/context/PaymentContext";
import {
  ProcessDataHB,
  processItineraryData,
} from "@/payment/config/processData";

// import HotelBlackIcon from `${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-b.svg`;
// import HotelOrangeIcon from `${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-o.svg`;

export function FormClientRH(props) {
  const { setRoomsRH } = useContext(PaymentContext);
  const { dataItinerary } = props;
  const { languageData } = useContext(LanguageContext);

  const [formData, setFormData] = useState([]);
  const processedDataRH = processItineraryData(dataItinerary);
  const processedDataHB = ProcessDataHB(dataItinerary);
  const [activeHotelIndex, setActiveHotelIndex] = useState(0);

  const HotelBlackIcon = `${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-b.svg`;
  const HotelOrangeIcon = `${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-o.svg`;

  // VALIDATE INPUTS TYPE TEXT
  const handleKeyPress = (event) => {
    if (!/[A-Za-z ]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleKeyPressAge = (event) => {
    if (!/[0-9]/.test(event.key) || event.target.value.length >= 2) {
      event.preventDefault();
    }
  };

  // FORM INPUTS MAP
  const handleChange = (event, hotelId, roomId, occupantType, index) => {
    const { name, value } = event.target;
    const occupantKey = `${hotelId}-${roomId}-${occupantType}-${index}`;

    if (name === "age") {
      const age = Number(value);
      if (isNaN(age) || age < 0 || age > 12) {
        event.target.value = age > 12 ? 12 : age;
        return;
      }
    }

    setFormData((prevFormData) => {
      const existingIndex = prevFormData.findIndex(
        (entry) => entry.key === occupantKey
      );

      let updatedFormData = [...prevFormData];

      if (existingIndex > -1) {
        updatedFormData[existingIndex] = {
          ...updatedFormData[existingIndex],
          [name]: value,
          roomId: roomId,
        };
      } else {
        updatedFormData.push({
          key: occupantKey,
          [name]: value,
          roomId: roomId,
        });
      }

      return updatedFormData;
    });
  };

  useEffect(() => {
    handleSubmit();
  }, [formData]);

  // SEND INFO PAYMENT
  const handleSubmit = () => {
    const submissionData = formData.map(({ key, ...rest }) => rest);
    setRoomsRH(submissionData);
  };

  // NEXT ROOM
  const handleContinue = () => {
    if (activeHotelIndex < processedDataRH.length - 1) {
      setActiveHotelIndex(activeHotelIndex + 1);
    }
  };

  const getValue = (hotelId, roomId, occupantType, index, fieldName) => {
    const occupantKey = `${hotelId}-${roomId}-${occupantType}-${index}`;
    const entry = formData.find((entry) => entry.key === occupantKey);
    return entry ? entry[fieldName] || "" : "";
  };

  return (
    <>
      {processedDataRH && processedDataRH.length > 0 ? (
        // <div className="">
        <div className="w-full bg-white rounded-[19px] px-[1.8rem] pt-[2rem] pb-[3rem] mt-[2.5rem]">
          <h3 className="m-b text-fs-21 mb-[.5rem]">
            {languageData.booking.clientData.titleClientData}
          </h3>

          <div className="flex flex-col gap-4">
            {processedDataRH.map((hotel, index) => (
              <div key={index}>
                {/* TITLE HOTEL */}
                <div
                  className={`m-b flex items-center gap-2`}
                  onClick={() => setActiveHotelIndex(index)}
                >
                  {index === activeHotelIndex ? (
                    <Image
                      src={HotelOrangeIcon}
                      alt="HotelOrangeIcon"
                      width={20}
                      height={17}
                      className="w-[1.7rem] h-auto"
                    />
                  ) : (
                    <Image
                      src={HotelBlackIcon}
                      alt="HotelBlackIcon"
                      className="w-[1.5rem] h-auto"
                      width={20}
                      height={17}
                    />
                  )}
                  <h3 className="text-fs-20">{hotel.name}</h3>
                </div>

                {/* SHOW ROOM INDEX */}
                {index === activeHotelIndex ? (
                  <>
                    <>
                      <div className="py-[20px] px-[36px] mt-[18px] mb-[12px] justify-between flex flex-col bg-gry-30 rounded-[9px]">
                        {hotel.roomDetails.map((room, roomIndex) => (
                          <div key={roomIndex}>
                            {/* NAME ROOM INDEX */}
                            <span className="m-b text-fs-16 flex mb-[1rem]">
                              {room.roomName}{" "}
                            </span>

                            {/* ADULT ARRAY INPUTS */}
                            {Array.from({ length: room.adults }).map(
                              (_, adultIndex) => (
                                <div
                                  key={`adult-${adultIndex}`}
                                  className="flex justify-evenly items-end mb-[1.1rem] gap-[2rem]"
                                >
                                  <div className="w-full flex-col">
                                    <label
                                      htmlFor="firstName"
                                      className="mb-[.2rem] m-s-b text-fs-13"
                                    >
                                      {languageData.booking.adult}{" "}
                                      {adultIndex + 1}
                                    </label>
                                    <input
                                      type="text"
                                      name="firstName"
                                      className="rounded-lg m-b w-full px-[2.25rem] pb-[.375rem] pt-[.7rem] text-fs-14 appearance-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b focus:outline-none"
                                      placeholder={
                                        languageData.booking.clientData
                                          .placeholderName
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          hotel.id,
                                          room.code,
                                          "adult",
                                          adultIndex
                                        )
                                      }
                                      onKeyPress={handleKeyPress}
                                      value={getValue(
                                        hotel.id,
                                        room.code,
                                        "adult",
                                        adultIndex,
                                        "firstName"
                                      )}
                                    />
                                  </div>

                                  <div className="w-full">
                                    <input
                                      type="text"
                                      name="lastName"
                                      className="m-0 rounded-lg m-b w-full px-[2.25rem] pb-[.375rem] pt-[.7rem] text-fs-14 border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b focus:outline-none"
                                      placeholder={
                                        languageData.booking.clientData
                                          .placeholderLastName
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          hotel.id,
                                          room.code,
                                          "adult",
                                          adultIndex
                                        )
                                      }
                                      onKeyPress={handleKeyPress}
                                      value={getValue(
                                        hotel.id,
                                        room.code,
                                        "adult",
                                        adultIndex,
                                        "lastName"
                                      )}
                                    />
                                  </div>
                                </div>
                              )
                            )}

                            {/* CHILDREN INPUTS */}
                            {Array.from({ length: room.children }).map(
                              (_, childIndex) => (
                                <div
                                  key={`child-${childIndex}`}
                                  className="flex justify-evenly items-end mb-[1.1rem] gap-[2rem]"
                                >
                                  <div className="w-full">
                                    {/* NAME CHILDREN INDEX */}
                                    <label
                                      htmlFor="firstName"
                                      className="m-s-b text-fs-12 mb-[.2rem]"
                                    >
                                      {languageData.booking.children}{" "}
                                      {childIndex + 1}
                                    </label>

                                    {/* FIRST NAME CHILDREN */}
                                    <input
                                      type="text"
                                      name="firstName"
                                      className="m-0 rounded-lg m-b w-full px-[2.25rem] pb-[.375rem] pt-[.7rem] text-fs-14 appearance-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b focus:outline-none"
                                      placeholder={
                                        languageData.booking.clientData
                                          .placeholderName
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          hotel.id,
                                          room.code,
                                          "child",
                                          childIndex
                                        )
                                      }
                                      onKeyPress={handleKeyPress}
                                      value={getValue(
                                        hotel.id,
                                        room.code,
                                        "child",
                                        childIndex,
                                        "firstName"
                                      )}
                                    />
                                  </div>

                                  {/* CHILDREN LAST NAME */}
                                  <div className="w-full">
                                    <input
                                      type="text"
                                      name="lastName"
                                      className="m-0 rounded-lg m-b w-full px-[2.25rem] pb-[.375rem] pt-[.7rem] text-fs-14 appearance-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b focus:outline-none"
                                      placeholder={
                                        languageData.booking.clientData
                                          .placeholderLastName
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          hotel.id,
                                          room.code,
                                          "child",
                                          childIndex
                                        )
                                      }
                                      onKeyPress={handleKeyPress}
                                      value={getValue(
                                        hotel.id,
                                        room.code,
                                        "child",
                                        childIndex,
                                        "lastName"
                                      )}
                                    />
                                  </div>

                                  {/* CHILDREN AGE */}
                                  <div className="w-full">
                                    <input
                                      type="number"
                                      name="age"
                                      className="m-0 rounded-lg m-b w-full px-[2.25rem] pb-[.375rem] pt-[.7rem] text-fs-14 appearance-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b focus:outline-none"
                                      placeholder={
                                        languageData.SearchBox.tabTour
                                          .personsActivities.age
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          hotel.id,
                                          room.code,
                                          "child",
                                          childIndex
                                        )
                                      }
                                      onKeyPress={handleKeyPressAge}
                                      value={getValue(
                                        hotel.id,
                                        room.code,
                                        "child",
                                        childIndex,
                                        "age"
                                      )}
                                      max={12}
                                      min={0}
                                    />
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        ))}
                      </div>

                      {/* BUTTON NEXT ROOM  */}
                      <div className="flex justify-end">
                        {activeHotelIndex < processedDataRH.length - 1 && (
                          <button
                            onClick={handleContinue}
                            className="bg-bl-100 text-white rounded-full px-[1.5rem] py-[.5rem] m-s-b text-fs-13"
                          >
                            {languageData.booking.clientData.continue}
                          </button>
                        )}
                      </div>
                    </>
                  </>
                ) : (
                  <div className="bg-gry-30 rounded-[9px] w-full px-[36px] py-[24px]">
                    {hotel.roomDetails &&
                      hotel.roomDetails.map((value, item) => (
                        <h3 className="m-0 m-b text-fs-16 flex" key={item}>
                          {value.roomName}
                        </h3>
                      ))}
                  </div>
                )}
              </div>
            ))}
            {
              <>
                {processedDataHB &&
                  processedDataHB.map((room, item) => (
                    <div key={item}>
                      <div className="m-s-b flex items-center gap-2">
                        <Image
                          src={HotelBlackIcon}
                          alt="HotelBlackIcon"
                          className="w-[1.7rem] h-auto"
                          width={20}
                          height={17}
                        />
                        <h3 className="text-fs-20 m-0">{room.name} </h3>
                      </div>

                      <div className="bg-gry-30 rounded-[9px] w-full px-[36px] py-[24px]">
                        <h3 className="m-s-b text-fs-16 text-gry-70">
                          {languageData.booking.clientData.notSpecifyName}
                        </h3>
                      </div>
                    </div>
                  ))}
              </>
            }
          </div>
        </div>
      ) : null}
    </>
  );
}
