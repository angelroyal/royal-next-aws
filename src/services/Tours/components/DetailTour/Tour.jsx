import TabsTours from "./TabsTours";
import DetailTour from "./DetailTour";
import DayCalendar from "./DayCalendar";
import { HoursSelect } from "./HoursSelect";
import { Container } from "@/config/Others/Container";
import { TicketsTour } from "./TicketTourDetails/TicketTour";
import { ModalitiesTicket } from "./TicketTourDetails/ModalitiesTicket";

export default function Tour() {
  return (
    <Container>
      <div className="p-9 mt-[25.8px]">
        <DetailTour />

        <div className="flex flex-col lg:flex-row mt-9">
          <div className="w-full lg:w-6/12 shadow-3xl p-4">
            <TabsTours />
          </div>
          <div className="w-full flex-col lg:w-6/12 pt-9 lg:pl-[54px]">
            <DayCalendar />
            <HoursSelect />
            <ModalitiesTicket/>
            {/* <TicketsTour /> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
