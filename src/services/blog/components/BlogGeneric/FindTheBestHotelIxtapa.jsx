"use client";
import Image from "next/image";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-best-hotel-ixtapa.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-best-hotel-ixtapa2.jpg";

export default function FindBestHotelIxtapa() {

  const { languageData } = useContext(LanguageContext);

    return (
        
        <>
            <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.FindTheBestHotelIxtapa.mainTitle}
        </TitleH1>
      </div>
      <SubtitleP>
        {languageData.FindTheBestHotelIxtapa.subtitle1.Text1}
      <BT>{languageData.FindTheBestHotelIxtapa.subtitle1.BT}</BT>
      {languageData.FindTheBestHotelIxtapa.subtitle1.Text2} 
      </SubtitleP>
      {/* IMAGE 1 */}

      <Image
        src={imgBlogGeneric1}
        width={584}
        height={389}
        alt="Vista de hotel frente al mar turquesa durante un día despejado y soleado."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
       {languageData.FindTheBestHotelIxtapa.paragraphs1.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.FindTheBestHotelIxtapa.paragraphs1.Text2}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>{languageData.FindTheBestHotelIxtapa.section2Title}</TitleH2>
      </div>
      <SubtitleP>
       {languageData.FindTheBestHotelIxtapa.subtitle2.Text1}
      </SubtitleP>

      {/* IMAGE 2 */}

      <Image
        src={imgBlogGeneric2}
        width={581}
        height={363}
        alt="Vista del imponente hotel Barceló Ixtapa- All Inclusive."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
      {languageData.FindTheBestHotelIxtapa.paragraphs2.Text1}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
        {languageData.FindTheBestHotelIxtapa.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
      {languageData.FindTheBestHotelIxtapa.subtitle3.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.FindTheBestHotelIxtapa.subtitle3.Text2}
      </SubtitleP>
      <SubtitleP>
      {languageData.FindTheBestHotelIxtapa.subtitle3.Text3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li><BT>{languageData.FindTheBestHotelIxtapa.list1.textBold1}</BT>
        {languageData.FindTheBestHotelIxtapa.list1.textNormal1}
        </li>
        <li><BT>{languageData.FindTheBestHotelIxtapa.list1.textBold2}</BT>
        {languageData.FindTheBestHotelIxtapa.list1.textNormal2}
        </li>
        <li><BT>{languageData.FindTheBestHotelIxtapa.list1.textBold3}</BT>
        {languageData.FindTheBestHotelIxtapa.list1.textNormal3}
        </li>
        <li><BT>{languageData.FindTheBestHotelIxtapa.list1.textBold4}</BT>
        {languageData.FindTheBestHotelIxtapa.list1.textNormal4}
        </li>
        <li><BT>{languageData.FindTheBestHotelIxtapa.list1.textBold5}</BT>
        {languageData.FindTheBestHotelIxtapa.list1.textNormal5}
        </li>
        <li><BT>{languageData.FindTheBestHotelIxtapa.list1.textBold6}</BT>
        {languageData.FindTheBestHotelIxtapa.list1.textNormal6}
        </li>
        <li><BT>{languageData.FindTheBestHotelIxtapa.list1.textBold7}</BT>
        {languageData.FindTheBestHotelIxtapa.list1.textNormal7}
        </li>        
      </ul>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>{languageData.FindTheBestHotelIxtapa.section4Title}</TitleH2>
      </div>

      <SubtitleP>
      {languageData.FindTheBestHotelIxtapa.subtitle4.Text1}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li><BT>{languageData.FindTheBestHotelIxtapa.list2.textBold1}</BT>
        {languageData.FindTheBestHotelIxtapa.list2.textNormal1}
        </li>
        <li><BT>{languageData.FindTheBestHotelIxtapa.list2.textBold2}</BT>
        {languageData.FindTheBestHotelIxtapa.list2.textNormal2}
        </li>
        <li><BT>{languageData.FindTheBestHotelIxtapa.list2.textBold3}</BT>
        {languageData.FindTheBestHotelIxtapa.list2.textNormal3}
        </li>
        <li><BT>{languageData.FindTheBestHotelIxtapa.list2.textBold4}</BT>
        {languageData.FindTheBestHotelIxtapa.list2.textNormal4}
        </li>
        <li><BT>{languageData.FindTheBestHotelIxtapa.list2.textBold5}</BT>
        {languageData.FindTheBestHotelIxtapa.list2.textNormal5}
        </li>
      </ul>
      <SubtitleP>
      {languageData.FindTheBestHotelIxtapa.paragraphBottom2.Text1}
      <BT>{languageData.FindTheBestHotelIxtapa.paragraphBottom2.BT}</BT>
      {languageData.FindTheBestHotelIxtapa.paragraphBottom2.Text2}
      </SubtitleP>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.FindTheBestHotelIxtapa.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>{languageData.FindTheBestHotelIxtapa.section5Title}</TitleH2>
      </div>
      <SubtitleP>
        {languageData.FindTheBestHotelIxtapa.subtitle5.Text1}
      <BT>{languageData.FindTheBestHotelIxtapa.subtitle5.BT}</BT>
      {languageData.FindTheBestHotelIxtapa.subtitle5.Text2} 
      </SubtitleP>
      <SubtitleP>
      {languageData.FindTheBestHotelIxtapa.paragraphs5.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.FindTheBestHotelIxtapa.paragraphs5.Text2}
      </SubtitleP>
    </div>
        </>
    );
};