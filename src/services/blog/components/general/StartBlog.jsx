"use client";

import React, { useEffect, useState } from "react";

import Title from "./Titles";
import Paragraph from "./Paragraph";
import CreationDate from "./CreationDate";
import ReturnButton from "./ReturnButton";
import WelcomeImage from "./WelcomeImage";

export default function StartBlog({ children, position }) {
  const [imgTemplate, setImgTemplate] = useState("");

  //TEST IMG BANNERS TEMPLATE
  useEffect(() => {
    switch (position) {
      case "1":
        setImgTemplate("/blog-template-one.jpg");
        break;
      case "2":
        setImgTemplate("/banner-blog-template1.jpg");
        break;
      case "3":
        setImgTemplate("/banner-blog-template-three.jpg");
        break;
      default:
        setImgTemplate("");
    }
  }, [position]);
  //END TEST IMG BANNERS TEMPLATE

  return (
    <div>
      {/* BTN RETURN */}
      <ReturnButton />
      {imgTemplate ? (
        <WelcomeImage source={imgTemplate} />
      ) : (
        <div className="bg-gry-50 w-full h-[310px] mb-[44px] rounded-lg" />
      )}
      <CreationDate />

      {position === "1" && (
        <>
          <div className="px-[98.5px] flex flex-col justify-center max-lg:p-0">
            {/* TITLE BLOG TEMPLATE 1*/}
            <div className="mt-4 mb-6">
              <Title title="Puerto Juárez México." />
              <Title title="Aquí inició Cancún" />
            </div>
            <div className="flex flex-col gap-5">
              <Paragraph text='Bienvenido a "Puerto Juárez Cancún", bienvenido al comienzo de una de las ciudades más importantes de México, que hoy en día recibe a más de 31 millones de pasajeros en su aeropuerto.' />
              <Paragraph text="Para empezar, un poco de historia sobre este increíble lugar en el Caribe mexicano: En 1969, el gobierno mexicano inició el proyecto de Cancún, un desarrollo turístico en la costa del Caribe. La primera etapa del proyecto consistió en la construcción de un puerto y una pequeña comunidad pesquera en lo que hoy conocemos como Puerto Juárez, México." />
              <Paragraph text="Esta comunidad fue la base para el crecimiento de la ciudad de Cancún, que se convirtió en un importante destino turístico internacional." />
              <Paragraph text="Actualmente, este pequeño pueblo pesquero es el principal punto de transportación marítima a Isla Mujeres: Ofrece más de 29 de Ida al día y se estima que más de 22,00 personas al día llegan a este lugar para tomar el ferry a Isla Mujeres." />
              {children}
            </div>
          </div>
        </>
      )}

      {position === "2" && (
        <>
          <div className="px-[98.5px] flex flex-col justify-center max-lg:p-0">
            {/* TITLE BLOG TEMPLATE 2*/}
            <div className="mt-4 mb-6">
              <Title title="¿Qué visitar en Acapulco? 8 Lugares Imperdibles." />

              <p className="mt-4 text-fs-24 text-slate-800 text-center m-m">
                Descubre qué visitar en Acapulco, Guerrero durante tus
                vacaciones o de fin de semana
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Paragraph text="El ambiente tropical y de playa son una sensación única que transmiten paz y relajación. Acapulco es un lugar con estas características, con múltiples lugares para visitar que se convierte en un destino perfecto para los días vacacionales." />
              <Paragraph text="Además de las playas bonitas de Acapulco, existen lugares turísticos que son muy tradicionales de la zona y que se caracterizan por ser únicos en su tipo" />
              {children}
              <Paragraph text="La Bahía de Acapulco es un lugar de fácil entrada y salida; ya que su ubicación geográfica favorece a qué carreteras estén muy bien conectadas con esta ciudad" />
              <p className="text-justify text-gry-100 m-m text-fs-14">
                Aprovecha y adquiere{" "}
                <span className="text-bl-100 m-b">boletos de autobús</span>{" "}
                baratos hacia Acapulco, Guerrero. Disfrutas de tus vacaciones y
                planea tu visita a los diferentes lugares.
              </p>
            </div>
          </div>
        </>
      )}

      {position === "3" && (
        <>
          <div className="px-[98.5px] flex flex-col justify-center max-lg:p-0">
            {/* TITLE BLOG TEMPLATE 3*/}
            <div className="mt-4 mb-6">
              <Title title="¿Cuándo es la mejor época para viajar a Cancún?" />
            </div>
            <div className="flex flex-col">
              <Paragraph text="¿No sabes cuál es la mejor época para viajar a Cancún? Siempre es importante tener claro la meteorología antes de planificar tu viaje a la Riviera Maya. Gracias a su clima tropical, Cancún es un destino para todo el año, y hay temporadas que son más favorables que otras para disfrutar de sus increíbles playas. ¡No querrás que la lluvia te fastidie las vacaciones! Sin embargo, todo depende de lo que estés buscando. En este post te contamos mes a mes cuál es el la mejor época para viajar a Cancún para que sepas qué te espera en cada época del año." />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
