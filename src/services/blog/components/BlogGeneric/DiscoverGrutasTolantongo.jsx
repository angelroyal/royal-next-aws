"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-grutas-de-tolantongo.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-grutas-de-tolantongo-2.jpg";

export default function DiscoverGrutasTolantongo() {

  const { languageData } = useContext(LanguageContext);

  // ARRAY TABLE BLOG
  const TableBlog = {
    users: [
      "María Eonice Esquivel Sánchez",
      "Jorge Neymar Córdova",
      "Nere Ramírez",
      "José Ángel Manríquez",
      "Manuel de Jesús García",
      "Cesar Jhosef Arellano",
    ],
    date: [
      "Hace 1 mes",
      "Hace 9 meses",
      "Hace 9 meses",
      "Hace 9 meses",
      "Hace 9 meses",
      "Hace 9 meses",
    ],
    score: ["5/5", "5/5", "5/5", "5/5", "5/5", "5/5"],
    summary: [
      "Cómodo seguro tranquilo y bello lugar.",
      "Este hotel está súper lindo. Muy bonitas sus habitaciones, muy ordenadas. Y además todo muy limpio y arreglado.. súper recomendable este hotel la verdad.",
      "Excelente lugar para pasar los días, me agradó mucho el servicio. Son muy amables y atentos.",
      "Es un excelente lugar para pasarla bien en familia y un lugar muy cómodo se les recomienda. Tienen un muy buen servicio.",
      "Excelente relación costo/beneficio Muy bien ubicado, limpio y con una sólida sensación de Seguridad. Altamente recomendable.",
      "Es impecable, tiene buenos precios y una gran vista para relajarse y tener unas vacaciones increíbles, es recomendable el lugar.",
    ],
  };

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>
          {languageData.DiscoverGrutasTolantongo.mainTitle}
        </TitleH1>
      </div>
      <SubtitleP>
        {languageData.DiscoverGrutasTolantongo.subtitle1.Text1}
       <BT>
        {languageData.DiscoverGrutasTolantongo.subtitle1.BT}
       </BT>
       {languageData.DiscoverGrutasTolantongo.subtitle1.Text2}
      </SubtitleP>
      {/* IMAGE 1 */}

      <img
        src={imgBlogGeneric1.src}
        // width={587}
        // height={391}
        alt="Vista de Grutas Tolantongo en el cual hay algunas personas dentro del agua pasando un momento agradable."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverGrutasTolantongo.paragraphs1.Text1}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>{languageData.DiscoverGrutasTolantongo.section2Title}</TitleH2>
      </div>
      <SubtitleP>
        {languageData.DiscoverGrutasTolantongo.subtitle2.Text1}
        <BT>{languageData.DiscoverGrutasTolantongo.subtitle2.BT}</BT>
        {languageData.DiscoverGrutasTolantongo.subtitle2.Text2}
      </SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={imgBlogGeneric2.src}
        // width={591}
        // height={392}
        alt="Vista de un cuarto de hotel acogedor en el cual se observan 2 camas y una miniatura de la vista del balcón."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverGrutasTolantongo.paragraphs2.Text1}
        {languageData.DiscoverGrutasTolantongo.paragraphs2.BT}
        {languageData.DiscoverGrutasTolantongo.paragraphs2.Text2}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.DiscoverGrutasTolantongo.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverGrutasTolantongo.subtitle3.Text1}
      </SubtitleP>
      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <b className="text-black text-fs-16">{languageData.DiscoverGrutasTolantongo.list1.textBold1}</b>
          {languageData.DiscoverGrutasTolantongo.list1.textNormal1}
        </li>
        <li>
          <b className="text-black text-fs-16">{languageData.DiscoverGrutasTolantongo.list1.textBold2}</b>
          {languageData.DiscoverGrutasTolantongo.list1.textNormal2}
        </li>
        <li>
          <b className="text-black text-fs-16">{languageData.DiscoverGrutasTolantongo.list1.textBold3}</b>
          {languageData.DiscoverGrutasTolantongo.list1.textNormal3}
        </li>
        
      </ul>

      <SubtitleP>
        {languageData.DiscoverGrutasTolantongo.paragraphBottom1}
      </SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>{languageData.DiscoverGrutasTolantongo.section4Title}</TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverGrutasTolantongo.subtitle4.Text1}
        <BT>{languageData.DiscoverGrutasTolantongo.subtitle4.BT}</BT>
        {languageData.DiscoverGrutasTolantongo.section4Title.Text2}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <b className="text-black text-fs-16">{languageData.DiscoverGrutasTolantongo.list2.textBold1}</b>
          {languageData.DiscoverGrutasTolantongo.list2.textNormal1}
        </li>
        <li>
          <b className="text-black text-fs-16">{languageData.DiscoverGrutasTolantongo.list2.textBold2}</b>
          {languageData.DiscoverGrutasTolantongo.list2.textNormal3}
        </li>
        <li>
          <b className="text-black text-fs-16">{languageData.DiscoverGrutasTolantongo.list2.textBold3}</b>
          {languageData.DiscoverGrutasTolantongo.list2.textNormal3}
        </li>
        <li>
          <b className="text-black text-fs-16">{languageData.DiscoverGrutasTolantongo.list2.textBold4}</b>
          {languageData.DiscoverGrutasTolantongo.list2.textNormal4}
        </li>
      </ul>
      <SubtitleP>
        {languageData.DiscoverGrutasTolantongo.paragraphBottom2}
      </SubtitleP>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.DiscoverGrutasTolantongo.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>{languageData.DiscoverGrutasTolantongo.section5Title}</TitleH2>
      </div>
      <SubtitleP>
        {languageData.DiscoverGrutasTolantongo.subtitle5.Text1}
        <BT>{languageData.DiscoverGrutasTolantongo.subtitle5.BT}</BT>
        {languageData.DiscoverGrutasTolantongo.subtitle5.Text2}
      </SubtitleP>
      <SubtitleP>
       {languageData.DiscoverGrutasTolantongo.paragraphs5.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.DiscoverGrutasTolantongo.paragraphs5.Text2}
      </SubtitleP>
    </div>
  );
}
