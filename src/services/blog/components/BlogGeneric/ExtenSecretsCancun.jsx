"use client";
import BT from "./General/BT";

import TitleH1 from "./General/TitleH1";
import TitleH2 from "./General/TitleH2";
import SubtitleP from "./General/SubtitleP";


import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import imgBlogGeneric1 from "@/assets/img/BlogGeneric/exten-secrets-cancun1.png";
import imgBlogGeneric2 from "@/assets/img/BlogGeneric/exten-secrets-cancun2.png";
import imgBlogGeneric3 from "@/assets/img/BlogGeneric/exten-secrets-cancun3.png";
import imgBlogGeneric4 from "@/assets/img/BlogGeneric/exten-secrets-cancun4.png";
import imgBlogGeneric5 from "@/assets/img/BlogGeneric/exten-secrets-cancun5.png";
import imgBlogGeneric6 from "@/assets/img/BlogGeneric/exten-secrets-cancun6.png";
import imgBlogGeneric7 from "@/assets/img/BlogGeneric/exten-secrets-cancun7.png";
import imgBlogGeneric8 from "@/assets/img/BlogGeneric/exten-secrets-cancun8.png";
import imgBlogGeneric9 from "@/assets/img/BlogGeneric/exten-secrets-cancun9.png";
import imgBlogGeneric10 from "@/assets/img/BlogGeneric/exten-secrets-cancun10.png";
import imgBlogGeneric11 from "@/assets/img/BlogGeneric/exten-secrets-cancun11.png";
import imgBlogGeneric12 from "@/assets/img/BlogGeneric/exten-secrets-cancun12.png";
import imgBlogGeneric13 from "@/assets/img/BlogGeneric/exten-secrets-cancun13.png";
import imgBlogGeneric14 from "@/assets/img/BlogGeneric/exten-secrets-cancun14.png";

