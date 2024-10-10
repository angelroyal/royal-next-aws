"use client";
import Image from "next/image";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";


import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-cancun-family1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-cancun-family2.png";

export default function FindCancunFamily() {

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>
            {languageData.FindCancunFamily.mainTitle}
          </TitleH1>
        </div>
        <SubtitleP>
          {languageData.FindCancunFamily.subtitle1.Text1}
          <BT>{languageData.FindCancunFamily.subtitle1.BT}</BT>
        </SubtitleP>
        <SubtitleP>
          {languageData.FindCancunFamily.subtitle1.Text2}
        </SubtitleP>
        {/* IMAGE 1 */}

        <Image
          src={imgBlogGeneric1}
          width={925}
          height={418}
          alt="Vista del Restaurante del mejor hotel familiar en Cancún."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />
        <SubtitleP>
          {languageData.FindCancunFamily.paragraphs1.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindCancunFamily.paragraphs1.Text2}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>
            {languageData.FindCancunFamily.section2Title}
          </TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindCancunFamily.subtitle2.Text1}
        </SubtitleP>

        {/* IMAGE 2 */}

        <Image
          src={imgBlogGeneric2}
          width={913}
          height={564}
          alt="Vista panorámica del hotel familiar Grand Fiesta Americana Coral Beach Cancún"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindCancunFamily.paragraphs2.Text1}
          <BT>
            {languageData.FindCancunFamily.paragraphs2.BT}
          </BT>
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.FindCancunFamily.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindCancunFamily.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindCancunFamily.subtitle3.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindCancunFamily.subtitle3.Text3}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindCancunFamily.list1.textBold1}
            </b>
            {languageData.FindCancunFamily.list1.textNormal1}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindCancunFamily.list1.textBold2}
            </b>
            {languageData.FindCancunFamily.list1.textNormal2}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindCancunFamily.list1.textBold3}
            </b>
            {languageData.FindCancunFamily.list1.textNormal3}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindCancunFamily.list1.textBold4}
            </b>
            {languageData.FindCancunFamily.list1.textNormal4}
          </li>
        </ul>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>
            {languageData.FindCancunFamily.section4Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindCancunFamily.subtitle4.Text1}
        </SubtitleP>

        <SubtitleP>
          {languageData.FindCancunFamily.subtitle4.Text2}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindCancunFamily.list1.textBold1}
            </b>
            {languageData.FindCancunFamily.list1.textNormal1}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindCancunFamily.list1.textBold2}
            </b>
            {languageData.FindCancunFamily.list1.textNormal2}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindCancunFamily.list1.textBold3}
            </b>
            {languageData.FindCancunFamily.list1.textNormal3}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindCancunFamily.list1.textBold4}
            </b>
            {languageData.FindCancunFamily.list1.textNormal4}
          </li>
        </ul>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.FindCancunFamily.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>
          {languageData.FindCancunFamily.section5Title}
          </TitleH2>
        </div>
        <SubtitleP>
        {languageData.FindCancunFamily.subtitle5.Text1}
        <BT>
        {languageData.FindCancunFamily.subtitle5.BT}
        </BT>
        {languageData.FindCancunFamily.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindCancunFamily.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindCancunFamily.paragraphs5.Text2}
        </SubtitleP>
      </div>
    </>
  );
}
