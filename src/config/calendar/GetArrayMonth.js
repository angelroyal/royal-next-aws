import React from 'react'

// export const getArrayMonth = () => {
//   const generarArrayMeses = () => {
//     let fechaActual = new Date(); // Obtener la fecha actual
//     let añoActual = fechaActual.getFullYear(); // Obtener el año actual
//     let mesActual = fechaActual.getMonth(); // Obtener el mes actual (0-11)

//     const months = [];

//     // Bucle a través de los años desde el actual hasta el 2026
//     for (let año = añoActual; año <= 2026; año++) {
//       // Bucle a través de los meses (0-11)
//       for (let mes = 0; mes < 12; mes++) {
//         // Crear un objeto para el mes
//         let monthObj = {
//           key: mes % 2, // Establecer la clave como 0 o 1
//           name: obtenerNombreMes(mes),
//           numberMes: mes,
//           year: año,
//           days: []
//         };

//         // Calcular el primer día de la semana del mes
//         let primerDiaSemana = new Date(año, mes, 1).getDay(); // 0-6 (0: Domingo, 1: Lunes, ..., 6: Sábado)

//         // Calcular el número de días del mes anterior
//         let ultimoDiaMesAnterior = new Date(año, mes, 0).getDate();
//         let diasDelMesAnterior = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1;

//         // Agregar los días del mes anterior
//         for (let i = ultimoDiaMesAnterior - diasDelMesAnterior; i <= ultimoDiaMesAnterior; i++) {
//           let fecha = new Date(año, mes - 1, i).toISOString().split('T')[0];
//           monthObj.days.push({ date: fecha, isCurrentMonth: false });
//         }

//         // Calcular el número de días en el mes actual
//         let ultimoDia = new Date(año, mes + 1, 0).getDate();

//         // Agregar los días del mes actual
//         for (let dia = 1; dia <= ultimoDia; dia++) {
//           let fecha = new Date(año, mes, dia).toISOString().split('T')[0];
//           // let isToday = año === añoActual && mes === mesActual && dia === fechaActual.getDate();
//           monthObj.days.push({ date: fecha, isCurrentMonth: true, isToday:false });
//         }

//         // Calcular el número de días del mes siguiente para completar la cuadrícula
//         let diasFaltantes = 42 - monthObj.days.length; // 42 = 6 filas * 7 días
//         for (let i = 1; i <= diasFaltantes; i++) {
//           let fecha = new Date(año, mes + 1, i).toISOString().split('T')[0];
//           monthObj.days.push({ date: fecha, isCurrentMonth: false });
//         }

//         // Agregar el mes al array de meses
//         months.push(monthObj);
//       }
//     }

//     return months;
//   }

//   // Función para obtener el nombre del mes
//   const obtenerNombreMes = (mes) => {
//     const meses = [
//       'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
//       'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
//     ];
//     return meses[mes];
//   }

//   // Función para agrupar el array de meses en grupos de dos
//   const agruparEnGrupos = (array, tamañoGrupo) => {
//     let grupos = [];
//     for (let i = 0; i < array.length; i += tamañoGrupo) {
//       grupos.push(array.slice(i, i + tamañoGrupo));
//     }
//     return grupos;
//   }

//   // Generar el array de meses
//   const arrayMeses = generarArrayMeses();

//   // Agrupar el array de meses en grupos de dos
//   const arrayGrupos = agruparEnGrupos(arrayMeses, 2);

//   // Generar el array de meses
//   // console.log(arrayGrupos);
//   return arrayGrupos;
// }

