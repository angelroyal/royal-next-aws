"use client";

import Image from "next/image";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-puerto-vallarta1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-puerto-vallarta2.png";

export default function FindPuertoVallarta() {

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>
            {languageData.FindPuertoVallarta.mainTitle}
          </TitleH1>
        </div>
        <SubtitleP>
          {languageData.FindPuertoVallarta.subtitle1.Text1}
          <BT>{languageData.FindPuertoVallarta.subtitle1.BT}</BT>
          {languageData.FindPuertoVallarta.subtitle1.Text2}
        </SubtitleP>
        {/* IMAGE 1 */}

        <Image
          src={imgBlogGeneric1}
          width={913}
          height={559}
          alt="Malecón de puerto vallarta, ubicado en las costas de méxico"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />
        <SubtitleP>
          {languageData.FindPuertoVallarta.paragraphs1.Text1}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>
            {languageData.FindPuertoVallarta.section2Title}
          </TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindPuertoVallarta.subtitle2.Text1}
        </SubtitleP>

        {/* IMAGE 2 */}

        <Image
          src={imgBlogGeneric2}
          width={926}
          height={526}
          alt="Vista de la entrada principal del hotel Hilton Vallarta Riviera All-Inclusive Resort"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindPuertoVallarta.paragraphs2.Text1}
          {languageData.FindPuertoVallarta.paragraphs2.BT}
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.FindPuertoVallarta.sectio3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindPuertoVallarta.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindPuertoVallarta.subtitle3.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindPuertoVallarta.subtitle3.Text3}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoVallarta.list1.textBold1}
            </b>
            {languageData.FindPuertoVallarta.list1.textNormal1}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoVallarta.list1.textBold2}
            </b>
            {languageData.FindPuertoVallarta.list1.textNormal2}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoVallarta.list1.textBold3}
            </b>
            {languageData.FindPuertoVallarta.list1.textNormal3}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoVallarta.list1.textBold4}
            </b>
            {languageData.FindPuertoVallarta.list1.textNormal4}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoVallarta.list1.textBold5}
            </b>
            {languageData.FindPuertoVallarta.list1.textNormal5}
          </li>
        </ul>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>
            {languageData.FindPuertoVallarta.sectio4Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindPuertoVallarta.subtitle4.Text1}
          <BT>{languageData.FindPuertoVallarta.subtitle4.BT}</BT>
          {languageData.FindPuertoVallarta.subtitle4.Text2}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoVallarta.list2.textBold1}
            </b>
            {languageData.FindPuertoVallarta.list2.textNormal1}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoVallarta.list2.textBold2}
            </b>
            {languageData.FindPuertoVallarta.list2.textNormal2}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoVallarta.list2.textBold3}
            </b>
            {languageData.FindPuertoVallarta.list2.textNormal3}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoVallarta.list2.textBold4}
            </b>
            {languageData.FindPuertoVallarta.list2.textNormal4}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindPuertoVallarta.list2.textBold5}
            </b>
            {languageData.FindPuertoVallarta.list2.textNormal5}
          </li>

        </ul>

        <SubtitleP>
          {languageData.FindPuertoVallarta.paragraphBottom1}
        </SubtitleP>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.FindPuertoVallarta.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>
          {languageData.FindPuertoVallarta.sectio5Title}
          </TitleH2>
        </div>
        <SubtitleP>
        {languageData.FindPuertoVallarta.subtitle5.Text1}
        <BT>
        {languageData.FindPuertoVallarta.subtitle5.BT}
        </BT>
        {languageData.FindPuertoVallarta.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindPuertoVallarta.paragraphs5.Text1}
        </SubtitleP>
      </div>
    </>
  );
}
