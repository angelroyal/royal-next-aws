"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/knows-cayo-cuba1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/knows-cayo-cuba2.png";

export default function KnowsCayoCuba() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.KnowsCayoCuba.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        {languageData.KnowsCayoCuba.subtitle1.Text1}
        <BT>
          {languageData.KnowsCayoCuba.subtitle1.BT}
        </BT>{" "}
        {languageData.KnowsCayoCuba.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <img
        src={imgBlogGeneric1.src}
        // width={916}
        // height={595}
        alt="Vista hacia el mar en el mejor hotel en Cayo Santa María "
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsCayoCuba.paragraphs1.Text1}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsCayoCuba.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsCayoCuba.subtitle2}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsCayoCuba.paragraphs2.Text1}
      </SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={imgBlogGeneric2.src}
        // width={918}
        // height={601}
        alt="Entrada elegante del hotel Royalton Cayo Santa María, rodeada de vegetación tropical."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsCayoCuba.paragraphs2.Text2}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.KnowsCayoCuba.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsCayoCuba.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsCayoCuba.paragraphs3.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsCayoCuba.paragraphs3.Text2}
        {" "}
        <BT>
          {languageData.KnowsCayoCuba.paragraphs3.BT}
        </BT>
        {" "}
        {languageData.KnowsCayoCuba.paragraphs3.Text3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list1.textBold1}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list1.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list1.textBold2}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list1.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list1.textBold3}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list1.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list1.textBold4}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list1.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list1.textBold5}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list1.textNormal5}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list1.textBold6}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list1.textNormal6}
        </li>
      </ul>

      <SubtitleP>
        {languageData.KnowsCayoCuba.paragraphsbottom3}
      </SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsCayoCuba.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsCayoCuba.subtitle4}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsCayoCuba.paragraphs4.Text1}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list2.textBold1}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list2.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list2.textBold2}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list2.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list2.textBold3}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list2.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list2.textBold4}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list2.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list2.textBold5}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list2.textNormal5}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCayoCuba.list2.textBold6}{" "}
          </BT>
          {languageData.KnowsCayoCuba.list2.textNormal6}
        </li>
      </ul>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.KnowsCayoCuba.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.KnowsCayoCuba.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsCayoCuba.subtitle5.Text1}
        <BT>
          {languageData.KnowsCayoCuba.subtitle5.BT}
        </BT>
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsCayoCuba.paragraphs5.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsCayoCuba.paragraphs5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsCayoCuba.paragraphs5.Text3}
      </SubtitleP>
    </div>
  );
};
