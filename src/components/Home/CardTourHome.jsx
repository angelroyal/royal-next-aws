
import Image from "next/image"
import { useContext } from "react"
import { TotalStars } from "../General/Stars"
import LanguageContext from "@/language/LanguageContext"

export default function CardTourHome() {

    const { languageData } = useContext(LanguageContext);

    return (

        <div className="shadow-3xl rounded-lg">

            <div className="w-full h-[216px]">
                <img
                    className="w-full h-full rounded-t-lg object-cover select-none"
                    src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers.jpg`}
                    alt="card"
                />
            </div>

            <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col h-[109px]">

                <div className="m-s-b pt-1 text-fs-14 text-start truncate mb-[4px]">
                    Excursion a chichén itzá
                    {""}
                </div>

                <div className="mb-[4px]">
                    <TotalStars
                        name="read-only"
                        stars={5}
                        width={"11px"}
                        height={"11px"}
                    />
                </div>

                <div className="flex w-full">
                    <div className="flex gap-1 w-1/2">
                        <Image
                            className="w-[11px] h-[14px]"
                            src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                            alt="location icon"
                            width={11}
                            height={14}
                        />
                        <span className="text-bl-100 m-s-b text-fs-12 truncate">Yucatán</span>
                    </div>

                    <div className="flex justify-between w-1/2 items-center">
                        <div className="flex flex-col">
                            <span className="m-m text-gry-100 text-fs-12 text-start">
                                {languageData.cartTour.from}
                            </span>
                            <span className="m-b text-or-100 text-fs-12">
                                MXN <span className="m-b text-fs-16">$5,000</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
