"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";
import TableReviews from "./General/TableReviews";

import imgMazatlan from "@/assets/img/BlogGeneric/knows-mazatlan1.png";
import imgMazatlan1 from "@/assets/img/BlogGeneric/knows-mazatlan2.png";

export default function KnowsMazatlan() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}

      <div className="mb-6">
        <TitleH1> {languageData.KnowsMazatlan.mainTitle} </TitleH1>
      </div>

      {/* SECTION 1 OF THE BLOG */}
      <SubtitleP> {languageData.KnowsMazatlan.subtitle1.Text1} </SubtitleP>
      <SubtitleP> <BT>{languageData.KnowsMazatlan.subtitle1.BT} </BT> </SubtitleP>

      <img
        src={imgMazatlan.src}
        // width={913}
        // height={559}
        alt="Vista de un hotel y playa en Mazatlán, México, con personas caminando por la orilla y el mar en primer plano bajo un cielo despejado"
        className="rounded-lg h-[437px] object-cover w-full my-4"
      />

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs1.Text1} </SubtitleP>
      <SubtitleP> {languageData.KnowsMazatlan.paragraphs1.Text2} </SubtitleP>

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs1.Text3}{" "}
        <BT> {languageData.KnowsMazatlan.paragraphs1.BT} </BT>{" "}
        {languageData.KnowsMazatlan.paragraphs1.Text4}
      </SubtitleP>

      {/* SECTION 2 OF THE BLOG */}
      {/* ASK */}


      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsMazatlan.section2Title}
        </TitleH2>
      </div>

      <SubtitleP> {languageData.KnowsMazatlan.subtitle2} </SubtitleP>

      <img
        src={imgMazatlan1.src}
        // width={926}
        // height={526}
        alt="Entrada del Hotel Playa de Mazatlán en Mazatlán, México, con palmeras altas y cielo parcialmente nublado de fondo"
        className="rounded-lg h-[437px] object-cover w-full my-4"
      />

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs2.Text1} </SubtitleP>

      {/* SECTION 3 OF THE BLOG */}

      {/* ROOM TYPES */}
      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsMazatlan.section3Title}
        </TitleH2>
      </div>

      <SubtitleP> {languageData.KnowsMazatlan.subtitle3} </SubtitleP>

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs3.Text1} </SubtitleP>

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs3.Text2} </SubtitleP>

      {/* SECTION 4 OF THE BLOG */}

      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsMazatlan.section4Title}
        </TitleH2>
      </div>

      <SubtitleP> {languageData.KnowsMazatlan.subtitle4} </SubtitleP>

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs4.Text1} </SubtitleP>

      {/* SECTION 5 OF THE BLOG */}

      {/* WHAT ARE THE FACILITIES */}

      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsMazatlan.section5Title}
        </TitleH2>
      </div>

      <SubtitleP> {languageData.KnowsMazatlan.subtitle5} </SubtitleP>

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs5.Text1} </SubtitleP>

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs5.Text2} </SubtitleP>

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs5.Text3} </SubtitleP>

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs5.Text4} </SubtitleP>

      {/* SECTION 6 OF THE BLOG */}

      {/* REVIEWS */}
      <div className="my-4">
        <TableReviews TableBlog={languageData.KnowsMazatlan.table} />
      </div>

      {/* SECTION 7 OF THE BLOG */}

      <div className="mt-4">
        <TitleH2>
          {languageData.KnowsMazatlan.section6Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.KnowsMazatlan.subtitle6.Text1} {" "}
        <BT>{languageData.KnowsMazatlan.subtitle6.BT}</BT>
        {languageData.KnowsMazatlan.subtitle6.Text2}
      </SubtitleP>

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs6.Text1} </SubtitleP>

      <SubtitleP> {languageData.KnowsMazatlan.paragraphs6.Text2} </SubtitleP>
    </div>
  );
};