export const getArrayMonth = () => {
  const fechaActual = new Date(); // Obtener la fecha actual
  fechaActual.setHours(0, 0, 0, 0); // Normalizar la fecha actual sin la hora
  const añoActual = fechaActual.getFullYear(); // Obtener el año actual
  const mesActual = fechaActual.getMonth(); // Obtener el mes actual (0-11)
  const diaActual = fechaActual.getDate(); // Obtener el día actual

  // Función para determinar si una fecha es anterior a hoy
  const esFechaPasada = (fecha) => {
    return fecha < fechaActual;
  };

  const generarArrayMeses = () => {
    const months = [];

    // Bucle a través de los años desde el actual hasta el 2026
    for (let año = añoActual; año <= 2026; año++) {
      // Bucle a través de los meses (0-11)
      for (let mes = 0; mes < 12; mes++) {
        let monthObj = {
          key: mes % 2, // Establecer la clave como 0 o 1
          name: obtenerNombreMes(mes),
          numberMes: mes,
          year: año,
          days: []
        };

        // Calcular el número de días del mes anterior
        let ultimoDiaMesAnterior = new Date(año, mes, 0).getDate();
        let primerDiaSemana = new Date(año, mes, 1).getDay();
        let diasDelMesAnterior = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1;

        // Agregar los días del mes anterior
        for (let i = ultimoDiaMesAnterior - diasDelMesAnterior; i <= ultimoDiaMesAnterior; i++) {
          let fecha = new Date(año, mes - 1, i);
          monthObj.days.push({ date: fecha.toISOString().split('T')[0], isCurrentMonth: false });
        }

        // Calcular el número de días en el mes actual
        let ultimoDia = new Date(año, mes + 1, 0).getDate();

        // Agregar los días del mes actual
        for (let dia = 1; dia <= ultimoDia; dia++) {
          let fecha = new Date(año, mes, dia);
          let isCurrentMonth = (año > añoActual || (año === añoActual && mes >= mesActual)) && !esFechaPasada(fecha);
          let isToday = fecha.getDate() === diaActual && mes === mesActual && año === añoActual;

          monthObj.days.push({
            date: fecha.toISOString().split('T')[0],
            isCurrentMonth: isCurrentMonth,
            isToday: isToday
          });
        }

        // Calcular el número de días del mes siguiente para completar la cuadrícula
        let diasFaltantes = 42 - monthObj.days.length; // 42 = 6 filas * 7 días
        for (let i = 1; i <= diasFaltantes; i++) {
          let fecha = new Date(año, mes + 1, i);
          monthObj.days.push({ date: fecha.toISOString().split('T')[0], isCurrentMonth: false });
        }

        // Agregar el mes al array de meses
        months.push(monthObj);
      }
    }

    return months;
  };

  // Función para obtener el nombre del mes
  const obtenerNombreMes = (mes) => {
    const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return meses[mes];
  };

  // Función para agrupar el array de meses en grupos de dos
  const agruparEnGrupos = (array, tamañoGrupo) => {
    let grupos = [];
    for (let i = 0; i < array.length; i += tamañoGrupo) {
      grupos.push(array.slice(i, i + tamañoGrupo));
    }
    return grupos;
  };

  // Generar el array de meses
  const arrayMeses = generarArrayMeses();

  // Agrupar el array de meses en grupos de dos
  const arrayGrupos = agruparEnGrupos(arrayMeses, 2);

  return arrayGrupos;
};

export const getIndexArrayDate = (fecha, array) => {

  for (let i = 0; i < array.length; i++) {
    const mes = array[i];

    for (const mesData of mes) {
      for (const day of mesData.days) {
        if (day.date === fecha && day.isCurrentMonth) {
          return i;
        }
      }
    }
  }
  return -1; // Si la fecha no se encuentra en el array
}

export const asignarKeys = (meses) => {
  let keyCounter = 0;

  meses.forEach(mes => {
      mes.days.forEach(dia => {
          dia.key = keyCounter++;
      });
  });

  return meses;
};


export const fullAsignarKeys = (arrayMeses) => {
  let keyCounter = 0;

  arrayMeses.forEach(grupMeses => {
    grupMeses.forEach(mes => {
      mes.days.forEach(dia => {
        dia.key = keyCounter++;
      });
    });
  });

  return arrayMeses;
};
