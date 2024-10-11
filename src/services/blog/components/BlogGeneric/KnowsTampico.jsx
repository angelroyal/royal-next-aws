"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/knows-tampico1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/knows-tampico2.png";

export default function KnowsTampico() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.KnowsTampico.mainTitle}
        </TitleH1>
      </div>

      {/* SECTION 1 OF THE BLOG */}
      <SubtitleP>
        {languageData.KnowsTampico.subtitle1.Text1}
        {" "}
        <BT>
          {languageData.KnowsTampico.subtitle1.BT}
        </BT>
        {languageData.KnowsTampico.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <img
        src={imgBlogGeneric1.src}
        // width={921}
        // height={598}
        alt="Mejor hotel de Tampico, ubicado en la costa del Golfo de México"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsTampico.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsTampico.paragraphs1.Text1}
      </SubtitleP>

      {/* ASK */}
      {/* SECTION 2 OF THE BLOG */}

      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsTampico.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsTampico.subtitle2.Text1}
        {" "}
        <BT>
          {languageData.KnowsTampico.subtitle2.BT}
        </BT>
        {languageData.KnowsTampico.subtitle2.Text2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={imgBlogGeneric2.src}
        // width={916}
        // height={606}
        alt="Vista exterior del Soleare Hotel Boutique con piscinas y área de descanso"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsTampico.paragraphs2.Text1}
      </SubtitleP>

      {/* SECTION 3 OF THE BLOG */}
      {/* ROOM TYPES */}

      <div className="mt-6">
        <TitleH2>
          {languageData.KnowsTampico.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsTampico.subtitle3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsTampico.list1.textBold1}{" "}
          </BT>
          {languageData.KnowsTampico.list1.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsTampico.list1.textBold2}{" "}
          </BT>
          {languageData.KnowsTampico.list1.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsTampico.list1.textBold3}{" "}
          </BT>
          {languageData.KnowsTampico.list1.textNormal3}
        </li>
      </ul>

      <SubtitleP>
        {languageData.KnowsTampico.paragraphsbottom3}
      </SubtitleP>

      {/* SECTION 4 OF THE BLOG */}
      {/* WHAT ARE THE FACILITIES */}

      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsTampico.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsTampico.subtitle4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsTampico.list2.textBold1}{" "}
          </BT>
          {languageData.KnowsTampico.list2.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsTampico.list2.textBold2}{" "}
          </BT>
          {languageData.KnowsTampico.list2.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsTampico.list2.textBold3}{" "}
          </BT>
          {languageData.KnowsTampico.list2.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsTampico.list2.textBold4}{" "}
          </BT>
          {languageData.KnowsTampico.list2.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsTampico.list2.textBold5}{" "}
          </BT>
          {languageData.KnowsTampico.list2.textNormal5}
        </li>

      </ul>
      <SubtitleP>
        {languageData.KnowsTampico.paragraphsbottom4}
      </SubtitleP>

      {/* REVIEWS */}
      {/* SECTION 5 OF THE BLOG */}

      <div className="my-4">
        <TableReviews TableBlog={languageData.KnowsTampico.table} />
      </div>

      {/* END BLOG */}
      {/* SECTION  6 OF THE BLOG */}
      
      <div className="my-2">
        <TitleH2>
          {languageData.KnowsTampico.section5Title}
        </TitleH2>
      </div>
      <SubtitleP>
        <BT>
          {languageData.KnowsTampico.subtitle5.BT}
        </BT>
        {languageData.KnowsTampico.subtitle5.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsTampico.paragraphs5.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsTampico.paragraphs5.Text2}
      </SubtitleP>

    </div>
  );
};
