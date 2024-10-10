"use client";
import Image from "next/image";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/find-best-hotel-all-inclusive-punta-cana.jpg";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/find-best-hotel-all-inclusive-punta-cana2.jpg";

export default function FindBestHotelPuntaCanaAi() {

  const { languageData } = useContext(LanguageContext);

  const TableBlog = {
    users: [
      "Marioly Fortuna Cabrera",
      "Aidee Reyes",
      "Néstor Belliard", "Carmen M."
    ],
    date: [
      "Mar 2024",
      "Mar 2024",
      "Mar 2024",
      "Hace 2 meses"
    ],
    score: ["5/5", "5/5", "5/5", "5/5"],
    summary: [
      "Siempre pendientes de todos, especialmente nuestro concierge. La locación es espectacular. La playa y la piscina. No tengo queja.",
      "Lugar muy confortable, con muy buen trato desde que llegues hasta la hora de salida, es sin lugar a duda un magnífico lugar al cual elegir, encantada con todo, las habitaciones, el lobby, las piscinas, absolutamente todo magnífico.",
      "Es un alojamiento increíble, sus piscinas hermosas, un personal afable y dispuesto, las habitaciones son espectaculares, limpias y ordenadas con una vista hermosa, un lugar ideal para descansar y compartir en familia.",
      "Todo lindo, muy engreídos, con ganas de volver. Muy recomendable. Nos encantó. Excelente elección para nuestro aniversario. Los espectáculos, todos buenísimo y divertidos. Para parejas de lo mejor, tienen mar y piscinas. Ya queremos regresar."
    ],
  };
  return (

    <>
      <div className="flex flex-col gap-3">
        {/* START BLOG */}
        <div className="mb-6">
          <TitleH1>
            {languageData.FindBestHotelPuntaCanaAi.mainTitle}</TitleH1>
        </div>
        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.subtitle1.Text1}
          <BT>{languageData.FindBestHotelPuntaCanaAi.subtitle1.BT}</BT>{languageData.FindBestHotelPuntaCanaAi.subtitle1.Text2}
        </SubtitleP>
        {/* IMAGE 1 */}

        <Image
          src={imgBlogGeneric1}
          width={593}
          height={395}
          alt="Vista de dos camastros sobre la arena, frente al mar tranquilo de color azul turquesa."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.paragraphs1.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.paragraphs1.Text2}
        </SubtitleP>

        {/* ASK */}
        <div className="mt-4">
          <TitleH2>{languageData.FindBestHotelPuntaCanaAi.section2Title}</TitleH2>
        </div>
        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.subtitle2.Text1}
          <BT>{languageData.FindBestHotelPuntaCanaAi.subtitle2.BT}</BT>
        </SubtitleP>

        {/* IMAGE 2 */}

        <Image
          src={imgBlogGeneric2}
          width={587}
          height={391}
          alt="Vista de letrero de hotel Secretas CapCana rodeado por unas cuantas palmeras bajo un cielo soleado."
          className="rounded-lg h-[437px] object-cover w-full my-6"
        />

        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.paragraphs2.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.paragraphs2.Text2}
        </SubtitleP>

        {/* ROOM TYPES */}
        <div className="mt-6">
          <TitleH2>
            {languageData.FindBestHotelPuntaCanaAi.section3Title}
          </TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.subtitle3.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.subtitle3.Text2}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>{languageData.FindBestHotelPuntaCanaAi.list1.textNormal1}
          </li>
          <li>{languageData.FindBestHotelPuntaCanaAi.list1.textNormal2}
          </li>
          <li>{languageData.FindBestHotelPuntaCanaAi.list1.textNormal3}
          </li>
          <li>{languageData.FindBestHotelPuntaCanaAi.list1.textNormal4}
          </li>
          <li>{languageData.FindBestHotelPuntaCanaAi.list1.textNormal5}
          </li>
          <li>{languageData.FindBestHotelPuntaCanaAi.list1.textNormal6}
          </li>
          <li>{languageData.FindBestHotelPuntaCanaAi.list1.textNormal7}
          </li>

        </ul>

        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.paragraphBottom1.Text1}
        </SubtitleP>
        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.paragraphBottom1.Text2}
        </SubtitleP>
        <SubtitleP>{languageData.FindBestHotelPuntaCanaAi.paragraphBottom1.Text3}</SubtitleP>

        {/* WHAT ARE THE FACILITIES */}
        <div className="mt-4">
          <TitleH2>{languageData.FindBestHotelPuntaCanaAi.section4Title}</TitleH2>
        </div>

        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.subtitle4.Text1}
        </SubtitleP>

        {/* LIST */}
        <ul className="gap-2 flex flex-col m-m text-fs-14">
          <li>{languageData.FindBestHotelPuntaCanaAi.list2.textNormal1}</li>
          <li>{languageData.FindBestHotelPuntaCanaAi.list2.textNormal2}</li>
          <li>{languageData.FindBestHotelPuntaCanaAi.list2.textNormal3}</li>
          <li>{languageData.FindBestHotelPuntaCanaAi.list2.textNormal4}</li>
          <li>{languageData.FindBestHotelPuntaCanaAi.list2.textNormal5}</li>
        </ul>

        <SubtitleP>
          {languageData.FindBestHotelPuntaCanaAi.paragraphBottom2.Text1}
        </SubtitleP>
        <SubtitleP>        {languageData.FindBestHotelPuntaCanaAi.paragraphBottom2.Text1}
        </SubtitleP>

        {/* REVIEWS */}
        <div className="my-4">
          <TableReviews TableBlog={languageData.FindBestHotelPuntaCanaAi.table} />
        </div>

        {/* END BLOG */}
        <div className="my-2">
          <TitleH2>{languageData.FindBestHotelPuntaCanaAi.section5Title}
          </TitleH2>
        </div>
        <SubtitleP>
        {languageData.FindBestHotelPuntaCanaAi.subtitle5.Text1}
          <BT>{languageData.FindBestHotelPuntaCanaAi.subtitle5.BT}</BT>
          {languageData.FindBestHotelPuntaCanaAi.subtitle5.Text2}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindBestHotelPuntaCanaAi.paragraphs5.Text1}
        </SubtitleP>
        <SubtitleP>
        {languageData.FindBestHotelPuntaCanaAi.paragraphs5.Text2}
        </SubtitleP>
      </div>
    </>
  );
};