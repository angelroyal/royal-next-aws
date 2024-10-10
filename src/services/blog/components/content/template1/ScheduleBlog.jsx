
export default function ScheduleBlog() {
  return (
    <div className="flex flex-col gap-4 my-11">
      <h3 className="text-fs-20 m-b">Horarios del Ferry Isla Mujeres</h3>
      <span className="text-gry-100 text-fs-14 m-m">
        Descubre la comodidad y eficiencia de los horarios del ferry que conecta
        con el paraíso de Isla Mujeres. Sumérgete en una experiencia de
        transporte marítimo diseñada para ofrecer conexiones fluidas y
        convenientes. Conoce más sobre los horarios del ferry Isla Mujeres y
        planifica tu viaje con la certeza de disfrutar de una travesía sin
        contratiempos hacia este destino de ensueño.
      </span>

      <table border="1">
        <thead>
          <tr>
            <th className="rounded-tl-lg border-l border-white bg-bl-100 text-white m-s-b text-fs-14 py-4">Cancún a Isla Mujeres</th>
            <th className="rounded-tr-lg border-l border-white bg-bl-100 text-white m-s-b text-fs-14 py-4">Isla Mujeres a Cancún</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#ebebeb] p-4 text-fs-14 m-m">5:30 am</td>
            <td className="border border-[#ebebeb] p-4 text-fs-14 m-m">6:00 am</td>
          </tr>
          <tr>
            <td className="border border-[#ebebeb] p-4 text-fs-14 m-m">6:30 am</td>
            <td className="border border-[#ebebeb] p-4 text-fs-14 m-m">7:00 am</td>
          </tr>
          <tr>
            <td className="border border-[#ebebeb] p-4 text-fs-14 m-m">7:00 am</td>
            <td className="border border-[#ebebeb] p-4 text-fs-14 m-m">8:00 am</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
