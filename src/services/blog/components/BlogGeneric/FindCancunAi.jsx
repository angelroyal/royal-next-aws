"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-best-hotel-cancun.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-best-hotel-cancun2.jpg";

export default function DiscoverCancunAi() {

  const { languageData } = useContext(LanguageContext);
  
  return (

    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>
            {languageData.FindCancunAi.mainTitle}
          </TitleH1>
        </div>
        <SubtitleP>
          {languageData.FindCancunAi.subtitle1.Text1}
          <BT>{languageData.FindCancunAi.subtitle1.BT}</BT>
          {languageData.FindCancunAi.subtitle1.Text2}
        </SubtitleP>
        {/* IMAGE 1 */}
        <img
          src={imgBlogGeneric1.src}
          // width={592}
          // height={381}
          alt="Vista en pleno atardecer del hotel HARD ROCK destacando por su impresionante arquitectura."
          className="rounded-lg h-[437px] object-cover w-full my-6"
          priority={true}
        />

        <SubtitleP>
          {languageData.FindCancunAi.paragraphs1.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindCancunAi.paragraphs1.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindCancunAi.paragraphs1.Text3}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>{languageData.FindCancunAi.section2Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindCancunAi.subtitle2.Text1}
          <BT>{languageData.FindCancunAi.subtitle2.BT}</BT>
          {languageData.FindCancunAi.subtitle2.Text2}
        </SubtitleP>
        {/* IMAGE 2 */}
        <img
          src={imgBlogGeneric2.src}
          // width={587}
          // height={374}
          alt="Vista de una banda de rock tocando en el día."
          className="rounded-lg h-[437px] object-cover w-full my-6"
          priority={true}
        />

        <SubtitleP>
          {languageData.FindCancunAi.paragraphs2.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindCancunAi.paragraphs2.Text2}
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.FindCancunAi.section3Title}</TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindCancunAi.subtitle3.Text1}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <BT>{languageData.FindCancunAi.list1.textBold1}</BT>
            {languageData.FindCancunAi.list1.textNormal1}
          </li>
          <li>
            <BT>{languageData.FindCancunAi.list1.textBold2}</BT>
            {languageData.FindCancunAi.list1.textNormal2}
          </li>
          <li>
            <BT>{languageData.FindCancunAi.list1.textBold3}</BT>
            {languageData.FindCancunAi.list1.textNormal3}
          </li>
        </ul>
        <SubtitleP>
          {languageData.FindCancunAi.paragraphBottom1}
        </SubtitleP>
        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>{languageData.FindCancunAi.section4Title}</TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindCancunAi.subtitle4.Text1}
          <BT>{languageData.FindCancunAi.subtitle4.BT}</BT>
          {languageData.FindCancunAi.subtitle4.Text2}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <BT>{languageData.FindCancunAi.list2.textBold1}</BT>
            {languageData.FindCancunAi.list2.textNormal1}
          </li>
          <li>
            <BT>{languageData.FindCancunAi.list2.textBold2}</BT>
            {languageData.FindCancunAi.list2.textNormal2}
          </li>
          <li>
            <BT>{languageData.FindCancunAi.list2.textBold3}</BT>
            {languageData.FindCancunAi.list2.textNormal3}
          </li>
          <li>
            <BT>{languageData.FindCancunAi.list2.textBold4}</BT>
            {languageData.FindCancunAi.list2.textNormal4}
          </li>
          <li>
            <BT>{languageData.FindCancunAi.list2.textBold5}</BT>
            {languageData.FindCancunAi.list2.textNormal5}
          </li>
        </ul>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.FindCancunAi.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.FindCancunAi.section5Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindCancunAi.subtitle5.Text1}
          <BT>{languageData.FindCancunAi.subtitle5.BT}</BT>
          {languageData.FindCancunAi.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindCancunAi.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindCancunAi.paragraphs5.Text2}
        </SubtitleP>
      </div>
    </>
  );
};