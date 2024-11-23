"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";

export default function ExtenDiscoveringCampeche() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <TitleH1>
        {languageData.ExtendDiscoveringCampeche.Section1.mainTitle}
      </TitleH1>

      <SubtitleP>
        {languageData.ExtendDiscoveringCampeche.Section1.subtitle1.Text1}
        <BT>
          {languageData.ExtendDiscoveringCampeche.Section1.subtitle1.BT}
        </BT>
        {languageData.ExtendDiscoveringCampeche.Section1.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche1.jpg`}
        alt="Vista del vistoso centro de Campeche en el que se puede observar una pequeña iglesia. Los árboles enmarcan el quiosco principal."
        className="rounded-lg h-[437px] object-cover w-full my-6 object-bottom"
      />

      <SubtitleP>
        {languageData.ExtendDiscoveringCampeche.Section1.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtendDiscoveringCampeche.Section1.paragraphs1.Text2}
      </SubtitleP>

      {/*COME EXPLORE */}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtendDiscoveringCampeche.Section2.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtendDiscoveringCampeche.Section2.subtitle2.Text1}
        <BT>
          {languageData.ExtendDiscoveringCampeche.Section2.subtitle2.BT}
        </BT>
        {languageData.ExtendDiscoveringCampeche.Section2.subtitle2.Text2}
        <BT>
          {languageData.ExtendDiscoveringCampeche.Section2.subtitle2.BT2}
        </BT>
        {languageData.ExtendDiscoveringCampeche.Section2.subtitle2.Text3}
      </SubtitleP>

      {/* IMAGE 2 */}
      <img
       src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche2.png`}
        alt="Vista desde otro ángulo del centro de Campeche. Está atardeciendo y la iluminación de las construcciones resalta."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* //QUESTIONS FROM SECTION2*/}
      <TitleH2>
        {languageData.ExtendDiscoveringCampeche.Section2.Questions.Question1.QuestionTitle}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtendDiscoveringCampeche.Section2.Questions.Question1.QuestionSubtitle.Text1}
        <BT>
          {languageData.ExtendDiscoveringCampeche.Section2.Questions.Question1.QuestionSubtitle.BT}
        </BT>
        {languageData.ExtendDiscoveringCampeche.Section2.Questions.Question1.QuestionSubtitle.Tex2}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section2.Questions.Question1.QuestionParagraph}
      </SubtitleP>
      
      <TitleH2>{languageData.ExtendDiscoveringCampeche.Section2.Questions.Question2.QuestionTitle}</TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section2.Questions.Question2.QuestionSubtitle}
      </SubtitleP>

      <TitleH2>{languageData.ExtendDiscoveringCampeche.Section2.Questions.Question3.QuestionTitle}</TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section2.Questions.Question3.QuestionSubtitle}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section2.Questions.Question3.QuestionParagraph}
      </SubtitleP>

      {/* KNOWS  CHARACTERISTICS*/}

      <div className="my-2">
        <TitleH2>
        {languageData.ExtendDiscoveringCampeche.Section3.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section3.subtitle3.Text1}
      <BT>
      {languageData.ExtendDiscoveringCampeche.Section3.subtitle3.BT}
      </BT>
      {languageData.ExtendDiscoveringCampeche.Section3.subtitle3.Text2}
      <BT>
      {languageData.ExtendDiscoveringCampeche.Section3.subtitle3.BT2}
      </BT>
      {languageData.ExtendDiscoveringCampeche.Section3.subtitle3.Text3}
      </SubtitleP>

      {/*CURRENT QUESTIONS ABOUT CAMPECHE */}

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question1.QuestionTitle}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question1.QuestionSubtitle.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question1.QuestionParagraph}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question2.QuestionTitle}
      </TitleH2>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question2.QuestionSubtitle.Text1}
      <BT>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question2.QuestionSubtitle.BT}
      </BT>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question2.QuestionSubtitle.Text2}
      </SubtitleP>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question2.QuestionParagraph.Text1}
      </SubtitleP>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question2.QuestionParagraph.Text2}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question3.QuestionTitle}
      </TitleH2>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question3.QuestionSubtitle.Tex1}
      </SubtitleP>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section3.Questions.Question3.QuestionParagraph.Tex1}
      </SubtitleP>
      
      {/* IMPORTANT PLACES IN CAMPECHE */}
      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.section4Title}
      </TitleH2>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.subtitle4.Text1}
        <BT>
        {languageData.ExtendDiscoveringCampeche.Section4.subtitle4.BT}
        </BT>
        {languageData.ExtendDiscoveringCampeche.Section4.subtitle4.Text2}
      </SubtitleP>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.paragraph4.Text1}
       <BT>
       {languageData.ExtendDiscoveringCampeche.Section4.paragraph4.BT}
       </BT>
       {languageData.ExtendDiscoveringCampeche.Section4.paragraph4.Text2}
      </SubtitleP>

      {/* PLACES */}
      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place1.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place1.tex1}
      </SubtitleP>

      {/* IMAGE 3 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche3.png`}
        alt="Vista de el centro de Campeche deasde otro ángulo. Es de mañana y hay personas en el parque bajo la sombra de los árboles."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* ASK*/}

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place2.title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtendDiscoveringCampeche.Section4.places.place2.text1}
        <BT>
        {languageData.ExtendDiscoveringCampeche.Section4.places.place2.BT}
        </BT>
        {languageData.ExtendDiscoveringCampeche.Section4.places.place2.text2}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place3.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place3.text1}
      </SubtitleP>

      {/* IMAGE 4 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche4.jpg`}
        alt="Vista del Fuerte de San Miguel bajo un cielo azul con nubes esparcidas."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* ASK 3 */}

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place4.title}
      </TitleH2>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place4.text1}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place5.title}
      </TitleH2>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place5.text1}
      </SubtitleP>

      {/* IMAGE 5 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche5.png`}
        alt="Vista de la colorido y bello Centro Cultural Casa Nº 6. Se pueden ver algunas sillas vacías y el Sol cayendo sobre el centro de la construcción."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place6.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place6.text1}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place7.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place7.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place7.text2}
      </SubtitleP>

      {/* IMAGE 6 */}
      <img
       src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche6.png`}
        alt="Vista del estético malecón de Campeche despejado en un día soleado e iluminado."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place8.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place8.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place8.text2}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place9.title}
      </TitleH2>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place9.text1}
        <BT>
        {languageData.ExtendDiscoveringCampeche.Section4.places.place9.BT}
        </BT>,
        {languageData.ExtendDiscoveringCampeche.Section4.places.place9.text2}
      </SubtitleP>

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place9.text3}
      </SubtitleP>

      {/* IMAGE 7 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche7.png`}
        alt="Vista de piramide frente a un cielo azul en el que transitan unas cuantas nubes, ubiado en la Zona Arqueológica de Edzná"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place10.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place10.text1}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place11.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place11.text1}
      </SubtitleP>

      {/* IMAGE 8 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche8.png`}
        alt="Vista de letrero colorido de Isla Aguada. Dos delfines sobre el letrero destacan."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place12.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place12.text1}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place13.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section4.places.place13.text1}
      </SubtitleP>

      {/* IMAGE 9 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche9.png`}
        alt="Vista de Andador Calle 59 siendo frecuentado por numerosas personas durante la noche."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section5.section5Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section5.subtitle5}
      </SubtitleP>

      {/* ARRIVE */}

      {/* IMAGE 10 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche10.png`}
        alt="Vista de un numeroso grupo de personas vestidas para la Fiesta del Polkekén. Las vestimentas son llamativas y coloridas."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* TRADITIONS LIST */}

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section5.traditions_list.tradition1.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section5.traditions_list.tradition1.text}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section5.traditions_list.tradition2.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section5.traditions_list.tradition2.text}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section5.traditions_list.tradition3.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section5.traditions_list.tradition3.text}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section5.traditions_list.tradition4.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section5.traditions_list.tradition4.text}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section5.traditions_list.tradition5.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section5.traditions_list.tradition5.text}
      </SubtitleP>

      {/* RESTAURANTS SECTION  */}
      <TitleH2>
        {languageData.ExtendDiscoveringCampeche.Section6.section6Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section6.subtitle6.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section6.subtitle6.text2}
      </SubtitleP>

      {/* IMAGE 11 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche11.jpg`}
        alt="Vista de restaurante en el que se observan las paredes cargadas de cuadros. Las paredes son rosas y hay diversos relojes antiguos sobre una de las paredes que yace a un costado de la puerta principal."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section6.paragraph}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant1.title}
        </b>
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant1.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant1.text2}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant2.title}
        </b>
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant2.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant2.text2}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant3.title}
        </b>
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant3.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant3.text2}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant4.title}
        </b>
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant4.text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant5.title}
        </b>
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant5.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant5.text2}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant6.title}
        </b>
        {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant6.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section6.restaurants.restaurant6.text2}
      </SubtitleP>

      {/* ACCOMMODATIONS IN CAMPECHE */}
      
      <TitleH2>
        {languageData.ExtendDiscoveringCampeche.Section7.section7Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section7.subtitle7}
      </SubtitleP>

      {/* IMAGE 12 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche12.png`}
        alt="Vista de una alberca con el agua calmada. Frente a la alberca hay 4 camastros y detrás de estos hay una pared de arbustos volumninosa."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-s-b text-fs-14 text-red-100">
        <li>{languageData.ExtendDiscoveringCampeche.Section7.accommodations.accommodation1}
        </li>
        <li>{languageData.ExtendDiscoveringCampeche.Section7.accommodations.accommodation2}
        </li>
        <li>{languageData.ExtendDiscoveringCampeche.Section7.accommodations.accommodation3}
        </li>
        <li>{languageData.ExtendDiscoveringCampeche.Section7.accommodations.accommodation4}
        </li>
        <li>{languageData.ExtendDiscoveringCampeche.Section7.accommodations.accommodation5}
        </li>
        <li>{languageData.ExtendDiscoveringCampeche.Section7.accommodations.accommodation6}
        </li>
        <li>{languageData.ExtendDiscoveringCampeche.Section7.accommodations.accommodation7}
        </li>
        <li>{languageData.ExtendDiscoveringCampeche.Section7.accommodations.accommodation8}
        </li>
        <li>{languageData.ExtendDiscoveringCampeche.Section7.accommodations.accommodation9}
        </li>
        <li>{languageData.ExtendDiscoveringCampeche.Section7.accommodations.accommodation10}
        </li>
      </ul>

      <div className="my-3">
        <TitleH2>
          <span className="text-fs-22">
            {languageData.ExtendDiscoveringCampeche.Section8.section7Title}
          </span>
        </TitleH2>
      </div>

      {/* QUESTIONS */}

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section8.questions.question1.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section8.questions.question1.text1}
      </SubtitleP>

      {/* IMAGE 13 */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog/exten-discovering-campeche13.png`}
        alt="Vista del mar junto a un cuerpo rocoso de tamaño considerable. El agua es azul pronfundo y el cielo está despejado."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section8.questions.question1.text2}

      </SubtitleP>
      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section8.questions.question2.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section8.questions.question2.text1}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendDiscoveringCampeche.Section8.questions.question3.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section8.questions.question3.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section8.questions.question3.text2}
      </SubtitleP>
      
      <TitleH2>
        {languageData.ExtendDiscoveringCampeche.Section9.section9Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section9.subtitle9}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section9.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendDiscoveringCampeche.Section9.text2}
      </SubtitleP>
    </div>
  );
}
