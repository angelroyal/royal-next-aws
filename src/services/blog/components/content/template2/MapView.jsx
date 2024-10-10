export default function MapView() {
  return (
    <>
      <div className="mt-9 mb-9">
        <h3 className="text-fs-20 m-b text-[#1a202c] font-bold mb-4">
          Mapa de lugares turísticos para visitar en Acapulco
        </h3>
        <p className="mt-5 text-justify text-fs-14 text-gry-100 m-m mb-4">
          Consulta todos los lugares mencionados para visitar en Acapulco en el
          siguiente mapa:
        </p>
        {/* En esta área se tiene que mandar a llamar a una API para que redirija a la zonas mencionadas o al menos, a una de ellas  */}
        <img
          src="/googleMaps.png"
          alt="Mapa de la zona."
          className="mt-5 rounded-md h-[437px] w-full"
        />
      </div>
    </>
  );
}
