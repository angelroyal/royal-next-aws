import Token from "@/components/General/Token";
import FooterT from "@/components/Footer/FooterT";
import ContactUs from "@/components/General/ContactUs";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import HomeHotel from "@/services/Hotels/components/home/HomeHotel";
import axios from "axios";
import { ImageProvider } from "@/context/ImageContext";

export default async function Home({ params }) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_CRM}getImages/all`
    );

    const dataImg = response.data;

    return (
      <ImageProvider>
        <LanguageProvider>
          <TokenProvider>
            <CartAxiosProvider>
              <Token />
              <div className="max-md:overflow-x-hidden">
                <Navigation />
                <HomeHotel dataImg={dataImg} />
                <ContactUs />
              </div>
              <FooterT />
            </CartAxiosProvider>
          </TokenProvider>
        </LanguageProvider>
      </ImageProvider>
    );
  } catch (error) {
    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation hotelDetails={true} />
            <Page404 />
            <FooterT />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  }
}
