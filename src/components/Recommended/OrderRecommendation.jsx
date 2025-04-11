import TourRecommendation from "@/components/Recommended/Tour/TourRecommendation";
import HotelRecommendation from "@/components/Recommended/Hotel/HotelRecommendation";
import OffersNowRecommendation from "@/components/Recommended/OffersNowRecommendation";
import TransportRecommendation from "@/components/Recommended/Transport/TransportRecommendation";

export default function OrderRecommendation({ type, params, searchParams }) {
  
  let order;
  const service = type;

  // IS HOTEL
  switch (service) {
    case "hotel":
      {
        order = (
          <>
            <TourRecommendation
              params={params}
              destination={searchParams.codeName}
            />
            <OffersNowRecommendation />
            {process.env.NEXT_PUBLIC_TRANSPORT === "true" && (
              <TransportRecommendation />
            )}
            <HotelRecommendation params={params} paramsHotel={searchParams} />
          </>
        );
      }
      break;
    // IS TOUR
    case "tour":
      {
        order = (
          <>
            <HotelRecommendation params={params} paramsHotel={searchParams} />
            <OffersNowRecommendation />
            {process.env.NEXT_PUBLIC_TRANSPORT === "true" && (
              <TransportRecommendation />
            )}
            <TourRecommendation
              params={params}
              destination={searchParams.codeName}
            />
          </>
        );
      }
      break;
    // IS TRANSPORT
    case "transport":
      {
        order = (
          <>
            <HotelRecommendation />
            <OffersNowRecommendation />
            <TourRecommendation />
            {process.env.NEXT_PUBLIC_TRANSPORT === "true" && (
              <TransportRecommendation />
            )}
          </>
        );
      }
      break;
  }

  return <div>{order}</div>;
}
