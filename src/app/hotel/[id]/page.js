import React from 'react'

export default async function DetailPageHotel({params}) {

    // const response = await fetch('https://api.sandboxmexico.com/api/es/v1/rooms/availability/' + params.id);
    // const hotel = await response.json();
    console.log(params);

  return (
    <div className='text-or 100 bold'>
      Es es una prueba y paso correctamente
    </div>
  )
}
