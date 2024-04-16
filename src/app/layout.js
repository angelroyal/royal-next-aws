import "./globals.css";
import { Inter } from "next/font/google";
import LanguageProvider from "@/language/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "StayWuw.com | Hoteles, tours, transporte y experiencias de viaje excepcionales ",
  description:
    "Descubre México con Royal Vacations: desde lujosos hoteles hasta tours emocionantes y traslados cómodos. Planifica tu escapada perfecta con opciones personalizadas para explorar los destinos más emblemáticos. Todo lo que necesitas para unas vacaciones inolvidables, en un solo lugar.",
  keywords:
    "Vacaciones en México, Hoteles de Lujo, Tours Aventureros, Servicio de Traslados, Viajes Personalizados, Destinos Emblemáticos, Planificación de Viajes",
  author: "StayWuw",
};

export default function RootLayout({ children }) {
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

  const jsonWeb = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: "http://staywuw.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "http://staywuw.com/",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </section>

        <section>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonWeb) }}
          />
        </section>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
