import Image from "next/image";
import { useContext } from "react";
import { Disclosure } from "@headlessui/react";

import LanguageContext from "@/language/LanguageContext";

export function Accordion({ index, accordionOpen, roomInfo }) {
  const { languageData } = useContext(LanguageContext);

  return (
    <Disclosure defaultOpen={index === accordionOpen}>
      <>
        <Disclosure.Button className="flex justify-between items-center m-b w-full">
          <div className="flex items-center m-b text-fs-12 text-black">
            x{roomInfo.quantity} {roomInfo.name}
          </div>

          <Image
            width={14}
            height={14}
            alt="arrow-icons"
            src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/${
              accordionOpen === index ? "up-100.svg" : "down-100.svg"
            }`}
          />
        </Disclosure.Button>

        <div
          className={` transition-opacity ease-in duration-700 flex flex-col gap-y-[12px] mt-[7px] ${
            accordionOpen === index ? "opacity-100" : "opacity-0"
          } `}
        >
          {roomInfo.occupancies &&
            roomInfo.occupancies.map((roomBed, item) => (
              <div
                key={item}
                className={`${accordionOpen === index ? "block" : "hidden"}`}
              >
                <div className="mb-2.5 text-fs-11 text-gry-100 m-s-b text-nowrap">
                  {/* TEXT ROOM /LP 15-02-24 */}
                  <span>
                    {languageData.itinerary.detailsPayment.room} {item + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                  <div className="flex gap-x-2 items-center">
                    <Image
                      className="w-[14px] h-[15px]"
                      src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                      alt="icon-adult-b"
                      width={14}
                      height={15}
                    />

                    <span className="text-fs-10 text-gry-100 m-s-b text-nowrap">
                      {/* TEXT ADULTS AND CHILDREN /LP 15-02-24 */}
                      {roomBed.adults} {languageData.modalHotel.adults}{" "}
                      {roomBed.children} {languageData.modalHotel.children}
                    </span>
                  </div>

                  {/* MAP ROOM BEDS */}
                  {roomBed?.beds && typeof roomBed.beds !== "string" ? (
                    roomBed.beds.map((bed, item) => (
                      <div key={item} className="flex gap-2 items-center">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                          alt="icon Room"
                          className="w-[14px] h-[15px]"
                          width={14}
                          height={15}
                        />{" "}
                        <span className="text-fs-10 text-gry-100 m-s-b text-nowrap">
                          {bed.number} {bed.type}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center gap-x-3">
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                        className="w-[14px] h-[14px]"
                        alt="room"
                      />
                      <span className="m-s-b text-fs-12 text-gry-100">
                        {languageData.detailHotel[roomBed.beds]}
                      </span>
                    </div>
                  )}
                  {/* BEDS */}
                  {/* {roomBed?.beds &&
                    roomBed.beds.map((bed, item) => (
                      <div key={item} className="flex gap-2 items-center">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                          alt="icon Room"
                          className="w-[14px] h-[15px]"
                          width={14}
                          height={15}
                        />{" "}
                        <span className="text-fs-10 text-gry-100 m-s-b text-nowrap">
                          {bed.number} {bed.type}
                        </span>
                      </div>
                    ))} */}

                  {/* NON REFUNDABLE */}

                  <div className="flex items-center">
                    {roomBed.refundable === false && (
                      <Image
                        className="w-[15px] mr-[5px]"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/error/error-r.svg`}
                        alt="icon error"
                        width={12}
                        height={10}
                      />
                    )}
                    {roomBed.refundable === true && (
                      <Image
                        className="w-[15px] mr-[5px]"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/done/done-g.svg`}
                        alt="icon done"
                        width={12}
                        height={10}
                      />
                    )}

                    <span className="text-fs-10 text-gry-100 m-s-b text-nowrap">
                      {!roomBed.refundable &&
                        languageData.itinerary.nonRefundable}
                      {roomBed.refundable && languageData.itinerary.refundable}
                    </span>
                  </div>

                  {/* EATING PLAN */}
                  {roomBed.eatingPlan && (
                    <div className="flex items-center">
                      <Image
                        className="w-[15px] mr-[5px]"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/done/done-g.svg`}
                        alt="icon done"
                        width={12}
                        height={10}
                      />
                      <span className="text-fs-10 text-nowrap m-b text-grn-100">
                        {roomBed.eatingPlan}
                      </span>
                    </div>
                  )}
                </div>

                {roomBed.rateComment && (
                  <div className="text-fs-10 m-m text-gry-100 mt-4">
                    <b>Comentarios:</b>
                    {roomBed.rateComment}
                  </div>
                )}
              </div>
            ))}
        </div>
      </>
    </Disclosure>
  );
}
