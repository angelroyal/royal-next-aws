import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export function Duration({ tourInfo }) {
  const { languageData } = useContext(LanguageContext);
  return (
    tourInfo.duration && (
      <div className="flex flex-col items-center justify-center max-lg:items-start">
        <span className="m-s-b text-fs-10 text-gry-100 text-nowrap">
          {languageData.confirmation.cardTour.duration}
        </span>

        <span className="text-black text-fs-14 m-b">{tourInfo.duration}</span>
      </div>
    )
  );
}
