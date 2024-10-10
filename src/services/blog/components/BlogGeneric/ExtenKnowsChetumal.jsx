"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/exten-knows-chetumal1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/exten-knows-chetumal2.png";
import imgBlogGeneric3 from "@/assets/img/BlogGeneric/exten-knows-chetumal3.png";
import imgBlogGeneric4 from "@/assets/img/BlogGeneric/exten-knows-chetumal4.png";
import imgBlogGeneric5 from "@/assets/img/BlogGeneric/exten-knows-chetumal5.png";
import imgBlogGeneric6 from "@/assets/img/BlogGeneric/exten-knows-chetumal6.png";
import imgBlogGeneric7 from "@/assets/img/BlogGeneric/exten-knows-chetumal7.png";
import imgBlogGeneric8 from "@/assets/img/BlogGeneric/exten-knows-chetumal8.png";
import imgBlogGeneric9 from "@/assets/img/BlogGeneric/exten-knows-chetumal9.png";
import imgBlogGeneric10 from "@/assets/img/BlogGeneric/exten-knows-chetumal10.png";
import imgBlogGeneric11 from "@/assets/img/BlogGeneric/exten-knows-chetumal11.png";
import imgBlogGeneric12 from "@/assets/img/BlogGeneric/exten-knows-chetumal12.png";
import imgBlogGeneric13 from "@/assets/img/BlogGeneric/exten-knows-chetumal13.png";

