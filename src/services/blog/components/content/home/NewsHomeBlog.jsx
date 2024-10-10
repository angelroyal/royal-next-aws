
export default function NewsHomeBlog() {
  return (
    <div className="border border-[#ebebeb] rounded-lg mt-6 p-6">
      <h3 className="m-s-b text-fs-16 mb-4">Noticias destacadas</h3>

      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex flex-col gap-1 border-b border-[#ebebeb] mt-[15.5px]">
          <span className="text-[#d1d2d5] text-fs-12 m-m">Abril,1,2024</span>

          <span className="text-fs-14 m-b text-bl-100">
            Beneficios de reservar con Staywuw
          </span>

          <span className="text-fs-12 m-m text-gry-100">
            Staywuw te ofrece el mejor itinerario para tus vacaciones...
          </span>

          <div className="rounded-full bg-gry-50 text-gry-100 px-2 py-1 w-fit text-fs-10 mb-[15.5px]">
            Playas
          </div>
        </div>
      ))}
    </div>
  );
}
