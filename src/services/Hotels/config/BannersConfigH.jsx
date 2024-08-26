export const BannerConfig ={   
    bannerTop:{
        img:`${process.env.NEXT_PUBLIC_URL}banners/hotel/Feb2024/iberostar-landscape.webp`,
        imgM:`${process.env.NEXT_PUBLIC_URL}banners/hotel/Feb2024/iberostar-landscape.webp`,
        text:['Los mejores hoteles en México'],
        rating: 5,
        description:"Mejor hotel 5 estrellas de Cancún"
    },

    bannerUp:{
        img:`${process.env.NEXT_PUBLIC_URL}banners/desktop/home-d.webp`,
        imgM:`${process.env.NEXT_PUBLIC_URL}banners/mobile/home-m.webp`,
        text:[{title:'Las vacaciones que quieres a tu alcance',subtitle:'Conoce México al mejor precio'},
              {title:'Precios incoparables en tus viajes en México',subtitle:'Los mejores descuentos para tu próximo hospedaje'},
              {title:'Vacaciones sublimes por todo México solo con nosotros',subtitle:'Conoce México con nosotros al mejor precio'}]
    }
} 