import TipElementList from "./TipElementList";

export default function RecommendationsBeforeVisit() {
  return (
    <>
      <div className="mt-8 mb-9">
        <h2 className="m-s-b text-fs-28 text-[#1a202c] mb-[15.5px]">
          Recomendaciones antes de visitar Acapulco.
        </h2>
        <hr className="mb-[15.5px]"></hr>
        <p className="m-m text-justify text-fs-14 text-gry-100 mb-11">
          Sigue los siguentes tips para tener una mehjor estancia en tu viaje:
        </p>
        <ol className="mb-11">

          {[...Array(4)].map((_, index) => (
            <TipElementList />
          ))}

        </ol>
        <p className="inline text-justify text-gry-100 mb-7 m-m text-fs-14">
          Prepara tus maletas y compra tus{" "}
          <a className="text-bl-100 m-s-b">boletos de autobus</a> para conocer
          estos increíbles lugares para pasar un gran día.
        </p>
      </div>
    </>
  );
}
