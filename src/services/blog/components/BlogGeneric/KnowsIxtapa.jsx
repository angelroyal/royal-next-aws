"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/knows-Ixtapa1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/knows-Ixtapa2.png";

export default function KnowsIxtapa() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>{languageData.KnowsIxtapa.mainTitle}</TitleH1>
      </div>

      <SubtitleP>{languageData.KnowsIxtapa.subtitle1}</SubtitleP>

      <SubtitleP>
        {languageData.KnowsIxtapa.paragraphs1.Text1}
        <BT> {languageData.KnowsIxtapa.paragraphs1.BT}</BT>
      </SubtitleP>

      {/* IMAGE 1 */}

      <img
        src={imgBlogGeneric1.src}
        alt="Área de piscinas infantiles en el mejor hotel de Ixtapa, con instalaciones modernas y seguras para niños."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>{languageData.KnowsIxtapa.paragraphs1.Text2}</SubtitleP>

      <SubtitleP>{languageData.KnowsIxtapa.paragraphs1.Text3}</SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>{languageData.KnowsIxtapa.section2Title}</TitleH2>
      </div>

      <SubtitleP>{languageData.KnowsIxtapa.subtitle2}</SubtitleP>

      {/* IMAGE 2 */}

      <Image
        src={imgBlogGeneric2}
        width={942}
        height={530}
        alt="Área de juegos infantiles del hotel Sunscape Dorado Pacífico Ixtapa "
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>{languageData.KnowsIxtapa.paragraphs2.Text1}</SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>{languageData.KnowsIxtapa.section3Title}</TitleH2>
      </div>

      <SubtitleP>{languageData.KnowsIxtapa.subtitle3}</SubtitleP>

      <div className="mt-4">
        <TitleH2>{languageData.KnowsIxtapa.paragraphs3.Text1}</TitleH2>
      </div>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>{languageData.KnowsIxtapa.list1.textNormal1}</li>
        <li>{languageData.KnowsIxtapa.list1.textNormal2}</li>
        <li>{languageData.KnowsIxtapa.list1.textNormal3}</li>
        <li>{languageData.KnowsIxtapa.list1.textNormal4}</li>
        <li>{languageData.KnowsIxtapa.list1.textNormal5}</li>
      </ul>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>{languageData.KnowsIxtapa.section4Title}</TitleH2>
      </div>

      <SubtitleP>{languageData.KnowsIxtapa.subtitle4}</SubtitleP>

      <SubtitleP>{languageData.KnowsIxtapa.paragraphs4.Text1}</SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsIxtapa.list2.textBold1}{" "}
          </BT>
          {languageData.KnowsIxtapa.list2.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsIxtapa.list2.textBold2}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list2.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsIxtapa.list2.textBold3}{" "}
          </BT>
          {languageData.KnowsIxtapa.list2.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsIxtapa.list2.textBold4}{" "}
          </BT>
          {languageData.KnowsIxtapa.list2.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsIxtapa.list2.textBold5}{" "}
          </BT>
          {languageData.KnowsIxtapa.list2.textNormal5}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsIxtapa.list2.textBold6}{" "}
          </BT>
          {languageData.KnowsIxtapa.list2.textNormal6}
        </li>
      </ul>

      <SubtitleP>
        {languageData.KnowsIxtapa.paragraphsbottom4.Text1}
        <BT> {languageData.KnowsIxtapa.paragraphsbottom4.BT}</BT>
        {languageData.KnowsIxtapa.paragraphsbottom4.Text2}
      </SubtitleP>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.KnowsIxtapa.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>{languageData.KnowsIxtapa.section5Title}</TitleH2>
      </div>

      <SubtitleP>{languageData.KnowsIxtapa.subtitle5.Text1}</SubtitleP>

      <SubtitleP>
        {languageData.KnowsIxtapa.subtitle5.Text2}
        <BT>{languageData.KnowsIxtapa.subtitle5.BT}</BT>
      </SubtitleP>

      <SubtitleP>{languageData.KnowsIxtapa.paragraphs5.Text1}</SubtitleP>

      <SubtitleP>{languageData.KnowsIxtapa.paragraphs5.Text2}</SubtitleP>
    </div>
  );
}
