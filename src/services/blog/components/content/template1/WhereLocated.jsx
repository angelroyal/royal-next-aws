import ImageListingTour from "@/app/config/ImageListingTour";

export default function WhereLocated() {
  return (
    <>
      <div className="my-11 flex flex-col gap-[18px]">
        <h3 className="text-fs-20 m-b ">¿Dónde queda Puerto Juárez?</h3>
        <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14">
          <p>
            Puerto Juárez es una localidad que se encuentra en el municipio de
            Benito Juárez, en el estado de Quintana Roo, México. Está ubicado al
            norte del centro de Cancún, a lo largo de la costa del Mar Caribe.
            Es conocido por ser un puerto marítimo importante para la salida de
            ferries hacia Isla Mujeres.
          </p>
          <p>
            Y si te estas preguntando ¿Cuál es la distancia entre Puerto Juárez
            y aeropuerto de Cancún? La respuesta es: 24.4 kilómetros. Además, el
            tiempo promedio que vas a demorar en recorrer esta distancia a
            través de un traslado privado es de 30 minutos aproximadamente.
          </p>
          <p>
            Algo muy interesante de todo esto es que Puerto Juárez no es como
            tal considerado parte de Cancún. Es considerado como una pequeña
            zona cercana a la ciudad de Cancún. ¿Quieres conocer más? Bueno,
            sigue leyendo porque ahora nos adentraremos a su puerto y su
            terminal marítima.
          </p>
        </div>

        <div className="w-full h-[437px] mt-7">
          <img
            src="/googleMaps.png"
            alt="maps"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <span className="text-fs-12 text-gry-100 m-s-b">
          Puerto Juárez Mapa de Google Map: Este mapa destaca como punto
          principal la terminal marítima en la Playa Puerto Juárez. El cual es
          barrio que forma parte de Cancún y se extiende hasta Costa Mujeres.
          Costa Mujeres no forma parte de Cancún, es una pequeña zona
          continental de Isla Mujeres.
        </span>
      </div>

      <ImageListingTour />

      <div className="text-gry-100 text-fs-14 my-[44px]">
        Ahora que ya conoces un poco de Puerto Juárez, seguramente te debes de
        estar preguntando ¿Cómo llegar a Puerto Juárez desde Cancun?, ¿Cómo
        llegar del aeropuerto de Cancún a puerto Juárez? e incluso ¿Cómo llegar
        de Playa del Carmen a Puerto? Bueno, todo eso te lo vamos a describir un
        poco aquí, en esta sección pero recuerda: Si quieres profundizar más,
        por eso tenemos artículos completos y técnico que hablan sobre los paso
        que tienes que seguir para poder llegar al pequeño pueblo pesquero de
        Puerto Juárez Quintana Roo.
      </div>
    </>
  );
}
