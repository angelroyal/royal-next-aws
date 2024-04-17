import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import Tour from "@/services/Tours/components/DetailTour/Tour";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { DetailTourProvider } from "@/services/Tours/context/DetailTourContext";

export default async function DetailPageTour({ params, searchParams }) {
  try {
    const response = await axiosWithInterceptor.get(
      `v1/activities/${params.codeNameTour}/availability?dateFrom=${searchParams.dateStart}&days=5&provider=ct`
    );

    const tourData = response.data;
    console.log(tourData);

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <DetailTourProvider>
              <Token />
              <Navigation hotelDetails={true} />
              <div>
                hola {tourData.timeZone}
              </div>
              {tourData && <Tour tourData={tourData} />}
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
