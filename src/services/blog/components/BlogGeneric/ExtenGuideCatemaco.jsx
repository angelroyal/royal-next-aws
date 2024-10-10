"use client";
import BT from "./General/BT";
import Image from "next/image";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/exten-guide-catemaco1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/exten-guide-catemaco2.png";
import imgBlogGeneric3 from "@/assets/img/BlogGeneric/exten-guide-catemaco3.png";
import imgBlogGeneric4 from "@/assets/img/BlogGeneric/exten-guide-catemaco4.png";
import imgBlogGeneric5 from "@/assets/img/BlogGeneric/exten-guide-catemaco5.png";
import imgBlogGeneric6 from "@/assets/img/BlogGeneric/exten-guide-catemaco6.png";
import imgBlogGeneric7 from "@/assets/img/BlogGeneric/exten-guide-catemaco7.png";
import imgBlogGeneric8 from "@/assets/img/BlogGeneric/exten-guide-catemaco8.png";
import imgBlogGeneric9 from "@/assets/img/BlogGeneric/exten-guide-catemaco9.png";
import imgBlogGeneric10 from "@/assets/img/BlogGeneric/exten-guide-catemaco10.png";
import imgBlogGeneric11 from "@/assets/img/BlogGeneric/exten-guide-catemaco11.png";

