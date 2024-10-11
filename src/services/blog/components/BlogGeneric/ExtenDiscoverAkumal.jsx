"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/exten-discover-akumal1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/exten-discover-akumal2.png";
import imgBlogGeneric3 from "@/assets/img/BlogGeneric/exten-discover-akumal3.png";
import imgBlogGeneric4 from "@/assets/img/BlogGeneric/exten-discover-akumal4.png";
import imgBlogGeneric5 from "@/assets/img/BlogGeneric/exten-discover-akumal5.png";
import imgBlogGeneric6 from "@/assets/img/BlogGeneric/exten-discover-akumal6.png";
import imgBlogGeneric7 from "@/assets/img/BlogGeneric/exten-discover-akumal7.png";
import imgBlogGeneric8 from "@/assets/img/BlogGeneric/exten-discover-akumal8.png";
import imgBlogGeneric9 from "@/assets/img/BlogGeneric/exten-discover-akumal9.png";
import imgBlogGeneric10 from "@/assets/img/BlogGeneric/exten-discover-akumal10.png";
import imgBlogGeneric11 from "@/assets/img/BlogGeneric/exten-discover-akumal11.png";
import imgBlogGeneric12 from "@/assets/img/BlogGeneric/exten-discover-akumal12.png";

export default function ExtenDiscoverAkumal() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <TitleH1>
        {languageData.ExtenDiscoverAkumal.mainTitle}
      </TitleH1>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.subtitle1}
      </SubtitleP>

      {/* IMAGE 1 */}
      <img
        src={imgBlogGeneric1.src}
        // width={922}
        // height={620}
        alt="Vista de la playa de akumal"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenDiscoverAkumal.paragraphs1.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.paragraphs1.Text2} </SubtitleP>

      <SubtitleP>{languageData.ExtenDiscoverAkumal.paragraphs1.Text3}{" "}
        <BT>{languageData.ExtenDiscoverAkumal.paragraphs1.BT} </BT>
        {languageData.ExtenDiscoverAkumal.paragraphs1.Text4}
      </SubtitleP>

      {/*COME EXPLORE */}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenDiscoverAkumal.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.subtitle2.Text1} {" "}
        <BT>{languageData.ExtenDiscoverAkumal.subtitle2.BT}</BT>
        {languageData.ExtenDiscoverAkumal.subtitle2.Text2}
      </SubtitleP>

      {/* IMAGE 2 */}
      <img
        src={imgBlogGeneric2.src}
        // width={909}
        // height={547}
        alt="Vista de la zona arqueológica de Akumal"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.paragraphs2.paragraphsTop.Text1} {" "}
        <BT>{languageData.ExtenDiscoverAkumal.paragraphs2.paragraphsTop.BT}</BT>
        {languageData.ExtenDiscoverAkumal.paragraphs2.paragraphsTop.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.paragraphs2.paragraphsTop.Text3}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenDiscoverAkumal.paragraphs2.paragraphsBottom.BT}</BT>{" "}
        {languageData.ExtenDiscoverAkumal.paragraphs2.paragraphsBottom.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.paragraphs2.paragraphsBottom.Text2}
      </SubtitleP>

      {/* KNOWS  CHARACTERISTICS*/}

      <div className="my-2">
        <TitleH2> {languageData.ExtenDiscoverAkumal.section3Title} </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.subtitle3}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.paragraphs3.Text1}
      </SubtitleP>

      {/* IMAGE 3 */}
      <img
        src={imgBlogGeneric3.src}
        // width={913}
        // height={559}
        alt="Increíble vista aérea de la playa de Akumal con botes de pesca"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.paragraphs3.Text2}
      </SubtitleP>

      {/* ASK*/}

      <div className="my-2">
        <TitleH2> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic1.Title} </TitleH2>
      </div>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic1.Subtitle} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic1.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic1.Text2}</SubtitleP>

      {/* ASK 2 */}

      <div className="my-2">
        <TitleH2> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic2.Title} </TitleH2>
      </div>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic2.Subtitle} </SubtitleP>

      {/* IMAGE 4 */}
      <img
        src={imgBlogGeneric4.src}
        // width={920}
        // height={613}
        alt="Persona realizando buceo en las playas de Akumal"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic2.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic2.Text2}</SubtitleP>

      {/* ASK 3 */}

      <div className="my-2">
        <TitleH2> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic3.Title} </TitleH2>
      </div>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic3.Subtitle} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.Characteristics.Characteristic3.Text1} </SubtitleP>

      {/* KNOWS */}

      <div className="my-2">
        <TitleH2>{languageData.ExtenDiscoverAkumal.section4Title}</TitleH2>
      </div>

      <SubtitleP>{languageData.ExtenDiscoverAkumal.subtitle4}</SubtitleP>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.paragraphs4.Text1}{" "}
        <BT>{languageData.ExtenDiscoverAkumal.paragraphs4.BT}</BT>
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenDiscoverAkumal.places.place1.Title}
        </b>
        {languageData.ExtenDiscoverAkumal.places.place1.Text1}
      </SubtitleP>

      {/* IMAGE 5 */}
      <img
        src={imgBlogGeneric5.src}
        // width={917}
        // height={566}
        alt="Santuario de Monos de Akumal"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenDiscoverAkumal.places.place1.Text2} </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenDiscoverAkumal.places.place2.Title}
        </b>
        {languageData.ExtenDiscoverAkumal.places.place2.Text1}
      </SubtitleP>
      <SubtitleP>{languageData.ExtenDiscoverAkumal.places.place2.Text2}</SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenDiscoverAkumal.places.place3.Title}
        </b>
        {languageData.ExtenDiscoverAkumal.places.place3.Text1}
      </SubtitleP>
      <SubtitleP>{languageData.ExtenDiscoverAkumal.places.place3.Text2}</SubtitleP>


      {/* IMAGE 6 */}
      <img
        src={imgBlogGeneric6.src}
        // width={926}
        // height={555}
        alt="Cenote del parque natural de Aktun Chen"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenDiscoverAkumal.places.place4.Title}
        </b>
        {languageData.ExtenDiscoverAkumal.places.place4.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenDiscoverAkumal.places.place5.Title}
        </b>
        {languageData.ExtenDiscoverAkumal.places.place5.Text1}
      </SubtitleP>
      <SubtitleP>{languageData.ExtenDiscoverAkumal.places.place5.Text2}</SubtitleP>

      {/* IMAGE 7 */}
      <img
        src={imgBlogGeneric7.src}
        // width={916}
        // height={575}
        alt="Laguna Yal Ku de Akumal"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenDiscoverAkumal.places.place6.Title}
        </b>
        {languageData.ExtenDiscoverAkumal.places.place6.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenDiscoverAkumal.places.place7.Title}
        </b>
        {languageData.ExtenDiscoverAkumal.places.place7.Text1}
      </SubtitleP>

      {/* IMAGE 8 */}
      <img
        src={imgBlogGeneric8.src}
        // width={908}
        // height={568}
        alt="Hekab Be Biblioteca de Akumal"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenDiscoverAkumal.places.place8.Title}
        </b>
        {languageData.ExtenDiscoverAkumal.places.place8.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenDiscoverAkumal.places.place9.Title}
        </b>
        {languageData.ExtenDiscoverAkumal.places.place9.Text1}
      </SubtitleP>

      {/* IMAGE 9 */}
      <img
        src={imgBlogGeneric9.src}
        // width={922}
        // height={556}
        alt="Mexicarte, galería y tienda que celebra el arte y la artesanía mexicana de akumal"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <b className="text-black text-fs-16">
          {languageData.ExtenDiscoverAkumal.places.place10.Title}
        </b>
        {languageData.ExtenDiscoverAkumal.places.place10.Text1}
      </SubtitleP>

      {/* ARRIVE */}

      <div className="my-2">
        <TitleH2>{languageData.ExtenDiscoverAkumal.section5Title}</TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.subtitle5}
      </SubtitleP>

      {/* IMAGE 10 */}
      <img
        src={imgBlogGeneric10.src}
        // width={934}
        // height={591}
        alt="Autobús de Playa del Carmen a Akumal"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>{languageData.ExtenDiscoverAkumal.travelerQuestions.Question1.Question} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.travelerQuestions.Question1.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.travelerQuestions.Question1.Text2} </SubtitleP>


      <TitleH2>{languageData.ExtenDiscoverAkumal.travelerQuestions.Question2.Question} </TitleH2>
      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.travelerQuestions.Question2.Text1}{" "}
        <BT>{languageData.ExtenDiscoverAkumal.travelerQuestions.Question2.BT}</BT>
        {languageData.ExtenDiscoverAkumal.travelerQuestions.Question2.Text2}
      </SubtitleP>

      <TitleH2>{languageData.ExtenDiscoverAkumal.travelerQuestions.Question3.Question} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.travelerQuestions.Question3.Text1} </SubtitleP>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.travelerQuestions.Question3.Text2}{" "}
        <BT>{languageData.ExtenDiscoverAkumal.travelerQuestions.Question3.BT}</BT>
      </SubtitleP>

      <TitleH2>
        {languageData.ExtenDiscoverAkumal.section6Title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.subtitle6}
      </SubtitleP>

      {/* IMAGE 11 */}
      <img
        src={imgBlogGeneric11.src}
        // width={930}
        // height={603}
        alt="Mejores hoteles de akumal "
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.paragraph6}
      </SubtitleP>

      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-s-b text-fs-14 text-red-100">
        <li>{languageData.ExtenDiscoverAkumal.hotels.hotel1} </li>
        <li>{languageData.ExtenDiscoverAkumal.hotels.hotel2} </li>
        <li>{languageData.ExtenDiscoverAkumal.hotels.hotel3} </li>
        <li>{languageData.ExtenDiscoverAkumal.hotels.hotel4} </li>
        <li>{languageData.ExtenDiscoverAkumal.hotels.hotel5} </li>
        <li>{languageData.ExtenDiscoverAkumal.hotels.hotel6} </li>
        <li>{languageData.ExtenDiscoverAkumal.hotels.hotel7} </li>
        <li>{languageData.ExtenDiscoverAkumal.hotels.hotel8} </li>
        <li>{languageData.ExtenDiscoverAkumal.hotels.hotel9} </li>
        <li>{languageData.ExtenDiscoverAkumal.hotels.hotel10} </li>
      </ul>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenDiscoverAkumal.section7Title}
        </TitleH2>
      </div>

      <TitleH2> {languageData.ExtenDiscoverAkumal.faqs.question1.Title}</TitleH2>

      <SubtitleP> {languageData.ExtenDiscoverAkumal.faqs.question1.answers.Text1} </SubtitleP>

      {/* IMAGE 12 */}
      <img
        src={imgBlogGeneric12.src}
        // width={917}
        // height={592}
        alt="Temporada de anidación de las tortugas en akumal"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.faqs.question1.answers.Text2} {""}
        <BT>{languageData.ExtenDiscoverAkumal.faqs.question1.answers.BT}</BT>
        {languageData.ExtenDiscoverAkumal.faqs.question1.answers.Text3}
      </SubtitleP>


      <TitleH2> {languageData.ExtenDiscoverAkumal.faqs.question2.Title}</TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.faqs.question2.answers.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.faqs.question2.answers.Text2} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.faqs.question2.answers.Text3} </SubtitleP>

      <TitleH2> {languageData.ExtenDiscoverAkumal.faqs.question3.Title}</TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.faqs.question3.answers.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.faqs.question3.answers.Text2} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.faqs.question3.answers.Text3} </SubtitleP>

      <TitleH2> {languageData.ExtenDiscoverAkumal.faqs.question4.Title}</TitleH2>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.faqs.question4.answers.Text1} {""}
        <BT>{languageData.ExtenDiscoverAkumal.faqs.question4.answers.BT}</BT>
        {languageData.ExtenDiscoverAkumal.faqs.question4.answers.Text2}
      </SubtitleP>

      <SubtitleP> {languageData.ExtenDiscoverAkumal.faqs.question4.answers.Text3} </SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenDiscoverAkumal.section8Title}
        </TitleH2>
      </div>

      <SubtitleP> {languageData.ExtenDiscoverAkumal.subtitle8} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.paragraphs8.paragraphsTop.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverAkumal.paragraphs8.paragraphsTop.Text2} </SubtitleP>

      <SubtitleP>
        {languageData.ExtenDiscoverAkumal.paragraphs8.paragraphsBottom.Text1} {" "}
        <BT>{languageData.ExtenDiscoverAkumal.paragraphs8.paragraphsBottom.BT}</BT>
        {languageData.ExtenDiscoverAkumal.paragraphs8.paragraphsBottom.Text2}
      </SubtitleP>

      <SubtitleP> {languageData.ExtenDiscoverAkumal.paragraphs8.paragraphsBottom.Text3} </SubtitleP>
    </div>
  );
};
