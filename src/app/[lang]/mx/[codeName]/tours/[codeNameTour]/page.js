import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import Tour from "@/services/Tours/components/DetailTour/Tour";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { DetailTourProvider } from "@/services/Tours/context/DetailTourContext";

export async function generateMetadata({ params, searchParams }) {
  const queryParams = {
    dateFrom: searchParams.dateStart,
    days: 5,
    provider: "ct",
  };

  try {
    // METHOD AXIOS
    const response = await axiosWithInterceptor.get(
      `v1/activities/${params.codeNameTour}/availability`,
      { params: queryParams }
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
  const queryParams = {
    dateFrom: searchParams.dateStart,
    days: 5,
    provider: "ct",
  };

  try {
    const response = await axiosWithInterceptor.get(
      `v1/activities/${params.codeNameTour}/availability`,
      { params: queryParams }
    );

    const tourData = response.data;

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <DetailTourProvider>
              <Token />
              <Navigation hotelDetails={true} />
              <Tour tourData={tourData} />
              <Footer />
            </DetailTourProvider>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  } catch (error) {
    console.error("Error fetching hotel data:", error);
  }
}
