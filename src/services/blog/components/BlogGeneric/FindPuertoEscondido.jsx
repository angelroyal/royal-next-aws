"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-puerto-escondido1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-puerto-escondido2.png";

export default function FindPuertoEscondido() {

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>
            {languageData.FindPuertoEscondido.mainTitle}
          </TitleH1>
        </div>
        <SubtitleP>
          {languageData.FindPuertoEscondido.subtitle1.Text1}
          <BT>
            {languageData.FindPuertoEscondido.subtitle1.BT}
          </BT>,
          {languageData.FindPuertoEscondido.subtitle1.Text2}
        </SubtitleP>
        {/* IMAGE 1 */}

        <img
          src={imgBlogGeneric1.src}
          // width={923}
          // height={566}
          alt="Vista panorámica del lujoso hotel en Puerto Escondido"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />
        <SubtitleP>
          {languageData.FindPuertoEscondido.paragraphs1.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindPuertoEscondido.paragraphs1.Text2}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>
            {languageData.FindPuertoEscondido.section2Title}
          </TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindPuertoEscondido.subtitle2.Text1}
          <BT>
            {languageData.FindPuertoEscondido.subtitle1.BT}
          </BT>
          {languageData.FindPuertoEscondido.subtitle1.Text2}
        </SubtitleP>

        {/* IMAGE 2 */}

        <img
          src={imgBlogGeneric2.src}
          // width={926}
          // height={574}
          alt="Vista de la entrada principal del hotel Vivo Resorts"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindPuertoEscondido.paragraphs2.Text1}
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.FindPuertoEscondido.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindPuertoEscondido.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindPuertoEscondido.subtitle3.Text2}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoEscondido.list1.textBold1}
            </b>
            {languageData.FindPuertoEscondido.list1.textNormal1}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoEscondido.list1.textBold2}
            </b>
            {languageData.FindPuertoEscondido.list1.textNormal2}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoEscondido.list1.textBold3}
            </b>
            {languageData.FindPuertoEscondido.list1.textNormal3}
          </li>
          {languageData.FindPuertoEscondido.list1.Text1}
          <li>
            {languageData.FindPuertoEscondido.list1.textNormal4}
          </li>
          <li>
            {languageData.FindPuertoEscondido.list1.textNormal5}
          </li>
          <li>
            {languageData.FindPuertoEscondido.list1.textNormal6}
          </li>
          <li>
            {languageData.FindPuertoEscondido.list1.textNormal7}
          </li>
          <li>
            {languageData.FindPuertoEscondido.list1.textNormal8}
          </li>
          <li>
            {languageData.FindPuertoEscondido.list1.textNormal9}
          </li>
          <li>
            {languageData.FindPuertoEscondido.list1.textNormal10}
          </li>
        </ul>
        <SubtitleP>
          {languageData.FindPuertoEscondido.paragraphBottom1}
        </SubtitleP>

        
        {/* WHAT ARE THE FACILITIES */}

        <div className="mt-4">
          <TitleH2>
            {languageData.FindPuertoEscondido.section3Title}
          </TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindPuertoEscondido.subtitle4.Text1}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoEscondido.list2.textBold1}
            </b>
            {languageData.FindPuertoEscondido.list2.textNormal1}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoEscondido.list2.textBold2}
            </b>
            {languageData.FindPuertoEscondido.list2.textNormal2}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoEscondido.list2.textBold3}
            </b>
            {languageData.FindPuertoEscondido.list2.textNormal3}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoEscondido.list2.textBold4}
            </b>
            {languageData.FindPuertoEscondido.list2.textNormal4}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoEscondido.list2.textBold5}
            </b>
            {languageData.FindPuertoEscondido.list2.textNormal5}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoEscondido.list2.textBold6}
            </b>
            {languageData.FindPuertoEscondido.list2.textNormal6}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoEscondido.list2.textBold7}
            </b>
            {languageData.FindPuertoEscondido.list2.textNormal7}
          </li>
        </ul>
        <SubtitleP>
        {languageData.FindPuertoEscondido.paragraphBottom2}
        </SubtitleP>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.FindPuertoEscondido.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.FindPuertoEscondido.section5Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindPuertoEscondido.subtitle5.Text1}
          <BT>
          {languageData.FindPuertoEscondido.subtitle5.BT}
          </BT>
          {languageData.FindPuertoEscondido.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindPuertoEscondido.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindPuertoEscondido.paragraphs5.Text2}
        </SubtitleP>
      </div>
    </>
  );
}
