"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/discover-riu-cancun.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/discover-riu-cancun-1.jpg";

export default function DiscoverHotelRiu() {

  const { languageData } = useContext(LanguageContext);

  const TableBlog = {
    users: [
      "Hernán Garrido",
      "Nestora Madrigal",
      "Carlos Enrique A.",
      "Carlos EXITEL MX",
    ],
    date: ["Abr 2024", "Hace 1 mes", "Hace 3 meses", "Hace 5 meses"],
    score: ["5/5", "5/5", "5/5", "5/5"],
    summary: [
      "Excelentes vacaciones. Todo el personal es muy amable y atento a cualquier requerimiento.Las comidas y el ambiente de primer nivel.Una vez más RIU me ha sorprendido. Recomendado 100%",
      "Muy buena ubicación, todo cerca: antros, mercado para recuerditos, farmacias. Y aquí en el hotel riquísima comida y bebidas para todos los gustos. ",
      "Excelente atención. Muy acogedor. Magnífica ubicación. El personal del hotel muy amable, respetuoso y atento a todas las necesidades requeridas. La limpieza en la habitación fue impecable. Además de la comida muy deliciosa y variada. ",
      "Este alojamiento me encantó muchísimo, todo su personal es muy ameno y gentil. En cuanto a la comida, fue muy variada y bien preparada, asimismo las bebidas estaban excelentes. Mis felicitaciones para todos. Muy recomendado este hotel!",
    ],
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>{languageData.DiscoverHotelRiu.mainTitle}</TitleH1>
        </div>
        <SubtitleP>
          {languageData.DiscoverHotelRiu.subtitle1.Text1}
          <BT>{languageData.DiscoverHotelRiu.subtitle1.BT}</BT>
          {languageData.DiscoverHotelRiu.subtitle1.Text2}
        </SubtitleP>

        {/* IMAGE 1 */}

        <img
          src={imgBlogGeneric1.src}
          // width={589}
          // height={409}
          alt="Piscinas y zona de estar en el hotel Riu en Cancún"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.DiscoverHotelRiu.paragraphs1.Text1}
        </SubtitleP>
        <SubtitleP>
        {languageData.DiscoverHotelRiu.paragraphs1.Text2}
        </SubtitleP>
        {/* ASK */}
        <div className="mt-4">
          <TitleH2>{languageData.DiscoverHotelRiu.section2Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.DiscoverHotelRiu.subtitle2.Text1}
        </SubtitleP>

        {/* IMAGE 2 */}

        <img
          src={imgBlogGeneric2.src}
          // width={594}
          // height={373}
          alt="Vista panorámica del Hotel Riu Palace Las Américas"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
         {languageData.DiscoverHotelRiu.paragraphs2.Text1}
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.DiscoverHotelRiu.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.DiscoverHotelRiu.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverHotelRiu.subtitle3.Text2}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            {languageData.DiscoverHotelRiu.list1.textNormal1}
          </li>
          <li>
            {languageData.DiscoverHotelRiu.list1.textNormal2}
          </li>
          <li>
            {languageData.DiscoverHotelRiu.list1.textNormal3}
          </li>
          <li>
            {languageData.DiscoverHotelRiu.list1.textNormal4}
          </li>
          <li>
            {languageData.DiscoverHotelRiu.list1.textNormal5}
          </li>
          <li>
            {languageData.DiscoverHotelRiu.list1.textNormal6}
          </li>
        </ul>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>
            {languageData.DiscoverHotelRiu.section4Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.DiscoverHotelRiu.subtitle4.Text1}
        </SubtitleP>
        <SubtitleP>
        {languageData.DiscoverHotelRiu.subtitle4.Text2}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            {languageData.DiscoverHotelRiu.list2.textNormal1}
          </li>
          <li>
            {languageData.DiscoverHotelRiu.list2.textNormal2}
          </li>
          <li>
            {languageData.DiscoverHotelRiu.list2.textNormal3}
          </li>
          <li>
            {languageData.DiscoverHotelRiu.list2.textNormal4}
          </li>
          <li>
            {languageData.DiscoverHotelRiu.list2.textNormal5}
          </li>
          
        </ul>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.DiscoverHotelRiu.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.DiscoverHotelRiu.section5Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.DiscoverHotelRiu.subtitle5.Text1}
          {languageData.DiscoverHotelRiu.subtitle5.BT}
          {languageData.DiscoverHotelRiu.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.DiscoverHotelRiu.paragraphs5.Text1}
        </SubtitleP>
      </div>
    </>
  );
}
