import React, { useContext } from "react";

import { Others } from "../../config/Others/imagesBanners";
import LanguageContext from "../../language/LanguageContext";

export function BannerAboutUs() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div data-aos="fade-left" className="content-image-our-history">
      <img className="object-fit-cover"
        src={Others.bannerAbout.image}
        alt={Others.bannerAbout.alt}
        width="100%"
        height="100%"
      />
      <h1 className="text-image-new-about">
        {languageData.titleBanners[Others.bannerAbout.title]}
      </h1>
    </div>
  );
}

export function BannerFaqsTop() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="content-image-fqas">
      <img
        src={Others.bannerFqs.image}
        alt={Others.bannerFqs.alt}
        width="100%"
      />
      <h1 className="text-image-new-faqs">
        {languageData.titleBanners[Others.bannerFqs.title]}
      </h1>
    </div>
  );
}

export function BannerFaqsDown() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="content-image-help-faqs">
      <img
        src={Others.bannerHelp.image}
        alt={Others.bannerHelp.image}
        width="100%"
      />
      <div className="position-text-new-titles-fqas">
        <h2 className="text-image-new-h2-fqs">
          {languageData.titleBanners[Others.bannerHelp.title]}
        </h2>

        <h4 className="text-image-nex-h4-fqs">
          {languageData.titleBanners[Others.bannerHelp.paragraph]}{" "}
          <span className="span-new-text">
            {languageData.titleBanners.titleEmail}
          </span>{" "}
          {languageData.titleBanners[Others.bannerHelp.text]}{" "}
          <span className="span-new-text">
            {languageData.titleBanners.titleNumber}
          </span>
        </h4>
        
      </div>
    </div>
  );
}
