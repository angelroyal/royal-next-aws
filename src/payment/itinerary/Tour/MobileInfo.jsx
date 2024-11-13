import { Duration } from "./Duration";
import { PriceTour } from "./PriceTour";

export function MobileInfo({ tourInfo }) {
  return (
    <div className="lg:hidden flex justify-between items-start w-full max-lg:pt-[16px] max-lg:mt-[8px] max-lg:border-t max-lg:border-[#ebebeb]">
      <Duration tourInfo={tourInfo} />

      <PriceTour tourInfo={tourInfo} />
    </div>
  );
}