export default function ExtenGuideCatemaco() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <TitleH1>
        {languageData.ExtenGuideCatemaco.Section1.mainTitle}
      </TitleH1>

      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section1.subtitle1.Text1}
        <BT>
        {languageData.ExtenGuideCatemaco.Section1.subtitle1.BT}
        </BT>
        {languageData.ExtenGuideCatemaco.Section1.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}
      <Image
        src={imgBlogGeneric1}
        width={917}
        height={568}
        alt="Vista del atardecer de Catemaco, Veracruz, México"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section1.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section1.paragraphs1.Text2}
        <BT>
        {languageData.ExtenGuideCatemaco.Section1.paragraphs1.BT}
        </BT>
        {languageData.ExtenGuideCatemaco.Section1.paragraphs1.Text3}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section1.paragraphs1.Text4}
      </SubtitleP>

      {/*COME EXPLORE */}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenGuideCatemaco.Section2.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section2.subtitle2}
      </SubtitleP>

      {/* IMAGE 2 */}
      <Image
        src={imgBlogGeneric2}
        width={923}
        height={484}
        alt="Puerto del pueblo de catemaco, ubicado en veracruz"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section2.Question.QuestionTitle}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section2.Question.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>
          {languageData.ExtenGuideCatemaco.Section2.Question.BT}
        </BT>
        {languageData.ExtenGuideCatemaco.Section2.Question.Text2}
      </SubtitleP>

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section2.Catemaco_history.title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section2.Catemaco_history.text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section2.Catemaco_history.text2}
      </SubtitleP>

      {/* IMAGE 3 */}
      <Image
        src={imgBlogGeneric3}
        width={917}
        height={569}
        alt="Vista de la selva tropical y la cascada de Catemaco"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* KNOWS  CHARACTERISTICS*/}

      {/* QUESTION 2 */}
      <div className="my-2">
        <TitleH2>
          {languageData.ExtenGuideCatemaco.Section2.Question2.title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section2.Question2.text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section2.Question2.text2}
      </SubtitleP>

      {/* ASK*/}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenGuideCatemaco.Section2.Question3.title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section2.Question3.text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section2.Question3.text2}
        <BT>
          {languageData.ExtenGuideCatemaco.Section2.Question3.BT}  
        </BT>
        {languageData.ExtenGuideCatemaco.Section2.Question3.text3}  
      </SubtitleP>

      {/* ASK 2 */}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenGuideCatemaco.Section3.section3Title}  
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section3.subtitle3.text1}  
        <BT>
          {languageData.ExtenGuideCatemaco.Section3.subtitle3.BT}  
        </BT>
        {languageData.ExtenGuideCatemaco.Section3.subtitle3.text2}  
      </SubtitleP>

      {/* IMAGE 4 */}
      <Image
        src={imgBlogGeneric4}
        width={919}
        height={553}
        alt="Ritual en la calle de la ciudad de brujos en México"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* ASK 3 */}

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section3.Question.title}  
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section3.Question.text1}  
        <BT>
          {languageData.ExtenGuideCatemaco.Section3.Question.BT}    
        </BT>
        {languageData.ExtenGuideCatemaco.Section3.Question.text2}    
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section3.Question.text3}    
      </SubtitleP>
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section3.History_Catemaco.title}    
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section3.History_Catemaco.text1}  
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section3.History_Catemaco.text2} 
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section3.History_Catemaco.text3}
      </SubtitleP>
      
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section3.Question2.title} 
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section3.Question2.text1} 
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section3.Question2.text2}
          <BT>
            {languageData.ExtenGuideCatemaco.Section3.Question2.BT} 
          </BT>
        {languageData.ExtenGuideCatemaco.Section3.Question2.text3}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section3.Question2.text4}
      </SubtitleP>

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.section4Title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.subtitle4.text1}
        <BT>
          {languageData.ExtenGuideCatemaco.Section4.subtitle4.BT}
        </BT>
        {languageData.ExtenGuideCatemaco.Section4.subtitle4.text2}
      </SubtitleP>

      {/* DESTINATIONS */}
      {/* DESTINATION 1 */}
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination1.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination1.text1}
        <BT>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination1.BT}
        </BT>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination1.text2}
      </SubtitleP>

      {/* IMAGE 5 */}
      <Image
        src={imgBlogGeneric5}
        width={918}
        height={593}
        alt=" Lago de Catemaco, un cuerpo de agua dulce"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination1.text3}
      </SubtitleP>

      {/* DESTINATION 2 */}

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination2.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination2.text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination2.text2}
      </SubtitleP>

      {/* DESTINATION 3 */}
      <TitleH2>
      {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination3.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination3.text1}
      </SubtitleP>

      {/* IMAGE 6 */}
      <Image
        src={imgBlogGeneric6}
        width={926}
        height={488}
        alt="Nanciyaga, santuario ecológico de catemaco"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination3.text2}
      </SubtitleP>

      {/* DESTINATION 4 */}
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination4.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination4.text1}
      </SubtitleP>
      
      {/* DESTINATION 5 */}

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination5.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination5.text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination5.text2}
      </SubtitleP>

      {/* DESTINATION 6 */}
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination6.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination6.text1}
      </SubtitleP>

      {/* IMAGE 7 */}
      <Image
        src={imgBlogGeneric7}
        width={931}
        height={511}
        alt="Playa Escondida con sus arenas blancas y aguas tranquilas de catemaco."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      {/* DESTINATION 7 */}
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination7.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination7.text1}
      </SubtitleP>

      {/* DESTINATION 8 */}

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination8.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination8.text1}
      </SubtitleP>

      {/* IMAGE 8 */}
      <Image
        src={imgBlogGeneric8}
        width={925}
        height={578}
        alt="Reserva Ecológica La Otra Opción de catemaco"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* DESTINATION 9 */}
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination9.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination9.text1}
      </SubtitleP>

      {/* IMAGE 9 */}
      <Image
        src={imgBlogGeneric9}
        width={921}
        height={480}
        alt="Laguna Poza Reyn, lugar mágico en Catemaco"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      
      {/* DESTINATION 10 */}
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination10.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination10.text1}
        <BT>
          {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination10.BT}
        </BT>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination10.text2}
      </SubtitleP>

      {/* DESTINATION 11 */}

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination11.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section4.destinations_list.destination11.text1}
      </SubtitleP>

      {/* HOTELS */}
      <div className="mt-3">
        <TitleH2>
        {languageData.ExtenGuideCatemaco.Section5.section5Title}
        </TitleH2>
      </div>

      {/* IMAGE 10 */}
      <Image
        src={imgBlogGeneric10}
        width={915}
        height={555}
        alt="Hoteles acogedores donde puedes hospedarte en Catemaco"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section5.subtitle5.text1}
        <BT>
          {languageData.ExtenGuideCatemaco.Section5.subtitle5.BT}
        </BT>,
      {languageData.ExtenGuideCatemaco.Section5.subtitle5.text2}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section5.subtitle5.text3}
      </SubtitleP>
      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-s-b text-fs-14 text-red-100">
        <li>
        {languageData.ExtenGuideCatemaco.Section5.hotels.hotel1}
        </li>
        <li>
        {languageData.ExtenGuideCatemaco.Section5.hotels.hotel2}
        </li>
        <li>
        {languageData.ExtenGuideCatemaco.Section5.hotels.hotel3}
        </li>
        <li>
        {languageData.ExtenGuideCatemaco.Section5.hotels.hotel4}
        </li>
        <li>
        {languageData.ExtenGuideCatemaco.Section5.hotels.hotel5}
        </li>
        <li>
        {languageData.ExtenGuideCatemaco.Section5.hotels.hotel6}
        </li>
        <li>
        {languageData.ExtenGuideCatemaco.Section5.hotels.hotel7}
        </li>
        <li>
        {languageData.ExtenGuideCatemaco.Section5.hotels.hotel8}
        </li>
        <li>
        {languageData.ExtenGuideCatemaco.Section5.hotels.hotel9}
        </li>
        <li>
        {languageData.ExtenGuideCatemaco.Section5.hotels.hotel10}
        </li>
      </ul>
      {/* PLACES TO EAT */}
      <TitleH2>
      {languageData.ExtenGuideCatemaco.Section6.section6Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section6.subtitle6.text1}
      </SubtitleP>

      {/* IMAGE 11 */}
      <Image
        src={imgBlogGeneric11}
        width={914}
        height={573}
        alt="Platillo de la gastronomía de Catemaco"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section6.subtitle6.text2}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section6.subtitle6.text3}
      </SubtitleP>

      {/* RESTAURANTS */}

      {/* RESTAURANT 1 */}
      <TitleH2>
      {languageData.ExtenGuideCatemaco.Section6.restaurants.restaurant1.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section6.restaurants.restaurant1.text1}
      </SubtitleP>

      {/* RESTAURANT 2 */}
      <TitleH2>{languageData.ExtenGuideCatemaco.Section6.restaurants.restaurant2.title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section6.restaurants.restaurant2.text1}
      </SubtitleP>

      {/* RESTAURANT 3 */}

      <TitleH2>
      {languageData.ExtenGuideCatemaco.Section6.restaurants.restaurant3.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section6.restaurants.restaurant3.text1}
      </SubtitleP>

      {/* RESTAURANT 4*/}
      <TitleH2>
      {languageData.ExtenGuideCatemaco.Section6.restaurants.restaurant4.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section6.restaurants.restaurant4.text1}
      </SubtitleP>

      {/* RESTAURANT 5 */}

      <TitleH2>
      {languageData.ExtenGuideCatemaco.Section6.restaurants.restaurant5.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section6.restaurants.restaurant5.text1}
      </SubtitleP>

      {/* FRECUENT QUESTIONS */}
      <TitleH2>
      {languageData.ExtenGuideCatemaco.Section7.section7Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section7.subtitle7.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section7.subtitle7.text2}
      </SubtitleP>

      {/* QUESTIONS LIST */}
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionTitle}
      </TitleH2>
      
      {/* QUESTION 1 */}

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question1.title}
        </TitleH2>
        <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question1.text1}
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question1.BT}
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question1.text2}
      </SubtitleP>
      
      {/* QUESTION 2 */}
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question2.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question2.text1}
      </SubtitleP>

      {/* QUESTION 3 */}
      <TitleH2>
      {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question3.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question3.text1}
      </SubtitleP>

      {/* QUESTION 4 */}

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question4.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question4.text1}
      </SubtitleP>

      {/* QUESTION 5 */}
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question5.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question5.text1}
      </SubtitleP>

      {/* QUESTION 6 */}

      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question6.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section7.questions.questionList.question6.text1}
      </SubtitleP>

      {/* END BLOG */}
      <TitleH2>
        {languageData.ExtenGuideCatemaco.Section8.section8Title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section8.text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section8.text2}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section8.text3}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section8.text4}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenGuideCatemaco.Section8.text5}
      </SubtitleP>
    </div>
  );
}
