import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export function RoomsInformation({ hotelInfo }) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="mt-[24px]">
      <p className="m-0 text-or-100 text-fs-10 m-s-b mb-4">
        {languageData.itinerary.roomsYouReserved}
      </p>

      {/* CONTAINER ROOMS */}
      <div className="bg-gry-50 rounded-lg p-4">
        {hotelInfo.rooms &&
          hotelInfo.rooms.map((roomInfo, index) => (
            <div
              key={index}
              className={`${
                hotelInfo.rooms.length - 1 !== index &&
                "border-b border-gry-70 pb-[19px] mb-[19px]"
              } flex flex-col gap-y-16px`}
            >
              {/* ROOMS NAME */}
              <h3 className="m-0 text-black m-b text-fs-12">
                x{roomInfo.quantity} {roomInfo.name}
              </h3>

              <div className="flex gap-x-8 gap-y-[8px] flex-wrap">
                {roomInfo.occupancies &&
                  roomInfo.occupancies.map((roomBed, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-y-2 items-start"
                    >
                      <div className="flex gap-x-1 items-center">
                        {/* ROOM NUMBER */}
                        <p className="m-o text-fs-8 m-s-b text-gry-100 flex gap-x-[3px]">
                          {languageData.itinerary.detailsPayment.room}{" "}
                          {index + 1}
                        </p>

                        {/* RESERVATION NUMBER */}
                        <p className="sm:hidden flex items-center gap-x-1 py-1 px-2 rounded-sm bg-grn-50 text-center text-fs-8 m-b text-grn-100 m-0">
                          {languageData.confirmation.reservationNo}
                          <span>#{roomBed.reference}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-x-4">
                        {/* TOTAL ADULTS AND CHILDREN */}
                        <div className="flex items-center gap-[4px]">
                          <img
                            className="w-[14px] h-[14px]"
                            src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                            width={14}
                            height={14}
                            alt="icon-adult-b"
                          />

                          <span className="flex gap-x-[4px] text-fs-10 text-gry-100 m-s-b">
                            {roomBed.adults} {languageData.modalHotel.adults}{" "}
                            {roomBed.children}{" "}
                            {languageData.modalHotel.children}
                          </span>
                        </div>

                        {/* ROOMS LIST DETAILS */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                          {roomBed.beds &&
                            roomBed.beds.map((bed, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-x-1"
                              >
                                <img
                                  className="w-[9px] h-[9px]"
                                  src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                                  alt="RoomIcon"
                                  width={9}
                                  height={9}
                                />
                                <span className="text-grey-card-hotel-i">
                                  {bed.number} {bed.type}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* POLICY CANCELATION */}
                      {roomBed.cancelPolicies &&
                        roomBed.cancelPolicies.cancellationCode && (
                          <div className="flex items-center gap-x-2">
                            <img
                              src={`${process.env.NEXT_PUBLIC_URL}icons/${
                                roomBed.cancelPolicies.cancellationCode ===
                                "NOR"
                                  ? "done/done-g.svg"
                                  : "error/error-r.svg"
                              }`}
                              width={10}
                              height={10}
                              alt={`${
                                roomBed.cancelPolicies.cancellationCode ===
                                "NOR"
                                  ? "done icon confirmation"
                                  : "error icon confirmation"
                              }`}
                              className="w-[10px] h-[10px]"
                            />
                            <p
                              className={`m-0 text-fs-10 m-s-b ${
                                roomBed.cancelPolicies.cancellationCode ===
                                "NOR"
                                  ? "text-grn-100"
                                  : "text-gry-100"
                              }`}
                            >
                              {roomBed.cancelPolicies.cancellationCode === "NOR"
                                ? languageData.itinerary.refundable
                                : languageData.itinerary.nonRefundable}
                            </p>
                          </div>
                        )}

                      {roomBed.rateComment && (
                        <div className="text-fs-10 m-m text-gry-100 mt-4">
                          <b>Comentarios:</b>
                          {roomBed.rateComment}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
