import { Duration } from "./Duration";
import { TitleTour } from "./TitleTour";
import { PriceTour } from "./PriceTour";
import { Description } from "./Description";

export function ContainerDescription({ tourInfo }) {
  return (
    <div className="flex flex-col w-[78%]">
      <TitleTour tourInfo={tourInfo} />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Description tourInfo={tourInfo} />

        <div className="max-lg:hidden grid grid-cols-2 ">
            <Duration tourInfo={tourInfo}/>

            <PriceTour tourInfo={tourInfo}/>
        </div>
      </div>
    </div>
  );
}
