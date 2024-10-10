"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/knows-cancun1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/knows-cancun2.png";

export default function KnowsCancun() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}

      <div className="mb-6">
        <TitleH1>
          {languageData.KnowsCancun.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        {languageData.KnowsCancun.subtitle1.Text1}
        {" "}
        <BT>
          {languageData.KnowsCancun.subtitle1.BT}
        </BT>
        {languageData.KnowsCancun.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <Image
        src={imgBlogGeneric1}
        width={920}
        height={578}
        alt="Zona del comedor elegante y bien iluminado en el mejor hotel de Cancún, con mesas y sillas dispuestas para los comensales"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsCancun.paragraphs1.Text1}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsCancun.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsCancun.subtitle2.Text1}
        {" "}
        <BT>
          {languageData.KnowsCancun.subtitle2.BT}
        </BT>
        {languageData.KnowsCancun.subtitle2.Text2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <Image
        src={imgBlogGeneric2}
        width={922}
        height={554}
        alt="Área de piscinas infantiles y de adultos en el Iberostar Selection Cancún, con diferentes niveles de profundidad y zonas de descanso alrededor"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.KnowsCancun.paragraphs2.Text1}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.KnowsCancun.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsCancun.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsCancun.paragraphs3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list1.textBold1}{" "}
          </BT>
          {languageData.KnowsCancun.list1.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list1.textBold2}{" "}
          </BT>
          {languageData.KnowsCancun.list1.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list1.textBold3}{" "}
          </BT>
          {languageData.KnowsCancun.list1.textNormal3}
        </li>
      </ul>

      <SubtitleP>
        {languageData.KnowsCancun.paragraphsbottom3}
      </SubtitleP>

      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list2.textBold1}{" "}
          </BT>
          {languageData.KnowsCancun.list2.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list2.textBold2}{" "}
          </BT>
          {languageData.KnowsCancun.list2.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list2.textBold3}{" "}
          </BT>
          {languageData.KnowsCancun.list2.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list2.textBold4}{" "}
          </BT>
          {languageData.KnowsCancun.list2.textNormal4}
        </li>
      </ul>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsCancun.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsCancun.subtitle4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list3.textBold1}{" "}
          </BT>
          {languageData.KnowsCancun.list3.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list3.textBold2}{" "}
          </BT>
          {languageData.KnowsCancun.list3.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list3.textBold3}{" "}
          </BT>
          {languageData.KnowsCancun.list3.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list3.textBold4}{" "}
          </BT>
          {languageData.KnowsCancun.list3.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list3.textBold5}{" "}
          </BT>
          {languageData.KnowsCancun.list3.textNormal5}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.KnowsCancun.list3.textBold6}{" "}
          </BT>
          {languageData.KnowsCancun.list3.textNormal6}
        </li>
      </ul>

      <SubtitleP>
        {languageData.KnowsCancun.paragraphsbottom4.Text1}
        {" "}
        <BT>
          {languageData.KnowsCancun.paragraphsbottom4.BT}
        </BT>
        {languageData.KnowsCancun.paragraphsbottom4.Text2}
      </SubtitleP>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.KnowsCancun.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.KnowsCancun.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsCancun.subtitle5.Text1}
        {" "}
        <BT>
          {languageData.KnowsCancun.subtitle5.BT}
        </BT>
        {languageData.KnowsCancun.subtitle5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsCancun.paragraphs5.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.KnowsCancun.paragraphs5.Text2}
      </SubtitleP>
    </div>
  );
};
