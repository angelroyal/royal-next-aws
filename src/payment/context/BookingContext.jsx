"use client";

import { createContext, useState } from "react";
const BookingContext = createContext();

const BookingProviderContext = ({ children }) => {
  const [step, setStep] = useState(1);
  const [termsAccept, setTermsAccept] = useState(false);
  const [policyAccept, setPolicyAccept] = useState(false);
  const [buttonActive, setIsButtonActive] = useState(false);
  const [countNumber, setCountNumber] = useState(null);
  const [progressCount, setProgressCount] = useState(null);
  const [infoReservation, setInfoReservation] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [removeIsLoader, setRemoveIsLoader] = useState(false);
  const [scheduleItinerary, setScheduleItinerary] = useState(null);
  const [openTaxesNotIncluded, setOpenTaxesNotIncluded] = useState(false);
  const [roomsWithTaxesNotIncluded, setRoomsWithTaxesNotIncluded] =
    useState(null);
  const [totalTaxesNotIncluded, setTotalTaxesNotIncluded] = useState(0);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <BookingContext.Provider
      value={{
        step,
        handleStepChange,
        termsAccept,
        setTermsAccept,
        policyAccept,
        setPolicyAccept,
        buttonActive,
        setIsButtonActive,
        progressCount,
        setProgressCount,
        countNumber,
        setCountNumber,
        infoReservation,
        setInfoReservation,
        openDialog,
        setOpenDialog,
        removeIsLoader,
        setRemoveIsLoader,
        scheduleItinerary,
        setScheduleItinerary,
        openTaxesNotIncluded,
        setOpenTaxesNotIncluded,
        roomsWithTaxesNotIncluded,
        setRoomsWithTaxesNotIncluded,
        totalTaxesNotIncluded,
        setTotalTaxesNotIncluded,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingProviderContext };
