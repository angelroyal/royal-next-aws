"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-nuevo-vallarta1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-nuevo-vallarta2.png";

export default function DiscoverNuevoVallarta() {

  const { languageData } = useContext(LanguageContext);


  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.DiscoverNuevoVallarta.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.subtitle1.Text1} {" "}
        <BT>
          {languageData.DiscoverNuevoVallarta.subtitle1.BT}
        </BT>
        {" "}
        {languageData.DiscoverNuevoVallarta.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <Image
        src={imgBlogGeneric1}
        width={920}
        height={588}
        alt="Vista desde el balcón de la habitación en el mejor hotel en Nuevo Vallarta"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.paragraphs1.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.paragraphs1.Text3}.
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverNuevoVallarta.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.subtitle2.Text1} {" "}
        <BT>
          {languageData.DiscoverNuevoVallarta.subtitle2.BT}
        </BT>
        {" "}
        {languageData.DiscoverNuevoVallarta.subtitle2.Text2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <Image
        src={imgBlogGeneric2}
        width={923}
        height={579}
        alt="Vista de la entrada principal del hotel Grand Velas Riviera Nayarit"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.paragraphs2.Text1}

      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.paragraphs2.Text2}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.DiscoverNuevoVallarta.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.paragraphs3}
      </SubtitleP>

      <div className="mt-3">
        <TitleH2>
          {languageData.DiscoverNuevoVallarta.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.subtitle4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          {languageData.DiscoverNuevoVallarta.list1.textNormal1}
        </li>
        <li>
          {languageData.DiscoverNuevoVallarta.list1.textNormal2}
        </li>
        <li>
          {languageData.DiscoverNuevoVallarta.list1.textNormal3}
        </li>
        <li>
          {languageData.DiscoverNuevoVallarta.list1.textNormal4}
        </li>
        <li>
          {languageData.DiscoverNuevoVallarta.list1.textNormal5}
        </li>
        <li>
          {languageData.DiscoverNuevoVallarta.list1.textNormal6}
        </li>
        <li>
          {languageData.DiscoverNuevoVallarta.list1.textNormal7}
        </li>
        <li>
          {languageData.DiscoverNuevoVallarta.list1.textNormal8}
        </li>
      </ul>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverNuevoVallarta.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.subtitle5}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverNuevoVallarta.list2.textBold1}{" "}
          </BT>
          {languageData.DiscoverNuevoVallarta.list2.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverNuevoVallarta.list2.textBold2}{" "}
          </BT>
          {languageData.DiscoverNuevoVallarta.list2.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverNuevoVallarta.list2.textBold3}{" "}
          </BT>
          {languageData.DiscoverNuevoVallarta.list2.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverNuevoVallarta.list2.textBold4}{" "}
          </BT>
          {languageData.DiscoverNuevoVallarta.list2.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverNuevoVallarta.list2.textBold5}{" "}
          </BT>
          {languageData.DiscoverNuevoVallarta.list2.textNormal5}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverNuevoVallarta.list2.textBold6}{" "}
          </BT>
          {languageData.DiscoverNuevoVallarta.list2.textNormal6}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverNuevoVallarta.list2.textBold7}{" "}
          </BT>
          {languageData.DiscoverNuevoVallarta.list2.textNormal7}
        </li>
      </ul>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.paragraphsbottom5.Text1} {" "}
        <BT>
          {languageData.DiscoverNuevoVallarta.paragraphsbottom5.BT}
        </BT>
        {" "}
        {languageData.DiscoverNuevoVallarta.paragraphsbottom5.Text2}
      </SubtitleP>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.DiscoverNuevoVallarta.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.DiscoverNuevoVallarta.section6Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.subtitle6.Text1} {" "}
        <BT>
          {languageData.DiscoverNuevoVallarta.subtitle6.BT}
        </BT>
        {" "}
        {languageData.DiscoverNuevoVallarta.subtitle6.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverNuevoVallarta.paragraphs6}
      </SubtitleP>
    </div>
  );
};
