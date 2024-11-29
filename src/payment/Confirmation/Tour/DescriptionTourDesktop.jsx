import { ImageTour } from "./ImageTour";
import { RightInformation } from "./RightInformation";
import { CenterInformation } from "./CenterInformation";

export function DescriptionTourDesktop({ tourInfo }) {
  return (
    <div className="flex gap-x-8">
      {/* IMAGE TOUR */}
      <ImageTour tourInfo={tourInfo} />

      <div className="flex flex-col gap-y-4 justify-center w-full truncate max-md:gap-y-0">
        {/* TITLE */}
        <h2 className="m-b text-fs-16 text-black">{tourInfo.name}</h2>

        <div className="flex gap-x-[24px] justify-between">
          <CenterInformation tourInfo={tourInfo}/>

          <RightInformation tourInfo={tourInfo}/>
          
        </div>
      </div>
    </div>
  );
}
