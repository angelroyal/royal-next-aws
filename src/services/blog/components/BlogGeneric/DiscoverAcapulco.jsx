"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-acapulco1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-acapulco2.png";

export default function DiscoverAcapulco() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.DiscoverAcapulco.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        {languageData.DiscoverAcapulco.subtitle1.Text1} {" "}
        <BT>
          {languageData.DiscoverAcapulco.subtitle1.BT} {" "}
        </BT>
        {languageData.DiscoverAcapulco.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <Image
        src={imgBlogGeneric1}
        width={917}
        height={556}
        alt="Piscinas del mejor hotel de Acapulco con vistas panorámicas al mar, rodeadas de áreas de descanso."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverAcapulco.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverAcapulco.paragraphs1.Text1}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverAcapulco.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverAcapulco.subtitle2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <Image
        src={imgBlogGeneric2}
        width={919}
        height={578}
        alt="Entrada del hotel Encanto Acapulco"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverAcapulco.paragraphs2.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverAcapulco.paragraphs2.Text2}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.DiscoverAcapulco.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverAcapulco.subtitle3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverAcapulco.list1.textBold1}{" "}
          </BT>
          {languageData.DiscoverAcapulco.list1.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverAcapulco.list1.textBold2}{" "}
          </BT>
          {languageData.DiscoverAcapulco.list1.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverAcapulco.list1.textBold3}{" "}
          </BT>
          {languageData.DiscoverAcapulco.list1.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverAcapulco.list1.textBold4}{" "}
          </BT>
          {languageData.DiscoverAcapulco.list1.textNormal4}
        </li>
      </ul>

      <SubtitleP>
        {languageData.DiscoverAcapulco.paragraphsbottom3.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.DiscoverAcapulco.paragraphsbottom3.Text2}
      </SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
        {languageData.DiscoverAcapulco.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
      {languageData.DiscoverAcapulco.subtitle4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
      <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverAcapulco.list2.textBold1}{" "}
          </BT>
          {languageData.DiscoverAcapulco.list2.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverAcapulco.list2.textBold2}{" "}
          </BT>
          {languageData.DiscoverAcapulco.list2.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverAcapulco.list2.textBold3}{" "}
          </BT>
          {languageData.DiscoverAcapulco.list2.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverAcapulco.list2.textBold4}{" "}
          </BT>
          {languageData.DiscoverAcapulco.list2.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverAcapulco.list2.textBold5}{" "}
          </BT>
          {languageData.DiscoverAcapulco.list2.textNormal5}
        </li>
      </ul>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.DiscoverAcapulco.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
        {languageData.DiscoverAcapulco.section5Title}
          </TitleH2>
      </div>

      <SubtitleP>
      {languageData.DiscoverAcapulco.subtitle5}
      </SubtitleP>

      <SubtitleP>
      {languageData.DiscoverAcapulco.paragraphs5.Text1}
      </SubtitleP>

      <SubtitleP>
      {languageData.DiscoverAcapulco.paragraphs5.Text2}
      </SubtitleP>
    </div>
  );
};
