import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export function PolicyCancelationToulTip({ cancelPolicy }) {
  const { languageData } = useContext(LanguageContext);
  const url = process.env.REACT_APP_URL_SITE + "/policy";

  return (
    <>
      <div
        className="translate-x-[-50%] relative left-0 top-0 mx-auto w-[30px] h-[30px] !border-2 border-bl-100 bg-[#BEE0EE]"
        style={{ transform: "rotate(45deg) skew(15deg, 15deg)" }}
      />
      <div className="relative !border-2 border-bl-100 rounded-lg p-[20px] bg-[#BEE0EE] text-fs-16 text-black m-s-b top-[-26px]">
        {languageData.roomsCancellations.percentage} {cancelPolicy.hours}{" "}
        {languageData.roomsCancellations.from}{" "}
        {`${cancelPolicy.penalty}${
          cancelPolicy.type === "percent" ? "% " : ""
        }`}
        {languageData.roomsCancellations.total}{" "}
        <a
          className="text-bl-100 no-underline"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {languageData.roomsCancellations.terms}{" "}
        </a>
      </div>
    </>
  );
}