export default function ExtenSecretsCancun() {

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3">
      {/* START BLOG */}
      <TitleH1>
        {languageData.ExtenSecretsCancun.Section1.mainTitle}
      </TitleH1>

      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section1.subtitle1.Text1}
       <BT>
        {languageData.ExtenSecretsCancun.Section1.subtitle1.BT}
       </BT>
       {languageData.ExtenSecretsCancun.Section1.subtitle1.Text2}
      </SubtitleP>

      {/* IMAGE 1 */}
      <img
        src={imgBlogGeneric1.src}
        // width={921}
        // height={581}
        alt="Espectacular vista panorámica de la zona hotelera de Cancún"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* SECTION 2 */}
      <TitleH2>
        {languageData.ExtenSecretsCancun.Section2.section2Title}
      </TitleH2>

      <SubtitleP>
        {languageData.ExtenSecretsCancun.Section2.subtitle2.text1}
        <BT>
          {languageData.ExtenSecretsCancun.Section2.subtitle2.BT}  
        </BT>
        {languageData.ExtenSecretsCancun.Section2.subtitle2.text2}
      </SubtitleP>

      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section2.subtitle2.text3}
        <BT>
        {languageData.ExtenSecretsCancun.Section2.subtitle2.BT2}
        </BT>
        {languageData.ExtenSecretsCancun.Section2.subtitle2.text4}
      </SubtitleP>

      {/*COME EXPLORE */}

      <div className="my-2">
        <TitleH2>
        {languageData.ExtenSecretsCancun.Section2.question.title}
        </TitleH2>
      </div>

      <SubtitleP>
        {languageData.ExtenSecretsCancun.Section2.question.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section2.question.text2}
      </SubtitleP>

      {/* IMAGE 2 */}
      <img
        src={imgBlogGeneric2.src}
        // width={913}
        // height={561}
        alt="Playa de arena blanca y aguas cristalinas de Cancún"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section2.question.text3}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section2.question.text4}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section2.question.text5}
      </SubtitleP>

      <TitleH2>
        {languageData.ExtenSecretsCancun.Section3.question.section3Title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenSecretsCancun.Section3.subtitle3.text1}
        <BT>
          {languageData.ExtenSecretsCancun.Section3.subtitle3.BT}
        </BT>
        {languageData.ExtenSecretsCancun.Section3.subtitle3.text2}
      </SubtitleP>

      {/* IMAGE 3 */}
      <img
        src={imgBlogGeneric3.src}
        // width={922}
        // height={572}
        alt="Playas de Cancún con el cielo nublado, mostrando el contraste entre la playa y el cielo"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* MONTH 1 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section3.seasons.month1.title}
        </b>
        {languageData.ExtenSecretsCancun.Section3.seasons.month1.text1}
        <BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month1.BT}
        </BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month1.text2}
      </SubtitleP>

      {/* MONTH 2 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section3.seasons.month2.title}  
        </b>
        {languageData.ExtenSecretsCancun.Section3.seasons.month2.text1}
        <BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month2.BT}
        </BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month2.text2}
      </SubtitleP>

      {/* MONTH 3 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section3.seasons.month3.title}
        </b>
        {languageData.ExtenSecretsCancun.Section3.seasons.month3.text1}
        <BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month3.BT}
        </BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month3.text2}
      </SubtitleP>

      {/* MONTH 4 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section3.seasons.month4.title}
        </b>
        {languageData.ExtenSecretsCancun.Section3.seasons.month4.text1}
        <BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month4.BT}
        </BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month4.text2}
      </SubtitleP>

      {/* MONTH 5 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section3.seasons.month5.title}
        </b>
        {languageData.ExtenSecretsCancun.Section3.seasons.month5.text1}
        <BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month5.BT}
        </BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month5.text2}
      </SubtitleP>

      {/* MONTH 6 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section3.seasons.month6.title}
        </b>
        {languageData.ExtenSecretsCancun.Section3.seasons.month6.text1}
        <BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month6.BT}
        </BT>
        {languageData.ExtenSecretsCancun.Section3.seasons.month6.text2}
      </SubtitleP>

      <TitleH2>
      {languageData.ExtenSecretsCancun.Section3.question.questionTitle}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section3.question.text1}
        <BT>
        {languageData.ExtenSecretsCancun.Section3.question.BT}
        </BT>
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenSecretsCancun.Section3.question.text2}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenSecretsCancun.Section3.question.text3}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section3.question.text4}
      </SubtitleP>

      <TitleH2>
        {languageData.ExtenSecretsCancun.Section4.section4Title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenSecretsCancun.Section4.subtitle4.text1}
        <BT>
          {languageData.ExtenSecretsCancun.Section4.subtitle4.BT}  
        </BT>
        {languageData.ExtenSecretsCancun.Section4.subtitle4.text2}
      </SubtitleP>

      {/* QUESTION 1 */}
      <TitleH2>
        {languageData.ExtenSecretsCancun.Section4.questions.questionList.question1.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section4.questions.questionList.question1.text1}
      </SubtitleP>

      {/* IMAGE 4 */}
      <img
        src={imgBlogGeneric4.src}
        // width={911}
        // height={530}
        alt="Foto familiar en las hermosas playas de Cancún, capturando un momento especial junto al mar"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section4.questions.questionList.question1.text2}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section4.questions.questionList.question1.text3}
      </SubtitleP>

      {/* QUESTION 2 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section4.questions.questionList.question2.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section4.questions.questionList.question2.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section4.questions.questionList.question2.text2}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section4.questions.questionList.question2.text3}
      </SubtitleP>

      {/* QUESTION 3 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section4.questions.questionList.question3.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section4.questions.questionList.question3.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section4.questions.questionList.question3.text2}
      </SubtitleP>

      {/* QUESTION 4 */}
      <TitleH2>
        {languageData.ExtenSecretsCancun.Section4.questions.questionList.question4.title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenSecretsCancun.Section4.questions.questionList.question4.text1}
      </SubtitleP>
      <SubtitleP>
        {languageData.ExtenSecretsCancun.Section4.questions.questionList.question4.text2}
      </SubtitleP>

      {/* SECTION 5 */}
      <TitleH2>
        {languageData.ExtenSecretsCancun.Section5.section5Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.subtitle5.text1}
        <BT>
        {languageData.ExtenSecretsCancun.Section5.subtitle5.BT}  
        </BT>
        {languageData.ExtenSecretsCancun.Section5.subtitle5.text2}
         <BT>
         {languageData.ExtenSecretsCancun.Section5.subtitle5.BT2}
          </BT>
          {languageData.ExtenSecretsCancun.Section5.subtitle5.text3}
      </SubtitleP>

      {/* TOURIST PLACES */}

      {/* PLACE 1 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place1.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place1.text1}
      </SubtitleP>
      {/* IMAGE 5 */}
      <img
        src={imgBlogGeneric5.src}
        // width={938}
        // height={494}
        alt="Impresionante vista de la pirámide de Chichén Itzá, una maravilla arquitectónica de la antigua ciudad maya"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* PLACE 2 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place2.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place2.text1}
      </SubtitleP>

      {/* PLACE 3 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place3.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place3.text1}
        <BT>
        {languageData.ExtenSecretsCancun.Section5.tourist_places.place3.BT}  
        </BT>
        {languageData.ExtenSecretsCancun.Section5.tourist_places.place3.text2}
      </SubtitleP>

      {/* IMAGE 6 */}
      <img
        src={imgBlogGeneric6.src}
        // width={917}
        // height={575}
        alt="Vista del hermoso Parque Xcaret, un paraíso natural con una gran variedad de actividades y bellezas naturales"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* PLACE 4 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place4.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place4.text1}
      </SubtitleP>

      {/* PLACE 5 */}

      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place5.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place5.text1}
      </SubtitleP>

      {/* IMAGE 7 */}
      <img
        src={imgBlogGeneric7.src}
        // width={997}
        // height={350}
        alt="discover chihuahua"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* PLACE 6 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place6.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place6.text1}
        <BT>
        {languageData.ExtenSecretsCancun.Section5.tourist_places.place6.BT}  
        </BT>
        {languageData.ExtenSecretsCancun.Section5.tourist_places.place6.text2}
      </SubtitleP>

      {/* PLACE 7 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place7.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place7.text1}
      </SubtitleP>

      {/* IMAGE 8 */}
      <img
        src={imgBlogGeneric8.src}
        // width={918}
        // height={521}
        alt="Yate navegando en aguas cristalinas frente a las hermosas playas de Cozumel, en el Mar del Caribe"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* PLACE 8 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place8.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place8.text1}
      </SubtitleP>

      {/* PLACE 9 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place9.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place9.text1}
      </SubtitleP>

      {/* IMAGE 9 */}
      <img
        src={imgBlogGeneric9.src}
        // width={920}
        // height={576}
        alt="Acuario Interactivo de Cancún"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* PLACE 10 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place10.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place10.text1}
      </SubtitleP>

      {/* PLACE 11 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place11.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place11.text1}
      </SubtitleP>

      {/* IMAGE 10 */}
      <img
        src={imgBlogGeneric10.src}
        // width={926}
        // height={520}
        alt="Torre Escénica de cancún"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      {/* PLACE 12 */}
    
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place12.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place12.text1}
      </SubtitleP>

      {/* PLACE 13 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place13.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section5.tourist_places.place13.text1}
      </SubtitleP>

      {/* SECTION 6 */}

      <TitleH2>
        {languageData.ExtenSecretsCancun.Section6.section6Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section6.subtitle6}
      </SubtitleP>

      {/* ACTIVITIES */}

      {/* ACTIVITIE 1 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section6.activities.activitie1.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section6.activities.activitie1.text1}
      </SubtitleP>

      {/* IMAGE 11 */}
      <img
        src={imgBlogGeneric11.src}
        // width={940}
        // height={483}
        alt="Museo Maya de Cancún"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      {/* ACTIVITIE 2 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section6.activities.activitie2.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section6.activities.activitie2.text1}
      </SubtitleP>

      {/* ACTIVITIE 3 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section6.activities.activitie3.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section6.activities.activitie3.text1}
      </SubtitleP>

      {/* IMAGE 12 */}
      <img
        src={imgBlogGeneric12.src}
        // width={925}
        // height={532}
        alt="Coco Bongo, club de cancún que ofrece espectáculos y música en vivo"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      
      {/* ACTIVITIE 4 */}
      <TitleH2>
      {languageData.ExtenSecretsCancun.Section6.activities.activitie4.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section6.activities.activitie4.text1}
      </SubtitleP>

      {/* SECTION 7 */}
      <TitleH2>{languageData.ExtenSecretsCancun.Section7.section7Title}</TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section7.subtitle7.text1}
      </SubtitleP>

      {/* IMAGE 13 */}
      <img
        src={imgBlogGeneric13.src}
        // width={919}
        // height={563}
        alt="Hoteles boutique y resorts todo incluido, de cancún"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />

      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section7.subtitle7.text2}
      </SubtitleP>
      {/* LIST RED*/}
      <ul className="gap-2 flex flex-col m-m text-fs-14 text-red-100">
        <li>
        {languageData.ExtenSecretsCancun.Section7.hotels.hotel1}
        </li>
        <li>
        {languageData.ExtenSecretsCancun.Section7.hotels.hotel2}
        </li>
        <li>
        {languageData.ExtenSecretsCancun.Section7.hotels.hotel3}
        </li>
        <li>
        {languageData.ExtenSecretsCancun.Section7.hotels.hotel4}
        </li>
        <li>
        {languageData.ExtenSecretsCancun.Section7.hotels.hotel5}
        </li>
        <li>
        {languageData.ExtenSecretsCancun.Section7.hotels.hotel6}
        </li>
        <li>
        {languageData.ExtenSecretsCancun.Section7.hotels.hotel7}
        </li>
        <li>
        {languageData.ExtenSecretsCancun.Section7.hotels.hotel8}
        </li>
        <li>
        {languageData.ExtenSecretsCancun.Section7.hotels.hotel9}
        </li>
        <li>
        {languageData.ExtenSecretsCancun.Section7.hotels.hotel10}
        </li>
      </ul>

      {/* SECTION 8 */}
      <TitleH2>
        {languageData.ExtenSecretsCancun.Section8.section8Title}
      </TitleH2>
      <SubtitleP>
        {languageData.ExtenSecretsCancun.Section8.subtitle8.text1}
      </SubtitleP>

      {/* IMAGE 14 */}
      <img
        src={imgBlogGeneric14.src}
        // width={923}
        // height={625}
        alt="Restaurantes con la mejor comida de Cancún"
        className="rounded-lg h-[437px] object-cover w-full my-6"
      />
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section8.subtitle8.text2}
      </SubtitleP>

      {/* RESTAURANTS */}
      {/* RESTAURANT 1 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section8.restaurants.restaurant1.title}
        </b>
        {languageData.ExtenSecretsCancun.Section8.restaurants.restaurant1.text1}
      </SubtitleP>

      {/* RESTAURANT 2 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section8.restaurants.restaurant2.title}
        </b>
        {languageData.ExtenSecretsCancun.Section8.restaurants.restaurant2.text1}
      </SubtitleP>

      {/* RESTAURANT 3 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section8.restaurants.restaurant3.title}
        </b>
        {languageData.ExtenSecretsCancun.Section8.restaurants.restaurant3.text1}
      </SubtitleP>

      {/* RESTAURANT 4 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section8.restaurants.restaurant4.title}
        </b>
        {languageData.ExtenSecretsCancun.Section8.restaurants.restaurant4.text1}
      </SubtitleP>

      {/* RESTAURANT 5 */}
      <SubtitleP>
        <b className="text-black text-fs-16">
        {languageData.ExtenSecretsCancun.Section8.restaurants.restaurant5.title}
        </b>
        {languageData.ExtenSecretsCancun.Section8.restaurants.restaurant5.text1}
      </SubtitleP>

      {/* SECTION 9 */}
      <div className="my-3">
        <TitleH2>
          {languageData.ExtenSecretsCancun.Section9.section9Title}
        </TitleH2>
      </div>

      {/* QUESTIONS */}

      {/* QUESTION 1 */}
      <TitleH2>
        {languageData.ExtenSecretsCancun.Section9.questions.questionList.question1.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section9.questions.questionList.question1.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section9.questions.questionList.question1.text2}
      </SubtitleP>

      {/* QUESTION 2 */}
      <TitleH2>
        {languageData.ExtenSecretsCancun.Section9.questions.questionList.question2.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section9.questions.questionList.question2.text1}
      </SubtitleP>

      {/* QUESTION 3 */}
      <TitleH2>
        {languageData.ExtenSecretsCancun.Section9.questions.questionList.question3.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section9.questions.questionList.question3.text1}
      </SubtitleP>

      {/* QUESTION 4 */}
      <TitleH2>
        {languageData.ExtenSecretsCancun.Section9.questions.questionList.question4.title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section9.questions.questionList.question4.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section9.questions.questionList.question4.text2}
      </SubtitleP>

    {/* BLOG ENDDING */}
      <TitleH2>
        {languageData.ExtenSecretsCancun.Section10.section10Title}
      </TitleH2>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section10.text1}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section10.text2}
      </SubtitleP>
      <SubtitleP>
      {languageData.ExtenSecretsCancun.Section10.text3}
      </SubtitleP>
      <SubtitleP>{languageData.ExtenSecretsCancun.Section10.text4}</SubtitleP>
    </div>
  );
}
