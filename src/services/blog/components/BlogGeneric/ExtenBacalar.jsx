"use client";
import BT from "./General/BT";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/exten-bacalar1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/exten-bacalar2.png";
import imgBlogGeneric3 from "@/assets/img/BlogGeneric/exten-bacalar3.png";
import imgBlogGeneric4 from "@/assets/img/BlogGeneric/exten-bacalar4.png";
import imgBlogGeneric5 from "@/assets/img/BlogGeneric/exten-bacalar5.png";
import imgBlogGeneric6 from "@/assets/img/BlogGeneric/exten-bacalar6.png";
import imgBlogGeneric7 from "@/assets/img/BlogGeneric/exten-bacalar7.png";
import imgBlogGeneric8 from "@/assets/img/BlogGeneric/exten-bacalar8.png";
import imgBlogGeneric9 from "@/assets/img/BlogGeneric/exten-bacalar9.png";
import imgBlogGeneric10 from "@/assets/img/BlogGeneric/exten-bacalar10.png";
import imgBlogGeneric11 from "@/assets/img/BlogGeneric/exten-bacalar11.png";
import imgBlogGeneric12 from "@/assets/img/BlogGeneric/exten-bacalar12.png";
import imgBlogGeneric13 from "@/assets/img/BlogGeneric/exten-bacalar13.png";

