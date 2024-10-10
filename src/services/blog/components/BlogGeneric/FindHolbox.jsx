"use client";
import Image from "next/image";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-holbox1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-holbox2.png";

export default function FindHolbox() {

  const { languageData } = useContext(LanguageContext);

  // ARRAY TABLE BLOG

  const TableBlog = {
    users: ["Estela Najar", "Mangoide Mv", "María P.", "Jaidy CM"],
    date: ["Hace Abr 2024", "Hace Abr 2024", "Hace 2 meses", "Hace 8 meses"],
    score: ["5/5", "5/5", "5/5", "5/5"],
    summary: [
      "Nos encantó pasar unos días en el hotel. Fuimos a celebrar nuestro aniversario y tuvieron el detalle de dejarnos una botella de champaña en la habitación. La atención y el servicio que recibimos en el hotel es excelente.",
      "Hotel increíble, muy buenas instalaciones y la amabilidad de los empleados es impresionante. Muy recomendable.",
      "Sin duda el mejor hotel de la región. Habitación con un atardecer inolvidable. Al llegar encontramos un kit pequeño de bienvenida, además el agua de beber nunca faltaba.",
      "El lugar es hermoso, con fácil acceso a la playa y vistas espectaculares. La comida del restaurante del hotel estuvo deliciosa, sobre todo el desayuno. En este alojamiento tienes de todo para que disfrutes y descanses; ni siquiera te hará falta salir del establecimiento.",
    ],
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>{languageData.FindHolbox.mainTitle}</TitleH1>
        </div>
        <SubtitleP>
          {languageData.FindHolbox.subtitle1.Text1}
          <BT>{languageData.FindHolbox.subtitle1.BT}</BT>
          {languageData.FindHolbox.subtitle1.Text2}
        </SubtitleP>
        {/* IMAGE 1 */}

        <Image
          src={imgBlogGeneric1}
          width={920}
          height={533}
          alt="Vista al mar desde la habitación del mejor hotel en Holbox"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />
        <SubtitleP>
          {languageData.FindHolbox.paragraphs1.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindHolbox.paragraphs1.Text2}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>
            {languageData.FindHolbox.section2Title}
          </TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindHolbox.subtitle2.Text1}
          <BT>{languageData.FindHolbox.subtitle2.BT}</BT>
          {languageData.FindHolbox.subtitle2.Text2}
        </SubtitleP>

        {/* IMAGE 2 */}

        <Image
          src={imgBlogGeneric2}
          width={928}
          height={523}
          alt="Entrada principal del hotel Villas Flamingos Hotel"
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindHolbox.paragraphs2.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindHolbox.paragraphs2.Text2}
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.FindHolbox.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindHolbox.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindHolbox.subtitle3.Text2}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindHolbox.subtitle3.Text3}
        </SubtitleP>
        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list1.textBold1}
            </b>
            {languageData.FindHolbox.list1.textNormal1}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list1.textBold2}
            </b>
            {languageData.FindHolbox.list1.textNormal2}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list1.textBold3}
            </b>
            {languageData.FindHolbox.list1.textNormal3}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list1.textBold4}
            </b>
            {languageData.FindHolbox.list1.textNormal4}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list1.textBold5}
            </b>
            {languageData.FindHolbox.list1.textNormal5}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list1.textBold6}
            </b>
            {languageData.FindHolbox.list1.textNormal6}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list1.textBold7}
            </b>
            {languageData.FindHolbox.list1.textNormal7}
          </li>
        </ul>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>
            {languageData.FindHolbox.section4Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindHolbox.subtitle4.Text1}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list2.textBold1}
            </b>
            {languageData.FindHolbox.list2.textNormal1}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list2.textBold2}
            </b>
            {languageData.FindHolbox.list2.textNormal2}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list2.textBold3}
            </b>
            {languageData.FindHolbox.list2.textNormal3}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list2.textBold4}
            </b>
            {languageData.FindHolbox.list2.textNormal4}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list2.textBold5}
            </b>
            {languageData.FindHolbox.list2.textNormal5}
          </li>
          <li>
            <b className="text-black text-fs-16">
              {languageData.FindHolbox.list2.textBold6}
            </b>
            {languageData.FindHolbox.list2.textNormal6}
          </li>
        </ul>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.FindHolbox.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.FindHolbox.section5Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindHolbox.subtitle3.Text1}
          <BT>{languageData.FindHolbox.subtitle3.BT}
          </BT>        {languageData.FindHolbox.subtitle3.Text2}

        </SubtitleP>
        <SubtitleP>
          {languageData.FindHolbox.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindHolbox.paragraphs5.Text2}

        </SubtitleP>
      </div>
    </>
  );
}
