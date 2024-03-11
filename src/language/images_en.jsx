import ImageTourEn from "../assets/images/banners/en/tour_banner_en.jpg"; 
import ImageHomeEn from "../assets/images/banners/en/banner_hotel_en.jpg"; 
import ImageMovingEn from "../assets/images/banners/en/safe_travel_en.jpg"; 
import ImageRoyalFaqs from "../assets/images/banners/en/banner-faq-en.jpg"; 
import ImageRoyalVacationsAbout from "../assets/images/others/banner-about-us.webp"; 
import ImageContactEn from "../assets/images/banners/en/call_center_agent_en.jpg"; 
import ImageRoyalFaqHelp from "../assets/images/banners/en/banner-faq-help-en.jpg"; 
import ImageRoyalAboutUs from "../assets/images/banners/en/banner-about-us-en.jpg"; 
import ImageRoyalTraveling from "../assets/images/banners/en/traveling_banner_en.jpg"; 
import ImageRoyalParadiseEn from "../assets/images/banners/en/hotel_royal_banner_en.jpg"; 
import ImageRoyalParadiseTour from "../assets/images/banners/en/tour_royal_banner_en.jpg"; 
import ImageRoyalTopTours from "../assets/images/banners/en/traveling_mexico_banner_en.jpg"; 
import ImageRoyalTransports from "../assets/images/banners/en/safe_private_transfer_en.jpg"; 
import ImageRoyalSafeTransports from "../assets/images/banners/en/private_transfer_safe_en.jpg"; 
import ImageRoyalBestTransports from "../assets/images/banners/en/private_transfer_best_en.jpg"; 
import ImageRoyalVacationsFamily from "../assets/images/banners/en/traveling_family_banner_en.jpg"; 
import ImageRoyalTravelTransports from "../assets/images/banners/en/private_transfer_travel_en.jpg"; 
import ImageContactReservation from "../assets/images/banners/en/contact_reservation_en.webp"; 
import ImageNotFound from "../assets/images/banners/en/image-not-found-en.png"; 
import ImageNotAvailable from "../assets/images/banners/en/no-image-available-en.png";
import ImgBaner1 from '../assets/images/banners/es/banner-card-hotel.webp';
import ImgBaner2 from '../assets/images/banners/es/banner-about-us-es.webp';
import ImgBaner3 from '../assets/images/banners/es/hotel_royal_banner_es.webp';

export const images_en = {
    hotel: {
        bannerHome: {
            src: ImageHomeEn,
            alt: "Royal Vacations Mexico",
        },
        bannerHotel: {
            src: ImageRoyalParadiseEn,
            alt: "Royal Vacations Mexico Lodging",
        } 
    },

    tour: {
        bannerHome: {
            src: ImageTourEn,
            alt: "Royal Vacations - Tours in Mexico",
        },
        bannerTour: {
            src: ImageRoyalParadiseTour,
            alt: "Tourist destinations with Royal Vacation",
        },
        bannerTraveling: {
            src: ImageRoyalTraveling,
            alt: "Royal Vacations Travel",
        },
        bannerFamily: {
            src: ImageRoyalVacationsFamily,
            alt: "Royal Vacations Family Travel",
        },
        bannerMexico: {
            src: ImageRoyalTopTours,
            alt: "Royal Vacations Top Tours",
        },
    },

    transfer: {
        bannerHome: {
            src: ImageMovingEn,
            alt: "Royal Vacations Transfers",
        },
        bannerTransfer: {
            src: ImageRoyalTransports,
            alt: "Royal Vacations Transfers",
        },
        bannerBest: {
            src: ImageRoyalBestTransports,
            alt: "Royal Vacations Best Transfers",
        },
        bannerSafe: {
            src: ImageRoyalSafeTransports,
            alt: "Royal Vacations Safe Transfers",
        },
        bannerTravel: {
            src: ImageRoyalTravelTransports,
            alt: "Royal Vacations Travel Transfers",
        },
    },

    others: {
        ourHistory: {
            bannerHistory: {
                src: ImageRoyalAboutUs,
                alt: "Royal Vacations About us",
            },
            bannerAboutUs: {
                src: ImageRoyalVacationsAbout,
                alt: "Royal Vacations Mexico",
            },
        },
        faqs: {
            bannerFaqs: {
                src: ImageRoyalFaqs,
                alt: "Royal Vacations Questions",
            },
            bannerFaqsHelp: {
                src: ImageRoyalFaqHelp,
                alt: "Royal Vacations Help and Support",
            },
            bannerCallCenter: {
                src: ImageContactEn,
                alt: "Royal Vacations Reservation Assistance",
            },
        },

        bannerContact: {
            src: ImageContactReservation,
            alt: "Royal Vacations Reservation Contact",
        },

        noAvailable: {
            bannerNotFound: {
                src: ImageNotFound,
                alt: "Royal Vacations Image Not Found",
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