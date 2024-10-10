export default function ListElement() {
  return (
    <>
      <li>
        <div className="mt-8">
          <h3 className="text-fs-28 m-s-b text-[#eb741e] mb-[14px]">
            <span className="mr-6 text-fs-28 m-s-b text-[#eb741e]">1.</span>Zona
            Dorada
          </h3>
          <p className="m-m text-fs-14 mt-4 italic mb-4 text-gry-100">
            ¡La emblemática costa que distingue a Acapulco!.
          </p>
          <p className="mt-4 text-justify text-fs-14 m-m text-gry-100">
            Para empezar el día y si eres de las personas a las que les gusta
            ejercitarse un poco antes de empezar la jornada, la Zona Dorada de
            Acapulco te ofrece la oportunidad de practicar paddle board y kayak
            en el mar.
          </p>
          <p className="mt-8 text-justify text-fs-14 m-m text-gry-100 mb-4">
            ¿Te imaginas navegar con un acompañante mientras remas por tu
            cuenta? Es un buen ejercicio para despertar y la brisa del mar te
            relajará.
          </p>
          <img
            src="https://images.unsplash.com/photo-1576159599964-9fc3a3c5e4d8?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-md mt-11 h-[437px] w-full"
          />
        </div>
      </li>
    </>
  );
}
