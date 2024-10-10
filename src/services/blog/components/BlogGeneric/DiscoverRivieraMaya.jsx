"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-riviera-maya1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-riviera-maya2.png";

export default function DiscoverRivieraMaya() {

  const { languageData } = useContext(LanguageContext);


  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.DiscoverRivieraMaya.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.subtitle1}
      </SubtitleP>

      {/* IMAGE 1 */}

      <Image
        src={imgBlogGeneric1}
        width={923}
        height={616}
        alt="Área de descanso con vista al mar en el mejor hotel de la Riviera Maya."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.paragraphs1.Text1}
        {" "}
        <BT>
          {languageData.DiscoverRivieraMaya.paragraphs1.BT}
        </BT>         
        {" "}
        {languageData.DiscoverRivieraMaya.paragraphs1.Text2}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverRivieraMaya.section2Title}
        </TitleH2>
      </div>
      <SubtitleP>
        {languageData.DiscoverRivieraMaya.subtitle2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <Image
        src={imgBlogGeneric2}
        width={917}
        height={525}
        alt="Vista de la piscina en el Grand Velas Riviera Maya."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.paragraphs2.Text1}
        {" "}
        <BT>
          {languageData.DiscoverRivieraMaya.paragraphs2.BT}
        </BT>
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.DiscoverRivieraMaya.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.paragraphs3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          {languageData.DiscoverRivieraMaya.list1.textNormal1}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list1.textNormal2}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list1.textNormal3}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list1.textNormal4}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list1.textNormal5}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list1.textNormal6}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list1.textNormal7}
        </li>
      </ul>

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.paragraphsbottom3}
      </SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverRivieraMaya.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.subtitle4}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.paragraphs4.Text1}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          {languageData.DiscoverRivieraMaya.list2.textNormal1}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list2.textNormal2}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list2.textNormal3}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list2.textNormal4}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list2.textNormal5}
        </li>
        <li>
          {languageData.DiscoverRivieraMaya.list2.textNormal6}
        </li>
      </ul>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.DiscoverRivieraMaya.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.DiscoverRivieraMaya.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.subtitle5.Text1} {" "}
        <BT>
          {languageData.DiscoverRivieraMaya.subtitle5.BT}
        </BT>
        {languageData.DiscoverRivieraMaya.subtitle5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.paragraphs5.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverRivieraMaya.paragraphs5.Text2}
      </SubtitleP>
    </div>
  );
};
