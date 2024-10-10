"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import BT from "./General/BT";
import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/exten-aguascalientes1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/exten-aguascalientes2.png";
import imgBlogGeneric3 from "@/assets/img/BlogGeneric/exten-aguascalientes3.png";
import imgBlogGeneric4 from "@/assets/img/BlogGeneric/exten-aguascalientes4.png";
import imgBlogGeneric5 from "@/assets/img/BlogGeneric/exten-aguascalientes5.png";
import imgBlogGeneric6 from "@/assets/img/BlogGeneric/exten-aguascalientes6.png";
import imgBlogGeneric7 from "@/assets/img/BlogGeneric/exten-aguascalientes7.png";
import imgBlogGeneric8 from "@/assets/img/BlogGeneric/exten-aguascalientes8.png";
import imgBlogGeneric9 from "@/assets/img/BlogGeneric/exten-aguascalientes9.png";
import imgBlogGeneric10 from "@/assets/img/BlogGeneric/exten-aguascalientes10.png";
import imgBlogGeneric11 from "@/assets/img/BlogGeneric/exten-aguascalientes11.png";
import imgBlogGeneric12 from "@/assets/img/BlogGeneric/exten-aguascalientes12.png";
import imgBlogGeneric13 from "@/assets/img/BlogGeneric/exten-aguascalientes13.png";

