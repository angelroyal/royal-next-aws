// "use client";

import Token from "@/components/General/Token";
import Footer from "@/components/Footer/Footer";
import Page404 from "@/components/General/Page404";
import LanguageProvider from "@/language/LanguageProvider";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import Tour from "@/services/Tours/components/DetailTour/Tour";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { DetailTourProvider } from "@/services/Tours/context/DetailTourContext";

export async function generateMetadata({ params }) {
  try {
    // METHOD AXIOS
    const response = await axiosWithInterceptor.get(
      `v1/activities/${params.id}`
    );

    // METADATA DETAIL HOTEL
    const tourMetaData = response.data;

    return {
      title: `${tourMetaData.activity.name} - StayWuw`,
      description: `${tourMetaData.activity.description}`,
      starRating: tourMetaData.activity.starRating,
      city: tourMetaData.destination.name,
    };
  } catch (error) {
    console.error("Error fetching hotel metadata:", error);
    // Handle error here
    return null;
  }
}

export default async function DetailPageTour({ params }) {
  try {
    const response = await axiosWithInterceptor.get(
      `v1/activities/${params.id}`
    );

    const tourMetaData = response.data;
    console.log(tourMetaData);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: tourMetaData.activity.name,
      description: tourMetaData.activity.description,
      provider: {
        "@type": "Organization",
        name: "Your Company Name", // Reemplaza con el nombre de tu empresa
        url: "https://www.yourcompanywebsite.com/en/mx/acapulco-mexico/tours/excursion-a-la-isla-de-la-roqueta", // Reemplaza con la URL de tu empresa
      },
      offers: {
        "@type": "Offer",
        price: tourMetaData.activity.price,
        priceCurrency: "MXN",
        availability: "http://schema.org/InStock",
        validFrom: "2024-01-01", // Reemplaza con la fecha de inicio válida
      },
      itinerary: [
        {
          "@type": "Place",
          name: tourMetaData.destination.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: tourMetaData.destination.name,
            addressCountry: tourMetaData.destination.country,
          },
          image: tourMetaData.activity.images,
        },
      ],
      touristType: tourMetaData.activity.typologies.map((typology) => ({
        "@type": "Audience",
        audienceType: typology.description,
      })),
      destination: {
        "@type": "Place",
        name: tourMetaData.destination.name,
        address: {
          "@type": "PostalAddress",
          addressCountry: tourMetaData.destination.country,
        },
        image: tourMetaData.destination.image,
      },
    };

    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <DetailTourProvider>
              <Token />
              <section>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                  }}
                />
              </section>
              <Navigation hotelDetails={true} />
              <Tour params={params} tourMetaData={tourMetaData} />
              <Footer />
            </DetailTourProvider>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  } catch (error) {
    return (
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <DetailTourProvider>
              <Token />
              <Navigation hotelDetails={true} />
              <Page404 />
              <Footer />
            </DetailTourProvider>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    );
  }
}
