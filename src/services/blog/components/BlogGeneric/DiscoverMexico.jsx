"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-mexico1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-mexico2.png";

export default function DiscoverMexico() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.DiscoverMexico.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        {languageData.DiscoverMexico.subtitle1.Text1} {" "}
        <BT>
          {languageData.DiscoverMexico.subtitle1.BT}
        </BT>
        {" "}
        {languageData.DiscoverMexico.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <img
        src={imgBlogGeneric1.src}
        // width={918}
        // height={544}
        alt="Vista de la entrada principal del mejor hotel de la Ciudad de México"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverMexico.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverMexico.paragraphs1.Text2}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverMexico.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverMexico.subtitle2.Text1} {" "}
        <BT>
          {languageData.DiscoverMexico.subtitle2.BT}
        </BT>
        {" "}
      </SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={imgBlogGeneric2.src}
        // width={923}
        // height={569}
        alt="Vista de entrada principal del hote Four Seasons Hotel México City"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverMexico.paragraphs2.Text1}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.DiscoverMexico.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverMexico.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverMexico.paragraphs2.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.DiscoverMexico.paragraphs2.Text2}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list1.textBold1}{" "}
          </BT>
          {languageData.DiscoverMexico.list1.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list1.textBold2}{" "}
          </BT>
          {languageData.DiscoverMexico.list1.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list1.textBold3}{" "}
          </BT>
          {languageData.DiscoverMexico.list1.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list1.textBold4}{" "}
          </BT>
          {languageData.DiscoverMexico.list1.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list1.textBold5}{" "}
          </BT>
          {languageData.DiscoverMexico.list1.textNormal5}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list1.textBold6}{" "}
          </BT>
          {languageData.DiscoverMexico.list1.textNormal6}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list1.textBold7}{" "}
          </BT>
          {languageData.DiscoverMexico.list1.textNormal7}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list1.textBold8}{" "}
          </BT>
          {languageData.DiscoverMexico.list1.textNormal8}
        </li>
      </ul>

      <SubtitleP>
        {languageData.DiscoverMexico.paragraphsbottom3}
      </SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverMexico.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverMexico.subtitle4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list2.textBold1}{" "}
          </BT>
          {languageData.DiscoverMexico.list2.textNormal1}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list2.textBold2}{" "}
          </BT>
          {languageData.DiscoverMexico.list2.textNormal2}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list2.textBold3}{" "}
          </BT>
          {languageData.DiscoverMexico.list2.textNormal3}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list2.textBold4}{" "}
          </BT>
          {languageData.DiscoverMexico.list2.textNormal4}
        </li>

        <li>
          <BT className="text-black text-fs-16">
            {languageData.DiscoverMexico.list2.textBold5}{" "}
          </BT>
          {languageData.DiscoverMexico.list2.textNormal5}
        </li>

      </ul>

      <SubtitleP>
        {languageData.DiscoverMexico.paragraphsbottom4}
      </SubtitleP>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.DiscoverMexico.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.DiscoverMexico.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverMexico.subtitle5.Text1} {" "}
        <BT>
          {languageData.DiscoverMexico.subtitle5.BT}
        </BT>
        {" "}
        {languageData.DiscoverMexico.subtitle5.Text2} {" "}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverMexico.paragraphs5}
      </SubtitleP>
    </div>
  );
};