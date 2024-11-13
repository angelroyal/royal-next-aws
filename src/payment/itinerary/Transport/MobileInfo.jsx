import { PriceTransport } from "./PriceTransport";
import { TripeType } from "./TripeType";

export function MobileInfo({ transportInfo }) {
  return (
    <div className="lg:hidden flex justify-between items-start w-full max-lg:pt-[16px] max-lg:mt-[8px] max-lg:border-t max-lg:border-[#ebebeb]">
      <TripeType transportInfo={transportInfo} />

      <PriceTransport transportInfo={transportInfo} />
    </div>
  );
}
