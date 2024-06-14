"use client";
import React, { useState, useEffect } from "react";

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses empiezan en 0
  const year = String(date.getFullYear()).slice(-2); // Solo los últimos dos dígitos del año
  return `${day}/${month}/${year}`;
};

const FutureDates = () => {
  const [dates, setDates] = useState({
    twoWeeksAhead: "",
    threeWeeksAhead: "",
  });

  useEffect(() => {
    const today = new Date();
    const twoWeeksAhead = new Date(today);
    twoWeeksAhead.setDate(today.getDate() + 14);

    const threeWeeksAhead = new Date(today);
    threeWeeksAhead.setDate(today.getDate() + 21);

    setDates({
      twoWeeksAhead: formatDate(twoWeeksAhead),
      threeWeeksAhead: formatDate(threeWeeksAhead),
    });
  }, []);

  return (
    <>
      {dates.twoWeeksAhead}-{dates.threeWeeksAhead}
    </>
  );
};

export default FutureDates;
