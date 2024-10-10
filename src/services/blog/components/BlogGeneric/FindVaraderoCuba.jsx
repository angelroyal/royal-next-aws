"use client";

import Image from "next/image";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-varadero-cuba1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-varadero-cuba2.png";

export default function FindVaraderoCuba() {

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>
            {languageData.FindVaraderoCuba.mainTitle}
          </TitleH1>
        </div>
        <SubtitleP>
          {languageData.FindVaraderoCuba.subtitle1.Text1}
          <BT>{languageData.FindVaraderoCuba.subtitle1.BT}</BT>
        </SubtitleP>
        {/* IMAGE 1 */}

        <Image
          src={imgBlogGeneric1}
          width={914}
          height={578}
          alt="Vista panorámica del mejor hotel en Varadero, Cuba con vista al mar"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />
        <SubtitleP>
          {languageData.FindVaraderoCuba.paragraphs1.Text1}
        </SubtitleP>

        <SubtitleP>
          {languageData.FindVaraderoCuba.paragraphs1.Text2}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>
            {languageData.FindVaraderoCuba.section2Title}
          </TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindVaraderoCuba.subtitle2.Text1}
          <BT>
            {languageData.FindVaraderoCuba.subtitle2.BT}
          </BT>
          {languageData.FindVaraderoCuba.subtitle2.Text2}
        </SubtitleP>

        {/* IMAGE 2 */}

        <Image
          src={imgBlogGeneric2}
          width={920}
          height={613}
          alt="Área de piscinas y zona de descanso del hotel Sol Varadero Beach"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindVaraderoCuba.paragraphs2.Text1}
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.FindVaraderoCuba.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindVaraderoCuba.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindVaraderoCuba.subtitle3.Text2}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            {languageData.FindVaraderoCuba.list1.textNormal1}
          </li>
          <li>
            {languageData.FindVaraderoCuba.list1.textNormal2}
          </li>
          <li>
            {languageData.FindVaraderoCuba.list1.textNormal3}
          </li>
          <li>
            {languageData.FindVaraderoCuba.list1.textNormal4}
          </li>
          <li>
            {languageData.FindVaraderoCuba.list1.textNormal5}
          </li>
          <li>
            {languageData.FindVaraderoCuba.list1.textNormal6}
          </li>
        </ul>
        <SubtitleP>
          {languageData.FindVaraderoCuba.paragraphBottom1.Text1}
        </SubtitleP>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>
          {languageData.FindVaraderoCuba.section4Title}
          </TitleH2>
        </div>

        <SubtitleP>
        {languageData.FindVaraderoCuba.subtitle4.Text1}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindVaraderoCuba.subtitle4.Text2}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
            {languageData.FindVaraderoCuba.list2.textNormal1}
          </li>
          <li>
            {languageData.FindVaraderoCuba.list2.textNormal2}
          </li>
          <li>
            {languageData.FindVaraderoCuba.list2.textNormal3}
          </li>
          <li>
            {languageData.FindVaraderoCuba.list2.textNormal4}
          </li>
          <li>
            {languageData.FindVaraderoCuba.list2.textNormal5}
          </li>
        </ul>

        <SubtitleP>
          {languageData.FindVaraderoCuba.paragraphBottom2.Text1}
        </SubtitleP>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.FindVaraderoCuba.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>
          {languageData.FindVaraderoCuba.sectio5Title}
          </TitleH2>
        </div>
        <SubtitleP>
        {languageData.FindVaraderoCuba.subtitle5.Text1}
        <BT>
        {languageData.FindVaraderoCuba.subtitle5.BT}
        </BT>
        {languageData.FindVaraderoCuba.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindVaraderoCuba.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindVaraderoCuba.paragraphs5.Text2}
        </SubtitleP>
      </div>
    </>
  );
}
