"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-best-hotel-acapulco-zona-dorada.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-best-hotel-acapulco-zona-dorada2.jpg";


export default function FindAcapulcoZonaDorada() {

  const { languageData } = useContext(LanguageContext);

  return (

    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>
            {languageData.FindAcapulcoZonaDorada.mainTitle}
          </TitleH1>
        </div>
        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.subtitle1.Text1}
        </SubtitleP>
        {/* IMAGE 1 */}

        <Image
          src={imgBlogGeneric1}
          width={590}
          height={371}
          alt="Vista de letrero de Acapulco de espaldas al mar en un día plenamente soleado."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.paragraphs1.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.paragraphs1.Text2}
          <BT>
            {languageData.FindAcapulcoZonaDorada.paragraphs1.BT}
          </BT>
          {languageData.FindAcapulcoZonaDorada.paragraphs1.Text2}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>{languageData.FindAcapulcoZonaDorada.section2Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.subtitle2.Text1}
        </SubtitleP>

        {/* IMAGE 2 */}

        <Image
          src={imgBlogGeneric2}
          width={586}
          height={371}
          alt="Vista de alberca de hotel en un díá soleado. Se alcanza a ver un tobogan que da a la alberca."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.paragraphs2.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.paragraphs2.Text2}
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.FindAcapulcoZonaDorada.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.subtitle3.Text2}
          <BT>{languageData.FindAcapulcoZonaDorada.subtitle3.BT}</BT>
          {languageData.FindAcapulcoZonaDorada.subtitle3.Text3}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.subtitle3.Text4}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>{languageData.FindAcapulcoZonaDorada.list1.textNormal1}</li>
          <li>{languageData.FindAcapulcoZonaDorada.list1.textNormal2}</li>
          <li>{languageData.FindAcapulcoZonaDorada.list1.textNormal3}</li>
          <li>{languageData.FindAcapulcoZonaDorada.list1.textNormal4}</li>
          <li>{languageData.FindAcapulcoZonaDorada.list1.textNormal5}</li>
          <li>{languageData.FindAcapulcoZonaDorada.list1.textNormal6}</li>
        </ul>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>{languageData.FindAcapulcoZonaDorada.section4Title}</TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.subtitle4.Text1}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>{languageData.FindAcapulcoZonaDorada.list2.textNormal1}</li>
          <li>{languageData.FindAcapulcoZonaDorada.list2.textNormal2}</li>
          <li>{languageData.FindAcapulcoZonaDorada.list2.textNormal3}</li>
          <li>{languageData.FindAcapulcoZonaDorada.list2.textNormal4}</li>
          <li>{languageData.FindAcapulcoZonaDorada.list2.textNormal5}</li>
        </ul>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.FindAcapulcoZonaDorada.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.FindAcapulcoZonaDorada.section5Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.subtitle5.Text1}
          <BT>{languageData.FindAcapulcoZonaDorada.subtitle5.BT}</BT>
          {languageData.FindAcapulcoZonaDorada.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindAcapulcoZonaDorada.paragraphs5.Text2}
        </SubtitleP>
      </div>
    </>
  );
};