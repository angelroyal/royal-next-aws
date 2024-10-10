import Title2 from "../../general/Title2";
import Paragraph from "../../general/Paragraph";

export default function WeatherRecommendations() {
  return (
    <>
      <div className="mt-9">
        <Title2 title="CUÁNDO ES LA MEJOR ÉPOCA PARA VIAJAR A CANCÚN" />
      </div>
      <hr className="my-[15.5px]" />
      <div className="mb-11">
        <Paragraph
          text={
            "Antes de comenzar con este post acerca de la mejor época para viajar a Cancún, creemos que es importante que conozcas un poco más de las temporadas y el clima de la ciudad para que tengas un mejor criterio. "
          }
        />
      </div>

      {/* LP  */}
      <Title2 title="Características generales del clima en Cancún" />
      <hr className="my-[15.5px]" />
      <Paragraph
        text={
          "Cancún es una de las ciudades de México más visitadas por los turistas. Sin embargo, su principal atractivo son las playas, así que es mejor que te asegures un buen clima antes de visitarla. A continuación te contaremos algunas características generales del clima de Cancún para que te familiarices con la ciudad y sepas cuándo es mejor viajar a Cancún."
        }
      />
      <div className="flex flex-col gap-4">
        <h4 className="text-fs-20 m-s-b">Dos temporadas: seca y lluviosa</h4>
        <h4 className="text-fs-16 m-s-b">Temporada seca en Cancún ☀️</h4>

        <div className="flex flex-col gap-5">
          <Paragraph
            text={
              "La temporada seca es la mejor época para viajar a Cancún. ¡Va desde noviembre hasta abril! Durante estos meses, las temperaturas son las más agradables del año, el sol brilla, la brisa es acogedora y hay muy pocas posibilidades de lluvia. Durante esta temporada, el destino turístico es muy concurrido, ya que muchas personas buscan refugiarse del frío y disfrutar de unas vacaciones en la playa."
            }
          />
          <Paragraph
            text={
              "Debido a esto, es probable que los precios de hoteles y actividades turísticas sean más caros durante esta época. Sin embargo, los precios no impiden que los turistas sigan visitando Cancún para disfrutar de sus hermosas playas, aguas cristalinas, agradable clima y divertida vida nocturna. Sin duda, ¡la mejor época para viajar a Cancún!"
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 my-4">
        <h4 className="text-fs-16 m-s-b">Temporada de lluvias en Cancún 💧</h4>
        <div className="flex flex-col gap-5">
          <Paragraph
            text={
              "Por otro lado, la temporada de lluvias en Cancún dura de mayo a octubre. Durante estos meses la temperatura de la ciudad se mantiene cálida y puedes encontrar menos turistas, lo que hace de esta temporada una de las mejores para visitar Cancún si quieres estar tranquilo y ahorrar unos cuantos euros."
            }
          />
          <Paragraph
            text={
              "Sin embargo, es importante que tengas en cuenta que durante esta época del año las posibilidades de lluvias y tormentas eléctricas son mayores. Por ello, te recomendamos llevar un impermeable y estar cerca de zonas seguras. A pesar de las lluvias, Cancún sigue recibiendo bastantes turistas durante esta época del año. Dicho esto, la temporada de lluvias es la mejor oportunidad para disfrutar de este sorprendente destino sin tener que gastar mucho dinero."
            }
          />
        </div>
      </div>

      <h4 className="text-fs-20 m-s-b my-4">Dos temporadas: seca y lluviosa</h4>
      <div className="flex flex-col gap-5">
        <Paragraph
          text={
            "Algo importante que debes tomar en cuenta es que durante la temporada de lluvias (mayo a octubre), Cancún tiende a solearse en momentos del día. Las lluvias suelen ocurrir en ráfagas cortas e intensas. Además, septiembre es el mes donde más lluvia podrás presenciar, entre 100mm y 200mm de precipitación."
          }
        />
        <Paragraph
          text={
            "Sin embargo, no tendrás problemas si decides viajar entre esos meses, ya que podrás disfrutar de la mayoría de tu viaje sin climas extremos. Esto debido a que la mayoría de las precipitaciones ocurren durante la noche o temprano en la mañana, haciendo del día, el espacio perfecto para disfrutar de este destino."
          }
        />
      </div>

      <h4 className="text-fs-20 m-s-b my-4">
        Riesgo de huracanes entre septiembre y octubre
      </h4>
      <div className="flex flex-col gap-5 mb-4">
        <Paragraph
          text={
            "Algo importante que deLa temporada de huracanes se extiende desde principios de junio hasta finales de noviembre. Sin embargo, la temperatura del mar es más alta entre septiembre y octubre, lo que también significa que el riesgo de huracanes es mayor durante ese período.bes tomar en cuenta es que durante la temporada de lluvias (mayo a octubre), Cancún tiende a solearse en momentos del día. Las lluvias suelen ocurrir en ráfagas cortas e intensas. Además, septiembre es el mes donde más lluvia podrás presenciar, entre 100mm y 200mm de precipitación."
          }
        />
        <Paragraph
          text={
            "Sin Durante estos meses, te recomendamos prestar más atención a los informes climáticos de la zona. Además, algunas recomendaciones importantes incluyen tener un suministro de agua, alimentos y un plan de evacuación en caso de ser necesario., no tendrás problemas si decides viajar entre esos meses, ya que podrás disfrutar de la mayoría de tu viaje sin climas extremos. Esto debido a que la mayoría de las precipitaciones ocurren durante la noche o temprano en la mañana, haciendo del día, el espacio perfecto para disfrutar de este destino."
          }
        />
      </div>

      <img
        src="/hotel-krystal-cancun.png"
        alt="blog clima"
        className="rounded-lg h-[437px] object-cover w-full"
      />
      <div className="italic m-s-b text-fs-12 text-gry-100 mt-4">Cancún, desde las alturas</div>
      {/* END LP */}
    </>
  );
}
