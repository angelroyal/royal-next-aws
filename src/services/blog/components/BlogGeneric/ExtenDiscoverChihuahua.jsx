"use client";

import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/exten-discover-chihuahua1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/exten-discover-chihuahua2.png";
import imgBlogGeneric3 from "@/assets/img/BlogGeneric/exten-discover-chihuahua3.png";
import imgBlogGeneric4 from "@/assets/img/BlogGeneric/exten-discover-chihuahua4.png";
import imgBlogGeneric5 from "@/assets/img/BlogGeneric/exten-discover-chihuahua5.png";
import imgBlogGeneric6 from "@/assets/img/BlogGeneric/exten-discover-chihuahua6.png";
import imgBlogGeneric7 from "@/assets/img/BlogGeneric/exten-discover-chihuahua7.png";
import imgBlogGeneric8 from "@/assets/img/BlogGeneric/exten-discover-chihuahua8.png";
import imgBlogGeneric9 from "@/assets/img/BlogGeneric/exten-discover-chihuahua9.png";
import imgBlogGeneric10 from "@/assets/img/BlogGeneric/exten-discover-chihuahua10.png";
import imgBlogGeneric11 from "@/assets/img/BlogGeneric/exten-discover-chihuahua11.png";
import imgBlogGeneric12 from "@/assets/img/BlogGeneric/exten-discover-chihuahua12.png";
import imgBlogGeneric13 from "@/assets/img/BlogGeneric/exten-discover-chihuahua13.png";

