import { DescriptionTourDesktop } from "./DescriptionTourDesktop";
import { DescriptionTourMobile } from "./DescriptionTourMobile";

export function ConfirmationCardTour({ tourInfo }) {
  return (
    <div className="max-sm:pl-5 max-sm:pr-[34px] max-sm:py-4 max-sm:flex max-sm:flex-col">
      <DescriptionTourDesktop tourInfo={tourInfo} />
      
      <DescriptionTourMobile tourInfo={tourInfo} />
    </div>
  );
}
