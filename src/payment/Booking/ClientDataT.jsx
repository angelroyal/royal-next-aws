"use client";

import validator from "validator";
import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";

export default function ClientDataT(props) {
  const { languageData } = useContext(LanguageContext);

  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const phoneRegex = /^\d{0,10}$/;
  const nameRegexIndividual = /^[A-Za-z ]{1,40}$/;

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    if (nameRegexIndividual.test(value) || value === "") {
      setFirstName(value);
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    if (nameRegexIndividual.test(value) || value === "") {
      setLastName(value);
    }
  };

  // EMAIL VERIFICATION
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleEmailBlur = () => {
    const value = email;
    if (validator.isEmail(value) || value === "") {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    setIsEmailValidated(true);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (phoneRegex.test(value) || value === "") {
      setPhoneNumber(value);
    }
  };

  useEffect(() => {
    const isFormValid =
      nameRegexIndividual.test(firstName) &&
      nameRegexIndividual.test(lastName) &&
      (validator.isEmail(email) || email === "") &&
      (phoneRegex.test(phoneNumber) || phoneNumber === "");

    if (isFormValid) {
      const userData = {
        firstName,
        lastName,
        email,
        phoneNumber,
      };
      props.onUserDataChange(userData);
    }
  }, [firstName, lastName, email, phoneNumber]);

  return (
    <>
      <div className="w-full bg-white rounded-2xl pt-[2rem] pb-[3rem] px-[1.8rem]">
        <div className="m-b text-fs-20 text-black">
          {languageData.booking.clientData.titleForm}
        </div>

        <div className="flex justify-between gap-[1.5rem] items-end max-md:flex-col">
          <div className="flex flex-col w-full h-full">
            <label
              htmlFor="firstName"
              className="mt-[22px] m-b text-fs-12 text-gry-100"
            >
              {languageData.booking.clientData.textName}{" "}
              <span className="text-red-100">*</span>
            </label>

            <input
              // id="firstName"
              type="name"
              className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] appearance-none focus:outline-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
              placeholder={languageData.booking.clientData.placeholderName}
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>

          <div className="flex flex-col w-full h-full">
            <label
              htmlFor="lastName"
              className="mt-[16px] m-b text-fs-12 text-gry-100"
            >
              {languageData.booking.clientData.textLastName}{" "}
              <span className="text-red-100">*</span>
            </label>

            <input
              // id="lastName"
              className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] appearance-none border border-[#ebebeb] focus:outline-none placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
              placeholder={languageData.booking.clientData.placeholderLastName}
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
        </div>

        <div className="flex justify-between gap-[1.5rem] items-start">
          <div className="flex flex-col w-full h-full">
            <label
              htmlFor="email"
              className="mt-[16px] m-b text-fs-12 text-gry-100"
            >
              {languageData.booking.clientData.textEmail}
              <span className="text-red-100">*</span>
            </label>

            <input
              // id="email"
              type="email"
              className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] appearance-none border border-[#ebebeb] focus:outline-none  placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
              placeholder={languageData.booking.clientData.placeholderEmail}
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur} // Nuevo evento onBlur
            />
            {isEmailValidated && !isEmailValid && (
              <div className="bg-red-50 rounded-lg px-[10px] py-[20px] border border-red-70 tm-s-b">
                {languageData.booking.invalidEmail}
              </div>
            )}
          </div>

          <div className="flex flex-col w-full h-full">
            <label
              htmlFor="phoneNumber"
              className="mt-[16px] m-b text-fs-12 text-gry-100"
            >
              {languageData.booking.clientData.textPhone}{" "}
              <span className="text-red-100">*</span>
            </label>

            <input
              // id="phoneNumber"
              className="m-0 rounded-lg m-b w-full pt-[0.7rem] pb-[0.375rem] px-[2.25rem] text-fs-14 leading-[1.5] appearance-none border border-[#ebebeb] focus:outline-none placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b"
              placeholder={languageData.booking.clientData.placeholderPhone}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
