"use client";

import Image from "next/image";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";


import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-best-hotel-las-vegas.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-best-hotel-las-vegas2.jpg";

export default function FindBestHotelLasVegas() {
  // ARRAY TABLE BLOG

  const { languageData } = useContext(LanguageContext);

  return (

    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>
            {languageData.FindBestHotelLasVegas.mainTitle}
          </TitleH1>
        </div>
        <SubtitleP>
          {languageData.FindBestHotelLasVegas.subtitle1.Text1}
          <BT>{languageData.FindBestHotelLasVegas.subtitle1.BT}</BT>
          {languageData.FindBestHotelLasVegas.subtitle1.Text2}
        </SubtitleP>
        {/* IMAGE 1 */}

        <Image
          src={imgBlogGeneric1}
          width={588}
          height={372}
          alt="Vista de cierre de espectáculo dados por artistas escénicos en un evento principal."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindBestHotelLasVegas.paragraphs1.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindBestHotelLasVegas.paragraphs1.Text2}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>{languageData.FindBestHotelLasVegas.section2Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindBestHotelLasVegas.subtitle2.Text1}
        </SubtitleP>

        {/* IMAGE 2 */}

        <Image
          src={imgBlogGeneric2}
          width={588}
          height={360}
          alt="Vista de un hotel de Las Vegas que cuenta con un mini canal que imita a venecia dentro."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindBestHotelLasVegas.paragraphs2.Tex1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindBestHotelLasVegas.paragraphs2.Tex1}
          {languageData.FindBestHotelLasVegas.paragraphs2.Text2}
          <BT>{languageData.FindBestHotelLasVegas.paragraphs2.BT}</BT>.
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.FindBestHotelLasVegas.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindBestHotelLasVegas.subtitle3.Text1}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li><BT>{languageData.FindBestHotelLasVegas.list1.textBold1}</BT>{languageData.FindBestHotelLasVegas.list1.textNormal1}</li>
          <li><BT>{languageData.FindBestHotelLasVegas.list1.textBold2}</BT>{languageData.FindBestHotelLasVegas.list1.textNormal2}</li>
          <li><BT>{languageData.FindBestHotelLasVegas.list1.textBold3}</BT>{languageData.FindBestHotelLasVegas.list1.textNormal3}</li>
          <li><BT>{languageData.FindBestHotelLasVegas.list1.textBold4}</BT>{languageData.FindBestHotelLasVegas.list1.textNormal4}</li>
          <li><BT>{languageData.FindBestHotelLasVegas.list1.textBold5}</BT>{languageData.FindBestHotelLasVegas.list1.textNormal5}</li>
          <li><BT>{languageData.FindBestHotelLasVegas.list1.textBold6}</BT>{languageData.FindBestHotelLasVegas.list1.textNormal6}</li>
          <li><BT>{languageData.FindBestHotelLasVegas.list1.textBold7}</BT>{languageData.FindBestHotelLasVegas.list1.textNormal7}</li>
        </ul>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>{languageData.FindBestHotelLasVegas.section4Title}</TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindBestHotelLasVegas.subtitle4.Text1}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li><BT>{languageData.FindBestHotelLasVegas.list2.textBold1}</BT>{languageData.FindBestHotelLasVegas.list2.textNormal1}</li>
          <li><BT>{languageData.FindBestHotelLasVegas.list2.textBold2}</BT>{languageData.FindBestHotelLasVegas.list2.textNormal2}</li>
          <li><BT>{languageData.FindBestHotelLasVegas.list2.textBold3}</BT>{languageData.FindBestHotelLasVegas.list2.textNormal3}</li>
          <li><BT>{languageData.FindBestHotelLasVegas.list2.textBold4}</BT>{languageData.FindBestHotelLasVegas.list2.textNormal4}</li>
        </ul>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.FindBestHotelLasVegas.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.FindBestHotelLasVegas.section5Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindBestHotelLasVegas.subtitle5.Text1}
          <BT>{languageData.FindBestHotelLasVegas.subtitle5.BT}</BT>
          {languageData.FindBestHotelLasVegas.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindBestHotelLasVegas.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindBestHotelLasVegas.paragraphs5.Text2}
        </SubtitleP>
      </div>
    </>
  );
};