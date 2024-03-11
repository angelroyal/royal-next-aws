import ImageTour from "../assets/images/banners/es/tour_banner_es.webp";
import ImageHome from "../assets/images/banners/es/banner_hotel_es.webp";
import ImageMoving from "../assets/images/banners/es/safe_travel_es.webp";
import ImageRoyalFaqs from "../assets/images/banners/es/banner-faq-es.webp";
import ImageRoyalVacationsAbout from "../assets/images/others/banner-about-us.webp";
import ImageContact from "../assets/images/banners/es/call_center_agent_es.webp";
import ImageRoyalFaqHelp from "../assets/images/banners/es/banner-faq-help-es.webp";
import ImageRoyalAboutUs from "../assets/images/banners/es/banner-about-us-es.webp";
import ImageRoyalTraveling from "../assets/images/banners/es/traveling_banner_es.webp";
import ImageRoyalParadiseTour from "../assets/images/banners/es/tour_royal_banner.jpg";
import ImageRoyalParadise from "../assets/images/banners/es/hotel_royal_banner_es.webp";
import ImageRoyalTopTours from "../assets/images/banners/es/traveling_mexico_banner.jpg";
import ImageRoyalTransports from "../assets/images/banners/es/safe_private_transfer_es.jpg";
import ImageRoyalBestTransports from "../assets/images/banners/es/private_transfer_best_es.jpg";
import ImageRoyalSafeTransports from "../assets/images/banners/es/private_transfer_safe_es.jpg";
import ImageRoyalVacationsFamily from "../assets/images/banners/es/traveling_family_banner.jpg";
import ImageRoyalTravelTransports from "../assets/images/banners/es/private_transfer_travel_es.jpg";
import ImageContactReservation from "../assets/images/banners/es/contact_reservation_es.jpg"
import ImageNotFound from "../assets/images/banners/es/image-not-found.png";
import ImageNotAvailable from "../assets/images/banners/es/no-image-available.png";
import ImgBaner1 from '../assets/images/banners/es/banner-card-hotel.webp';
import ImgBaner2 from '../assets/images/banners/es/banner-about-us-es.webp';
import ImgBaner3 from '../assets/images/banners/es/hotel_royal_banner_es.webp';

export const images_es = {
    hotel: {
        bannerHome: {
            src: ImageHome,
            alt: "Royal Vacations",
        },
        bannerHotel: {
            src: ImageRoyalParadise,
            alt: "Royal Vacations Hospedaje en México",
            title: ['primertitulo', 'segundtitulo']

        },
    },

    tour: {
        bannerHome: {
            src: ImageTour,
            alt: "Royal Vacations - Tours en Mexico",
        },
        bannerTour: {
            src: ImageRoyalParadiseTour,
            alt: "Destinos turisticos con Royal Vacation",
        },
        bannerTraveling: {
            src: ImageRoyalTraveling,
            alt: "Viajes en Royal Vacations",
        },
        bannerFamily: {
            src: ImageRoyalVacationsFamily ,
            alt: "Royal Vacations Viajes Familiares",
        },
        bannerMexico: {
            src: ImageRoyalTopTours,
            alt: "Royal Vacations Top Tours",
        },
    },

    transfer: {
        bannerHome: {
            src: ImageMoving,
            alt: "Royal Vacations Traslados",
        },
        bannerTransfer: {
            src: ImageRoyalTransports,
            alt: "Royal Vacations Transportes",
        },
        bannerBest: {
            src: ImageRoyalBestTransports,
            alt: "Royal Vacations Los mejores Transportes",
        },
        bannerSafe: {
            src: ImageRoyalSafeTransports,
            alt: "Royal Vacations Traslados seguros",
        },
        bannerTravel: {
            src: ImageRoyalTravelTransports,
            alt: "Royal Vacations Transportes de viaje",
        },
    },

    others: {
        ourHistory: {
            bannerHistory: {
                src: ImageRoyalAboutUs,
                alt: "Royal Vacations Sobre nosotros",
            },
            bannerAboutUs: {
                src: ImageRoyalVacationsAbout,
                alt: "Royal Vacations México",
            },
        },
        faqs: {
            bannerFaqs: {
                src: ImageRoyalFaqs,
                alt: "Royal Vacations Preguntas",
            },
            bannerFaqsHelp: {
                src: ImageRoyalFaqHelp,
                alt: "Royal Vacations Ayuda y Soporte",
            },
            bannerCallCenter: {
                src: ImageContact,
                alt: "Royal Vacations Asistencia en Reservas",
            },
        },

        bannerContact: {
            src: ImageContactReservation,
            alt: "Royal Vacations Contacto de Reservación",
        },

        noAvailable: {
            bannerNotFound: {
                src: ImageNotFound,
                alt: "Royal Vacations Imagen no Encontrada",
            },
            bannerNoAvailable: {
                src: ImageNotAvailable,
                alt: "Royal Vacations Image No Available",
            }
        },
    },

    imgListing: [
        { id: 1, src: ImgBaner1, title:'Aqui va el titulo'},
        { id: 2, src: ImgBaner2, title:'Aqui va el titulo'},
        { id: 3, src: ImgBaner3, title:'Aqui va el titulo'}
    ]

}
