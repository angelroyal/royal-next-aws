"use client";
import Image from "next/image";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-nuevo-vallarta-all-inclusive.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-nuevo-vallarta-all-inclusive2.jpg";

export default function DiscoverNuevoVallartaAi() {

  const { languageData } = useContext(LanguageContext);

  return (

    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>
            {languageData.DiscoverNuevoVallartaAi.mainTitle}
          </TitleH1>
        </div>
        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.subtitle1.Text1}
          <BT>{languageData.DiscoverNuevoVallartaAi.subtitle1.BT}</BT>
          {languageData.DiscoverNuevoVallartaAi.subtitle1.Text2}
        </SubtitleP>
        {/* IMAGE 1 */}

        <Image
          src={imgBlogGeneric1}
          width={588}
          height={327}
          alt="Vista de la oriilla del mar en un día completamente soleado con un mar azul profundo."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />
        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.paragraphs1.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.paragraphs1.Text2}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>
            {languageData.DiscoverNuevoVallartaAi.section2Title}
          </TitleH2>
        </div>
        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.subtitle2.Text1}
          <BT>{languageData.DiscoverNuevoVallartaAi.subtitle2.BT}</BT>
        </SubtitleP>

        {/* IMAGE 2 */}

        <Image
          src={imgBlogGeneric2}
          width={585}
          height={389}
          alt="Vista de alberca de un hotel con numerosos camastros. La alberca está iluminada internamente por luces con tonalidades verdes turquesas y moradas."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.paragraphs2.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.paragraphs2.Text2}
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.DiscoverNuevoVallartaAi.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.subtitle3.Text1}
        </SubtitleP>
        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            {languageData.DiscoverNuevoVallartaAi.list1.textNormal1}
          </li>
          <li>
            {languageData.DiscoverNuevoVallartaAi.list1.textNormal2}
          </li>
          <li>
            {languageData.DiscoverNuevoVallartaAi.list1.textNormal3}
          </li>
          <li>
            {languageData.DiscoverNuevoVallartaAi.list1.textNormal4}
          </li>
          <li>
            {languageData.DiscoverNuevoVallartaAi.list1.textNormal5}
          </li>
          <li>
            {languageData.DiscoverNuevoVallartaAi.list1.textNormal6}
          </li>
        </ul>

        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.paragraphBottom1.Text1}
        </SubtitleP>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>
            {languageData.DiscoverNuevoVallartaAi.section4Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.subtitle4.Text1}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>{languageData.DiscoverNuevoVallartaAi.list2.textNormal1}</li>
          <li>{languageData.DiscoverNuevoVallartaAi.list2.textNormal2}</li>
          <li>{languageData.DiscoverNuevoVallartaAi.list2.textNormal3}</li>
          <li>{languageData.DiscoverNuevoVallartaAi.list2.textNormal4}</li>
          <li>{languageData.DiscoverNuevoVallartaAi.list2.textNormal5}</li>
        </ul>
        <SubtitleP>
        {languageData.DiscoverNuevoVallartaAi.paragraphBottom2}
        </SubtitleP>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.DiscoverNuevoVallartaAi.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.DiscoverNuevoVallartaAi.section5Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.subtitle5.Text1}
          <BT>{languageData.DiscoverNuevoVallartaAi.subtitle5.BT}</BT>
          {languageData.DiscoverNuevoVallartaAi.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverNuevoVallartaAi.paragraphs5.Text2}
        </SubtitleP>
      </div>
    </>
  );
};