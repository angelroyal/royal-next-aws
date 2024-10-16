"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-los-cabos-san-lucas.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-los-cabos-san-lucas-1.jpg";

export default function DiscoverLosCabosSanLucas() {

  const { languageData } = useContext(LanguageContext);

  const TableBlog = {
    users: [
      "Erick Díaz",
      "Gabriel Obregón González",
      "Irene Azua",
      "Carmen Kotch",
    ],
    date: ["Hace 1 mes", "Hace 3 meses", "Hace 6 meses", "Hace 8 meses"],
    score: ["5/5", "5/5", "5/5", "5/5"],
    summary: [
      "Cómodo seguro tranquilo y bello lugar.",
      "Este hotel está súper lindo. Muy bonitas sus habitaciones, muy ordenadas. Y además todo muy limpio y arreglado.. súper recomendable este hotel la verdad.",
      "Excelente lugar para pasar los días, me agradó mucho el servicio. Son muy amables y atentos.",
      "Es un excelente lugar para pasarla bien en familia y un lugar muy cómodo se les recomienda. Tienen un muy buen servicio.",
    ],
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>
            {languageData.DiscoverLosCabosSanLucas.mainTitle}
          </TitleH1>
        </div>
        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.subtitle1.Text1}
          <BT>{languageData.DiscoverLosCabosSanLucas.subtitle1.BT}</BT>
          {languageData.DiscoverLosCabosSanLucas.subtitle1.Text2}
        </SubtitleP>
        {/* IMAGE 1 */}

        <img
          src={imgBlogGeneric1.src}
          // width={586}
          // height={397}
          alt="Vista del profundo mar azul de Los Cabos en el cual se puede ver la cola de una ballena saliendo a superficie."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.paragraphs1.Text1}
        </SubtitleP>

        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.paragraphs1.Text2}
          
        </SubtitleP>
        {/* ASK */}
        <div className="mt-4">
          <TitleH2>{languageData.DiscoverLosCabosSanLucas.section2Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.subtitle2.Text1}
          <BT>{languageData.DiscoverLosCabosSanLucas.subtitle2.BT}</BT>
          {languageData.DiscoverLosCabosSanLucas.subtitle2.Text2}
        </SubtitleP>

        {/* IMAGE 2 */}
        <img
          src={imgBlogGeneric2.src}
          // width={582}
          // height={392}
          alt="Vista de una alberca en uno de los hoteles de Los Cabos San Lucas en el que hay camastros junto a sus cortinas. El día es soleado."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.paragraphs2.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.paragraphs2.Text2}
        </SubtitleP>
        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.DiscoverLosCabosSanLucas.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
        {languageData.DiscoverLosCabosSanLucas.subtitle3.Text2}
        </SubtitleP>
        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            {languageData.DiscoverLosCabosSanLucas.list1.textNormal1}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list1.textNormal2}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list1.textNormal3}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list1.textNormal4}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list1.textNormal5}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list1.textNormal6}
          </li>
        </ul>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>{languageData.DiscoverLosCabosSanLucas.section4Title}</TitleH2>
        </div>

        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.subtitle4.Text1}
          <BT>{languageData.DiscoverLosCabosSanLucas.subtitle4.BT}</BT>
          {languageData.DiscoverLosCabosSanLucas.subtitle4.Text2}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            {languageData.DiscoverLosCabosSanLucas.list2.textNormal1}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list2.textNormal2}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list2.textNormal3}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list2.textNormal4}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list2.textNormal5}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list2.textNormal6}
          </li>
          <li>
            {languageData.DiscoverLosCabosSanLucas.list2.textNormal7}
          </li>
        </ul>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.DiscoverLosCabosSanLucas.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.DiscoverLosCabosSanLucas.section5Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.subtitle5.Text1}
          <BT>{languageData.DiscoverLosCabosSanLucas.subtitle5.BT}</BT>
          {languageData.DiscoverLosCabosSanLucas.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverLosCabosSanLucas.paragraphs5.Text2}
        </SubtitleP>
      </div>
    </>
  );
}
