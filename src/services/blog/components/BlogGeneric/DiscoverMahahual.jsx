"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-mahahual.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-mahahual-1.jpg";

export default function DiscoverMahahual() {

  const { languageData } = useContext(LanguageContext);

  const TableBlog = {
    users: ["Michelle A. Galindo", "Laura Rossi", "Álvaro V.", "Tizi Bianchi"],
    date: ["Abr 2024", "Hace 2 meses", "Hace 3 meses", "Hace 1 año"],
    score: ["5/5", "5/5", "5/5", "5/5"],
    summary: [
      "Me enamoró el lugar y la atención, definitivamente regresaré siempre.",
      "El Hotel está súper bien ubicado y tiene restaurante.Excelente las instalaciones, sobre todo la alberca con una vista espectacular hacia el manglar.",
      "Hotel muy bien ubicado junto a la playa con habitaciones muy confortables. Lo mejor el personal del hotel que fue muy atento y encantador. De lo mejor de la zona.",
      "Hotel nuevo con buena ubicación a 20 metros del mar, tiene alberca en azotea con vista hermosa. Cuartos súper, limpios y confortables. Fue una experiencia fabulosa, gracias.",
    ],
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>{languageData.DiscoverMahahual.mainTitle}</TitleH1>
        </div>
        <SubtitleP>
          {languageData.DiscoverMahahual.subtitle1.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverMahahual.subtitle1.Text2}
          <BT>{languageData.DiscoverMahahual.subtitle1.BT}</BT>
          {languageData.DiscoverMahahual.subtitle1.Text3}
        </SubtitleP>
        {/* IMAGE 1 */}

        <img
          src={imgBlogGeneric1.src}
          // width={587}
          // height={362}
          alt="Vista de un hotel frente al mar en el que se puede observar a numerosas personas disfrutando del día."
          className="rounded-lg h-[437px] object-cover w-full my-6"
          priority={true} 
        />

        <SubtitleP>
          {languageData.DiscoverMahahual.paragraphs1.Text1}
        </SubtitleP>

        <SubtitleP>
        {languageData.DiscoverMahahual.paragraphs1.Text2}
        </SubtitleP>
        {/* ASK */}
        <div className="mt-4">
          <TitleH2>{languageData.DiscoverMahahual.section2Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.DiscoverMahahual.subtitle2.Text1}
          <BT>{languageData.DiscoverMahahual.subtitle2.BT}</BT>
          {languageData.DiscoverMahahual.subtitle2.Text2}
        </SubtitleP>

        {/* IMAGE 2 */}
        <img
          src={imgBlogGeneric2.src}
          // width={589}
          // height={337}
          alt="Vista de una decoración dorada del lobby de uno de los hoteles de Mahahual."
          priority={true} 
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.DiscoverMahahual.paragraphs2.Text1}
        </SubtitleP>
        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.DiscoverMahahual.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.DiscoverMahahual.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverMahahual.subtitle3.Text2}
        </SubtitleP>
        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <BT>{languageData.DiscoverMahahual.list1.textBold1}</BT> 
            {languageData.DiscoverMahahual.list1.textNormal1}
          </li>
          
          <li>
            <BT>{languageData.DiscoverMahahual.list1.textBold2}</BT> 
            {languageData.DiscoverMahahual.list1.textNormal2}
          </li>

          <li>
            <BT>{languageData.DiscoverMahahual.list1.textBold3}</BT> 
            {languageData.DiscoverMahahual.list1.textNormal3}
          </li>
          <li>
            <BT>{languageData.DiscoverMahahual.list1.textBold4}</BT> 
            {languageData.DiscoverMahahual.list1.textNormal4}
          </li>
          <li>
            <BT>{languageData.DiscoverMahahual.list1.textBold5}</BT> 
            {languageData.DiscoverMahahual.list1.textNormal5}
          </li>
          <li>
            <BT>{languageData.DiscoverMahahual.list1.textBold6}</BT> 
            {languageData.DiscoverMahahual.list1.textNormal6}
          </li>
          <li>
            <BT>{languageData.DiscoverMahahual.list1.textBold7}</BT> 
            {languageData.DiscoverMahahual.list1.textNormal7}
          </li>

        </ul>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>
           {languageData.DiscoverMahahual.section4Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.DiscoverMahahual.subtitle4.Text1}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <BT>{languageData.DiscoverMahahual.list2.textBold1}</BT>
            {languageData.DiscoverMahahual.list2.textNormal1}
          </li>
          <li>
            <BT>{languageData.DiscoverMahahual.list2.textBold2}</BT>
            {languageData.DiscoverMahahual.list2.textNormal2}
          </li>
          <li>
            <BT>{languageData.DiscoverMahahual.list2.textBold3}</BT>
            {languageData.DiscoverMahahual.list2.textNormal3}
          </li>
          <li>
            <BT>{languageData.DiscoverMahahual.list2.textBold4}</BT>
            {languageData.DiscoverMahahual.list2.textNormal4}
          </li>
        </ul>

        <SubtitleP>
          {languageData.DiscoverMahahual.paragraphBottom2}
        </SubtitleP>
        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.DiscoverMahahual.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.DiscoverMahahual.section5Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.DiscoverMahahual.subtitle5.Text1}
          <BT>{languageData.DiscoverMahahual.subtitle5.BT}</BT>
          {languageData.DiscoverMahahual.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverMahahual.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverMahahual.paragraphs5.Text2}
        </SubtitleP>
      </div>
    </>
  );
}