export default function ExtenKnowsChetumal() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      <TitleH1>
        {languageData.ExtenKnowsChetumal.mainTitle}
      </TitleH1>

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.subtitle1}
      </SubtitleP>

      {/* IMAGE 1 */}
      <Image
        src={imgBlogGeneric1}
        width={931}
        height={382}
        alt="Vista la costa. El mar se ve tranquilo y tiene tonos azulados y verdes. Las construcciones frente al mar son discretas y pequeñas."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.paragraphs1.Text1} {" "}
        <BT>
          {languageData.ExtenKnowsChetumal.paragraphs1.BT}
        </BT>{" "}
        {languageData.ExtenKnowsChetumal.paragraphs1.Text2}
      </SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.section2Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.subtitle2.Text1} {" "}
        <BT>
          {languageData.ExtenKnowsChetumal.subtitle2.BT}
        </BT>{" "}
        {languageData.ExtenKnowsChetumal.subtitle2.Text2}
      </SubtitleP>

      {/* IMAGE 2 */}
      <Image
        src={imgBlogGeneric2}
        width={923}
        height={603}
        alt="Vista de letrero de de Chetumal. sus tonos son terrosos y una iguana esta posando sobre este letrero."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>{languageData.ExtenKnowsChetumal.paragraphs2.Text1}</SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenKnowsChetumal.paragraphs2.BT}</BT> {" "}
        {languageData.ExtenKnowsChetumal.paragraphs2.Text2}
      </SubtitleP>

      <SubtitleP>{languageData.ExtenKnowsChetumal.paragraphs2.Text3}</SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.subtitle3.Text1}
        {" "}
        <BT>
          {languageData.ExtenKnowsChetumal.subtitle3.BT}
        </BT>
      </SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.Characteristics.Characteristic1.Title}
        </TitleH2>
      </div>
      <SubtitleP>
        <BT>{languageData.ExtenKnowsChetumal.Characteristics.Characteristic1.Subtitle.BT}</BT>
        {languageData.ExtenKnowsChetumal.Characteristics.Characteristic1.Subtitle.Text1}
      </SubtitleP>

      {/* IMAGE 3 */}
      <Image
        src={imgBlogGeneric3}
        width={927}
        height={364}
        alt="Vista de un pequeñe muelle solitario bajo el atardecer de tonos naranjas. El agua yace calmada y los árboles se ven a la distancia."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenKnowsChetumal.Characteristics.Characteristic1.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.Characteristics.Characteristic1.Text2} </SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.Characteristics.Characteristic2.Title}
        </TitleH2>
      </div>
      <SubtitleP> {languageData.ExtenKnowsChetumal.Characteristics.Characteristic2.Subtitle}</SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.Characteristics.Characteristic2.Text1}</SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.Characteristics.Characteristic2.Text2}</SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.Characteristics.Characteristic3.Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.Characteristics.Characteristic3.Subtitle}
      </SubtitleP>

      <SubtitleP> {languageData.ExtenKnowsChetumal.Characteristics.Characteristic3.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.Characteristics.Characteristic3.Text2} </SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.Characteristics.Characteristic3.Text3} </SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.Characteristics.Characteristic3.Text4} </SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.section4Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.subtitle4.Text1} {" "}
        <BT>{languageData.ExtenKnowsChetumal.subtitle4.BT}</BT>{" "}
        {languageData.ExtenKnowsChetumal.subtitle4.Text2}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenKnowsChetumal.paragraphs4.BT1}</BT>
        {" "}
        {languageData.ExtenKnowsChetumal.paragraphs4.Text1}
        {" "}
        <BT>{languageData.ExtenKnowsChetumal.paragraphs4.BT2}</BT>
        {" "}
        {languageData.ExtenKnowsChetumal.paragraphs4.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.paragraphs4.Text3}
      </SubtitleP>

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place1.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place1.Text1}
      </SubtitleP>

      {/* IMAGE 4 */}
      <Image
        src={imgBlogGeneric4}
        width={925}
        height={488}
        alt="Vista de un vistoso letrero de Chetumal ocupando todo el ancho de la toma. Un cielo despejado se ve en lo alto."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place2.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place2.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place3.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place3.Text1}
      </SubtitleP>

      {/* IMAGE 5 */}
      <Image
        src={imgBlogGeneric5}
        width={917}
        height={509}
        alt="Vista de la sobria y elegante entrada del muse de la cultura maya en Chetumal."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place4.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place4.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place5.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place5.Text1}
      </SubtitleP>

      {/* IMAGE 6 */}
      <Image
        src={imgBlogGeneric6}
        width={913}
        height={589}
        alt="Vista a contra picada de una piramide maya en la zona arqueológica de Dzibanché"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place6.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place6.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place7.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place7.Text1}
      </SubtitleP>

      {/* IMAGE 7 */}
      <Image
        src={imgBlogGeneric7}
        width={916}
        height={520}
        alt="Vista un muelle pequeño frente a la Laguna Milagros. El agua es azul turquesa y el cielo tiene agrupacines de nubes que decoran el cielo azul."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place8.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place8.Text1}
      </SubtitleP>

      {/* IMAGE 8 */}
      <Image
        src={imgBlogGeneric8}
        width={925}
        height={520}
        alt="Vista de un cielo imponente reflejado en el mar sobre el que yace un muelle que se extiende hacia dentro del agua."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place9.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place9.Text1}
      </SubtitleP>


      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place10.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place10.Text1}
      </SubtitleP>

      {/* IMAGE 9 */}
      <Image
        src={imgBlogGeneric9}
        width={913}
        height={606}
        alt="Vista de una ruina maya rodeada por un bosque espeso en la zona arqueológica de Kohunlich"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place11.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place11.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT className="text-black text-fs-16">
          {languageData.ExtenKnowsChetumal.places.place12.Title}{" "}
        </BT>
        {languageData.ExtenKnowsChetumal.places.place12.Text1}
      </SubtitleP>

      {/* IMAGE 10 */}
      <Image
        src={imgBlogGeneric10}
        width={785}
        height={715}
        alt="Vista desde dentro del cenote Taj Mahal. El Sol entra por una apertura del cenote y deja caer algunos rayos de luz entre el denso color turquesa del agua."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.subtitle5}
      </SubtitleP>

      {/* IMAGE 11 */}
      <Image
        src={imgBlogGeneric11}
        width={912}
        height={585}
        alt="Vista a través de una ventana del aeropuerto por el cual se logra ver un avión estacionado."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenKnowsChetumal.travelerQuestions.Question1.Question} </TitleH2>
      <SubtitleP> {languageData.ExtenKnowsChetumal.travelerQuestions.Question1.Text1}</SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.travelerQuestions.Question1.Text2}</SubtitleP>

      <TitleH2> {languageData.ExtenKnowsChetumal.travelerQuestions.Question2.Question} </TitleH2>
      <SubtitleP> {languageData.ExtenKnowsChetumal.travelerQuestions.Question2.Text1}</SubtitleP>

      <TitleH2> {languageData.ExtenKnowsChetumal.travelerQuestions.Question3.Question} </TitleH2>
      <SubtitleP> {languageData.ExtenKnowsChetumal.travelerQuestions.Question3.Text1}</SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.travelerQuestions.Question3.Text2}</SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.section6Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.subtitle6}
      </SubtitleP>

      {/* IMAGE 12 */}
      <Image
        src={imgBlogGeneric12}
        width={920}
        height={583}
        alt="Vista a contra picada de un hotel de color blanco yeso. Una pequeña alberca con el agua calmada yace en el centro de la toma."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.paragraphs6.Text1}
        {" "}
        <BT>
          {languageData.ExtenKnowsChetumal.paragraphs6.BT}
        </BT>
        {" "}
        {languageData.ExtenKnowsChetumal.paragraphs6.Text2}
      </SubtitleP>

      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-m text-fs-14 text-red-100">
        <li>{languageData.ExtenKnowsChetumal.hotels.hotel1} </li>
        <li>{languageData.ExtenKnowsChetumal.hotels.hotel2} </li>
        <li>{languageData.ExtenKnowsChetumal.hotels.hotel3} </li>
        <li>{languageData.ExtenKnowsChetumal.hotels.hotel4} </li>
        <li>{languageData.ExtenKnowsChetumal.hotels.hotel5} </li>
        <li>{languageData.ExtenKnowsChetumal.hotels.hotel6} </li>
        <li>{languageData.ExtenKnowsChetumal.hotels.hotel7} </li>
        <li>{languageData.ExtenKnowsChetumal.hotels.hotel8} </li>
        <li>{languageData.ExtenKnowsChetumal.hotels.hotel9} </li>
        <li>{languageData.ExtenKnowsChetumal.hotels.hotel10} </li>
      </ul>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.section7Title}
        </TitleH2>
      </div>

      <SubtitleP>
        <BT>
          {languageData.ExtenKnowsChetumal.subtitle7.BT}
        </BT>
        {" "}
        {languageData.ExtenKnowsChetumal.subtitle7.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenKnowsChetumal.paragraphs7}
      </SubtitleP>

      {/* IMAGE 13 */}
      <Image
        src={imgBlogGeneric13}
        width={920}
        height={529}
        alt="Vista de un restaurante frente al mar. La luz es cálida y el atardecer cae, hay algunos comensales en sus mesas."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <BT className="text-black text-fs-16">{languageData.ExtenKnowsChetumal.gastronomy.restaurant1.Title}</BT>
        {" "}{languageData.ExtenKnowsChetumal.gastronomy.restaurant1.description}
      </SubtitleP>

      <SubtitleP>
        <BT className="text-black text-fs-16">{languageData.ExtenKnowsChetumal.gastronomy.restaurant2.Title}</BT>
        {" "}{languageData.ExtenKnowsChetumal.gastronomy.restaurant2.description}
      </SubtitleP>

      <SubtitleP>
        <BT className="text-black text-fs-16">{languageData.ExtenKnowsChetumal.gastronomy.restaurant3.Title}</BT>
        {" "}{languageData.ExtenKnowsChetumal.gastronomy.restaurant3.description}
      </SubtitleP>

      <SubtitleP>
        <BT className="text-black text-fs-16">{languageData.ExtenKnowsChetumal.gastronomy.restaurant4.Title}</BT>
        {" "}{languageData.ExtenKnowsChetumal.gastronomy.restaurant4.description}
      </SubtitleP>

      <SubtitleP>
        <BT className="text-black text-fs-16">{languageData.ExtenKnowsChetumal.gastronomy.restaurant5.Title}</BT>
        {" "}{languageData.ExtenKnowsChetumal.gastronomy.restaurant5.description}
      </SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.section8Title}
        </TitleH2>
      </div>

      <h4 className="text-fs-16 text-black m-b">
        {languageData.ExtenKnowsChetumal.faqs.question1.Title}
      </h4>
      <SubtitleP> {languageData.ExtenKnowsChetumal.faqs.question1.answers.Text1}</SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.faqs.question1.answers.Text2}</SubtitleP>

      <h4 className="text-fs-16 text-black m-b">
        {languageData.ExtenKnowsChetumal.faqs.question2.Title}
      </h4>
      <SubtitleP> {languageData.ExtenKnowsChetumal.faqs.question2.answers.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.faqs.question2.answers.Text2} </SubtitleP>

      <h4 className="text-fs-16 text-black m-b">
        {languageData.ExtenKnowsChetumal.faqs.question3.Title}
      </h4>
      <SubtitleP> {languageData.ExtenKnowsChetumal.faqs.question3.answers.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.faqs.question3.answers.Text1} </SubtitleP>

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenKnowsChetumal.section9Title}
        </TitleH2>
      </div>
      <SubtitleP>
        {languageData.ExtenKnowsChetumal.subtitle9}
      </SubtitleP>

      <SubtitleP> {languageData.ExtenKnowsChetumal.paragraphs9.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.paragraphs9.Text2} </SubtitleP>
      <SubtitleP> {languageData.ExtenKnowsChetumal.paragraphs9.Text3} </SubtitleP>
    </div>
  );
};