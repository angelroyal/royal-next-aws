import React, { useContext, useEffect, useRef, useState } from "react";

// import SearchBox from "../../hooks/SearchBox";
import { hotel } from "../../config/Others/imagesBanners";
import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";
import Image from "next/image";

export function BannerHomeTop() {
  const { languageData } = useContext(LanguageContext);
  const isMobile = useIsMobile();

  const [position, setPosition] = useState(0);
  useEffect(() => {
    const positionDescription = Math.floor(
      Math.random() * hotel.bannerHome.data.length
    );
    setPosition(positionDescription);
  }, []);

  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);


  return (
    <div className="container content-image-search">
      <Image
        src={isMobile ? hotel.bannerHome.imageM : hotel.bannerHome.imageW}
        alt={hotel.bannerHome.alt}
        className="banner-home-hotel"
        width="100%"
        height="100%"
        effect="blur"
      />

      {/* <video
        width="100%"
        height="76%"
        loop={true}
        className="object-fit-cover"
        muted={true}
        ref={videoRef}
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
      >
        <source
           src="https://sandboxmexico.com/assets/banners/tours/Feb2024/video-hotel-home.mp4"
          alt="tour-video-home/mp4"
        />
      </video> */}

      <h1 className="text-image-new-h1">
        {
          languageData.titleBanners.principalBannerH[
            hotel.bannerHome.data[position].title
          ]
        }
      </h1>

      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <div className="Element-tabHome">
          {/* <SearchBox /> */}
        </div>
      </div>
    </div>
  );
}

export function BannerHomeDown() {
  const { languageData } = useContext(LanguageContext);
  const isMobile = useIsMobile();

  const [position, setPosition] = useState(0);
  useEffect(() => {
    const positionDescription = Math.floor(
      Math.random() * hotel.bannerPrincipal.data.length
    );
    setPosition(positionDescription);
  }, []);

  return (
    <article
      // data-aos="fade-left"
      className="container-principal-home container"
    >
      <picture className="picture-ban-home">
        <Image
          src={
            isMobile
              ? hotel.bannerPrincipal.imageM
              : hotel.bannerPrincipal.imageW
          }
          alt={hotel.bannerPrincipal.alt}
          width="100%"
          height="100%"
        />

        <div className="position-text-new-titles">
          <h2 className="text-image-new-h2">
            {
              languageData.titleBanners.bannerHotel[
                hotel.bannerPrincipal.data[position].title
              ]
            }
            {/* {languageData.titleBanners[hotel.bannerPrincipal.title]} */}
          </h2>

          <div className="text-image-nex-h4">
            {
              languageData.titleBanners.bannerHotel[
                hotel.bannerPrincipal.data[position].description
              ]
            }
            {/* {languageData.titleBanners[hotel.bannerPrincipal.paragraph]} */}
          </div>
        </div>
      </picture>
    </article>
  );
}
