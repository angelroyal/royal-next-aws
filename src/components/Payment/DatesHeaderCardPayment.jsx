import LanguageContext from "@/language/LanguageContext";
import moment from "moment";
import { useContext } from "react";

export function DatesHeaderCardPayment({ dataCards }) {
  const { languageData } = useContext(LanguageContext);

  switch (dataCards.type) {
    case "hotel":
      return <DatesHotel languageData={languageData} dataCards={dataCards} />;
    case "activity":
      return (
        <DatesActivity languageData={languageData} dataCards={dataCards} />
      );
    case "transport":
    case "transportation":
      return (
        <DatesTransport languageData={languageData} dataCards={dataCards} />
      );
  }
}

function DatesHotel({ languageData, dataCards }) {
  const dateWeek = moment(dataCards.date).format("dddd");
  const dateFormatCheckIn = moment(dataCards?.checkIn).format("DD/MM/YY");
  const dateFormatCheckOut = moment(dataCards?.checkOut).format("DD/MM/YY");

  return (
    <div className="max-md:flex-col flex gap-x-4">
      <div className="text-fs-16 m-b">
        <span className="text-or-100">{languageData.dayOfWeek[dateWeek]}</span>{" "}
        <span className="text-gry-70 m-m">{dateFormatCheckIn}</span>{" "}
        <span className="text-gry-70 m-m">|</span>{" "}
        <span className="text-gry-70 m-m">14:00pm</span>
      </div>

      <ul className="tex-fs-16 m-b list-disc list-inside list-gry-70">
        <li>
          <span className="text-black">Check out</span>{" "}
          <span className="text-gry-70 m-m">{dateFormatCheckOut} </span>
          <span className="text-gry-70 m-m">- </span>
          <span className="text-gry-70 m-m">02:00pm</span>
        </li>
      </ul>
    </div>
  );
}

function DatesActivity({ languageData, dataCards }) {
  const dateWeek = moment(dataCards.date).format("dddd");
  const dateFormat = moment(dataCards.date).format("DD/MM/YY");

  return (
    <div className="flex gap-x-[5px] m-b text-fs-16">
      <span className="text-or-100 ">{languageData.dayOfWeek[dateWeek]}</span>

      <span className="text-gry-70 m-m">{dateFormat}</span>
      <span className="text-gry-70 m-m">|</span>
      <span className="text-gry-70 m-m">02:00pm</span>
    </div>
  );
}
function DatesTransport({ languageData, dataCards }) {
  const dateWeek = moment(dataCards.date).format("dddd");
  const dateFormat = moment(dataCards.date).format("DD/MM/YYYY");
  const dateHours = moment(`${dataCards.date}T${dataCards.time}`)
    .format("h:mma")
    .toLowerCase();

  return (
    <span className="flex gap-x-1">
      <h3 className="m-b text-fs-16 text-or-100 m-0">
        {languageData.dayOfWeek[dateWeek]}
      </h3>{" "}
      <h3 className="m-m text-fs-16 text-gry-70 m-0">
        {dateFormat} | {dateHours}
      </h3>
    </span>
  );
}
