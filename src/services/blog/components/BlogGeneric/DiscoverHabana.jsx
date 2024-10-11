"use client";

import Image from "next/image";

// Use Context Language
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-habana1.jpg";

import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-habana2.jpg";

export default function DiscoverHabana() {
  // RICHI
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}

      <div className="mb-6">
        <TitleH1>
          {languageData.DiscoverHabana.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        <BT>{languageData.DiscoverHabana.subtitle1.BT}</BT>
        {languageData.DiscoverHabana.subtitle1.Text1}
      </SubtitleP>

      {/* IMAGE 1 */}
      <img
        src={imgBlogGeneric1.src}
        // width={916}
        // height={600}
        alt="Imagen de estatua de bronce entre un grupo de personas a plena luz del día."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* paragraphs1 */}
      <SubtitleP>
        {languageData.DiscoverHabana.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverHabana.paragraphs1.Text2}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverHabana.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.FindQueretaro.subtitle2.Text1}
        <BT>{languageData.FindQueretaro.subtitle2.BT}</BT>
        {languageData.FindQueretaro.subtitle2.Text2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={imgBlogGeneric2.src}
        // width={923}
        // height={547}
        alt="find queretaro"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* paragraphs2 */}
      <SubtitleP>
        {languageData.FindQueretaro.paragraphs2.Text1}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.DiscoverHabana.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverHabana.subtitle3.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverHabana.subtitle3.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverHabana.subtitle3.Text3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list1.textBold1}</b>
          {languageData.DiscoverHabana.list1.textNormal1}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list1.textBold2}
          </b>
          {languageData.DiscoverHabana.list1.textNormal2}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list1.textBold3}
          </b>
          {languageData.DiscoverHabana.list1.textNormal3}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list1.textBold4}
          </b>
          {languageData.DiscoverHabana.list1.textNormal4}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list1.textBold5}{" "}
          </b>
          {languageData.DiscoverHabana.list1.textNormal5}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list1.textBold6}{" "}
          </b>
          {languageData.DiscoverHabana.list1.textNormal6}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list1.textBold7}{" "}
          </b>
          {languageData.DiscoverHabana.list1.textNormal7}
        </li>

      </ul>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.DiscoverHabana.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverHabana.subtitle4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">

      <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list2.textBold1}
          </b>
          {languageData.FindQueretaro.list2.textNormal1}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list2.textBold2}
          </b>
          {languageData.DiscoverHabana.list2.textNormal2}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list2.textBold3}
          </b>
          {languageData.DiscoverHabana.list2.textNormal3}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list2.textBold4}
          </b>
          {languageData.DiscoverHabana.list2.textNormal4}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.DiscoverHabana.list2.textBold5}
          </b>
          {languageData.DiscoverHabana.list2.textNormal5}
        </li>
    
      </ul>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.DiscoverHabana.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.DiscoverHabana.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverHabana.subtitle5.Text}
        <BT>{languageData.DiscoverHabana.subtitle5.BT}</BT>
        {languageData.DiscoverHabana.subtitle5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.DiscoverHabana.paragraphs5.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.DiscoverHabana.paragraphs5.Text2}
      </SubtitleP>
      <SubtitleP>
      {languageData.DiscoverHabana.paragraphs5.Text3}
      </SubtitleP>
    </div>
  );
}
