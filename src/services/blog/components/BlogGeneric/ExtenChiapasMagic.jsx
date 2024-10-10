"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/exten-chiapas-magic1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/exten-chiapas-magic2.png";
import imgBlogGeneric3 from "@/assets/img/BlogGeneric/exten-chiapas-magic3.png";
import imgBlogGeneric4 from "@/assets/img/BlogGeneric/exten-chiapas-magic4.png";
import imgBlogGeneric5 from "@/assets/img/BlogGeneric/exten-chiapas-magic5.png";
import imgBlogGeneric6 from "@/assets/img/BlogGeneric/exten-chiapas-magic6.png";
import imgBlogGeneric7 from "@/assets/img/BlogGeneric/exten-chiapas-magic7.png";
import imgBlogGeneric8 from "@/assets/img/BlogGeneric/exten-chiapas-magic8.png";
import imgBlogGeneric9 from "@/assets/img/BlogGeneric/exten-chiapas-magic9.png";
import imgBlogGeneric10 from "@/assets/img/BlogGeneric/exten-chiapas-magic10.png";
import imgBlogGeneric11 from "@/assets/img/BlogGeneric/exten-chiapas-magic11.png";
import imgBlogGeneric12 from "@/assets/img/BlogGeneric/exten-chiapas-magic12.png";
import imgBlogGeneric13 from "@/assets/img/BlogGeneric/exten-chiapas-magic13.png";
import imgBlogGeneric14 from "@/assets/img/BlogGeneric/exten-chiapas-magic14.png";

