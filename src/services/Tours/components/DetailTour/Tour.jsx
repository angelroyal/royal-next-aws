import TabsTours from "./TabsTours";
import DetailTour from "./DetailTour";
import DayCalendar from "./DayCalendar";
import { HoursSelect } from "./HoursSelect";
import { Container } from "@/config/Others/Container";
import { ModalitiesTicket } from "./TicketTourDetails/ModalitiesTicket";

export default function Tour(props) {
  const { tourData } = props;

  return (
    <Container>
      {/* <div className="p-9 mt-[25.8px]">  LP  TASK 20*/}
      {tourData && (
        <div className="p-9 ">
          <DetailTour tourData={tourData.activity} />

          <div className="flex flex-col lg:flex-row mt-9">
            <div className="w-full lg:w-6/12 shadow-3xl p-4">
              <TabsTours tourData={tourData.activity} />
            </div>

            <div className="w-full flex-col lg:w-6/12 pt-9 lg:pl-[54px]">
              <DayCalendar
                tourSchedule={tourData.activity.schedule}
                tourData={tourData.activity}
              />
              <HoursSelect />
              <ModalitiesTicket tourData={tourData} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
