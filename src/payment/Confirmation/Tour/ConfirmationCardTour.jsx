import { DescriptionTourMobile } from "./DescriptionTourMobile";
import { DescriptionTourDesktop } from "./DescriptionTourDesktop";

export function ConfirmationCardTour({ tourInfo }) {
  return (
    <div className="max-sm:pl-5 max-sm:pr-[34px] max-sm:py-4 max-sm:flex max-sm:flex-col">
      <DescriptionTourDesktop tourInfo={tourInfo} />
      
      <DescriptionTourMobile tourInfo={tourInfo} />
    </div>
  );
}
