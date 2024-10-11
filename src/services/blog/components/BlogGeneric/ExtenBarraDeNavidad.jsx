"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/exten-barra-navidad1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/exten-barra-navidad2.png";
import imgBlogGeneric3 from "@/assets/img/BlogGeneric/exten-barra-navidad3.png";
import imgBlogGeneric4 from "@/assets/img/BlogGeneric/exten-barra-navidad4.png";
import imgBlogGeneric5 from "@/assets/img/BlogGeneric/exten-barra-navidad5.png";
import imgBlogGeneric6 from "@/assets/img/BlogGeneric/exten-barra-navidad6.png";
import imgBlogGeneric7 from "@/assets/img/BlogGeneric/exten-barra-navidad7.png";
import imgBlogGeneric8 from "@/assets/img/BlogGeneric/exten-barra-navidad8.png";
import imgBlogGeneric9 from "@/assets/img/BlogGeneric/exten-barra-navidad9.png";
import imgBlogGeneric10 from "@/assets/img/BlogGeneric/exten-barra-navidad10.png";
import imgBlogGeneric11 from "@/assets/img/BlogGeneric/exten-barra-navidad11.png";
import imgBlogGeneric12 from "@/assets/img/BlogGeneric/exten-barra-navidad12.png";

export default function ExtenBarraDeNavidad() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <TitleH1>
        {languageData.ExtenBarraDeNavidad.mainTitle}
      </TitleH1>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.subtitle1}
      </SubtitleP>

      {/* IMAGE 1 */}
      <img
        src={imgBlogGeneric1.src}
        // width={923}
        // height={567}
        alt="Vista de letrero de Barra De Navida en el atardecer frente al denso mar."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs1.Text1} {" "}
        <BT>
          {languageData.ExtenBarraDeNavidad.paragraphs1.BT1}
        </BT>{" "}
        {languageData.ExtenBarraDeNavidad.paragraphs1.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs1.Text3}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs1.Text4} {" "}
        <BT>
          {languageData.ExtenBarraDeNavidad.paragraphs1.BT2}
        </BT>{" "}
        {languageData.ExtenBarraDeNavidad.paragraphs1.Text5}
      </SubtitleP>

      {/*COME EXPLORE */}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenBarraDeNavidad.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        <BT>
          {languageData.ExtenBarraDeNavidad.subtitle2.BT1}
        </BT> {" "}
        {languageData.ExtenBarraDeNavidad.subtitle2.Text1} {" "}
        <BT>
          {languageData.ExtenBarraDeNavidad.subtitle2.BT2}
        </BT>{" "}
        {languageData.ExtenBarraDeNavidad.subtitle2.Text2}
      </SubtitleP>

      {/* IMAGE 2 */}
      <img
        src={imgBlogGeneric2.src}
        // width={909}
        // height={576}
        alt="Vista de la orilla del mar al atardecer. Hay diversas enbarcaciones encallando y el agua está tranquila."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs2.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs2.Text2}
      </SubtitleP>

      {/* KNOWS  CHARACTERISTICS*/}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenBarraDeNavidad.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        <BT>
          {languageData.ExtenBarraDeNavidad.subtitle3.BT}
        </BT> {" "}
        {languageData.ExtenBarraDeNavidad.subtitle3.Text1}
      </SubtitleP>

      {/* IMAGE 3 */}
      <img
        src={imgBlogGeneric3.src}
        // width={923}
        // height={555}
        alt="Vista de un atardecer en el mar. Hay algunas embarcaciones saliendo hacia el mar."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs3.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs3.Text2} {" "}
        <BT>
          {languageData.ExtenBarraDeNavidad.paragraphs3.BT}
        </BT>{" "}
        {languageData.ExtenBarraDeNavidad.paragraphs3.Text3}
      </SubtitleP>

      {/* ASK*/}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenBarraDeNavidad.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        <BT>
          {languageData.ExtenBarraDeNavidad.subtitle4.BT}
        </BT>
        {languageData.ExtenBarraDeNavidad.subtitle4.Text1}
      </SubtitleP>

      {/* IMAGE 4 */}
      <img
        src={imgBlogGeneric4.src}
        // width={919}
        // height={580}
        alt="Vista de la orilla del mar. La arena es de un color vibrante y se pueden ver dos colinas llenas de vegetación al fondo."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs4.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs4.Text2}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs4.Text3}
      </SubtitleP>
      {/* ASK 2 */}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenBarraDeNavidad.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.subtitle5}
      </SubtitleP>

      {/* IMAGE 5 */}
      <img
        src={imgBlogGeneric5.src}
        // width={918}
        // height={638}
        alt="Vista de 2 trajineras coloridad en llenas de personas. El día está soleado y despejado."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs5.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs5.Text2}
      </SubtitleP>

      <TitleH2>
        {languageData.ExtenBarraDeNavidad.section6Title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.subtitle6}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs6}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenBarraDeNavidad.places.place1.Title}
        </b>{" "}
        {languageData.ExtenBarraDeNavidad.places.place1.description.Text2}
      </SubtitleP>

      {/* IMAGE 6 */}
      <img
        src={imgBlogGeneric6.src}
        // width={918}
        // height={592}
        alt="Vista de un hombre sobre una bicicleta deacansando bajo la sombra de una palmera en el Malecón de Barra de Navidad."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.places.place1.description.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.places.place1.description.Text3}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenBarraDeNavidad.places.place2.Title}
        </b>{" "}
        {languageData.ExtenBarraDeNavidad.places.place2.description.Text1}
      </SubtitleP>

      {/* IMAGE 7 */}
      <img
        src={imgBlogGeneric7.src}
        // width={912}
        // height={580}
        alt="Vista en un atardecer a la orilla del mar en el que se puede observar a un numeroso grupo de aves aterrizando en el agua."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.places.place2.description.Text2}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenBarraDeNavidad.places.place3.Title}
        </b>{" "}
        {languageData.ExtenBarraDeNavidad.places.place3.description.Text1} {" "}
        <BT>
          {languageData.ExtenBarraDeNavidad.places.place3.description.BT}
        </BT> {" "}
        {languageData.ExtenBarraDeNavidad.places.place3.description.Text2}
      </SubtitleP>

      {/* IMAGE 8 */}
      <img
        src={imgBlogGeneric8.src}
        // width={923}
        // height={594}
        alt="Vista de un mar azul turquesa intenso con un pequeño oleaje. A la distancia se pueden ver diversos hoteles."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <span className="text-fs-14 text-black italic m-b">
          {languageData.ExtenBarraDeNavidad.beaches.beach1}{" "}
        </span>
        {languageData.ExtenBarraDeNavidad.beaches.description1}
      </SubtitleP>
      <SubtitleP>
        <span className="text-fs-14 text-black italic m-b">
          {languageData.ExtenBarraDeNavidad.beaches.beach2}{" "}
        </span>
        {languageData.ExtenBarraDeNavidad.beaches.description2}
      </SubtitleP>
      <SubtitleP>
        <span className="text-fs-14 text-black italic m-b">
          {languageData.ExtenBarraDeNavidad.beaches.beach3}{" "}
        </span>
        {languageData.ExtenBarraDeNavidad.beaches.description3}
      </SubtitleP>
      <SubtitleP>
        <span className="text-fs-14 text-black italic m-b">
          {languageData.ExtenBarraDeNavidad.beaches.beach4}{" "}
        </span>
        {languageData.ExtenBarraDeNavidad.beaches.description4}
      </SubtitleP>
      <SubtitleP>
        <span className="text-fs-14 text-black italic m-b">
          {languageData.ExtenBarraDeNavidad.beaches.beach5}{" "}
        </span>
        {languageData.ExtenBarraDeNavidad.beaches.description5}
      </SubtitleP>
      <SubtitleP>
        <span className="text-fs-14 text-black italic m-b">
          {languageData.ExtenBarraDeNavidad.beaches.beach6}{" "}
        </span>
        {languageData.ExtenBarraDeNavidad.beaches.description6}
      </SubtitleP>
      <SubtitleP>
        <span className="text-fs-14 text-black italic m-b">
          {languageData.ExtenBarraDeNavidad.beaches.beach7}{" "}
        </span>
        {languageData.ExtenBarraDeNavidad.beaches.description7}
      </SubtitleP>
      <SubtitleP>
        <span className="text-fs-14 text-black italic m-b">
          {languageData.ExtenBarraDeNavidad.beaches.beach8}{" "}
        </span>
        {languageData.ExtenBarraDeNavidad.beaches.description8}
      </SubtitleP>

      <TitleH2>
        {languageData.ExtenBarraDeNavidad.section7Title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.subtitle7}
      </SubtitleP>

      {/* IMAGE 9 */}
      <img
        src={imgBlogGeneric9.src}
        // width={936}
        // height={599}
        alt="Vista al atardecer de hotel a la orilla del mar. Los tonos naranjas prevalecen y se pueden ver a diversos grupos de personas disfrutando del mar."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-s-b text-fs-14 text-red-100">
        <li>{languageData.ExtenBarraDeNavidad.hotels.hotel1} </li>
        <li>{languageData.ExtenBarraDeNavidad.hotels.hotel2} </li>
        <li>{languageData.ExtenBarraDeNavidad.hotels.hotel3} </li>
        <li>{languageData.ExtenBarraDeNavidad.hotels.hotel4} </li>
        <li>{languageData.ExtenBarraDeNavidad.hotels.hotel5} </li>
        <li>{languageData.ExtenBarraDeNavidad.hotels.hotel6} </li>
        <li>{languageData.ExtenBarraDeNavidad.hotels.hotel7} </li>
        <li>{languageData.ExtenBarraDeNavidad.hotels.hotel8} </li>
        <li>{languageData.ExtenBarraDeNavidad.hotels.hotel9} </li>
        <li>{languageData.ExtenBarraDeNavidad.hotels.hotel10} </li>
      </ul>

      <TitleH2>
        {languageData.ExtenBarraDeNavidad.section8Title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.subtitle8.Text1} {" "}
        <BT>
          {languageData.ExtenBarraDeNavidad.subtitle8.BT1}
        </BT>{" "}
        {languageData.ExtenBarraDeNavidad.subtitle8.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs8.Text1}
      </SubtitleP>

      {/* IMAGE 10 */}
      <img
        src={imgBlogGeneric10.src}
        // width={907}
        // height={562}
        alt="Vista de una mujer disfrutando de su comida en un restaurante que está frente al mar."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs8.Text2}
      </SubtitleP>

      <ul className="gap-2 flex flex-col m-m text-fs-14">
        <li>
          <SubtitleP>
            <b className="text-black text-fs-16">
              {languageData.ExtenBarraDeNavidad.gastronomy.restaurant1.Title}{" "}
            </b>
            {languageData.ExtenBarraDeNavidad.gastronomy.restaurant1.description}
          </SubtitleP>
        </li>

        <li>
          <SubtitleP>
            <b className="text-black text-fs-16">
              {languageData.ExtenBarraDeNavidad.gastronomy.restaurant2.Title}{" "}
            </b>
            {languageData.ExtenBarraDeNavidad.gastronomy.restaurant2.description}
          </SubtitleP>
        </li>

        <li>
          <SubtitleP>
            <b className="text-black text-fs-16">
              {languageData.ExtenBarraDeNavidad.gastronomy.restaurant3.Title}{" "}
            </b>
            {languageData.ExtenBarraDeNavidad.gastronomy.restaurant3.description}
          </SubtitleP>
        </li>

        <li>
          <SubtitleP>
            <b className="text-black text-fs-16">
              {languageData.ExtenBarraDeNavidad.gastronomy.restaurant4.Title}{" "}
            </b>
            {languageData.ExtenBarraDeNavidad.gastronomy.restaurant4.description}
          </SubtitleP>
        </li>

        <li>
          <SubtitleP>
            <b className="text-black text-fs-16">
              {languageData.ExtenBarraDeNavidad.gastronomy.restaurant5.Title}{" "}
            </b>
            {languageData.ExtenBarraDeNavidad.gastronomy.restaurant5.description}
          </SubtitleP>
        </li>
      </ul>

      <TitleH2>
        {languageData.ExtenBarraDeNavidad.section9Title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.subtitle9}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs9.Text1} {" "}
        <BT>{languageData.ExtenBarraDeNavidad.paragraphs9.BT}</BT>{" "}
        {languageData.ExtenBarraDeNavidad.paragraphs9.Text2}
      </SubtitleP>

      {/* IMAGE 11 */}
      <img
        src={imgBlogGeneric11.src}
        // width={922}
        // height={569}
        alt="Vista de una carretero que se extiende hacia el horizonte en el que va un coche solitario en un día soleado. A ambos costados la verde vegetación tropical abraza la carretera."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      <TitleH2>
        {languageData.ExtenBarraDeNavidad.section10Title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.subtitle10}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs10}
      </SubtitleP>

      <TitleH2>
        {languageData.ExtenBarraDeNavidad.section11Title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.subtitle11.Text1} {" "}
        <BT>
          {languageData.ExtenBarraDeNavidad.subtitle11.BT1}
        </BT>{" "}
        {languageData.ExtenBarraDeNavidad.subtitle11.Text2}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs11.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs11.Text2}
      </SubtitleP>

      <TitleH2>
        {languageData.ExtenBarraDeNavidad.section12Title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.subtitle12}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.paragraphs12}
        playas hasta los tranquilos pueblos costeros.
      </SubtitleP>

      {/* IMAGE 12 */}
      <img
        src={imgBlogGeneric12.src}
        // width={922}
        // height={545}
        alt="Vista de la orilla del mar, frente al mar hay una pequeña área verde con un pasto que destaca y una palmera."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>
        {languageData.ExtenBarraDeNavidad.section13Title}
      </TitleH2>

      <h4 className="text-fs-16 text-black m-b">
        {languageData.ExtenBarraDeNavidad.faqs.question1.Title}
      </h4>
      <SubtitleP> {languageData.ExtenBarraDeNavidad.faqs.question1.answers.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenBarraDeNavidad.faqs.question1.answers.Text2} </SubtitleP>
      <SubtitleP> {languageData.ExtenBarraDeNavidad.faqs.question1.answers.Text3} </SubtitleP>

      <h4 className="text-fs-16 text-black m-b">
        {languageData.ExtenBarraDeNavidad.faqs.question2.Title}
      </h4>
      <SubtitleP> {languageData.ExtenBarraDeNavidad.faqs.question2.answers.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenBarraDeNavidad.faqs.question2.answers.Text2} </SubtitleP>
      <SubtitleP> {languageData.ExtenBarraDeNavidad.faqs.question2.answers.Text3} </SubtitleP>

      <TitleH2>
        {languageData.ExtenBarraDeNavidad.section14Title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenBarraDeNavidad.subtitle14}
      </SubtitleP>

      <SubtitleP>{languageData.ExtenBarraDeNavidad.paragraphs14.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenBarraDeNavidad.paragraphs14.Text2} </SubtitleP>
      <SubtitleP> {languageData.ExtenBarraDeNavidad.paragraphs14.Text3} </SubtitleP>
    </div>
  );
};