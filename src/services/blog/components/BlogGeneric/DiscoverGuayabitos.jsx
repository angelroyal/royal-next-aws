"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-guayabitos1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-guayabitos2.png";

export default function DiscoverGuayabitos() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.DiscoverGuayabitos.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        <BT>
          {languageData.DiscoverGuayabitos.subtitle1.BT}
        </BT>{" "}
        {languageData.DiscoverGuayabitos.subtitle1.Text1}
      </SubtitleP>

      {/* IMAGE 1 */}

      <Image
        src={imgBlogGeneric1}
        width={930}
        height={508}
        alt="Vista del mejor hotel todo incluido en Guayabitos, intoresco rincón del Pacífico mexicano."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverGuayabitos.paragraphs1}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverGuayabitos.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverGuayabitos.subtitle2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <Image
        src={imgBlogGeneric2}
        width={924}
        height={484}
        alt="Vista de la entrada principal del hotel  Decameron Los Cocos"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverGuayabitos.paragraphs2.Text1} {" "}
        <BT>
          {languageData.DiscoverGuayabitos.paragraphs2.BT}
        </BT>.
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.DiscoverGuayabitos.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverGuayabitos.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverGuayabitos.paragraphs3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list1.textBold1}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list1.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list1.textBold2}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list1.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list1.textBold3}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list1.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list1.textBold4}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list1.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list1.textBold5}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list1.textNormal5}
        </li>
      </ul>

      <SubtitleP>
        {languageData.DiscoverGuayabitos.paragraphsbottom3}
      </SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverGuayabitos.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverGuayabitos.subtitle4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list2.textBold1}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list2.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list2.textBold2}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list2.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list2.textBold3}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list2.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list2.textBold4}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list2.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list2.textBold5}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list2.textNormal5}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list2.textBold6}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list2.textNormal6}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverGuayabitos.list2.textBold7}{" "}
          </BT>
          {languageData.DiscoverGuayabitos.list2.textNormal7}
        </li>
      </ul>

      <SubtitleP>
        {languageData.DiscoverGuayabitos.paragraphsbottom4}
      </SubtitleP>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.DiscoverGuayabitos.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.DiscoverGuayabitos.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverGuayabitos.subtitle5.Text1}{" "}
        <BT>
          {languageData.DiscoverGuayabitos.subtitle5.BT}
        </BT>{" "}
        {languageData.DiscoverGuayabitos.subtitle5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverGuayabitos.paragraphs5.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverGuayabitos.paragraphs5.Text2}
      </SubtitleP>
    </div>
  );
};
