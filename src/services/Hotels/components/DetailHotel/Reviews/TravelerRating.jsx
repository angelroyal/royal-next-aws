import Filters from "./Filters/Filtes";
import { TravelerRatingStart } from "./Filters/TravelerRatingStart";

export function TravelerRating({ modal }) {
  return (
    <div
      className={`flex gap-x-14 ${
        !modal
          ? "lg:flex-row lg:w-[883px] lg:h-max max-lg:gap-y-[36px] flex-col"
          : "gap-y-[36px] flex-col"
      }`}
    >
      <TravelerRatingStart />

      <Filters modal={modal} />
    </div>
  );
}
