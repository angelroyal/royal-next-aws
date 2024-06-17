import { useContext } from "react";
import { TotalStars } from "../General/Stars";
import LanguageContext from "@/language/LanguageContext";

export default function BannerCardHome({ hotel }) {
  const { language, languageData } = useContext(LanguageContext);

  return (
    <div
      className="absolute flex justify-between w-full bottom-0"
    >
      <div className="text-fs-20 m-s-b text-white pl-[24px] w-[250px] items-center flex">
        {hotel[language].destination}
      </div>

      <div className="bg-white rounded-tl-lg px-[16px] py-[8px] w-[189px]">
        <h4 className="text-fs-12 m-m">{hotel.name}</h4>
        <TotalStars stars={5} width={"w-[11]"} height={"h-[11]"} />

        <span className="flex m-b text-fs-10 gap-2 items-center">
          {languageData.cartTour.from}{" "}
          <span className="text-fs-16">
            {" "}
            MXN{" "}
            {Math.floor(hotel.price)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .<sup>{(hotel.price % 1).toFixed(2).slice(2)}</sup>
          </span>
        </span>
      </div>
    </div>
  );
}
