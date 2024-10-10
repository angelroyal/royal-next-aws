
export default function HowToBook() {
  return (
    <>
      <h3 className="text-fs-20 m-b mb-4">¿Cómo reservar un transporte?</h3>

      <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14 mb-8">
        <p>
          Lorem ipsum dolor sit amet consectetur. Viverra dignissim dictum
          faucibus sed potenti commodo libero id. Fames massa consectetur duis
          tortor urna maecenas accumsan habitant. Ut placerat sit aliquam dolor
          penatibus ut nunc interdum laoreet. Viverra dis sagittis amet quam
          aliquet etiam sed tincidunt. Convallis leo in netus velit. Metus proin
          elit posuere dictumst felis sodales nisl. Pellentesque aenean in
          turpis lacus egestas consectetur.
        </p>
      </div>

      <div className="flex justify-around mb-[44px]">

        <div className="flex flex-col justify-center items-center text-center w-[216px] gap-6">
            <div className="w-[80px] h-[80px] bg-gry-50 rounded-lg flex items-center justify-center">
                <img src="https://sandboxmexico.com/assets/icons/location/location-bl.svg" alt="icon location" className="w-[24px] h-[30px]"/>
            </div>
            <span>Tu estancia perfecta comienza con la ubicación ideal.</span>
        </div>

        <div className="flex flex-col justify-center items-center text-center w-[216px] gap-6">
            <div className="w-[80px] h-[80px] bg-or-100 rounded-lg flex items-center justify-center">
                <img src="https://sandboxmexico.com/assets/icons/calendar/calendar-done-w.svg" alt="icon location" className="w-[36px] h-[36px]"/>
            </div>
            <span>Selecciona el día que más te convenga.</span>
        </div>

        <div className="flex flex-col justify-center items-center text-center w-[216px] gap-6">
            <div className="w-[80px] h-[80px] bg-gry-50 rounded-lg flex items-center justify-center">
                <img src="https://sandboxmexico.com/assets/icons/general/airport-bl.svg" alt="icon location" className="w-[36px] h-[36px]"/>
            </div>
            <span>Elige y reserva el auto perfecto para ti</span>
        </div>

      </div>
    </>
  );
}
