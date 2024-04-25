import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import ListingTransport from "@/services/Transport/components/listing/ListingTransport";
import { ListingTransportProvider } from "@/services/Transport/context/ListingTransportContext";

export async function generateMetadata({ searchParams }) {
  try {
    const response = await axiosWithInterceptor.get(
      `v1/transports/destinations/${searchParams.destinationId}/zones/${searchParams.zoneFromId}/${searchParams.zoneToId}/vehicles`
    );
    const transportData = response.data;
    console.log(transportData);

    return {
      title: `Transporte - StayWuw`,
    };
  } catch (error) {
    console.error("Error fetching hotel metadata:", error);
    // Handle error here
    return null;
  }
}

export default async function DetailPageHotel({ searchParams }) {
  const response = await axiosWithInterceptor.get(
    `v1/transports/destinations/${searchParams.destinationId}/zones/${searchParams.zoneFromId}/${searchParams.zoneToId}/vehicles`
  );
  const transportData = response.data;

  try {
    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <ListingTransportProvider>
              <Token />
              <Navigation />
              <ListingTransport data={transportData.vehicles} />
              <Footer />
            </ListingTransportProvider>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  } catch (error) {
    console.log("Error fetching hotel data:", error);
  }
}
