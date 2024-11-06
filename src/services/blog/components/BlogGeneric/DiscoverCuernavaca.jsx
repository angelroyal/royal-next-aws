"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

export default function DiscoverCuernavaca() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <div className="mb-6">
        <TitleH1>{languageData.DiscoverCuernavaca.mainTitle}</TitleH1>
      </div>

      <SubtitleP>
        {languageData.DiscoverCuernavaca.subtitle1.Text1}{" "}
        <BT>{languageData.DiscoverCuernavaca.subtitle1.BT}</BT>{" "}
        {languageData.DiscoverCuernavaca.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}

      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/discover-cuernavaca1.png`}
        alt="Vistas de las piscinas y áreas de estar en el mejor hotel de Cuernavaca"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>{languageData.DiscoverCuernavaca.paragraphs1}</SubtitleP>

      {/* ASK */}
      <div className="mt-4">
        <TitleH2>{languageData.DiscoverCuernavaca.section2Title}</TitleH2>
      </div>

      <SubtitleP>{languageData.DiscoverCuernavaca.subtitle2}</SubtitleP>

      {/* IMAGE 2 */}

      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/discover-cuernavaca2.png`}
        alt="Vista de la entrada principal del Anticavilla Restaurant, Hotel & Spa."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.DiscoverCuernavaca.paragraphs2.Text1}{" "}
        <BT>{languageData.DiscoverCuernavaca.paragraphs2.BT}</BT>
      </SubtitleP>

      {/* ROOM TYPES */}
      <div className="mt-6">
        <TitleH2>{languageData.DiscoverCuernavaca.section3Title}</TitleH2>
      </div>

      <SubtitleP>{languageData.DiscoverCuernavaca.subtitle3}</SubtitleP>

      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>{languageData.DiscoverCuernavaca.list1.textNormal1}</li>
        <li>{languageData.DiscoverCuernavaca.list1.textNormal2}</li>
        <li>{languageData.DiscoverCuernavaca.list1.textNormal3}</li>
        <li>{languageData.DiscoverCuernavaca.list1.textNormal4}</li>
        <li>{languageData.DiscoverCuernavaca.list1.textNormal5}</li>
      </ul>

      <SubtitleP>{languageData.DiscoverCuernavaca.paragraphsbottom3}</SubtitleP>

      {/* WHAT ARE THE FACILITIES */}
      <div className="mt-4">
        <TitleH2>{languageData.DiscoverCuernavaca.section4Title}</TitleH2>
      </div>

      <SubtitleP>{languageData.DiscoverCuernavaca.subtitle4}</SubtitleP>

      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>{languageData.DiscoverCuernavaca.list2.textNormal1}</li>
        <li>{languageData.DiscoverCuernavaca.list2.textNormal2}</li>
        <li>{languageData.DiscoverCuernavaca.list2.textNormal3}</li>
        <li>{languageData.DiscoverCuernavaca.list2.textNormal4}</li>
        <li>{languageData.DiscoverCuernavaca.list2.textNormal5}</li>
      </ul>

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.DiscoverCuernavaca.table} />
      </div>

      {/* END BLOG */}
      <div className="my-2">
        <TitleH2>{languageData.DiscoverCuernavaca.section5Title}</TitleH2>
      </div>

      <SubtitleP>
        {languageData.DiscoverCuernavaca.subtitle5.Text1}{" "}
        <BT>{languageData.DiscoverCuernavaca.subtitle5.BT}</BT>{" "}
        {languageData.DiscoverCuernavaca.subtitle5.Text2}
      </SubtitleP>

      <SubtitleP>{languageData.DiscoverCuernavaca.paragraphs5.Text1}</SubtitleP>
    </div>
  );
}