export default function ExtenAguascalientes() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}

      <TitleH1> {languageData.ExtenAguascalientes.mainTitle} </TitleH1>

      <SubtitleP>{languageData.ExtenAguascalientes.subtitle1}</SubtitleP>

      {/* IMAGE 1 */}
      <Image
        src={imgBlogGeneric1}
        width={926}
        height={598}
        alt="Vista panorámica del encantador centro de Aguascalientes, destacando su arquitectura y ambiente vibrante"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        {languageData.ExtenAguascalientes.paragraphs1.Text1} {" "}
        <BT>{languageData.ExtenAguascalientes.paragraphs1.BT}</BT> {" "}
        {languageData.ExtenAguascalientes.paragraphs1.Text2}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenAguascalientes.paragraphs1.Text3}
      </SubtitleP>

      {/*COME EXPLORE */}

      <div className="my-2">
        <TitleH2>{languageData.ExtenAguascalientes.section2Title}</TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenAguascalientes.subtitle2}
      </SubtitleP>

      {/* IMAGE 2 */}
      <Image
        src={imgBlogGeneric2}
        width={920}
        height={440}
        alt="Vista de las icónicas letras gigantes que representan a la ciudad de Aguascalientes"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenAguascalientes.paragraphs2.paragraphTop.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.paragraphs2.paragraphTop.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.paragraphs2.paragraphBottom.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.paragraphs2.paragraphBottom.Text1} </SubtitleP>

      <div className="my-3">
        <TitleH2>
          {languageData.ExtenAguascalientes.section3Title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenAguascalientes.subtitle3.Text1} {" "}
        <BT>{languageData.ExtenAguascalientes.subtitle3.BT}</BT> {" "}
        {languageData.ExtenAguascalientes.subtitle3.Text2}
      </SubtitleP>

      {/* IMAGE 3 */}
      <Image
        src={imgBlogGeneric3}
        width={912}
        height={521}
        alt="Vista del animado centro de la capital de Aguascalientes, con su rica arquitectura e historia"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenAguascalientes.Characteristics.Characteristic1.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.Characteristics.Characteristic1.Subtitle} </SubtitleP>
      <SubtitleP> {languageData.ExtenAguascalientes.Characteristics.Characteristic1.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.Characteristics.Characteristic2.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.Characteristics.Characteristic2.Subtitle} </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.Characteristics.Characteristic3.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.Characteristics.Characteristic3.Subtitle} </SubtitleP>

      {/* IMAGE 4 */}
      <Image
        src={imgBlogGeneric4}
        width={926}
        height={491}
        alt="Encantadora vista del pintoresco parque de Aguascalientes, un lugar ideal para relajarse y disfrutar de la naturaleza."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenAguascalientes.Characteristics.Characteristic3.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenAguascalientes.Characteristics.Characteristic3.Text2} </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.Characteristics.Characteristic4.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.Characteristics.Characteristic4.Subtitle} </SubtitleP>
      <SubtitleP> {languageData.ExtenAguascalientes.Characteristics.Characteristic4.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.section4Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.subtitle4} </SubtitleP>
      <SubtitleP> {languageData.ExtenAguascalientes.paragraphs4.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenAguascalientes.paragraphs4.Text2} </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.placesOfInterest.Title} </b> {" "}
        {languageData.ExtenAguascalientes.placesOfInterest.Text1} {" "}
        <BT>{languageData.ExtenAguascalientes.placesOfInterest.BT}</BT> {" "}
        {languageData.ExtenAguascalientes.placesOfInterest.Text2}
      </SubtitleP>


      {/* IMAGE 5 */}
      <Image
        src={imgBlogGeneric5}
        width={921}
        height={591}
        alt="Cristo Roto en Aguascalientes, monumento está ubicado en la presa de San José de Gracia."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP> {languageData.ExtenAguascalientes.placesOfInterest.Text3} </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.section5Title} </TitleH2>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.magicTowns.town1.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.magicTowns.town1.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.magicTowns.town2.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.magicTowns.town2.Text1}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.magicTowns.town3.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.magicTowns.town3.Text1}
      </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.section6Title} </TitleH2>

      <SubtitleP>
        <b className="text-black text-fs-16">  {languageData.ExtenAguascalientes.places.place1.Title} </b> {" "}
        {languageData.ExtenAguascalientes.places.place1.Text1}
      </SubtitleP>

      {/* IMAGE 6 */}
      <Image
        src={imgBlogGeneric6}
        width={680}
        height={810}
        alt="Viñedos de Aguascalientes"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <b className="text-black text-fs-16">  {languageData.ExtenAguascalientes.places.place2.Title} </b> {" "}
        {languageData.ExtenAguascalientes.places.place2.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">  {languageData.ExtenAguascalientes.places.place3.Title} </b> {" "}
        {languageData.ExtenAguascalientes.places.place3.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">  {languageData.ExtenAguascalientes.places.place4.Title} </b> {" "}
        {languageData.ExtenAguascalientes.places.place4.Text1}
      </SubtitleP>

      {/* IMAGE 7 */}
      <Image
        src={imgBlogGeneric7}
        width={917}
        height={517}
        alt="Boca de Túnel, aguascalientes"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <b className="text-black text-fs-16">  {languageData.ExtenAguascalientes.places.place5.Title} </b> {" "}
        {languageData.ExtenAguascalientes.places.place5.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">  {languageData.ExtenAguascalientes.places.place6.Title} </b> {" "}
        {languageData.ExtenAguascalientes.places.place6.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">  {languageData.ExtenAguascalientes.places.place7.Title} </b> {" "}
        {languageData.ExtenAguascalientes.places.place7.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">  {languageData.ExtenAguascalientes.places.place8.Title} </b> {" "}
        {languageData.ExtenAguascalientes.places.place8.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16">  {languageData.ExtenAguascalientes.places.place9.Title} </b> {" "}
        {languageData.ExtenAguascalientes.places.place9.Text1}
      </SubtitleP>

      {/* IMAGE 8 */}
      <Image
        src={imgBlogGeneric8}
        width={912}
        height={513}
        alt="Isla de San Marcos, aguascalientes"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenAguascalientes.section7Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.subtitle7}  </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.museums.museum1.Title} </b> {" "}
        {languageData.ExtenAguascalientes.museums.museum1.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.museums.museum2.Title} </b> {" "}
        {languageData.ExtenAguascalientes.museums.museum2.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.museums.museum3.Title} </b> {" "}
        {languageData.ExtenAguascalientes.museums.museum3.Text1}
      </SubtitleP>

      {/* IMAGE 9 */}
      <Image
        src={imgBlogGeneric9}
        width={913}
        height={513}
        alt="Museos de Aguascalientes"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.museums.museum4.Title} </b> {" "}
        {languageData.ExtenAguascalientes.museums.museum4.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.museums.museum5.Title} </b> {" "}
        {languageData.ExtenAguascalientes.museums.museum5.Text1}
      </SubtitleP>

      <SubtitleP>
        {languageData.ExtenAguascalientes.paragraph7.Text1} {" "}
        <span className="italic"> {languageData.ExtenAguascalientes.paragraph7.Text2}</span>
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.activities.activity1.Title}{" "}</b>
        {languageData.ExtenAguascalientes.activities.activity1.Text1}
      </SubtitleP>

      {/* IMAGE 10 */}
      <Image
        src={imgBlogGeneric10}
        width={921}
        height={558}
        alt="Ferias patronales de Aguascalientes, mostrando diversión, colores vibrantes y celebración cultural."
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.activities.activity2.Title}{" "}</b>
        {languageData.ExtenAguascalientes.activities.activity2.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.activities.activity3.Title}{" "}</b>
        {languageData.ExtenAguascalientes.activities.activity3.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.activities.activity4.Title}{" "}</b>
        {languageData.ExtenAguascalientes.activities.activity4.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.activities.activity5.Title}{" "}</b>
        {languageData.ExtenAguascalientes.activities.activity5.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.activities.activity6.Title}{" "}</b>
        {languageData.ExtenAguascalientes.activities.activity6.Text1}
      </SubtitleP>

      <SubtitleP>
        <b className="text-black text-fs-16"> {languageData.ExtenAguascalientes.activities.activity7.Title}{" "}</b>
        {languageData.ExtenAguascalientes.activities.activity7.Text1}
      </SubtitleP>

      <TitleH2>{languageData.ExtenAguascalientes.section8Title}</TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.subtitle8} </SubtitleP>

      {/* IMAGE 11 */}
      <Image
        src={imgBlogGeneric11}
        width={928}
        height={505}
        alt="Mejores hoteles de Aguascalientes"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-s-b text-fs-14 text-red-100">
        <li>{languageData.ExtenAguascalientes.hotels.hotel1} </li>
        <li>{languageData.ExtenAguascalientes.hotels.hotel2} </li>
        <li>{languageData.ExtenAguascalientes.hotels.hotel3} </li>
        <li>{languageData.ExtenAguascalientes.hotels.hotel4} </li>
        <li>{languageData.ExtenAguascalientes.hotels.hotel5} </li>
        <li>{languageData.ExtenAguascalientes.hotels.hotel6} </li>
        <li>{languageData.ExtenAguascalientes.hotels.hotel7} </li>
        <li>{languageData.ExtenAguascalientes.hotels.hotel8} </li>
        <li>{languageData.ExtenAguascalientes.hotels.hotel9} </li>
        <li>{languageData.ExtenAguascalientes.hotels.hotel10} </li>
      </ul>

      <TitleH2>
        {languageData.ExtenAguascalientes.section9Title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenAguascalientes.subtitle9.Text1} {" "}
        <BT>{languageData.ExtenAguascalientes.subtitle9.BT}</BT> {""}
        {languageData.ExtenAguascalientes.subtitle9.Text2}
      </SubtitleP>

      {/* IMAGE 12 */}
      <Image
        src={imgBlogGeneric12}
        width={906}
        height={584}
        alt="Platos y postres típicos de Aguascalientes"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenAguascalientes.gastronomy.Title1}</TitleH2>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.gastronomy.foods.food1.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.gastronomy.foods.food1.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.gastronomy.foods.food2.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.gastronomy.foods.food2.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.gastronomy.foods.food3.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.gastronomy.foods.food3.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.gastronomy.foods.food4.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.gastronomy.foods.food4.description}
      </SubtitleP>


      <TitleH2> {languageData.ExtenAguascalientes.gastronomy.Title2}</TitleH2>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.gastronomy.desserts.dessert1.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.gastronomy.desserts.dessert1.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.gastronomy.desserts.dessert2.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.gastronomy.desserts.dessert2.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.gastronomy.desserts.dessert3.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.gastronomy.desserts.dessert3.description}
      </SubtitleP>

      <SubtitleP>
        <BT>{languageData.ExtenAguascalientes.gastronomy.desserts.dessert4.Title}</BT> {" "}
        {languageData.ExtenAguascalientes.gastronomy.desserts.dessert4.description}
      </SubtitleP>

      <div className="my-3">
        <TitleH2>
          {languageData.ExtenAguascalientes.section10Title}
        </TitleH2>
      </div>

      <TitleH2> {languageData.ExtenAguascalientes.faqs.question1.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.faqs.question1.answers.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.faqs.question2.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.faqs.question2.answers.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.faqs.question3.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.faqs.question3.answers.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.faqs.question4.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.faqs.question4.answers.Text1} </SubtitleP>

      <TitleH2> {languageData.ExtenAguascalientes.faqs.question5.Title} </TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.faqs.question5.answers.Text1} </SubtitleP>

      {/* IMAGE 13 */}
      <Image
        src={imgBlogGeneric13}
        width={926}
        height={534}
        alt="Cultura y arte de aguascalientes "
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <TitleH2> {languageData.ExtenAguascalientes.section11Title}</TitleH2>
      <SubtitleP> {languageData.ExtenAguascalientes.subtitle11} </SubtitleP>
      <SubtitleP> {languageData.ExtenAguascalientes.paragraphs11.Text1} </SubtitleP>
      <SubtitleP> {languageData.ExtenAguascalientes.paragraphs11.Text2} </SubtitleP>
    </div>
  );
};
