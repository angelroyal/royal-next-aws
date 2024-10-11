"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import TItleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/exten-come-acapulco1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/exten-come-acapulco2.png";
import imgBlogGeneric3 from "@/assets/img/BlogGeneric/exten-come-acapulco3.png";
import imgBlogGeneric4 from "@/assets/img/BlogGeneric/exten-come-acapulco4.png";
import imgBlogGeneric5 from "@/assets/img/BlogGeneric/exten-come-acapulco5.png";
import imgBlogGeneric6 from "@/assets/img/BlogGeneric/exten-come-acapulco6.png";
import imgBlogGeneric7 from "@/assets/img/BlogGeneric/exten-come-acapulco7.png";
import imgBlogGeneric8 from "@/assets/img/BlogGeneric/exten-come-acapulco8.png";
import imgBlogGeneric9 from "@/assets/img/BlogGeneric/exten-come-acapulco9.png";
import imgBlogGeneric10 from "@/assets/img/BlogGeneric/exten-come-acapulco10.png";
import imgBlogGeneric11 from "@/assets/img/BlogGeneric/exten-come-acapulco11.png";
import imgBlogGeneric12 from "@/assets/img/BlogGeneric/exten-come-acapulco12.png";
import imgBlogGeneric13 from "@/assets/img/BlogGeneric/exten-come-acapulco13.png";
import imgBlogGeneric14 from "@/assets/img/BlogGeneric/exten-come-acapulco14.png";

