"use client";

import Image from "next/image"
import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export default function DestinationReady() {

    const service = "tour";
    const { languageData } = useContext(LanguageContext);

    return (

        <div className='h-[180px] rounded-lg p-[36px] bg-white mb-[28px] mt-[32px] flex justify-between items-center max-md:flex-col max-md:h-[356px] max-md:items-start'>

            <div className="flex flex-col gap-[8px]">

                {/* TITLE TOUR OR (HOTEL AND TRANSPORT) */}
                <span className="m-b text-fs-24 max-md:text-fs-20">
                    {service === "tour"
                        ? languageData.recommendations.titleReadyT
                        : languageData.recommendations.titleReadyH}
                </span>




                <span className="text-fs-14 text-gry-100 m-m">{languageData.recommendations.subtitleReady}</span>

                {/* BTN SEE DETAILS */}
                <button className="m-b text-fs-12 flex items-center w-fit px-[24px] py-[10px] bg-bl-100 rounded-full gap-[8px] text-white hover:!bg-bl-110">
                    {languageData.cartTour.seeDetails}
                    <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/arrow-right-w.svg`}
                        width={16}
                        height={12}
                        alt="icon-arrow"
                    />
                </button>
            </div>

            <div className="h-[88px] w-[277] bg-gry-50 flex flex-col p-[16px] gap-[8px] rounded-lg">

                {/* NAME */}
                <span className="m-b text-fs-16">Gran Hotel Ciudad De Mexico</span>

                {/* DATE */}
                <span className="m-m text-gry-100 text-fs-14">{languageData.recommendations.reservationDate} 12/03/2024</span>
            </div>

        </div>
    )
}
