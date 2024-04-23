import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import ListingTransport from "@/services/Transport/components/listing/ListingTransport";
import { ListingTransportProvider } from "@/services/Transport/context/ListingTransportContext";

export default async function DetailPageHotel() {
  const response = await axiosWithInterceptor.get(
    `https://api.sandboxmexico.com/api/es/v1/transports/destinations/719365/zones/251/252/vehicles`
  );
  const transportData = response.data;
  console.log(transportData);

  try {
    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <ListingTransportProvider>
              <Token />
              <Navigation />
              <ListingTransport data={transportData.vehicles}/>
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
