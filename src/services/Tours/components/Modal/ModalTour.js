import React, { Suspense, lazy, useEffect } from "react";

import { ModalTourNw } from "./ModalTourNw";
import { useTourContext } from "../../Context/ListingTourContext";
import { useModalTourContext } from "../../Context/ModalTourContext";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

const ModalActivitiesOptions = lazy(() =>
  import("../../../components/Modal/Tour/ModalActivitiesOptions")
);

export default function ModalTour(props) {
  const { open, closeDialog } = props;
  const { section, setSection, setDataModalTour, setActive, setTourModal } =
    useModalTourContext();

  const { tourInfo, setTourInfo } = useTourContext();

  // CALENDAR
  useEffect(() => {
    if (open === false) {
      setSection(1);
      let resetDataModalTour = { type: "activity", date: "" };
      setDataModalTour(resetDataModalTour);
      setActive(0);
      setTourInfo(null);
    }
  }, [open]);

  // AXIOS POST MODAL TOUR
  useEffect(() => {
    axiosPostModal();
  }, []);

  const searchParams = new URLSearchParams(window.location.search);

  const axiosPostModal = () => {
    setActive(0);
    const requestBody = {
      dateFrom: searchParams.get("dateStart"),
      days: 8,
      currency: "MXN",
    };

    axiosWithInterceptor
      .post(`v1/tour-destinations/${tourInfo.code}/availability`, requestBody)
      .then((response) => {
        setTourModal(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return section === 1 ? (
    <ModalTourNw closeDialog={closeDialog} />
  ) : (
    <>
      <Suspense fallback={null}>
        <ModalActivitiesOptions />
      </Suspense>
    </>
  );
}
