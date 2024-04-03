import { Container } from "@/config/Others/Container";
import DetailTour from "./DetailTour";
import TabsTours from "./TabsTours";
import DayCalendar from "./DayCalendar";

export default function Tour() {
  return (
    <Container>
      <DetailTour />

      <div className="flex mt-4 mb-4  mr-[5rem] ml-[5rem]">
        <div className="w-6/12 shadow-3xl p-4">
          <TabsTours />
        </div>
        <div className="w-6/12">
          <DayCalendar />
        </div>
      </div>
    </Container>
  );
}
