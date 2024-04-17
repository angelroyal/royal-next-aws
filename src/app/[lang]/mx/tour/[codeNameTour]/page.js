import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export default async function DetailPageHotel({ params, searchParams }) {
  try {
    const response = await axiosWithInterceptor.get(
      `v1/hotels/temptation-cancun-resort/rooms`
    );
    const hotelData = response.data;
    console.log(hotelData);
    console.log("esta entrando aqui");

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <div className="relative bg-gry-30">
              <div>{hotelData.name}</div>
              holaaaaaaaaaaa
            </div>
            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  } catch (error) {
    console.log("Error fetching hotel data:", error);
  }
}
