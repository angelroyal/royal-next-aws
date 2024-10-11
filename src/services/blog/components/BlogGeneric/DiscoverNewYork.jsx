
"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-new-york.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-new-york-1.jpg";

export default function DiscoverNewYork() {
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>{languageData.DiscoverNewYork.mainTitle}</TitleH1>
        </div>
        <SubtitleP>
          {languageData.DiscoverNewYork.subtitle1.Text1}
          {languageData.DiscoverNewYork.subtitle1.BT}
          {languageData.DiscoverNewYork.subtitle1.Text2}
        </SubtitleP>

        <SubtitleP>
          {languageData.DiscoverNewYork.paragraphs1.Text3}
        </SubtitleP>
        {/* IMAGE 1 */}

        <img
          src={imgBlogGeneric1.src}
          // width={589}
          // height={364}
          alt="Área de piscinas y zona de descanso en el mejor hotel para hospedarse en Nueva York"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.DiscoverNewYork.paragraphs1.Text1}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>{languageData.DiscoverNewYork.section2Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.DiscoverNewYork.subtitle2.Text1}
          {languageData.DiscoverNewYork.subtitle2.BT}
          {languageData.DiscoverNewYork.subtitle2.Text2}
        </SubtitleP>

        {/* IMAGE 2 */}
        <img
          src={imgBlogGeneric2.src}
          // width={584}
          // height={364}
          alt="Vista del la habitación del hotel The Dominick Hotel"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.DiscoverNewYork.paragraphs2.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverNewYork.paragraphs2.Text2}
        </SubtitleP>
        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.DiscoverNewYork.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.DiscoverNewYork.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverNewYork.subtitle3.Text2}
        </SubtitleP>
        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <BT>{languageData.DiscoverNewYork.list1.textBold1}</BT>
            {languageData.DiscoverNewYork.list1.textNormal1}
          </li>
          <li>
            <BT>{languageData.DiscoverNewYork.list1.textBold2}</BT>
            {languageData.DiscoverNewYork.list1.textNormal2}
          </li>
          <li>
            <BT>{languageData.DiscoverNewYork.list1.textBold3}</BT>
            {languageData.DiscoverNewYork.list1.textNormal3}
          </li>
        </ul>
        <SubtitleP>
          {languageData.DiscoverNewYork.list1.Text1}
        </SubtitleP>

        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <BT>{languageData.DiscoverNewYork.list1.textBold4}</BT>
            {languageData.DiscoverNewYork.list1.textNormal4}
          </li>
          <li>
            <BT>{languageData.DiscoverNewYork.list1.textBold5}</BT>
            {languageData.DiscoverNewYork.list1.textNormal5}
          </li>
          <li>
            <BT>{languageData.DiscoverNewYork.list1.textBold6}</BT>
            {languageData.DiscoverNewYork.list1.textNormal6}
          </li>
          <li>
            <BT>{languageData.DiscoverNewYork.list1.textBold7}</BT>
            {languageData.DiscoverNewYork.list1.textNormal7}
          </li>
          <li>
            <BT>{languageData.DiscoverNewYork.list1.textBold8}</BT>
            {languageData.DiscoverNewYork.list1.textNormal8}
          </li>
        </ul>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>
            {languageData.DiscoverNewYork.section4Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.DiscoverNewYork.subtitle4.Text1}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <BT>{languageData.DiscoverNewYork.list2.textBold1}</BT>
            {languageData.DiscoverNewYork.list2.textNormal1}
          </li>
          <li>
            <BT>{languageData.DiscoverNewYork.list2.textBold2}</BT>
            {languageData.DiscoverNewYork.list2.textNormal2}
          </li>
          <li>
            <BT>{languageData.DiscoverNewYork.list2.textBold3}</BT>
            {languageData.DiscoverNewYork.list2.textNormal3}
          </li>
          <li>
            <BT>{languageData.DiscoverNewYork.list2.textBold4}</BT>
            {languageData.DiscoverNewYork.list2.textNormal4}
          </li>
          <li>
            <BT>{languageData.DiscoverNewYork.list2.textBold5}</BT>
            {languageData.DiscoverNewYork.list2.textNormal5}
          </li>
        </ul>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.DiscoverNewYork.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.DiscoverNewYork.section5Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.DiscoverNewYork.subtitle5.Text1}
          <BT>{languageData.DiscoverNewYork.subtitle5.BT}</BT>
          {languageData.DiscoverNewYork.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverNewYork.paragraphs5.Text1}
        </SubtitleP>
      </div>
    </>
  );
}
