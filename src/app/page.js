import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import HomeHotel from "@/services/General/HomeHotel";
import Navigation from "@/components/Navigation/Navigation";
import LanguageProvider from "@/language/LanguageProvider";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "staywuwb",
    image: "staywuwb",
    description: "staywuwb",
  };

  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <Navigation />
            <HomeHotel />

            <Footer />
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
