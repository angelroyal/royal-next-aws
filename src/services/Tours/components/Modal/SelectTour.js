import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useContext, useEffect } from "react";

import SelectOptionModalTour from "./SelectOptionModalTour";
import LanguageContext from "../../../language/LanguageContext";
import { useModalTourContext } from "../../Context/ModalTourContext";

import "../../../assets/styles/web/GalleryTour.css";
// import { ReactComponent as IconCalendar } from "../../../assets/icons/utils/others/calendar-bl.svg";

export default function SelectTour(props) {
  const { combinedRates } = props;
  const { languageData } = useContext(LanguageContext);
  const {
    dataModalTour,
    setDataModalTour,
    active,
    setActive,
    setHourSelected,
  } = useModalTourContext();

  const [selectedDate, setSelectedDate] = useState(null);

  const [actualItemTime, setActualItemTime] = useState(null);
  const [actualTime, setActualTime] = useState(null);

  useState(() => {
    if (combinedRates && combinedRates.length > 0) {
      const actualDate = { ...dataModalTour };
      actualDate.date = combinedRates[0].date;
      setSelectedDate(actualDate);

      setActualTime(combinedRates[active].times[0][0].time);
    }
  }, [combinedRates]);

  useEffect(() => {
    if (selectedDate) {
      setDataModalTour(selectedDate);
      setActualItemTime(0);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (actualTime) {
      setHourSelected(actualTime);
    }
  }, [actualTime]);

  const selectedTime = (key, timeSelected) => {
    setActualItemTime(key);
    setHourSelected(timeSelected);
    // console.log(timeSelected);
  };

  const selectDate = (item, dateSelected) => {
    setActive(item);
    const actualValue = { ...dataModalTour };
    actualValue.date = dateSelected.date;
    setDataModalTour(actualValue);
  };

  return (
    combinedRates.length > 0 && (
      <div>
        {/* <div className="d-flex width100 justify-content-end cont-more-date">
          <IconCalendar />
          {languageData.modalTour.seeMoreDates}
        </div> */}

        <div className="calendar-items-tour position-relative">
          <Swiper
            // slidesPerView={"auto"}
            spaceBetween={18}
            // loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2.7,
              },
              600: { slidesPerView: 4 },

              700: {
                slidesPerView: 4.5,
              },

              850: {
                slidesPerView: 5.5,
              },

              1200: {
                slidesPerView: 6,
              },

              1500: {
                slidesPerView: 7,
              },
            }}
            id="dates-tour-modal"
            navigation={true}
          >
            {combinedRates.map((value, key) => (
              <SwiperSlide key={key} id="date-tour-modal">
                <div
                  onClick={() => selectDate(key, value)}
                  className={`${
                    active === key && "active-date-tour"
                  } calendar-contain-tour`}
                >
                  <div
                    className={`${
                      active === key && "active-day-title"
                    } day-title`}
                  >
                    {languageData.dayOfWeekShort[value.dayName]}
                  </div>

                  <div className="day-number-title">{value.day}</div>

                  <div className="month-title">
                    {languageData.monthOfYEar[value.month]}
                  </div>
                  <hr
                    className={`${
                      active === key && "active-line"
                    } line-divided-calendar-tour-m`}
                  />

                  <div className="from-title">{languageData.cartTour.from}</div>
                  <div
                    className={`${
                      active === key && "active-price-calendar-tour"
                    } price-calendar-tour`}
                  >
                    ${" "}
                    {Math.ceil(value.priceFrom).toLocaleString("es-MX", {
                      currency: "MXN",
                    })}
                  </div>

                  <div className="text-mxn-bold-tour">MXN</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          {combinedRates[active].times.map((timeValue) =>
            timeValue.filter((time) => time.time)
          ) && (
            <>
              <div>
                <b className="b-time">{languageData.modalTour.schedules}</b>
              </div>

              {combinedRates[active].times.map((value, key) => (
                <div className="d-flex selected-hour-modal-tour" key={key}>
                  {value.map((time, keyTime) => (
                    <button
                      // onClick={() => setActualTime(keyTime)}
                      onClick={() => selectedTime(( (key * 6) + keyTime ) , time.time)}
                      key={keyTime}
                      className={`${
                        actualItemTime === ( (key * 6) + keyTime )  && "active-btn-time"
                      } btn-time`}
                    >
                      {time.time + " " + time.meridiano}
                    </button>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>

        <div>
          <SelectOptionModalTour combinedRates={combinedRates} />
        </div>
      </div>
    )
  );
}
