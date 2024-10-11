"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-cancun1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-cancun2.png";

export default function DiscoverCancun() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.DiscoverCancun.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        {languageData.DiscoverCancun.subtitle1.Text1} {" "}
        <BT>
          {languageData.DiscoverCancun.subtitle1.BT} {" "}
        </BT>
        {languageData.DiscoverCancun.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <img
        src={imgBlogGeneric1.src}
        // width={920}
        // height={586}
        alt="Área de piscinas infantiles en el mejor hotel de Cancún para niños, con toboganes y zonas de juegos."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverCancun.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverCancun.paragraphs1.Text2}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverCancun.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverCancun.subtitle2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={imgBlogGeneric2.src}
        width={917}
        height={544}
        alt="Vista panorámica del área infantil en el hotel Moon Palace The Grand, con juegos y actividades para niños."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverCancun.paragraphs2.Text1}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.DiscoverCancun.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverCancun.subtitle3}
      </SubtitleP>
      <SubtitleP>
        {languageData.DiscoverCancun.paragraphs3.Text1}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          {languageData.DiscoverCancun.list1.textNormal1}
        </li>
        <li>
          {languageData.DiscoverCancun.list1.textNormal2}
        </li>
        <li>
          {languageData.DiscoverCancun.list1.textNormal3}
        </li>
        <li>
          {languageData.DiscoverCancun.list1.textNormal4}
        </li>
        <li>
          {languageData.DiscoverCancun.list1.textNormal5}
        </li>
        <li>
          {languageData.DiscoverCancun.list1.textNormal6}
        </li>
      </ul>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverCancun.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverCancun.subtitle4.Text1}
        <BT>
          {languageData.DiscoverCancun.subtitle4.BT}
        </BT>
        {languageData.DiscoverCancun.subtitle4.Text2}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverCancun.list2.textBold1}{" "}
          </BT>
          {languageData.DiscoverCancun.list2.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverCancun.list2.textBold2}{" "}
          </BT>
          {languageData.DiscoverCancun.list2.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverCancun.list2.textBold3}{" "}
          </BT>
          {languageData.DiscoverCancun.list2.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverCancun.list2.textBold4}{" "}
          </BT>
          {languageData.DiscoverCancun.list2.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverCancun.list2.textBold5}{" "}
          </BT>
          {languageData.DiscoverCancun.list2.textNormal5}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverCancun.list2.textBold6}{" "}
          </BT>
          {languageData.DiscoverCancun.list2.textNormal6}
        </li>
      </ul>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.DiscoverCancun.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.DiscoverCancun.list2.textNormal6}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverCancun.subtitle5.Text1}
        <BT>
          {languageData.DiscoverCancun.subtitle5.BT}
        </BT>
        {languageData.DiscoverCancun.subtitle5.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverCancun.paragraphs5.Text1}
      </SubtitleP>
    </div>
  );
};
