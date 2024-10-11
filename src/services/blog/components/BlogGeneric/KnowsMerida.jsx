"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/knows-merida1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/knows-merida2.png";

export default function KnowsMerida() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.KnowsMerida.mainTitle}
        </TitleH1>
      </div>
      <SubtitleP>
        {languageData.KnowsMerida.Text1}
        <BT>
          {languageData.KnowsMerida.BT}
        </BT>
        {languageData.KnowsMerida.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <img
        src={imgBlogGeneric1.src}
        // width={924}
        // height={598}
        alt="Mejor hotel del mundo en Mérida Yucatán"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsMerida.paragraphs1.Text1}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsMerida.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMerida.subtitle2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={imgBlogGeneric2.src}
        // width={919}
        // height={478}
        alt="Vista del Fiesta Americana Mérida con sus habitaciones y piscina."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsMerida.paragraphs2.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMerida.paragraphs2.Text2}{" "}
        <BT>
          {languageData.KnowsMerida.paragraphs2.BT}
        </BT>
        {languageData.KnowsMerida.paragraphs2.Text3}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.KnowsMerida.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMerida.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMerida.paragraphs3.Text1}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMerida.list1.textBold1}{" "}
          </BT>
          {languageData.KnowsMerida.list1.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMerida.list1.textBold2}{" "}
          </BT>
          {languageData.KnowsMerida.list1.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMerida.list1.textBold3}{" "}
          </BT>
          {languageData.KnowsMerida.list1.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMerida.list1.textBold4}{" "}
          </BT>
          {languageData.KnowsMerida.list1.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsMerida.list1.textBold5}{" "}
          </BT>
          {languageData.KnowsMerida.list1.textNormal5}
        </li>
      </ul>

      <SubtitleP>
        {languageData.KnowsMerida.paragraphsbottom3.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMerida.paragraphsbottom3.Text2}
      </SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsMerida.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMerida.subtitle4}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMerida.paragraphs4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          {languageData.KnowsMerida.list2.textNormal1}
        </li>
        <li>
          {languageData.KnowsMerida.list2.textNormal2}
        </li>
        <li>
          {languageData.KnowsMerida.list2.textNormal3}
        </li>
        <li>
          {languageData.KnowsMerida.list2.textNormal4}
        </li>
        <li>
          {languageData.KnowsMerida.list2.textNormal5}
        </li>
      </ul>

      <SubtitleP>
        {languageData.KnowsMerida.paragraphsbottom4}
      </SubtitleP>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.KnowsMerida.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.KnowsMerida.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMerida.subtitle5.Text1}{" "}
        <BT>
          {languageData.KnowsMerida.subtitle5.BT}
        </BT>
        {languageData.KnowsMerida.subtitle5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMerida.paragraphs5.Text1}{" "}
        <BT>
          {languageData.KnowsMerida.paragraphs5.BT}
        </BT>
        {languageData.KnowsMerida.paragraphs5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsMerida.paragraphs5.Text3}
      </SubtitleP>
    </div>
  );
};
