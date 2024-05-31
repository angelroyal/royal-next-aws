import "swiper/css";
import "swiper/css/pagination";
import "../../../../assets/styles/general/Swiper.css";

import Link from "next/link";
import Image from "next/image";

import { Pagination } from "swiper/modules";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import { TourDialogInfo } from "./TourDialogInfo";
import LanguageContext from "@/language/LanguageContext";

import IconLocationBlue from "../../../../assets/icons/utils/others/location-blue.svg";
import ImageNotFount from "../../../../assets/images/banners/es/no-image-available.png";
import "../../../../assets/styles/general/Swiper.css";
import { TotalStars } from "@/components/General/Stars";

export default function TourCard(props) {
  const maxLength = 290;

  const { tour } = props;

  const description = tour.description;

  const { languageData, language } = useContext(LanguageContext);

  const buildUrlWithParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const destination = searchParams.get("codeNameTour");
    const requestBody = {
      code: searchParams.get("code"),
      type: searchParams.get("type"),
      dateStart: searchParams.get("dateStart"),
      adults: searchParams.get("adults"),
      children: searchParams.get("children"),
    };

    const query = new URLSearchParams(requestBody).toString();

    const baseUrl = `/${language}/mx/${destination}-mexico/tours/${tour.codeName}?${query}`;
    return `${baseUrl}`;
  };

  return (
    <>
      <div className="flex bg-white rounded-lg border border-[#ebebeb] shadow-3xl gap-[5px] mb-[1rem] w-full h-[235px]">
        <div className="flex w-full">
          <div className="!h-full m-0 p-0 relative w-[30%] rounded-l-lg">
            {/* <img className='image-card-tour-test' src='https://sandboxmexico.com/assets/banners/desktop/banner-about-us.webp' alt='tour-test-banner-abaut-us' /> */}
            <Swiper
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="rounded-l-lg !h-full"
              id="images-tour-listing"
            >
              {tour.images && tour.images.length > 0 ? (
                tour.images.slice(0, 5).map((tourImage, index) => (
                  <SwiperSlide
                    key={index}
                    id={`dotsSwiperHotel${index}`}
                    style={{ width: 280, height: "100%" }}
                  >
                    <img
                      className="object-cover !h-full"
                      alt="tours list"
                      src={tourImage}
                      width={"100%"}
                      height={"100%"}
                      effect="blur"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <img
                  src={ImageNotFount}
                  alt="notFount"
                  className="object-cover rounded-l-lg"
                ></img>
              )}
            </Swiper>
          </div>

          <div className="px-[20px] py-[20px]">
            <h2 className="m-b text-fs-18 leading-[19.5px] truncate w-[90%] mb-[6px]">
              {tour.name}
            </h2>

            {/* <Rating
              className="stars-card-tour-font-size"
              name="size-small"
              style={{ padding: "5px 0px" }}
              defaultValue={0}
              value={tour.starRating}
              size="small"
              readOnly
            /> */}

            <TotalStars
              stars={tour.starRating}
              width={"w-[14px]"}
              height={"h-[14px]"}
            />

            <div className="flex w-full">
              <div className="flex w-[60%] flex-col gap-[9px] pt-[10px] pr-[35px] justify-between">
                {tour.address && (
                  <div className="flex gap-1">
                    <Image
                      src={IconLocationBlue}
                      alt="IconLocationBlue"
                      height={14}
                      width={19}
                    />
                    <span className="text-bl-100 m-s-b text-fs-12 leading-[16px]">
                      {tour.address}
                    </span>
                  </div>
                )}

                <span className="text-gry-100 m-m text-fs-10">
                  {description && description.length > maxLength ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: description.substring(0, maxLength) + "...",
                      }}
                    ></div>
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                  )}
                </span>

                {/* <div className="cont-icons-water-and-baggage">
                  <IconWater className="icons-card-tour-w" />
                  <IconBaggage className="icons-card-tour-w" />
                </div> */}

                <div className="flex items-center rounded border border-[#ebebeb] h-[42px] p-[.5rem] w-max">
                  <span className="text-gry-100 m-s-b text-fs-10 leading-[28px]">
                    {languageData.cartTour.duration}{" "}
                    {tour.duration ? tour.duration : "Sin información"}
                  </span>
                </div>
              </div>

              <div className="h-[140px] border border-l-[#ebebeb]"></div>

              <div className="flex items-center flex-col gap-[5px] p-[20px] w-[40%]">
                <div className="flex flex-col items-center">
                  <h2 className="flex items-center text-black m-b text-fs-10 gap-[2px] justify-center leading-[14px]">
                    {/* TEXT FROM /LP15-02-24 */}
                    {languageData.cartTour.from}
                    {tour.originalPrice ? (
                      <span className="text-fs-15 text-nowrap leading-[12px]">
                        MXN $
                        {Math.floor(tour.originalPrice)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .
                        <sup>
                          {(tour.originalPrice % 1).toFixed(2).slice(2)}
                        </sup>
                      </span>
                    ) : (
                      <span className="text-fs-15 text-nowrap leading-[12px]">
                        MXN $
                        {Math.floor(tour.price)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .<sup>{(tour.price % 1).toFixed(2).slice(2)}</sup>
                      </span>
                    )}
                  </h2>

                  {tour.discount > 0 && (
                    <div className="flex items-center gap-[6px] justify-center">
                      <del className="text-gry-100 m-b text-fs-10 leading-[12px]">
                        MXN $
                        {Math.floor(tour.price)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .<sup>{(tour.price % 1).toFixed(2).slice(2)}</sup>
                      </del>
                      <div className="bg-red-100 rounded-r text-white m-b text-fs-10 py-[2px] px-[8px]">
                        {tour.discount} %
                      </div>
                    </div>
                  )}
                  {/* TEXT TAXES LP-15-02-24 */}
                  <div className="flex m-b justify-center bg-grn-10 rounded text-grn-100 text-fs-8 ml-[13px] mt-[10px] py-[4px] px-[8px] text-justify w-max">
                    {languageData.cartTour.taxesText}
                  </div>
                </div>

                {/* TEXT SEE-DETAILS LP-15-02-24 */}
                <Link
                  target="_blank"
                  className="flex m-b justify-center items-center bg-yw-100 border-0 rounded-[100px] text-black text-fs-12 mt-[12px] p-[10px] w-full"
                  // onClick={() => openDialog(tour)}
                  href={buildUrlWithParams()}
                  // href={`/tour/${tour.name}`}
                >
                  {languageData.cartTour.seeDetails}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
