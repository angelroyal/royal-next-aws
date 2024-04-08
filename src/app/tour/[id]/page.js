import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import Tour from "@/services/Tours/components/DetailTour/Tour";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { RoomsHotelProvider } from "@/services/Hotels/context/RoomsHotelContext";

export async function generateMetadata({ params, searchParams }) {

  const requestBody = {
    dateFrom: searchParams.dateStart,
    days: 5,
    provider: "ct",
  };

  try {
    // METHOD AXIOS
    const response = await axiosWithInterceptor.post(
      `v1/activities/${params.id}/availability`,
      requestBody
    );

    // METADATA DETAIL HOTEL
    const tourMetaData = response.data;

    return {
      title: `${tourMetaData.activity.name} - StayWuw`,
      description: `${tourMetaData.activity.description}`,
      address: tourMetaData.activity.address,
      city: tourMetaData.activity.city,
      destination: tourMetaData.activity.destination,
    };
  } catch (error) {
    console.error("Error fetching hotel metadata:", error);
    // Handle error here
    return null;
  }
}

export default async function DetailPageTour({ params, searchParams }) {
  const requestBody = {
    dateFrom: searchParams.dateStart,
    days: 5,
    provider: "ct",
  };

  try {
    const response = await axiosWithInterceptor.post(
      `v1/activities/${params.id}/availability`,
      requestBody
    );

    const tourData = response.data;
    // console.log(tourData);

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <RoomsHotelProvider>
              <Token />
              <Navigation />
              <Tour />
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
