"use client";

// Use Context Language
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-queretaro1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-queretaro2.png";


export default function FindQueretaro() {

  // RICHI
  const { languageData } = useContext(LanguageContext);

  // ARRAY TABLE BLOG
  const TableBlog = {
    users: ["Diana Ríos", "Beda Angehrn", "Nubia Cortés", "Betty Muñiz"],
    date: ["Abr 2024", "Hace 2 meses", "Hace 2 meses", "Hace 3 meses"],
    score: ["5/5", "5/5", "5/5", "5/5"],
    summary: [
      "Agradable hotel muy tranquilo, las instalaciones son muy bonitas, el restaurante no se lo pueden perder, la comida es muy buena. ",
      "Lugar ideal para pasar un fin de semana que combina descanso y ciudad. Encontrarás muchas amenidades que en otros hoteles no hay, como por ejemplo el baño japonés o lavabo, lavadora y secadora en el cuarto.",
      "Las habitaciones están limpias. Todos son muy amables. Tanto la comida como las bebidas que probé en el hotel estaban geniales.",
      "Hotel Fujitaya, es un lugar increíble. El alojamiento tiene un concepto único, cuenta con detalles muy bien cuidados y dentro del establecimiento se siente mucha paz y tranquilidad, sin duda este hotel me dejó enamorada.",
    ],
  };

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}

      <div className="mb-6">
        <TitleH1>
          {languageData.FindQueretaro.mainTitle}
        </TitleH1>
      </div>

      <SubtitleP>
        <BT>{languageData.FindQueretaro.subtitle1.BT}</BT>
        {languageData.FindQueretaro.subtitle1.paragraph}
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
        {languageData.FindQueretaro.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.FindQueretaro.paragraphs1.Text2}
      </SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>
          {languageData.FindQueretaro.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.FindQueretaro.subtitle2.paragraph}
        <BT>{languageData.FindQueretaro.subtitle2.BT}</BT>
        {languageData.FindQueretaro.subtitle2.paragraphs2}
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
      <SubtitleP>
        {languageData.FindQueretaro.paragraphs2.Text2}
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>
          {languageData.FindQueretaro.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.FindQueretaro.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.FindQueretaro.paragraphs3}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list1.textBold1}{" "}
          </b>
          {languageData.FindQueretaro.list1.textNormal1}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list1.textBold2}{" "}
          </b>
          {languageData.FindQueretaro.list1.textNormal2}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list1.textBold3}{" "}
          </b>
          {languageData.FindQueretaro.list1.textNormal3}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list1.textBold4}{" "}
          </b>
          {languageData.FindQueretaro.list1.textNormal4}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list1.textBold5}{" "}
          </b>
          {languageData.FindQueretaro.list1.textNormal5}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list1.textBold6}{" "}
          </b>
          {languageData.FindQueretaro.list1.textNormal6}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list1.textBold7}{" "}
          </b>
          {languageData.FindQueretaro.list1.textNormal7}
        </li>

      </ul>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.FindQueretaro.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.FindQueretaro.subtitle4}
      </SubtitleP>

      {/* LIST */}
      <ul className="gap-2 flex flex-col m-m text-fs-14">

      <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list2.textBold1}{" "}
          </b>
          {languageData.FindQueretaro.list2.textNormal1}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list2.textBold2}{" "}
          </b>
          {languageData.FindQueretaro.list2.textNormal2}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list2.textBold3}{" "}
          </b>
          {languageData.FindQueretaro.list2.textNormal3}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list2.textBold4}{" "}
          </b>
          {languageData.FindQueretaro.list2.textNormal4}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list2.textBold5}{" "}
          </b>
          {languageData.FindQueretaro.list2.textNormal5}
        </li>

        <li>
          <b className="text-black text-fs-16">
            {languageData.FindQueretaro.list2.textBold6}{" "}
          </b>
          {languageData.FindQueretaro.list2.textNormal6}
        </li>
    
      </ul>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.FindQueretaro.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>
          {languageData.FindQueretaro.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.FindQueretaro.subtitle5.Text}
        <BT>{languageData.FindQueretaro.subtitle5.BT}</BT>
        {languageData.FindQueretaro.subtitle5.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.FindQueretaro.paragraphs5.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.FindQueretaro.paragraphs5.Text2}
      </SubtitleP>
    </div>
  );
}
