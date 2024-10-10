import Title2 from "../../general/Title2";
import Paragraph from "../../general/Paragraph";

export default function InfoByMonth() {
  return (
    <div className="mt-11">
        {/* FIRST 6 MONTHS */}
      <Title2
        title={"1. Viajar a Cancún en temporada seca (noviembre a abril)"}
      />
      <hr className="my-[15.5px]" />
      <div className="flex flex-col gap-5">
        <Paragraph text="Si eres de los que buscan disfrutar de un clima cálido y seco, de noviembre hasta abril es la mejor época para viajar a Cancún." />
        <Paragraph text="Especialmente enero: es el mes que más te recomendamos para visitar este hermoso destino. La temperatura que encontrarás oscila entre los 24 y 30ºC, lo que hace de este momento la mejor época para viajar a Cancún y disfrutar de sus playas. Además, durante estos meses es menos probable que llueva, por lo que es el momento ideal para que practiques deportes acuáticos como buceo, esnórquel o kayak. Y ya que vas a estar al aire libre, tenemos que contarte que otra ventaja de esta temporada es que como existe menos humedad, también existen menos mosquitos que puedan llegar a molestar. En cuanto a la cantidad de turistas, esta época es considerada como temporada alta en Cancún. Por lo que es importante que tengas en cuenta tu presupuesto para alojamiento, vuelos y otras actividades, ya que pueden ser más caros. Sin embargo, si planificas tu viaje con antelación, encontrarás interesantes ofertas y disfrutarás de una experiencia inolvidable. eres de los que buscan disfrutar de un clima cálido y seco, de noviembre hasta abril es la mejor época para viajar a Cancún." />
      </div>

      {/* DOTS */}
      {[...Array(6)].map((_, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-fs-20 m-s-b my-4">
            1.1. Viajar a Cancún en noviembre
          </h4>
          <Paragraph text={"🌡 Temperatura promedio (min/max): 21ºC – 29ºC"} />
          <Paragraph text={"🌧  Precipitación promedio: 85mm"} />

          <div className="flex flex-col gap-5 my-4">
            <Paragraph
              text={
                "Si lo que buscas es un clima agradable y con menos turistas, noviembre puede ser una de las mejores épocas para viajar a Cancún. Durante esta temporada, encontrarás una temperatura promedio que ronda los 27°C. Junto a esto, disfrutarás de noches frescas que te invitarán a pasear por la playa o deleitarte con una cena al aire libre. Además, el agua del mar se mantiene cálida, similar a la temperatura ambiente, lo que la hace perfecta para nadar, bucear o practicar deportes acuáticos."
              }
            />
            <Paragraph
              text={
                "En cuanto a la cantidad de turistas es menor que en temporada alta, por lo que podrás visitar atracciones turísticas sin grandes aglomeraciones. También podrás disfrutar de las playas sin mucho ajetreo y acudir a alguno de los grandes conciertos programados en la ciudad.Otro de los principales atractivos de este mes es El Día de Muertos, que se celebra el 1 y 2 de noviembre. Durante esta hermosa celebración a los difuntos, encontrarás impresionantes decoraciones, ceremonias y un desfile espectacular que estamos seguros querrás presenciar. En cuanto a presupuesto, encontrarás ofertas en hoteles y vuelos, lo que hace de noviembre una época muy apetecible para visitar Cancún"
              }
            />
          </div>

          <img
            src="/maya-bg.jpg"
            alt="blog clima"
            className="rounded-lg h-[437px] object-cover w-full"
          />
          <div className="italic m-s-b text-fs-12 text-gry-100 mt-4">
            Cancún, desde las alturas
          </div>
        </div>
      ))}

      {/* LAST 6 MONTHS */}
      <Title2
        title={"2. Viajar a Cancún en temporada de lluvias (mayo a octubre)"}
      />
      <hr className="my-[15.5px]" />
      <div className="flex flex-col gap-5">
        <Paragraph text="Viajar a Cancún durante la temporada de lluvias, puede ser una experiencia diferente. Esta época abarca los meses de mayo a octubre y puede ser una buena oportunidad para disfrutar de deportes acuáticos. La temperatura sigue siendo cálida, con un clima que puede ir desde los 23°C hasta los 33°C. Además, los precios suelen ser más bajos que en temporada alta, lo que será una ventaja para los viajeros que quieran ahorrar algo de dinero." />
        <Paragraph text="Sin embargo, es importante mencionar que el clima es el factor que más debe tomar en cuenta, ya que en ciertos meses, las lluvias pueden ser bastante intensas. También hay un mayor riesgo de huracanes durante esta temporada. Aunque no debes preocuparte, ya que los resorts y autoridades locales suelen estar preparados para ellos.
" />
      </div>

      {/* DOTS */}
      {[...Array(6)].map((_, index) => (
        <div key={index}>
          <h4 className="text-fs-20 m-s-b my-4">
            2.1. Viajar a Cancún en mayo
          </h4>
          <Paragraph text={"🌡 Temperatura promedio (min/max): 21ºC – 29ºC"} />
          <Paragraph text={"🌧  Precipitación promedio: 85mm"} />

          <div className="flex flex-col gap-5 my-4">
            <Paragraph
              text={
                "Si lo que buscas es un clima agradable y con menos turistas, noviembre puede ser una de las mejores épocas para viajar a Cancún. Durante esta temporada, encontrarás una temperatura promedio que ronda los 27°C. Junto a esto, disfrutarás de noches frescas que te invitarán a pasear por la playa o deleitarte con una cena al aire libre. Además, el agua del mar se mantiene cálida, similar a la temperatura ambiente, lo que la hace perfecta para nadar, bucear o practicar deportes acuáticos."
              }
            />
            <Paragraph
              text={
                "En cuanto a la cantidad de turistas es menor que en temporada alta, por lo que podrás visitar atracciones turísticas sin grandes aglomeraciones. También podrás disfrutar de las playas sin mucho ajetreo y acudir a alguno de los grandes conciertos programados en la ciudad.Otro de los principales atractivos de este mes es El Día de Muertos, que se celebra el 1 y 2 de noviembre. Durante esta hermosa celebración a los difuntos, encontrarás impresionantes decoraciones, ceremonias y un desfile espectacular que estamos seguros querrás presenciar. En cuanto a presupuesto, encontrarás ofertas en hoteles y vuelos, lo que hace de noviembre una época muy apetecible para visitar Cancún"
              }
            />
          </div>

          <img
            src="/acapulco2.jpg"
            alt="blog clima"
            className="rounded-lg h-[437px] object-cover w-full"
          />
          <div className="italic m-s-b text-fs-12 text-gry-100 mt-4">
            Cancún, desde las alturas
          </div>
        </div>
      ))}

    </div>
  );
}
