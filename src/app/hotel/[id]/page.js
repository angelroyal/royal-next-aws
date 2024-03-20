import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/styles/web/App.css";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { GalleryModal } from "@/services/Hotels/components/GalleryModal/GalleryModal";
import { Container } from "@/config/Others/Container";

export default async function DetailPageHotel({ params }) {
  // const response = await fetch('https://api.sandboxmexico.com/api/es/v1/rooms/availability/' + params.id);
  // const hotel = await response.json();
  console.log(params);

  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <Token />
          <Navigation />
          <Container>
            <GalleryModal />
          </Container>
          <Footer />
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
