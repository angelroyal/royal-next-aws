export function TransportBanner() {
  return (
    // h-[408px]
    <div className="flex bg-white flex-col lg:flex-row h-max mt-[131px] mb-32">
      <div className="flex justify-center items-center pl-16 pr-16 w-full lg:pr-0 lg:items-start py-[88px] flex-col gap-y-2.5 lg:w-4/5 gap-y-2.5">
        <h3 className="m-b text-fs-32">Transporte a tu disposición</h3>

        <p className="m-m text-fs-14">
          Reserva ahora y disfruta de tarifas competitivas, seguridad y
          puntualidad en cada recorrido. Tu comodidad es nuestra prioridad.
          Únete a nosotros y haz que tus viajes sean memorables desde el primer
          momento.
        </p>

        <button className="rounded-full py-[20px] px-[41px] bg-bl-100 text-white w-max m-s-b text-fs-12">
          Elegir fechas
        </button>
      </div>

      <div className="w-full relative w-4/5 flex justify-end">
        <img
          src={`${
            import.meta.env.VITE_ASSETS_URL
          }banners/vehicle/tiggo-7-pro.webp`}
          alt="tiggo car Royal Vacation"
          className="absolute z-[1] bottom-0 right-0"
          width="auto"
          height="100%"
        />
        <img
          src={`${import.meta.env.VITE_ASSETS_URL}general/Frame-1414.webp`}
          alt="Royal Vacation"
          className="object-cover h-full mr-0 sm:mr-[44px] lg:mr-0 xl:mr-[44px]"
          width="auto"
          height="100%"
        />
      </div>
    </div>
  );
}
