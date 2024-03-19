import React, { useContext, useState, useEffect } from "react";

import {
  BannerFaqsTop,
  BannerFaqsDown,
} from "../../components/bannerJsx/bannerAboutUs";

import { FaqsMobile, FaqsWeb } from "./Faqs";
import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";
import { SkeletonFaqs } from "../../utils/skeleton/SkeletonFaqs";
// import MetaFrequentQuestions from "../../components/Meta/MetaFrequentQuestions";
// PENDING

export default function FrequentQuestions() {
  const { languageData } = useContext(LanguageContext);

  const isMobile = useIsMobile()
  
  const [showSkeletonFaqs, setShowSkeletonFaqs] = useState(true);
  const [showFaqs, setShowFaqs] = useState(false);

  const [openSection, setOpenSection] = useState("frequentlyQuestions");
  const [activeKey, setActiveKey] = useState("0");

  useEffect(() => {
    setActiveKey("0");
  }, [openSection]);

  const handleAccordionClick = (sectionKey, id) => {
    if (activeKey === id) {
      //CLICK ON THE OPEN QUESTION, CLOSE IT
      setActiveKey(null);
    } else {
      setActiveKey(id);
    }
  };

  useEffect(() => {
      setTimeout(()=>{
        setShowFaqs(true)
        setShowSkeletonFaqs(false)
      },2000);
    })
    
  return (
    <>
      {showSkeletonFaqs && <SkeletonFaqs />}
      {showFaqs && (
        <>
          {/* <MetaFrequentQuestions /> */}
          <div className="container">
            <BannerFaqsTop />
            <h1 className="title-popular-faqs">
              {languageData.faqs.titleFaqs}
            </h1>
            <div className="text-subtitle-faqs">
              {languageData.faqs.textFaqs}
            </div>

            {
              isMobile ? <FaqsMobile setOpenSection={setOpenSection} openSection={openSection} activeKey={activeKey} handleAccordionClick={handleAccordionClick}/> : <FaqsWeb setOpenSection={setOpenSection} openSection={openSection} activeKey={activeKey} handleAccordionClick={handleAccordionClick}/>
            }

            <BannerFaqsDown />
          </div>
        </>
      )}
    </>
  );
}


