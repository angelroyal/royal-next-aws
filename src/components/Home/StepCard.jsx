import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export function StepCard({ activeStep = 1, number, stepType }) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div
      className={`${
        activeStep === number ? "bg-or-100 " : "bg-white"
      } rounded-lg p-5 shadow-lg h-full`}
    >
      <div className="w-full pb-4">
        <div
          className={` ${
            activeStep === number ? "bg-white" : "bg-or-100"
          } relative   w-[28px] h-[28px] rounded-full `}
        >
          <p
            className={`${
              activeStep === number ? "text-or-100" : "text-white "
            } absolute left-0 top-0 bottom-0 right-0 m-auto m-b text-fs-20 w-max`}
          >
            {number}
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div
          className={`${activeStep === number ? "text-white" : "text-black"}`}
        >
          <h4 className={`m-s-b text-fs-14`}>
            {languageData.homeBanners.bannerSteps.stepsNumber[stepType].title}
          </h4>

          <p className={`m-m text-fs-12 mt-2`}>
            {
              languageData.homeBanners.bannerSteps.stepsNumber[stepType]
                .description
            }
          </p>
        </div>
      </div>
    </div>
  );
}
