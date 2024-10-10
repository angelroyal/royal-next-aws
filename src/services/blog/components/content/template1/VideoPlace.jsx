
export default function VideoPlace() {
  return (
    <div>
      <h3 className="text-fs-20 m-b mb-4">Puerto Juárez a Isla Mujeres</h3>
      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[24px] text-gry-100 text-fs-14 m-m">
        <p>
          La terminal marítima de Puerto Juárez es el principal punto de
          conexión para el transporte marítimo desde y hacia Isla Mujeres. Ahora
          que hemos explorado las diversas formas de llegar a dicho lugar,
          seguramente te estarás preguntando sobre la distancia y el costo del
          ferry, ¿verdad? Bueno, ¡ahora responderemos esas preguntas!
        </p>
        <p>
          ¿Cuál es el precio del ferry de Puerto Juárez a Isla Mujeres? El costo
          del ferry desde Puerto Juárez a Isla Mujeres es de 270 pesos mexicanos
          (14.25 dólares) por trayecto para adultos y 200 pesos mexicanos (10.25
          dólares) para niños. Para el viaje de ida y vuelta, el precio es de
          540 pesos mexicanos (28.50 dólares) para adultos y 400 pesos mexicanos
          (20.50 dólares) para niños.
        </p>
        <p>
          ¿Cuál es la distancia de Puerto Juárez a Isla Mujeres? La distancia
          desde la terminal marítima de Puerto Juárez hasta Isla Mujeres es de
          13.9 km, y la duración promedio del viaje en ferry es de 25 minutos o
          menos. Todo dependerá de las condiciones climáticas en el momento de
          tu viaje.
        </p>
        <p>
          Es importante mencionar que estos precios son para el público en
          general. Existen tarifas especiales que suelen ser más económicas para
          residentes del estado, personas de la tercera edad, y precios
          ligeramente más altos al optar por servicios VIP de traslado marítimo
          de ultramar.
        </p>
      </div>

      {/* VIDEO */}
      <div className="h-[437px] w-full rounded-lg mt-11">
        <iframe
          src="https://www.youtube.com/embed/FkCXFvgmzB0"
          frameBorder="0"
          allowFullScreen
          width={"100%"}
          height={"100%"}
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
