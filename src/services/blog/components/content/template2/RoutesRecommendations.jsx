
export default function RoutesRecommendations() {
  return (
    <>
      <div className="mb-16">
        <h2 className=" m-s-b text-fs-28 text-[#eb741e] mb-[15.5px]">
          Mejores rutas hacia Acapulco, Gro:
        </h2>
        <hr className="mb-11"></hr>
        <ul>
          {[...Array(4)].map((_, index) => (
            <li className="mb-9">
              <p className="mb-4 m-s-b text-fs-16 text-bl-100">
                Ciudad de México a Acapulco De Juárez.
              </p>
              <p className="text-gry-100 mb-[15.5px] m-m text-fs-14">
                Duración aproximada:05 h 00m
              </p>
              <hr></hr>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
