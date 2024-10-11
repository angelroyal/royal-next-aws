"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";


import imgBlogGeneric1 from "@/assets/img/BlogGeneric/knows-puerto-vallarta1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/knows-puerto-vallarta2.png";

export default function KnowsPuertoVallarta() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}

      <div className="mb-6">
        <TitleH1>
          {languageData.KnowsPuertoVallarta.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.subtitle1.Text1}
        {" "}
        <BT>
          {languageData.KnowsPuertoVallarta.subtitle1.BT}
        </BT>
        {languageData.KnowsPuertoVallarta.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <img
        src={imgBlogGeneric1.src}
        // width={920}
        // height={556}
        alt="Mejor hotel de Puerto Vallarta, situado en la hermosa costa del Pacífico en el estado de Jalisco"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.paragraphs1.Text2} {" "}
        <BT>
          {languageData.KnowsPuertoVallarta.paragraphs1.BT}
        </BT>
        {languageData.KnowsPuertoVallarta.paragraphs1.Text3}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsPuertoVallarta.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.subtitle2.paragraph}
      </SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={imgBlogGeneric2.src}
        // width={922}
        // height={536}
        alt="Entrada del hotel Villa Del Palmar Beach Resort & Spa "
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.paragraphs2.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.KnowsPuertoVallarta.paragraphs2.Text2}{" "}
        <BT>
          {languageData.KnowsPuertoVallarta.paragraphs2.BT}
        </BT>
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.KnowsPuertoVallarta.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.subtitle3}
      </SubtitleP>
      <SubtitleP>
        {languageData.KnowsPuertoVallarta.paragraphs3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <b className="text-black text-fs-16">
            {languageData.KnowsPuertoVallarta.list1.textBold1}{" "}
          </b>
          {languageData.KnowsPuertoVallarta.list1.textNormal1}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.KnowsPuertoVallarta.list1.textBold2}{" "}
          </b>
          {languageData.KnowsPuertoVallarta.list1.textNormal2}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.KnowsPuertoVallarta.list1.textBold3}{" "}
          </b>
          {languageData.KnowsPuertoVallarta.list1.textNormal3}
        </li>
      </ul>

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.paragraphsbottom3}
      </SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsPuertoVallarta.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.subtitle4.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.subtitle4.Text2} {" "}
        <b className="text-black">
          {languageData.KnowsPuertoVallarta.subtitle4.BT}
        </b>
      </SubtitleP>
      <SubtitleP>
        {languageData.KnowsPuertoVallarta.subtitle4.Text3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <b className="text-black text-fs-16">
            {languageData.KnowsPuertoVallarta.list2.textBold1}{" "}
          </b>
          {languageData.KnowsPuertoVallarta.list2.textNormal1}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.KnowsPuertoVallarta.list2.textBold2}{" "}
          </b>
          {languageData.KnowsPuertoVallarta.list2.textNormal2}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.KnowsPuertoVallarta.list2.textBold3}{" "}
          </b>
          {languageData.KnowsPuertoVallarta.list2.textNormal3}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.KnowsPuertoVallarta.list2.textBold4}{" "}
          </b>
          {languageData.KnowsPuertoVallarta.list2.textNormal4}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.KnowsPuertoVallarta.list2.textBold5}{" "}
          </b>
          {languageData.KnowsPuertoVallarta.list2.textNormal5}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.KnowsPuertoVallarta.list2.textBold6}{" "}
          </b>
          {languageData.KnowsPuertoVallarta.list2.textNormal6}
        </li>
      </ul>

      {/* REVIEWS */}

      <div className="my-4">
        <TableReviews TableBlog={languageData.KnowsPuertoVallarta.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.KnowsPuertoVallarta.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.subtitle5.Text1} {" "}
        <BT>
          {languageData.KnowsPuertoVallarta.subtitle5.BT}
        </BT>
        {languageData.KnowsPuertoVallarta.subtitle5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsPuertoVallarta.paragraphs5.Text1}
      </SubtitleP>
      
      <SubtitleP>
        {languageData.KnowsPuertoVallarta.paragraphs5.Text2}
      </SubtitleP>
    </div>
  );
};