export default function ExtenChiapasMagic() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <TitleH1>
        {languageData.ExtenChiapasMagic.mainTitle}
      </TitleH1>

      <SubtitleP>
        {languageData.ExtenChiapasMagic.subtitle1}
      </SubtitleP>

      {/* IMAGE 1 */}
      <Image
        src={imgBlogGeneric1}
        width={918}
        height={360}
        alt="Vista de ruinas arqueológicas que están cubiertas por una vegetación de tonalidades verdes y frondosas."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs1.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs1.Text2} {" "}
        <BT>{languageData.ExtenChiapasMagic.paragraphs1.BT} {" "}</BT>
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs1.Text3}
      </SubtitleP>

      {/*COME EXPLORE */}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenChiapasMagic.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenChiapasMagic.subtitle2.Text1} {" "}
        <BT>{languageData.ExtenChiapasMagic.subtitle2.BT} {" "}</BT>
        {languageData.ExtenChiapasMagic.subtitle2.Text1}
      </SubtitleP>

      {/* IMAGE 2 */}
      <Image
        src={imgBlogGeneric2}
        width={923}
        height={615}
        alt="Vista de construcción ormentamentada antigua pintada de colores amarillos y rojizoz, es pleno día y la gente concurre el área."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs2.Text1} {" "}
        <BT>{languageData.ExtenChiapasMagic.paragraphs2.BT} {" "}</BT>
        {languageData.ExtenChiapasMagic.paragraphs2.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs2.Text3}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs2.Text4}
      </SubtitleP>

      {/* KNOWS  CHARACTERISTICS*/}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenChiapasMagic.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenChiapasMagic.subtitle3}
      </SubtitleP>

      {/* IMAGE 3 */}
      <Image
        src={imgBlogGeneric3}
        width={918}
        height={610}
        alt="Vista del impactante Cañón del Sumidero protagonizadno la toma."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs3.Text1} {" "}
        <BT>{languageData.ExtenChiapasMagic.paragraphs3.BT} {" "}</BT>
        {languageData.ExtenChiapasMagic.paragraphs3.Text2}
      </SubtitleP>


      <TitleH2>{languageData.ExtenChiapasMagic.Characteristics.Characteristic1.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic1.Subtitle}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic1.Text1} {" "}
        <BT>{languageData.ExtenChiapasMagic.Characteristics.Characteristic1.BT}</BT> {" "}
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic1.Text2}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.Characteristics.Characteristic2.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic2.Subtitle}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic2.Text1} {" "}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.Characteristics.Characteristic3.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic3.Subtitle}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic3.Text1} {" "}
        <BT>{languageData.ExtenChiapasMagic.Characteristics.Characteristic3.BT}</BT> {" "}
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic3.Text2}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.Characteristics.Characteristic4.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic4.Subtitle}
      </SubtitleP>

      {/* IMAGE 4 */}
      <Image
        src={imgBlogGeneric4}
        width={916}
        height={601}
        alt="Vista de un área de comercio en el que principalmente se venden souvenirs. Todo está lleno de coleres llamativos y muy tradicionales."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic4.Text1} {" "}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.Characteristics.Characteristic5.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic5.Subtitle}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.Characteristics.Characteristic5.Text1} {" "}
      </SubtitleP>

      <div className="my-2">
        <TitleH2>{languageData.ExtenChiapasMagic.section4Title}</TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenChiapasMagic.subtitle4}
      </SubtitleP>

      {/* IMAGE 5 */}
      <Image
        src={imgBlogGeneric5}
        width={913}
        height={622}
        alt="Vista del interior de una van para turistas vacía en la que se observa una tele en medio de esta."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* TRAVELER QUESTIONS */}
      <TitleH2> {languageData.ExtenChiapasMagic.travelerQuestions.Question1.Question}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.travelerQuestions.Question1.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.travelerQuestions.Question1.Text2}
      </SubtitleP>

      <TitleH2> {languageData.ExtenChiapasMagic.travelerQuestions.Question2.Question}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.travelerQuestions.Question2.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.travelerQuestions.Question2.Text2}
      </SubtitleP>

      <TitleH2> {languageData.ExtenChiapasMagic.travelerQuestions.Question3.Question}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.travelerQuestions.Question3.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.travelerQuestions.Question3.Text2}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.travelerQuestions.Question3.Text3}
      </SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenChiapasMagic.section5Title}
        </TitleH2>
      </div>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.subtitle5.Text1} {" "}
        <BT>{languageData.ExtenChiapasMagic.subtitle5.BT}</BT>
      </SubtitleP>

      {/* PLACES */}

      <TitleH2>{languageData.ExtenChiapasMagic.places.place1.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place1.Text1}
      </SubtitleP>

      {/* IMAGE 6 */}
      <Image
        src={imgBlogGeneric6}
        width={926}
        height={605}
        alt="Vista de las serenas y apacibles cascadas de Agua Azul."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>{languageData.ExtenChiapasMagic.places.place2.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place2.Text1}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.places.place3.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place3.Text1}{" "}
        <BT>{languageData.ExtenChiapasMagic.places.place3.BT}</BT>
        {" "}{languageData.ExtenChiapasMagic.places.place3.Text2}
      </SubtitleP>


      {/* IMAGE 7 */}
      <Image
        src={imgBlogGeneric7}
        width={919}
        height={591}
        alt="Vista de ruinas mayas rodeadas por una densa vegetación verde."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>{languageData.ExtenChiapasMagic.places.place4.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place4.Text1}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.places.place5.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place5.Text1}{" "}
        <BT>{languageData.ExtenChiapasMagic.places.place5.BT}</BT>
        {" "}{languageData.ExtenChiapasMagic.places.place5.Text2}
      </SubtitleP>


      {/* IMAGE 8 */}
      <Image
        src={imgBlogGeneric8}
        width={913}
        height={587}
        alt="Vista de el imponente cañón del sumidero a la luz del día. El día es soleado."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>{languageData.ExtenChiapasMagic.places.place6.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place6.Text1}
      </SubtitleP>


      {/* IMAGE 9 */}
      <Image
        src={imgBlogGeneric9}
        width={921}
        height={578}
        alt="Vista del parque Aluxes a plena luz del Sol. Se observa a una persona bajo el resguardo de la sombra de la entrada principal."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>{languageData.ExtenChiapasMagic.places.place7.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place7.Text1}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.places.place8.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place8.Text1}
      </SubtitleP>


      {/* IMAGE 10 */}
      <Image
        src={imgBlogGeneric10}
        width={929}
        height={629}
        alt="Vista de un grupo de personas haciendo actividades acuáticas en las aguas de color azul profundo del Parque Nacional Laguna de Montebello"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>{languageData.ExtenChiapasMagic.places.place9.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place9.Text1}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.places.place10.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place10.Text1}
      </SubtitleP>

      {/* IMAGE 11 */}
      <Image
        src={imgBlogGeneric11}
        width={931}
        height={614}
        alt="Vista de las hermosas y pacificas Cascadas de Misol-Ha."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      <TitleH2>{languageData.ExtenChiapasMagic.places.place11.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.places.place11.Text1}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.section6Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.subtitle6}
      </SubtitleP>

      {/* IMAGE 12 */}
      <Image
        src={imgBlogGeneric12}
        width={926}
        height={593}
        alt="Vista de una calle concurrida por una de las fiestas tradicionales de Chiapas."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* ACTIVITIES */}

      <TitleH2>{languageData.ExtenChiapasMagic.activities.activity1.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.activities.activity1.Text1} {" "}
        <BT>{languageData.ExtenChiapasMagic.activities.activity1.BT}</BT>.
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.activities.activity2.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.activities.activity2.Text1} {" "}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.activities.activity3.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.activities.activity3.Text1} {" "}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.activities.activity4.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.activities.activity4.Text1} {" "}
        <BT>{languageData.ExtenChiapasMagic.activities.activity4.BT}</BT>.
        {" "}{languageData.ExtenChiapasMagic.activities.activity4.Text2}
      </SubtitleP>

      <div className="my-2">
        <TitleH2>{languageData.ExtenChiapasMagic.section7Title}</TitleH2>
      </div>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.subtitle7.Text1} {" "}
        <BT>{languageData.ExtenChiapasMagic.subtitle7.BT}</BT> {" "}
        {languageData.ExtenChiapasMagic.subtitle7.Text2}
      </SubtitleP>


      {/* IMAGE 13 */}
      <Image
        src={imgBlogGeneric13}
        width={926}
        height={422}
        alt="Vista de un hotel de color azul turquesa iluminado por cuantiosas lamparas cálidas en plena noche."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs7}
      </SubtitleP>

      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-s-b text-fs-14 text-red-100">
        <li>{languageData.ExtenChiapasMagic.hotels.hotel1} </li>
        <li>{languageData.ExtenChiapasMagic.hotels.hotel2} </li>
        <li>{languageData.ExtenChiapasMagic.hotels.hotel3} </li>
        <li>{languageData.ExtenChiapasMagic.hotels.hotel4} </li>
        <li>{languageData.ExtenChiapasMagic.hotels.hotel5} </li>
        <li>{languageData.ExtenChiapasMagic.hotels.hotel6} </li>
        <li>{languageData.ExtenChiapasMagic.hotels.hotel7} </li>
        <li>{languageData.ExtenChiapasMagic.hotels.hotel8} </li>
        <li>{languageData.ExtenChiapasMagic.hotels.hotel9} </li>
        <li>{languageData.ExtenChiapasMagic.hotels.hotel10} </li>
      </ul>


      <TitleH2>
        {languageData.ExtenChiapasMagic.section8Title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenChiapasMagic.subtitle8}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenChiapasMagic.paragraphs8.BT}</BT> {" "}
        {languageData.ExtenChiapasMagic.paragraphs8.Text1}
      </SubtitleP>

      {/* IMAGE 14 */}
      <Image
        src={imgBlogGeneric14}
        width={917}
        height={562}
        alt="Vista de un restaurante con un aire relajado y acogedor. La ilumnación es cálidad y las mesas yacen esperando a los comensales."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs8.Text2}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">{languageData.ExtenChiapasMagic.gastronomy.restaurant1.Title}</b> {" "}
        {languageData.ExtenChiapasMagic.gastronomy.restaurant1.description}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">{languageData.ExtenChiapasMagic.gastronomy.restaurant2.Title}</b> {" "}
        {languageData.ExtenChiapasMagic.gastronomy.restaurant2.description}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">{languageData.ExtenChiapasMagic.gastronomy.restaurant3.Title}</b> {" "}
        {languageData.ExtenChiapasMagic.gastronomy.restaurant3.description}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">{languageData.ExtenChiapasMagic.gastronomy.restaurant4.Title}</b> {" "}
        {languageData.ExtenChiapasMagic.gastronomy.restaurant4.description}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">{languageData.ExtenChiapasMagic.gastronomy.restaurant5.Title}</b> {" "}
        {languageData.ExtenChiapasMagic.gastronomy.restaurant5.description}
      </SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenChiapasMagic.section9Title}
        </TitleH2>
      </div>

      <TitleH2>{languageData.ExtenChiapasMagic.faqs.question1.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.faqs.question1.answers.Text1}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.faqs.question2.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.faqs.question2.answers.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.faqs.question2.answers.Text2}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.faqs.question3.Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.faqs.question3.answers.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.faqs.question3.answers.Text2}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.faqs.question3.answers.Text3}
      </SubtitleP>

      <TitleH2>{languageData.ExtenChiapasMagic.section10Title}</TitleH2>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.subtitle10}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs10.Text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs10.Text2}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenChiapasMagic.paragraphs10.Text3}
      </SubtitleP>
    </div>
  );
};