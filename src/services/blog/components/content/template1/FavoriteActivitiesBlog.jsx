
export default function FavoriteActivitiesBlog() {
  return (
    <div>
      <h3 className="text-fs-20 m-b mb-4">
        Nuestras 2 actividades favoritas para ti
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

      <div className="flex gap-9">
        <div>
          <h3 className="text-fs-16 m-s-b mb-4">Capitán Hook</h3>
          <span className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
            Cerca de la terminal marítima de ultramar de Puerto Juárez,
            encontraremos el tour del Capitán Hooks, un tour que nos regala una
            aventura recorriendo el mar caribe a bordo de la replica de un
            galeón español, mientras disfrutamos de un show pirata y una rica
            cena que puede ser pollo o langosta.
          </span>
        </div>

        <div>
          <h3 className="text-fs-16 m-s-b mb-4">Tour Isla Mujeres</h3>
          <span className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
            Si bien desde la terminal de Puerto Juárez se puede llegar a Isla
            Mujeres, muchos prefieren tomar los tour a Isla Mujeres, que ofrecen
            los lancheros cercanos a la terminal marítima. Estos tour
            particularmente te llevan a conocer las mejores zonas de la Isla y
            te incluyen un rico bufet.
          </span>
        </div>
      </div>

      <div className="w-full h-[437px]">
        <img src="/maya-bg.jpg" alt="activities favorite" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
}
