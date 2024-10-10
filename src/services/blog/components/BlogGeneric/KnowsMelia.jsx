"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/knows-melia1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/knows-melia2.png";

export default function KnowsMelia() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.KnowsMelia.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        {languageData.KnowsMelia.subtitle1.Text1}
        <BT>
          {languageData.KnowsMelia.subtitle1.BT}
        </BT>
        {languageData.KnowsMelia.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <Image
        src={imgBlogGeneric1}
        width={918}
        height={572}
        alt="Vista del area de pscinas del mejor hotel Meliá en Punta Cana"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsMelia.paragraphs1.Text1}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsMelia.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMelia.subtitle2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <Image
        src={imgBlogGeneric2}
        width={914}
        height={556}
        alt="Vista de la habitación del hotel Meliá Caribe Beach Resort "
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsMelia.paragraphs2.Text1}
        <BT>
          {languageData.KnowsMelia.paragraphs2.BT}
        </BT>
        {languageData.KnowsMelia.paragraphs2.Text1}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.KnowsMelia.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMelia.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMelia.paragraphs3.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMelia.paragraphs3.Text2}
        {" "}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMelia.list1.textBold1}{" "}
          </BT>
          {languageData.KnowsMelia.list1.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMelia.list1.textBold2}{" "}
          </BT>
          {languageData.KnowsMelia.list1.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMelia.list1.textBold3}{" "}
          </BT>
          {languageData.KnowsMelia.list1.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMelia.list1.textBold4}{" "}
          </BT>
          {languageData.KnowsMelia.list1.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMelia.list1.textBold5}{" "}
          </BT>
          {languageData.KnowsMelia.list1.textNormal5}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMelia.list1.textBold6}{" "}
          </BT>
          {languageData.KnowsMelia.list1.textNormal6}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMelia.list1.textBold7}{" "}
          </BT>
          {languageData.KnowsMelia.list1.textNormal7}
        </li>
      </ul>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsMelia.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMelia.subtitle4}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMelia.paragraphs4}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMelia.list2.textNormal1}
      </SubtitleP>
      <SubtitleP>
        {languageData.KnowsMelia.list2.textNormal2}
        {" "}
      </SubtitleP>
      <SubtitleP>
        {languageData.KnowsMelia.list2.textNormal3}
      </SubtitleP>
      <SubtitleP>
        {languageData.KnowsMelia.list2.textNormal4}
      </SubtitleP>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.KnowsMelia.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.KnowsMelia.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMelia.subtitle5.Text1}
        <BT>
          {languageData.KnowsMelia.subtitle5.BT}
        </BT>
        {languageData.KnowsMelia.subtitle5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMelia.paragraphs5.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.KnowsMelia.paragraphs5.Text2}
      </SubtitleP>
    </div>
  );
};
