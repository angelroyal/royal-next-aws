// "use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/styles/web/App.css";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { GalleryModal } from "@/services/Hotels/components/GalleryModal/GalleryModal";
import { Container } from "@/config/Others/Container";
import DetailsHotel from "@/services/Hotels/components/DetailHotel/DetailHotel";
import DetailReservation from "@/services/Hotels/components/DetailReservation/DetailReservation";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
// import { useState } from "react";

export const metadata = {
  title: "Nombre del hotel - royal ",
  description: "Royal detalles",
};

export default async function DetailPageHotel({ params }) {

  // const [hotelDescription, setHotelDescription] = useState(null);
  const response = await fetch( `https://api.sandboxmexico.com/api/es/v1/hotels/${params.id}`);
  // const response = await axiosWithInterceptor.get( `https://api.sandboxmexico.com/api/es/v1/hotels/${params.id}`);
  console.log(response);
  // console.log(hotel);
  // console.log(params);

  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <div className="relative">
            <Container>
              <GalleryModal />
              <DetailsHotel />
            </Container>
            <DetailReservation/>
          </div>
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