export default function ExtenComeAcapulco() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <TitleH1>{languageData.ExtenComeAcapulco.mainTitle}</TitleH1>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.subtitle1.BT}</BT>{" "}
        {languageData.ExtenComeAcapulco.subtitle1.Text1}
      </SubtitleP>

      <SubtitleP> {languageData.ExtenComeAcapulco.subtitle1.Text2} </SubtitleP>

      {/* IMAGE 1 */}
      <img
        src={imgBlogGeneric1.src}
        // width={922}
        // height={404}
        alt="Vista panorámica de la bahía de Acapulco con numerosos botes en el agua y colinas verdes en el fondo. Palmera en primer plano."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenComeAcapulco.paragraphs1.paragraphTop.Text1} {" "}
        <BT>{languageData.ExtenComeAcapulco.paragraphs1.paragraphTop.BT}</BT>{" "}
        {languageData.ExtenComeAcapulco.paragraphs1.paragraphTop.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenComeAcapulco.paragraphs1.paragraphBottom.Text1} {" "}
        <BT>{languageData.ExtenComeAcapulco.paragraphs1.paragraphBottom.BT1}</BT>{" "}
        {languageData.ExtenComeAcapulco.paragraphs1.paragraphBottom.Text2} {" "}
        <BT>{languageData.ExtenComeAcapulco.paragraphs1.paragraphBottom.BT2}</BT>
      </SubtitleP>

      {/*COME EXPLORE */}

      <div className="my-2">
        <TitleH2>{languageData.ExtenComeAcapulco.section2Title}</TitleH2>
      </div>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.subtitle2.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.subtitle2.Text1}
      </SubtitleP>



      <TitleH2>{languageData.ExtenComeAcapulco.travelerQuestions.Question1.Question}</TitleH2>
      <SubtitleP>
        {languageData.ExtenComeAcapulco.travelerQuestions.Question1.Text1} {" "}
        <BT>{languageData.ExtenComeAcapulco.travelerQuestions.Question1.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.travelerQuestions.Question1.Text2}
      </SubtitleP>

      <TitleH2>{languageData.ExtenComeAcapulco.travelerQuestions.Question2.Question}</TitleH2>
      <SubtitleP>
        {languageData.ExtenComeAcapulco.travelerQuestions.Question2.Text1} {" "}
        <BT>{languageData.ExtenComeAcapulco.travelerQuestions.Question2.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.travelerQuestions.Question2.Text2}
      </SubtitleP>

      <SubtitleP>{languageData.ExtenComeAcapulco.travelerQuestions.Question2.Text3}</SubtitleP>

      <TitleH2>{languageData.ExtenComeAcapulco.travelerQuestions.Question3.Question}</TitleH2>
      <SubtitleP>
        {languageData.ExtenComeAcapulco.travelerQuestions.Question3.Text1} {" "}
        <BT>{languageData.ExtenComeAcapulco.travelerQuestions.Question3.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.travelerQuestions.Question3.Text2}
      </SubtitleP>

      <div className="my-3">
        <TitleH2>
          {languageData.ExtenComeAcapulco.section3Title}
        </TitleH2>
      </div>
      <SubtitleP>
        {languageData.ExtenComeAcapulco.subtitle3.Text1} {" "}
        <BT>{languageData.ExtenComeAcapulco.subtitle3.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.subtitle3.Text2}
      </SubtitleP>

      {/* IMAGE 2 */}
      <img
        src={imgBlogGeneric2.src}
        // width={933}
        // height={483}
        alt="Vista desde arriba de los acantilados de La Quebrada en Acapulco, con el océano azul al fondo y varias personas observando desde una plataforma."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenComeAcapulco.Characteristics.Characteristic1.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic1.Subtitle} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic1.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenComeAcapulco.Characteristics.Characteristic2.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic2.Subtitle} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic2.Text1} </SubtitleP>

      <SubtitleP>
        {languageData.ExtenComeAcapulco.Characteristics.Characteristic2.Text2} {" "}
        <BT>{languageData.ExtenComeAcapulco.Characteristics.Characteristic2.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.Characteristics.Characteristic2.Text3}
      </SubtitleP>

      {/* IMAGE 3 */}
      <img
        src={imgBlogGeneric3.src}
        // width={919}
        // height={570}
        alt="Personas disfrutando del agua en una playa de Acapulco, con un hombre remando un kayak y edificios altos y colinas en el fondo."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenComeAcapulco.Characteristics.Characteristic3.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic3.Subtitle} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic3.points.point1} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic3.points.point2} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic3.points.point3} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic3.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenComeAcapulco.Characteristics.Characteristic4.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic4.Subtitle} </SubtitleP>

      {/* IMAGE 4 */}
      <img
        src={imgBlogGeneric4.src}
        // width={915}
        // height={556}
        alt="Vista de una extensa área verde con unas cuantas construcciones a la orilla del mar. El cielo está despejado."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic4.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.Characteristics.Characteristic4.Text2} </SubtitleP>

      <TitleH2>
        {languageData.ExtenComeAcapulco.section4Title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenComeAcapulco.subtitle4.Text1} {" "}
        <BT>{languageData.ExtenComeAcapulco.subtitle4.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.subtitle4.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenComeAcapulco.paragraphs4.Text1} {" "}
        <BT>{languageData.ExtenComeAcapulco.paragraphs4.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.paragraphs4.Text2}
      </SubtitleP>

      <TitleH2>{languageData.ExtenComeAcapulco.section5Title}</TitleH2>


      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place1.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenComeAcapulco.places.place1.Text2} {" "}
        <BT>{languageData.ExtenComeAcapulco.places.place1.BT}</BT>
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place2.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place2.Text1}
      </SubtitleP>

      {/* IMAGE 5 */}
      <img
        src={imgBlogGeneric5.src}
        // width={936}
        // height={651}
        alt="Vista de un quiosco en medio de un parque. De fondo se pueden observar otras construcciones y un conjunto de árboles"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place3.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place3.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place4.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place4.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place5.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place5.Text1}
      </SubtitleP>

      {/* IMAGE 6 */}
      <img
        src={imgBlogGeneric6.src}
        // width={916}
        // height={563}
        alt="Vista de un mural de mosaico hecha por el artista mexicano Diego Rivera ubicada en la casa de los vientos."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place6.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place6.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place7.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place7.Text1}
      </SubtitleP>

      {/* IMAGE 7 */}
      <img
        src={imgBlogGeneric7.src}
        // width={703}
        // height={451}
        alt="Vista de un hombre lanzándose en la icónica Quebrada de Acapulco. De fondo se observa un basto mar azul con un cielo completamente despejado."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place8.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place8.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place9.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place9.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place10.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place10.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place11.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place11.Text1}
      </SubtitleP>

      {/* IMAGE 8 */}
      <img
        src={imgBlogGeneric8.src}
        // width={922}
        // height={661}
        alt='Vista del "Museo Histórico de Acapulco". Se observa un cielo azul con unas cuantas nubes, se observa una persona en el umbral de la entrada.'
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place12.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place12.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place13.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place13.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place14.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place14.Text1}
      </SubtitleP>

      {/* IMAGE 9 */}
      <img
        src={imgBlogGeneric9.src}
        // width={914}
        // height={626}
        alt='Vista de la "Capilla de la paz" rodeada por numerosos árboles con un cielo totalmente despejado. Se observan algunos turistas frente a la capilla.'
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place15.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place15.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place16.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place16.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.places.place17.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place17.Text1} {" "}
        <BT>{languageData.ExtenComeAcapulco.places.place17.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.places.place17.Text2}
      </SubtitleP>

      {/* IMAGE 10 */}
      <img
        src={imgBlogGeneric10.src}
        // width={917}
        // height={594}
        alt='Vista de personas en la tirolesa del parque de aventrua "Xtasea". El cielo es completamente azul.'
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>{languageData.ExtenComeAcapulco.section6Title}</TitleH2>

      <SubtitleP> {languageData.ExtenComeAcapulco.subtitle6} </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.activities.activity1.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.activities.activity1.Text1}
      </SubtitleP>

      {/* IMAGE 11 */}
      <img
        src={imgBlogGeneric11.src}
        // width={928}
        // height={367}
        alt="Vista de un grupo de personas vestidas para una de las representaciones que toman lugar en la Feria de San Isidro Labrador. Los atuendos son coloridos."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.activities.activity2.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.activities.activity2.Text1} {" "}
        <BT>{languageData.ExtenComeAcapulco.activities.activity2.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.activities.activity2.Text2}
      </SubtitleP>

      {/* LIST OF BEST HOTEL IN ACAPULCO */}
      <TitleH2>  {languageData.ExtenComeAcapulco.section7Title} </TitleH2>
      <SubtitleP> {languageData.ExtenComeAcapulco.subtitle7}</SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.paragraph7}</SubtitleP>

      {/* Image 12 */}
      <img
        src={imgBlogGeneric12.src}
        // width={927}
        // height={573}
        alt='Vista de hotel en el que se observan algunas albercas. El hotel se encuentra frente al mar.'
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-s-b text-fs-14 text-red-100">
        <li>{languageData.ExtenComeAcapulco.hotels.hotel1} </li>
        <li>{languageData.ExtenComeAcapulco.hotels.hotel2} </li>
        <li>{languageData.ExtenComeAcapulco.hotels.hotel3} </li>
        <li>{languageData.ExtenComeAcapulco.hotels.hotel4} </li>
        <li>{languageData.ExtenComeAcapulco.hotels.hotel5} </li>
        <li>{languageData.ExtenComeAcapulco.hotels.hotel6} </li>
        <li>{languageData.ExtenComeAcapulco.hotels.hotel7} </li>
        <li>{languageData.ExtenComeAcapulco.hotels.hotel8} </li>
        <li>{languageData.ExtenComeAcapulco.hotels.hotel9} </li>
        <li>{languageData.ExtenComeAcapulco.hotels.hotel10} </li>
      </ul>

      <TitleH2>
        {languageData.ExtenComeAcapulco.section8Title}
      </TitleH2>

      <SubtitleP> {languageData.ExtenComeAcapulco.subtitle8} </SubtitleP>

      {/* IMAGE 13 */}
      <img
        src={imgBlogGeneric13.src}
        // width={918}
        // height={608}
        alt="Vista de un restaurante elegante con un saxofonista ocupando la mayor parte de la toma y diversos comensales al fondo."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenComeAcapulco.paragraphs8.Text1} </SubtitleP>

      <SubtitleP>
        {languageData.ExtenComeAcapulco.paragraphs8.Text2}
        <BT> {languageData.ExtenComeAcapulco.paragraphs8.BT}</BT>
        {languageData.ExtenComeAcapulco.paragraphs8.Text3}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.gastronomy.restaurant1.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.gastronomy.restaurant1.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.gastronomy.restaurant2.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.gastronomy.restaurant2.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.gastronomy.restaurant3.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.gastronomy.restaurant3.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.gastronomy.restaurant4.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.gastronomy.restaurant4.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.gastronomy.restaurant5.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.gastronomy.restaurant5.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.gastronomy.restaurant6.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.gastronomy.restaurant6.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.gastronomy.restaurant7.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.gastronomy.restaurant7.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.gastronomy.restaurant8.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.gastronomy.restaurant8.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.gastronomy.restaurant9.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.gastronomy.restaurant9.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.gastronomy.restaurant10.Title}</BT> {" "}
        {languageData.ExtenComeAcapulco.gastronomy.restaurant10.description}
      </SubtitleP>

      {/* CURRENT QUESTIONS */}
      <TitleH2>
        {languageData.ExtenComeAcapulco.section9Title}
      </TitleH2>

      <TitleH2> {languageData.ExtenComeAcapulco.faqs.question1.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenComeAcapulco.faqs.question1.answers.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.faqs.question1.answers.Text2} </SubtitleP>
      <SubtitleP>
        {languageData.ExtenComeAcapulco.faqs.question1.answers.Text3} {" "}
        <BT>{languageData.ExtenComeAcapulco.faqs.question1.answers.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.faqs.question1.answers.Text4}
      </SubtitleP>

      <TitleH2> {languageData.ExtenComeAcapulco.faqs.question2.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenComeAcapulco.faqs.question2.answers.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenComeAcapulco.faqs.question3.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenComeAcapulco.faqs.question3.answers.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.faqs.question3.answers.Text2} </SubtitleP>

      <TitleH2> {languageData.ExtenComeAcapulco.faqs.question4.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenComeAcapulco.faqs.question4.answers.Text1} </SubtitleP>

      {/* IMAGE 13 */}
      <img
        src={imgBlogGeneric14.src}
        // width={921}
        // height={517}
        alt="Vista de un coche blanco estacionado frente a la entrada de un hotel."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenComeAcapulco.faqs.question4.answers.Text2} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.faqs.question4.answers.Text3} </SubtitleP>

      <TitleH2> {languageData.ExtenComeAcapulco.faqs.question5.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenComeAcapulco.faqs.question5.answers.Text1} </SubtitleP>

      <TItleH2> {languageData.ExtenComeAcapulco.section10Title} </TItleH2>
      <SubtitleP>
        <BT>{languageData.ExtenComeAcapulco.subtitle10.BT}</BT> {" "}
        {languageData.ExtenComeAcapulco.subtitle10.Text1}
      </SubtitleP>

      <SubtitleP> {languageData.ExtenComeAcapulco.paragraphs10.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenComeAcapulco.paragraphs10.Text2} </SubtitleP>
      <SubtitleP>{languageData.ExtenComeAcapulco.paragraphs10.Text3}</SubtitleP>
    </div>
  );
};