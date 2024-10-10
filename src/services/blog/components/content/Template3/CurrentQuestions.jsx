export default function CurrentQuestions() {
  return (
    <>
      {/* TITLE QUESTIONS */}
      <h3 className="m-s-b text-fs-28 my-4">
        5. PREGUNTAS FRECUENTES SOBRE CUÁL ES LA MEJOR ÉPOCA PARA VIAJAR A
        CANCÚN
      </h3>
      {/* SUBTITLE QUESTIONS */}
      <span className="mb-4 text-fs-14 m-m text-gry-100">
        A continuación, a modo de resumen del artículo, responderemos algunas
        cuestiones acerca de la mejor época para viajar a Cancún.
      </span>

      {/* QUESTIONS */}
      {[...Array(6)].map((_, index) => (
        <div key={index} className="flex flex-col gap-4 mt-4">
          <h4 className="m-s-b text-fs-20px">
            En definitiva, ¿cuál es el mejor mes para viajar a Cancún?
          </h4>
          <span className="text-fs-14 m-m text-gry-100">
            Enero es el mejor mes para viajar a Cancún. Eso sí, mejor espera a
            que pase la primera semana y bajen los precios, ya que suelen
            mantenerse alto después de las festividades de Navidad, Año Nuevo y
            Reyes. Durante las tres últimas semanas de enero, no hay tantas
            multitudes como en marzo y abril y no hace tanto calor. ¡Nuestro mes
            favorito para viajar a Cancún!
          </span>
        </div>
      ))}
    </>
  );
}
