// "use client";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import Tour from "@/services/Tours/components/DetailTour/Tour";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
// import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { DetailTourProvider } from "@/services/Tours/context/DetailTourContext";
// import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import axios from "axios";

// export async function generateMetadata({ params }) {
//   try {
//     // METHOD AXIOS
//     const response = await axiosWithInterceptor.get(
//       `v1/activities/${params.codeNameTour}`
//     );

//     // METADATA DETAIL HOTEL
//     const tourMetaData = response.data;

//     return {
//       title: `${tourMetaData.activity.name} - StayWuw`,
//       description: `${tourMetaData.activity.description}`,
//       starRating: tourMetaData.activity.starRating,
//       city: tourMetaData.destination.name,
//     };
//   } catch (error) {
//     console.error("Error fetching hotel metadata:", error);
//     // Handle error here
//     return null;
//   }
// }

export default async function DetailPageTour({ params }) {
  try {
    const response = await axios.get(
      `https://api.sandboxmexico.com/api/es/v1/activities/paddle-surf-en-el-islote-el-morro`
    );

    const tourMetaData = response.data;

    if (!tourMetaData) {
      return <div>cargando</div>;
    }

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <DetailTourProvider>
              <Token />
              <Navigation hotelDetails={true} />
              <Tour params={params} tourMetaData={tourMetaData} />
              <Footer />
            </DetailTourProvider>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  } catch (error) {
    console.error("Error fetching hotel data:", error);
    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <DetailTourProvider>
              <Token />
              <Navigation hotelDetails={true} />
              <Footer />
            </DetailTourProvider>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  }
}
