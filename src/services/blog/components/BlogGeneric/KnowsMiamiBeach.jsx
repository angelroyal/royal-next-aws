"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgMaimi from "@/assets/img/BlogGeneric/knows-miami-beach1.png";
import imgMaimi1 from "@/assets/img/BlogGeneric/knows-miami-beach2.png";

export default function KnowsMiamiBeach() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}

      <div className="mb-6">
        <TitleH1>
          {languageData.KnowsMiamiBeach.mainTitle}
        </TitleH1>
      </div>

      {/* SECTION 1 OF THE BLOG */}

      <SubtitleP>
        {languageData.KnowsMiamiBeach.subtitle1.Text1} {" "}
        <BT>
          {languageData.KnowsMiamiBeach.subtitle1.BT}
        </BT>
        {languageData.KnowsMiamiBeach.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <img
        src={imgMaimi.src}
        // width={919}
        // height={571}
        alt="Piscina al aire libre en Miami Beach, Florida, rodeada de tumbonas y sombrillas con palmeras en el fondo"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsMiamiBeach.paragraphs1.Text1}
      </SubtitleP>

      {/* SECTION 2 OF THE BLOG */}
      {/* ASK */}

      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsMiamiBeach.section2Title}
        </TitleH2>
      </div>
      <SubtitleP>
        {languageData.KnowsMiamiBeach.subtitle2.paragraph}
      </SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={imgMaimi1.src}
        // width={920}
        // height={578}
        alt="Entrada del hotel Nautilus Sonesta Miami Beach"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsMiamiBeach.paragraphs2.Text1}
      </SubtitleP>

      {/* SECTION 3 OF THE BLOG */}
      {/* ROOM TYPES */}
      
      <div className="mt-6">
        <TitleH2>
          {languageData.KnowsMiamiBeach.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMiamiBeach.subtitle3}
      </SubtitleP>
      <SubtitleP>
        {languageData.KnowsMiamiBeach.paragraphs3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col">
        <li>
          ● {languageData.KnowsMiamiBeach.list1.textNormal1}
        </li>
        <li>
          ● {languageData.KnowsMiamiBeach.list1.textNormal2}
        </li>
        <li>
          ● {languageData.KnowsMiamiBeach.list1.textNormal3}
        </li>
        <li>
          ● {languageData.KnowsMiamiBeach.list1.textNormal4}
        </li>
        <li>
          ● {languageData.KnowsMiamiBeach.list1.textNormal5}
        </li>
        <li>
          ● {languageData.KnowsMiamiBeach.list1.textNormal6}
        </li>
        <li>
          ● {languageData.KnowsMiamiBeach.list1.textNormal7}
        </li>
      </ul>

      <SubtitleP>
        {languageData.KnowsMiamiBeach.paragraphsbottom3}
      </SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      {/* SECTION 4 OF THE BLOG */}

      <div className="mt-6">
        <TitleH2>
          {languageData.KnowsMiamiBeach.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMiamiBeach.subtitle4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col">
        <li>
          ● {languageData.KnowsMiamiBeach.list1.textNormal1}
        </li>
        <li>
          ● {languageData.KnowsMiamiBeach.list2.textNormal2}
        </li>
        <li>
          ● {languageData.KnowsMiamiBeach.list2.textNormal3}
        </li>
        <li>
          ● {languageData.KnowsMiamiBeach.list2.textNormal4}
        </li>
        <li>
          ● {languageData.KnowsMiamiBeach.list2.textNormal4}
        </li>
      </ul>

      <SubtitleP>
        {languageData.KnowsMiamiBeach.paragraphsbottom4}
      </SubtitleP>

      {/* SECTION 5 OF THE BLOG */}
      {/* REVIEWS */}

      <div className="my-4">
        <TableReviews TableBlog={languageData.KnowsMiamiBeach.table} />
      </div>

      {/* SECTION 6 OF THE BLOG */}

      <div className="mt-4 mb-3">
        <TitleH2>
          {languageData.KnowsMiamiBeach.section5Title}
        </TitleH2>{" "}
      </div>

      <SubtitleP>
        {languageData.KnowsMiamiBeach.subtitle5.Text1}
        {" "}
        <BT>
          {languageData.KnowsMiamiBeach.subtitle5.BT}
        </BT>
        {languageData.KnowsMiamiBeach.subtitle5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMiamiBeach.paragraphs5.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMiamiBeach.paragraphs5.Text2}
      </SubtitleP>
    </div>
  );
};
