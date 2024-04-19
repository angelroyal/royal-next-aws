import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import Tour from "@/services/Tours/components/DetailTour/Tour";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { DetailTourProvider } from "@/services/Tours/context/DetailTourContext";

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

export default async function DetailPageTour({ params, searchParams }) {
  try {
    // const response = await axiosWithInterceptor.get(
    //   `v1/activities/${params.codeNameTour}`
    // );

    // const tourMetaData = response.data;

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <DetailTourProvider>
              <Token />
              <Navigation />
              <Tour
                params={params}
                searchParams={searchParams}
                // tourMetaData={tourMetaData}
              />
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
