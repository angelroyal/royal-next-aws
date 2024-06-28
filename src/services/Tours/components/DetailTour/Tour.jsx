"use client";

import { useContext, useEffect, useState } from "react";

import TabsTours from "./TabsTours";
import DetailTour from "./DetailTour";
import DayCalendar from "./DayCalendar";
import { HoursSelect } from "./HoursSelect";
import { Container } from "@/config/Others/Container";
import SkeletonDetailTour from "../Skeleton/SkeletonDetailTour";
import { ModalitiesTicket } from "./TicketTourDetails/ModalitiesTicket";
// import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { getAvailabilityTour } from "../../Api/requestTour";
import LanguageContext from "@/language/LanguageContext";

export default function Tour(props) {
  const { params, tourMetaData, searchParams } = props;
  const [tourData, setTourData] = useState(null);
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await getAvailabilityTour(params.id, searchParams);
        setTourData(response.data);
      } catch (error) {
        console.error("Failed to fetch tour data:", error);
      }
    };

    fetchTourData();
  }, []);

  return (
    <Container>
      {/* <div className="p-9 mt-[25.8px]">  LP  TASK 20*/}
      {tourMetaData && <DetailTour tourData={tourMetaData.activity} />}

      {!tourData && <SkeletonDetailTour />}

      {tourData && (
        <div className="p-9 ">
          <div className="flex flex-col lg:flex-row mt-9">
            <div className="w-full lg:w-6/12 shadow-3xl p-4">
              <TabsTours tourData={tourData.activity} />
            </div>
            {tourData.activity.schedule.length > 0 ? (
              <div className="w-full flex-col lg:w-6/12 pt-9 lg:pl-[54px]">
                <DayCalendar
                  tourSchedule={tourData.activity.schedule}
                  tourData={tourData.activity}
                  params={params}
                />
                <HoursSelect />
                <ModalitiesTicket tourData={tourData} />
              </div>
            ) : (
              <p className="m-s-b text-fs-16 m-0 pt-9 lg:pl-[54px]">
                {" "}
                {languageData.Alerts.tour.notAvailability}
              </p>
            )}
          </div>
        </div>
      )}
    </Container>
  );
}
