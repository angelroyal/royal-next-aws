import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export function TitleItinerarySteepCard() {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="flex flex-wrap gap-x-1 m-b text-fs-28 justify-start lg:justify-start md:justify-center lg:w-[73%] xl:w-[63%] 2xl:w-[50%]">
      <p className="m-0 text-wrap">
        {languageData.homeBanners.bannerSteps.title.design}
      </p>
      <p className="m-0 text-bl-100 text-wrap">
        {languageData.homeBanners.bannerSteps.title.perfect}
      </p>
      <p className="m-0 text-wrap">
        {languageData.homeBanners.bannerSteps.title.trip}
      </p>
    </div>
  );
}
