
export default function WhatWillYouFind() {
  return (
    <>
      <h3 className="text-fs-20 m-b mb-6">¿Qué encontrarás en Isla Mujeres?</h3>
      <div className="flex flex-col gap-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex gap-6">
            <div className="w-[150px] h-[150px]">
              <img
                src="/maya-bg.jpg"
                alt="what will you find"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="w-[85%] flex flex-col gap-2">
              <span className="m-s-b text-fs-16">Zonas arqueológicas</span>
              <p className="m-m text-fs-14 text-gry-100">
                El meco es una pequeña zona arqueológica que se encuentra en
                Puerto Juárez y no suele ser muy conocida, lo que le da una
                privacidad de explorar completamente el lugar casi de manera
                privada y su costo de acceso es de 50 MXN.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
