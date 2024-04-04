import React from "react";

import GalleryTour from "./GalleryTour";
import { TotalStars } from "@/components/General/Stars";

export default function DetailTour() {
  return (
    <div >
      <div className=" bg-gry-50 text-gry-100 p-2 w-fit rounded-full mt-4 text-fs-10 m-b">
        Parque acuatico
      </div>

      <div className="flex justify-between">
        {/* NAME HOTEL */}
        <div>
          <h1 className="m-b text-fs-28 pt-2">Xplor Zip-lines</h1>
          <TotalStars stars={4} className="text-fs-8 gap-[1px]" />

          <div className="mt-3 flex mb-[6]">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
              alt="location"
              width={14}
              height={14}
            />
            <div className="m-m text-fs-13 ml-1 text-gry-70">Cancun</div>
          </div>
        </div>

        {/* PRICING */}
        <div className="flex flex-col items-center">
          <div className="m-b text-[#1a202c]">
            <sup className="text-fs-12">desde</sup>{" "}
            <span className="text-fs-24">MXN</span>{" "}
            <span className="text-fs-24">$10,000</span>
          </div>

          <div className="text-fs-12 text-center m-b">
            <span className="text-gry-100 pr-2">MXN $10,000</span>
            <span className="text-red-100">-10%</span>
          </div>

          <div className=" bg-grn-50 text-grn-100 p-1 w-fit rounded-md mt-4 text-fs-8 m-b">
            Impuestos incluidos
          </div>
        </div>
      </div>

      <GalleryTour />
    </div>
  );
}
