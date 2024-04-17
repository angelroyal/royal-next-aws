
import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { RoomsHotelProvider } from "@/services/Hotels/context/RoomsHotelContext";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
// import axios from "axios";

export default async function DetailPageHotel({ params, searchParams }) {
  try {
    const response = await axiosWithInterceptor.get(
      `v1/hotels/${searchParams.codeNameHotel}/rooms`
    );
    const hotelData = response.data;
    console.log("esta entrando aqui");

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <RoomsHotelProvider>
              <Token />
              <Navigation hotelDetails={true} />
              <div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
              <Footer />
            </RoomsHotelProvider>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  } catch (error) {
    console.log("Error fetching hotel data:", error);
  }
}