export default function ExtenDiscoverChihuahua() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <TitleH1>
        {languageData.ExtenDiscoverChihuahua.mainTitle}
      </TitleH1>

      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.subtitle1}
      </SubtitleP>

      {/* IMAGE 1 */}
      <img
        src={imgBlogGeneric1.src}
        // width={921}
        // height={583}
        alt='Vista de las "Barrancas de Cobre" con un profundo azul cielo con unas cuantas nubes atiborradas en el horizonte. Se puede observar una persona haciendo tiroleza.'
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenDiscoverChihuahua.paragraphs1.Text1} </SubtitleP>

      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.paragraphs1.Text2} {" "}
        <BT> {languageData.ExtenDiscoverChihuahua.paragraphs1.BT} </BT>
        {languageData.ExtenDiscoverChihuahua.paragraphs1.Text3}
      </SubtitleP>

      {/*COME EXPLORE */}

      <div className="my-2">
        <TitleH2> {languageData.ExtenDiscoverChihuahua.section2Title} </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.subtitle2.Text1} {" "}
        <BT>{languageData.ExtenDiscoverChihuahua.subtitle2.BT}</BT>
        {languageData.ExtenDiscoverChihuahua.subtitle2.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.paragraphs2.Text1} {" "}
        <BT>{languageData.ExtenDiscoverChihuahua.paragraphs2.BT}</BT>
        {languageData.ExtenDiscoverChihuahua.paragraphs2.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.paragraphs2.Text3}
      </SubtitleP>

      <TitleH2>
        {languageData.ExtenDiscoverChihuahua.section3Title}
      </TitleH2>

      <SubtitleP> {languageData.ExtenDiscoverChihuahua.subtitle3} </SubtitleP>

      {/* IMAGE 2 */}
      <img
        src={imgBlogGeneric2.src}
        // width={928}
        // height={603}
        alt='Vista de teleférico atravezando "Las Barrancas de Cobre" através de un cielo azul y lleno de nubes.'
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2>
        {languageData.ExtenDiscoverChihuahua.section4Title}
      </TitleH2>

      <SubtitleP> {languageData.ExtenDiscoverChihuahua.subtitle4} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.paragraphs4.Text1} </SubtitleP>

      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.paragraphs4.Text2} {" "}
        <BT>{languageData.ExtenDiscoverChihuahua.paragraphs4.BT}</BT>
        {languageData.ExtenDiscoverChihuahua.paragraphs4.Text3}
      </SubtitleP>

      {/* KNOWS  CHARACTERISTICS*/}

      <div className="my-2">
        <TitleH2>
          {languageData.ExtenDiscoverChihuahua.section5Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.subtitle5}
      </SubtitleP>

      {/* IMAGE 3 */}
      <img
        src={imgBlogGeneric3.src}
        // width={909}
        // height={574}
        alt='Vista de una mujer mirando "Las Barrancas de Cobre". El paisaje es verde y frondoso.'
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* ASK*/}
      <TitleH2> {languageData.ExtenDiscoverChihuahua.Characteristics.Characteristic1.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.Characteristics.Characteristic1.Subtitle} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.Characteristics.Characteristic1.Text1} </SubtitleP>

      {/* ASK 2 */}
      <TitleH2> {languageData.ExtenDiscoverChihuahua.Characteristics.Characteristic2.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.Characteristics.Characteristic2.Subtitle} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.Characteristics.Characteristic2.Text1} </SubtitleP>

      {/* ASK 3 */}
      <TitleH2> {languageData.ExtenDiscoverChihuahua.Characteristics.Characteristic3.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.Characteristics.Characteristic3.Subtitle} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.Characteristics.Characteristic3.Text1} </SubtitleP>

      <TitleH2>
        <div className="text-fs-22">
          {languageData.ExtenDiscoverChihuahua.section6Title}
        </div>
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.subtitle6.Text1} {" "}
        <BT>{languageData.ExtenDiscoverChihuahua.subtitle6.BT}</BT>
        {languageData.ExtenDiscoverChihuahua.subtitle6.Text2}
      </SubtitleP>

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place1.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place1.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place1.Text2} </SubtitleP>

      {/* IMAGE 4 */}
      <img
        src={imgBlogGeneric4.src}
        // width={928}
        // height={389}
        alt="Vista de un tren de gran tamaño de color negro en un día soleado y despejado."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* ASK 3 */}

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place2.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place2.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place3.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place3.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place3.Text2} </SubtitleP>

      {/* IMAGE 5 */}
      <img
        src={imgBlogGeneric5.src}
        // width={906}
        // height={575}
        alt="Vista de dos personas tomándose una foto en el Mirado Cerro del Gallego, una persona sujeta la camara y la otra yace sentada sobre la malla de seguridad."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place4.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place4.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place5.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place5.Text1} </SubtitleP>

      {/* IMAGE 6 */}
      <img
        src={imgBlogGeneric6.src}
        // width={907}
        // height={567}
        alt="Vista de la imponente Cascada de Cusárare entre la naturaleza verde y copiosa."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place6.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place6.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place7.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place7.Text1} </SubtitleP>

      {/* IMAGE 7 */}
      <img
        src={imgBlogGeneric7.src}
        // width={919}
        // height={517}
        alt="Vista del cristalino y tranquilo Lago de Areco bajo un hermoso cielo azul con una cuantas nubes. La naturaleza enmarca el lago."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place8.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place8.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place9.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place9.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place9.Text2} </SubtitleP>

      {/* IMAGE 8 */}
      <img
        src={imgBlogGeneric8.src}
        // width={927}
        // height={619}
        alt="Vista de letrero de Creel en un día completamente soleado y depejado."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place10.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place10.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place11.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place11.Text1} </SubtitleP>

      {/* IMAGE 9 */}
      <img
        src={imgBlogGeneric9.src}
        // width={927}
        // height={546}
        alt="Vista de una una construcción en el pueblo mágico de Botopilas. Se pueden oberservar unos cuantos árboles."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenDiscoverChihuahua.places.place12.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.places.place12.Text1} </SubtitleP>

      {/* ARRIVE */}

      <div className="my-2">
        <TitleH2>
          <div className="text-fs-22">
            {languageData.ExtenDiscoverChihuahua.section7Title}
          </div>
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.subtitle7}
      </SubtitleP>

      {/* IMAGE 10 */}
      <img
        src={imgBlogGeneric10.src}
        // width={928}
        // height={564}
        alt="Vista de dos hombres de mediana edad sentados en sillones individuales de color azul en un hotel con aires rústicos en el predomina la madera y los tonos rojos y cafés"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-s-b text-fs-14 text-red-100">
        <li>{languageData.ExtenDiscoverChihuahua.hotels.hotel1} </li>
        <li>{languageData.ExtenDiscoverChihuahua.hotels.hotel2} </li>
        <li>{languageData.ExtenDiscoverChihuahua.hotels.hotel3} </li>
        <li>{languageData.ExtenDiscoverChihuahua.hotels.hotel4} </li>
        <li>{languageData.ExtenDiscoverChihuahua.hotels.hotel5} </li>
        <li>{languageData.ExtenDiscoverChihuahua.hotels.hotel6} </li>
        <li>{languageData.ExtenDiscoverChihuahua.hotels.hotel7} </li>
        <li>{languageData.ExtenDiscoverChihuahua.hotels.hotel8} </li>
        <li>{languageData.ExtenDiscoverChihuahua.hotels.hotel9} </li>
        <li>{languageData.ExtenDiscoverChihuahua.hotels.hotel10} </li>
      </ul>

      <TitleH2>{languageData.ExtenDiscoverChihuahua.section8Title}</TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.subtitle8} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.paragraphs8.Text1} </SubtitleP>

      {/* IMAGE 11 */}
      <img
        src={imgBlogGeneric11.src}
        // width={914}
        // height={585}
        alt="Vista de restaurante con estética impactante ubicado frente a las barrancas de cobre. Se puede observar a unos cuántos comensales en sus mesas"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenDiscoverChihuahua.paragraphs8.Text2} </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">{languageData.ExtenDiscoverChihuahua.gastronomy.restaurant1.Title}</b> {" "}
        {languageData.ExtenDiscoverChihuahua.gastronomy.restaurant1.description}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">{languageData.ExtenDiscoverChihuahua.gastronomy.restaurant2.Title}</b> {" "}
        {languageData.ExtenDiscoverChihuahua.gastronomy.restaurant2.description}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">{languageData.ExtenDiscoverChihuahua.gastronomy.restaurant3.Title}</b> {" "}
        {languageData.ExtenDiscoverChihuahua.gastronomy.restaurant3.description}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">{languageData.ExtenDiscoverChihuahua.gastronomy.restaurant4.Title}</b> {" "}
        {languageData.ExtenDiscoverChihuahua.gastronomy.restaurant4.description}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">{languageData.ExtenDiscoverChihuahua.gastronomy.restaurant5.Title}</b> {" "}
        {languageData.ExtenDiscoverChihuahua.gastronomy.restaurant5.description}
      </SubtitleP>

      <TitleH2> {languageData.ExtenDiscoverChihuahua.section9Title} </TitleH2>
      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.subtitle9}
      </SubtitleP>

      {/* IMAGE 12 */}
      <img
        src={imgBlogGeneric12.src}
        // width={913}
        // height={609}
        alt='Vista de un hombre de la tercera edad llevando consigo sus maletas a punto de abordar el tren que yace detrás suyo. En el tren se puede leer "Chepe"'
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.paragraphs9}
      </SubtitleP>

      <TitleH2>{languageData.ExtenDiscoverChihuahua.travelerQuestions.Question1.Question}</TitleH2>
      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.travelerQuestions.Question1.subtitle.Text1} {" "}
        <BT>{languageData.ExtenDiscoverChihuahua.travelerQuestions.Question1.subtitle.BT}</BT> {" "}
        {languageData.ExtenDiscoverChihuahua.travelerQuestions.Question1.subtitle.Text2}
      </SubtitleP>

      <SubtitleP> {languageData.ExtenDiscoverChihuahua.travelerQuestions.Question1.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.travelerQuestions.Question1.Text2} </SubtitleP>

      <TitleH2>{languageData.ExtenDiscoverChihuahua.travelerQuestions.Question2.Question}</TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.travelerQuestions.Question2.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.travelerQuestions.Question2.Text2} </SubtitleP>

      <TitleH2>{languageData.ExtenDiscoverChihuahua.travelerQuestions.Question3.Question}</TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.travelerQuestions.Question3.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.travelerQuestions.Question3.Text2} </SubtitleP>

      <div className="my-2">
        <TitleH2>
          <div className="text-fs-22">
            {languageData.ExtenDiscoverChihuahua.section10Title}
          </div>
        </TitleH2>
      </div>

      <TitleH2> {languageData.ExtenDiscoverChihuahua.faqs.question1.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.faqs.question1.answers.Text1} </SubtitleP>
      <SubtitleP>
        {languageData.ExtenDiscoverChihuahua.faqs.question1.answers.Text2} {" "}
        <BT>{languageData.ExtenDiscoverChihuahua.faqs.question1.answers.BT} </BT> {" "}
        {languageData.ExtenDiscoverChihuahua.faqs.question1.answers.Text3}
      </SubtitleP>

      {/* IMAGE 13 */}
      <img
        src={imgBlogGeneric13.src}
        // width={922}
        // height={538}
        alt="Vista un tren dirigiéndose a su destino mientras pasa a un entre unas pequeñas montañas y un cuerpo de agua. La naturaleza predomina"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenDiscoverChihuahua.faqs.question2.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.faqs.question2.answers.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.faqs.question2.answers.Text2} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.faqs.question2.answers.Text3} </SubtitleP>

      <TitleH2> {languageData.ExtenDiscoverChihuahua.section11Title} </TitleH2>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.subtitle11} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.paragraphs11.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenDiscoverChihuahua.paragraphs11.Text2} </SubtitleP>

    </div>
  );
};
