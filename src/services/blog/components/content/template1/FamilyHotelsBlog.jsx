
export default function FamilyHotelsBlog() {
  return (
    <div className="my-11">
      <h3 className="text-fs-20 m-b mb-4">
        Hoteles familiares en Puerto Juárez
      </h3>
      <div className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
        <span>
          Puerto Juárez es un destino ideal para familias con niños. El pueblo
          ofrece una variedad de actividades y atracciones para niños de todas
          las edades, como playas, parques acuáticos, parques temáticos y
          museos.
        </span>
        <span>
          Si estás buscando un hotel familiar en Puerto Juárez, hay muchas
          opciones disponibles. Aquí hay una lista de los mejores hoteles
          familiares en Puerto Juárez:
        </span>
      </div>

      <div className="grid grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex gap-2 items-center">
            <span className="m-s-b text-fs-28">1.</span>
            <span>la amada</span>
          </div>
        ))}
      </div>

      <div className="w-full h-[437px] mt-[36px]">
        <img
          src="/acapulco2.jpg"
          alt="family hotel"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
