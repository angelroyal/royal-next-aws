import ListElement from "./ListElement";

export default function PlacesToVisit() {
  const elements = Array.from({ length: 8 }, (_, index) => (
    <ListElement key={index} />
  ));
  return (
    <>
      <div>
        <h2 className="text-fs-28 mb-[15.5px] m-s-b text-[#1a202c]">
          8 Lugares que visitar en Acapulco
        </h2>
        <hr></hr>
        <p className="mt-[15.5px] text-justify text-fs-14 text-gry-100 m-m mb-[44px]">
          Toma nota de tus favoritos y consulta el mapa con ubicaciones exactas
          al final de la nota. Comienza a planear tus días cuando sea el momento
          de llegar a la gran costera Guerrerense.
        </p>
      </div>
      <ol>{elements}</ol>
    </>
  );
}
