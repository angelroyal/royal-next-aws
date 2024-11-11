import { ImageTransportation } from "./ImageTransportation";
import { DescriptionTransportMobile } from "./DescriptionTransportMobile";
import { DescriptionTransportDesktop } from "./DescriptionTransportDesktop";

export function ConfirmationCardTransport({ transportInfo }) {
  return (
    <div className="min-xl:pl-4 min-xl:pr-[37px] flex max-xl:flex-col relative">
      <div className="flex items-center gap-x-2 lg:gap-x-8 w-full">
        <ImageTransportation transportInfo={transportInfo} />

        <DescriptionTransportDesktop transportInfo={transportInfo} />
      </div>
      <DescriptionTransportMobile transportInfo={transportInfo} />
    </div>
  );
}
