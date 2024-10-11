"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-disney1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-disney2.png";

export default function DiscoverDisney() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.DiscoverDisney.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        {languageData.DiscoverDisney.subtitle1}
      </SubtitleP>

      {/* IMAGE 1 */}

      <img
        src={imgBlogGeneric1.src}
        // width={915}
        // height={581}
        alt="Entrada principal del  mejor hotel dentro de Disney Orlando"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverDisney.paragraphs1.Text1} {" "}
        <BT>
          {languageData.DiscoverDisney.paragraphs1.BT}
        </BT>
        {" "}
        {languageData.DiscoverDisney.paragraphs1.Text2}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverDisney.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverDisney.subtitle2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={imgBlogGeneric2.src}
        // width={926}
        // height={526}
        alt="Vista panoramica del hotel Disney, el Walt Disney World Dolphin"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverDisney.paragraphs2}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.DiscoverDisney.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverDisney.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverDisney.paragraphs3.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverDisney.paragraphs3.Text2}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          {languageData.DiscoverDisney.list1.textNormal1}
        </li>
        <li>
          {languageData.DiscoverDisney.list1.textNormal2}
        </li>
        <li>
          {languageData.DiscoverDisney.list1.textNormal3}
        </li>
        <li>
          {languageData.DiscoverDisney.list1.textNormal4}
        </li>
        <li>
          {languageData.DiscoverDisney.list1.textNormal5}
        </li>
        <li>
          {languageData.DiscoverDisney.list1.textNormal6}
        </li>
      </ul>

      <SubtitleP>
        {languageData.DiscoverDisney.paragraphsbottom3.Text1} {" "}
        <BT>
          {languageData.DiscoverDisney.paragraphsbottom3.BT}
        </BT>
        {" "}
        {languageData.DiscoverDisney.paragraphsbottom3.Text2}
      </SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverDisney.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverDisney.subtitle4}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverDisney.paragraphs4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          {languageData.DiscoverDisney.list2.textNormal1}
        </li>
        <li>
          {languageData.DiscoverDisney.list2.textNormal2}
        </li>
        <li>
          {languageData.DiscoverDisney.list2.textNormal3}
        </li>
        <li>
          {languageData.DiscoverDisney.list2.textNormal4}
        </li>
        <li>
          {languageData.DiscoverDisney.list2.textNormal5}
        </li>
      </ul>

      <SubtitleP>
        {languageData.DiscoverDisney.paragraphsbottom4}
      </SubtitleP>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.DiscoverDisney.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.DiscoverDisney.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverDisney.subtitle5.Text1} {" "}
        <BT>
          {languageData.DiscoverDisney.subtitle5.BT}
        </BT>
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverDisney.paragraphs5.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverDisney.paragraphs5.Text2}
      </SubtitleP>
    </div>
  );
};
