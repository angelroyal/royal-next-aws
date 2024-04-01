import React, { createContext, useContext, useState } from "react";

const ModalTourContext = createContext();

export const useModalTourContext = () => {
  return useContext(ModalTourContext);
};

export function ProviderModalTour({ children }) {
  const [active, setActive] = useState(0);
  const [section, setSection] = useState(1);
  const [tourModal, setTourModal] = useState(null);
  const [hourSelected, setHourSelected] = useState(null);
  const [dataModalTour, setDataModalTour] = useState({
    type: "activity",
    date: "",
  });

  const[otherInfoTour, setOtherInfoTour]= useState({address:null, cancelPolicies:null})


  const contextValue = {
    section,
    setSection,
    dataModalTour,
    setDataModalTour,
    active,
    setActive,
    tourModal,
    setTourModal,
    hourSelected, 
    setHourSelected,
    otherInfoTour, 
    setOtherInfoTour
  };

  return (
    <ModalTourContext.Provider value={contextValue}>
      {children}
    </ModalTourContext.Provider>
  );
}
