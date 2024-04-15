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
    "@type": "Corporation",
    legalName: "StayWuw.com ",
    url: "http://staywuw.com",
    description:
      "By investing in technology that takes the friction out of travel, Booking.com seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, Booking.com enables properties around the world to reach a global audience and grow their businesses.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Mexico",
      addressRegion: "Mexico",
      addressLocality: "Cancun, Mexico",
      postOfficeBoxNumber: "150",
      postalCode: "77505",
      streetAddress: "Nader",
    },
    faxNumber: "+52 998134 2286",
    logo: "https://sandboxmexico.com/assets/royal/principal-logo.svg",
    founder: "Lic Pepe",
    foundingDate: "1995",
    foundingLocation: "Mexico",
    areaServed: "Mexico",
    brand: {
      "@type": "Brand",
      name: "http://staywuw.com/",
    },
    keywords:
      "online travel agency, hotels, holiday rentals, flights, rental cars",
    parentOrganization: {
      "@type": "Corporation",
      name: "Stay Wuw",
    },
    sameAs: [
      "https://www.facebook.com/RoyalVacationsMx",
      "https://www.instagram.com/royalvacationsmx/",
      "https://twitter.com/bookingcom",
      "https://www.linkedin.com/company/royal-vacations-mexico/",
      "https://www.tiktok.com/@royalvacationsmx",
    ],
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
