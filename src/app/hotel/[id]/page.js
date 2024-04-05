// "use client";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import DetailsHotel from "@/services/Hotels/components/DetailHotel/DetailHotel";
import { RoomsHotelProvider } from "@/services/Hotels/context/RoomsHotelContext";
import { GalleryModal } from "@/services/Hotels/components/GalleryModal/GalleryModal";
import DetailReservation from "@/services/Hotels/components/DetailReservation/DetailReservation";
import { ReservationFailed } from "@/services/Hotels/components/AlertsHotel/HotelInformationAlerts";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
// import axios from "axios";

export async function generateMetadata({ params }) {
  // Token JWT
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaW5nZXJwcmludCI6ImE5MzhkMWIxNzZiNjk3Y2ZlMGFiODg5YWJiZWMxYjdiIiwidWlkIjoiZTQ3YmJmODMtZTJmOS00OTZiLTllMTgtYjM4YjE4NTYzYmVmIiwicGFzc3dvcmQiOiIkMmEkMTAkUTE1NnRJbFh2VjRRT3BiQWdmN1c4dUREL00yTHkyMUxDVnlHYUFUQWdhbnMzZ3RmM0FwSC4iLCJpYXQiOjE3MTEyMDk4NDAsImV4cCI6MTcxMTIxMTY0MH0.8je_6ourqIU1W94ei7sjdfcIJXZbQY3VwnrkM3nNpkE";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    // METHOD AXIOS
    const response = await axiosWithInterceptor.get(
      `${process.env.NEXT_PUBLIC_API_ROYAL}/es/v1/hotels/${params.id}`
    );

    // METADATA DETAIL HOTEL
    const hotelMetaData = response.data;

    return {
      title: `${hotelMetaData.name} - Stay WuW`,
      description: `${hotelMetaData.description}`,
      address: hotelMetaData.address,
      city: hotelMetaData.city,
      destination: hotelMetaData.destination,
      checkIn: hotelMetaData.checkIn,
      checkOut: hotelMetaData.checkOut,
      stars: hotelMetaData.stars,
      facilities: hotelMetaData.facilities.join(", "),
      breakfastIncluded: hotelMetaData.breakfast ? "Yes" : "No",
      exclusiveDeal: hotelMetaData.exclusiveDeal
        ? `Exclusive Deal: ${hotelMetaData.exclusiveDeal}`
        : "No Exclusive Deals",
      images: hotelMetaData.images.slice(0, 6),
    };
  } catch (error) {
    console.error("Error fetching hotel metadata:", error);
    // Handle error here
    return null;
  }
}

export default async function DetailPageHotel({ params }) {
  const hotel = true;
  try {
    const response = await axiosWithInterceptor.get(
      `${process.env.NEXT_PUBLIC_API_ROYAL}/es/v1/hotels/${params.id}`
    );

    const hotelData = response.data;

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <RoomsHotelProvider>
              <Token />
              <Navigation />
              <div className="relative">
                <Container>
                  <GalleryModal hotel={hotelData} />
                  <DetailsHotel codeHotel={params.id} />
                </Container>
                <ReservationFailed />
                <DetailReservation />
              </div>
              <Footer />
            </RoomsHotelProvider>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  } catch (error) {
    console.error("Error fetching hotel data:", error);
  }
}