export default function ExtenBacalar() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <TitleH1>{languageData.ExtendBacalar.Section1.mainTitle}</TitleH1>

      <SubtitleP>
        {languageData.ExtendBacalar.Section1.subtitle1.Text1}
        <BT>{languageData.ExtendBacalar.Section1.subtitle1.BT}</BT>
        {languageData.ExtendBacalar.Section1.subtitle1.TexT2}
      </SubtitleP>

      {/* IMAGE 1 */}
      <img
        src={imgBlogGeneric1.src}
        // width={927}
        // height={565}
        alt="Vista de las letras gigantes de bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
      {languageData.ExtendBacalar.Section1.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtendBacalar.Section1.paragraphs1.Text2}
        <BT>
        {languageData.ExtendBacalar.Section1.paragraphs1.BT}
        </BT>
        {languageData.ExtendBacalar.Section1.paragraphs1.Text3}
      </SubtitleP>

      {/*COME EXPLORE */}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtendBacalar.Section2.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtendBacalar.Section2.subtitle2.Text1}
        <BT>
        {languageData.ExtendBacalar.Section2.subtitle2.BT}
        </BT>
        {languageData.ExtendBacalar.Section2.subtitle2.Text2}
      </SubtitleP>

      <SubtitleP>
      {languageData.ExtendBacalar.Section2.subtitle2.Text3}
      </SubtitleP>

      {/* IMAGE 2 */}
      <img
        src={imgBlogGeneric2.src}
        // width={910}
        // height={564}
        alt="Vista panorámica de la laguna de Bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      <SubtitleP>
        {languageData.ExtendBacalar.Section2.paragraphs.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section2.paragraphs.Text2}
      </SubtitleP>

      {/* BACALAR CHARACTERISTICS. */}
      <TitleH2>
      {languageData.ExtendBacalar.Section3.section3Title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtendBacalar.Section3.subtitle2.Text1}
        <BT>
        {languageData.ExtendBacalar.Section3.subtitle2.BT}
        </BT>
        {languageData.ExtendBacalar.Section3.subtitle2.Text2}
      </SubtitleP>

      {/* IMAGE 3 */}
      <img
        src={imgBlogGeneric3.src}
        // width={922}
        // height={553}
        alt="Persona posando junto a la hermosa laguna de Bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* KNOWS  CHARACTERISTICS/Q&A*/}

      {/* COMO ES EL CLIMA EN BACALAR */}
      <div className="my-2">
        <TitleH2>
        {languageData.ExtendBacalar.Section3.Questions.Question1.QuestionTitle}
        </TitleH2>
      </div>

      <SubtitleP>
      {languageData.ExtendBacalar.Section3.Questions.Question1.QuestionSubtitle.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section3.Questions.Question1.QuestionSubtitle.Text2}
      </SubtitleP>

      {/* ASK*/}

      <div className="my-2">
        <TitleH2>
        {languageData.ExtendBacalar.Section3.Questions.Question2.QuestionTitle}
        </TitleH2>
      </div>

      <SubtitleP>
      {languageData.ExtendBacalar.Section3.Questions.Question2.QuestionSubtitle.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section3.Questions.Question2.QuestionSubtitle.Text2}
      </SubtitleP>

      {/* ASK 3 */}

      <div className="my-2">
        <TitleH2>
        {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionTitle}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionSubtitle.Text1}
        <BT>
        {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionSubtitle.BT}  
        </BT>
        {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionSubtitle.Text2}
      </SubtitleP>

      <SubtitleP>
      {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionParagraph.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionParagraph.Text2}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionParagraph.Text3}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionParagraph.Text4}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionParagraph.Text5}
        <BT>
        {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionParagraph.BT}  
        </BT>
        {languageData.ExtendBacalar.Section3.Questions.Question3.QuestionParagraph.Text6}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendBacalar.Section4.section4Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.subtitle4.Text1}
        <BT>
        {languageData.ExtendBacalar.Section4.subtitle4.BT}  
        </BT>
        {languageData.ExtendBacalar.Section4.subtitle4.Text2}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.subtitle4.Text3}
      </SubtitleP>

      {/* BACALAR PLACES*/}
      <TitleH2>
      {languageData.ExtendBacalar.Section4.places.place1.title}
      </TitleH2>
      <SubtitleP>
        <BT>
        {languageData.ExtendBacalar.Section4.places.place1.BT}  
        </BT>
        {languageData.ExtendBacalar.Section4.places.place1.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place1.text2}
      </SubtitleP>

      {/* IMAGE 4 */}
      <img
        src={imgBlogGeneric4.src}
        // width={941}
        // height={582}
        alt="Vista panorámica de Bacalar y la laguna de los 7 colores"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* ASK 3 */}

      <SubtitleP>
        <BT>
          <span className="italic text-fs-16">
          {languageData.ExtendBacalar.Section4.places.place1.question.title}
          </span>
        </BT>
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place1.question.text}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtendBacalar.Section4.places.place2.title}
      </TitleH2>

      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place2.text1}
      </SubtitleP>
      <TitleH2>
      {languageData.ExtendBacalar.Section4.places.place3.title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtendBacalar.Section4.places.place3.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place3.text2}
      </SubtitleP>

      {/* IMAGE 5 */}
      <img
        src={imgBlogGeneric5.src}
        // width={912}
        // height={577}
        alt="Fuerte San Felipe de bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      <TitleH2>
      {languageData.ExtendBacalar.Section4.places.place4.cenotes.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place4.cenotes.description}
      </SubtitleP>

      <SubtitleP>
        <BT>
          <span className="italic">
          {languageData.ExtendBacalar.Section4.places.place4.cenotes.cenote1.title}
          </span>
        </BT>{" "}
        {languageData.ExtendBacalar.Section4.places.place4.cenotes.cenote1.description}
      </SubtitleP>

      {/* IMAGE 6 */}
      <img
        src={imgBlogGeneric6.src}
        // width={918}
        // height={516}
        alt="Cenote negro de bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT>
          <span className="italic">
          {languageData.ExtendBacalar.Section4.places.place4.cenotes.cenote2.title}
          </span>
        </BT>{" "}
        {languageData.ExtendBacalar.Section4.places.place4.cenotes.cenote2.description}
      </SubtitleP>

      {/* IMAGE 7 */}
      <img
        src={imgBlogGeneric7.src}
        // width={925}
        // height={547}
        alt="Vista del Cenote Azul, uno de los más profundos de la zona de bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT>
          <span className="italic">
          {languageData.ExtendBacalar.Section4.places.place4.cenotes.cenote3.title}
          </span>
        </BT>{" "}
        {languageData.ExtendBacalar.Section4.places.place4.cenotes.cenote3.description}
      </SubtitleP>
      <SubtitleP>
        <BT>
          <span className="italic">
          {languageData.ExtendBacalar.Section4.places.place4.cenotes.cenote4.title}
          </span>
        </BT>{" "}
        {languageData.ExtendBacalar.Section4.places.place4.cenotes.cenote4.description}
      </SubtitleP>

      <TitleH2>{languageData.ExtendBacalar.Section4.places.place5.title}</TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place5.text1}
      </SubtitleP>

      {/* PLACE 6*/}
      <TitleH2>
      {languageData.ExtendBacalar.Section4.places.place6.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place6.text1}
      </SubtitleP>

      {/* PLACE 7*/}
      <TitleH2>
      {languageData.ExtendBacalar.Section4.places.place7.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place7.text1}
      </SubtitleP>

      {/* IMAGE 8 */}
      <img
        src={imgBlogGeneric8.src}
        // width={916}
        // height={569}
        alt="Tirolesas Kan Ki´n de bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* PLACE 8*/}

      <TitleH2>
      {languageData.ExtendBacalar.Section4.places.place8.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place8.text1}
      </SubtitleP>

      {/* PLACE 9*/}

      <TitleH2>
      {languageData.ExtendBacalar.Section4.places.place9.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place9.text1}
      </SubtitleP>

      {/* IMAGE 9 */}
      <img
        src={imgBlogGeneric9.src}
        // width={921}
        // height={517}
        alt="Canal de Los Piratas de bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* PLACE 10*/}

      <TitleH2>
      {languageData.ExtendBacalar.Section4.places.place10.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place10.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place10.text2}
      </SubtitleP>

      {/* PLACE 11*/}
      <TitleH2>
      {languageData.ExtendBacalar.Section4.places.place11.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section4.places.place11.text1}
      </SubtitleP>

      {/* IMAGE 10 */}
      <img
        src={imgBlogGeneric10.src}
        // width={920}
        // height={506}
        alt="Rápidos del rio de Bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      {/* ARRIVE */}

      <div className="my-2">
        <TitleH2>
          <span className="text-fs-22">
          {languageData.ExtendBacalar.Section5.section5Title}
          </span>
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtendBacalar.Section5.subtitle5.Text1}
        <BT>
        {languageData.ExtendBacalar.Section5.subtitle5.BT}
        </BT>
      </SubtitleP>

      {/* IMAGE 11 */}
      <img
        src={imgBlogGeneric11.src}
        // width={930}
        // height={580}
        alt="Servicio y calidad en los mejores hoteles de Bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
      {languageData.ExtendBacalar.Section5.paragraph5}
      </SubtitleP>

      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-s-b text-fs-14 text-red-100">
        <li>
        {languageData.ExtendBacalar.Section5.hotels.hotel1}
        </li>
        <li>
        {languageData.ExtendBacalar.Section5.hotels.hotel2}
        </li>
        <li>
        {languageData.ExtendBacalar.Section5.hotels.hotel3}
        </li>
        <li>
        {languageData.ExtendBacalar.Section5.hotels.hotel4}
        </li>
        <li>
        {languageData.ExtendBacalar.Section5.hotels.hotel5}
        </li>
        <li>
        {languageData.ExtendBacalar.Section5.hotels.hotel6}
        </li>
        <li>
        {languageData.ExtendBacalar.Section5.hotels.hotel7}
        </li>
        <li>
        {languageData.ExtendBacalar.Section5.hotels.hotel8}
        </li>
        <li>
        {languageData.ExtendBacalar.Section5.hotels.hotel9}
        </li>
        <li>
        {languageData.ExtendBacalar.Section5.hotels.hotel10}
        </li>
      </ul>

      <TitleH2>
        {languageData.ExtendBacalar.Section6.section6Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section6.subtitle6.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section6.subtitle6.Text2}
      </SubtitleP>

      {/* IMAGE 12 */}
      <img
        src={imgBlogGeneric12.src}
        // width={921}
        // height={589}
        alt="Mejores restaurantes de bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/*RESTAURANTS*/}
    
      {/*RESTAURANT1 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtendBacalar.Section6.restaurants.restaurant1.title}
        </b>
        {languageData.ExtendBacalar.Section6.restaurants.restaurant1.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section6.restaurants.restaurant1.text2}
      </SubtitleP>

      {/*RESTAURANT 2 */}

      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtendBacalar.Section6.restaurants.restaurant2.title}
        </b>
        {languageData.ExtendBacalar.Section6.restaurants.restaurant2.text1}
      </SubtitleP>

      {/*RESTAURANT 3 */}

      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtendBacalar.Section6.restaurants.restaurant3.title}
        </b>
        {languageData.ExtendBacalar.Section6.restaurants.restaurant3.text1}
      </SubtitleP>

      {/*RESTAURANT 4 */}

      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtendBacalar.Section6.restaurants.restaurant4.title}
        </b>
        {languageData.ExtendBacalar.Section6.restaurants.restaurant4.text1}
      </SubtitleP>

      <TitleH2>
        {languageData.ExtendBacalar.Section7.section7Title}
      </TitleH2>

      <SubtitleP>
        <BT>
          <span className="text-fs-16">
          {languageData.ExtendBacalar.Section7.Questions.Question1.QuestionTitle}
          </span>
        </BT>
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section7.Questions.Question1.QuestionSubtitle.Text1}
      </SubtitleP>

      {/* IMAGE 13 */}
      <img
        src={imgBlogGeneric13.src}
        // width={927}
        // height={630}
        alt="Vista los restos arqueológicos mayas de bacalar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* QUESTION 2 */}
      <TitleH2>
      {languageData.ExtendBacalar.Section7.Questions.Question2.QuestionTitle}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section7.Questions.Question2.QuestionSubtitle.Text1}
      </SubtitleP>

      {/* QUESTION 3 */}
      <TitleH2>
      {languageData.ExtendBacalar.Section7.Questions.Question3.QuestionTitle}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section7.Questions.Question3.QuestionSubtitle.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section7.Questions.Question3.QuestionSubtitle.Text2}
      </SubtitleP>


      {/* QUESTION 4 */}

      <TitleH2>
      {languageData.ExtendBacalar.Section7.Questions.Question4.QuestionTitle}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section7.Questions.Question4.QuestionSubtitle.Text1}
      </SubtitleP>

      {/* QUESTION 5 */}
      <TitleH2>
      {languageData.ExtendBacalar.Section7.Questions.Question5.QuestionTitle}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section7.Questions.Question5.QuestionSubtitle.Text1}
      </SubtitleP>

      {/* QUESTION 6 */}
      <TitleH2>
      {languageData.ExtendBacalar.Section7.Questions.Question6.QuestionTitle}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtendBacalar.Section7.Questions.Question6.QuestionSubtitle.Text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section7.Questions.Question6.QuestionSubtitle.Text2}
      </SubtitleP>

      {/* END BLOG */}
      <TitleH2>
      {languageData.ExtendBacalar.Section8.section8Title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtendBacalar.Section8.subtitle8}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section8.paragraphs.paragraph1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtendBacalar.Section8.paragraphs.paragraph2}
      </SubtitleP>
    </div>
  );
}
