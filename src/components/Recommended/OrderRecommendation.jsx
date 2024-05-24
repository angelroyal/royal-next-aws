import TourRecommendation from "@/components/Recommended/Tour/TourRecommendation";
import HotelRecommendation from "@/components/Recommended/Hotel/HotelRecommendation";
import OffersNowRecommendation from "@/components/Recommended/OffersNowRecommendation";
import TransportRecommendation from "@/components/Recommended/Transport/TransportRecommendation";

export default function OrderRecommendation() {

    let order;
    const service = "hotel";

    // IS HOTEL
    switch (service) {
        case "hotel":
            {
                order =
                    <div>
                        <TourRecommendation />
                        <OffersNowRecommendation />
                        <TransportRecommendation />
                    </div>;
            }
            break;
        // IS TOUR
        case "tour":
            {
                order =
                    <div>
                        <HotelRecommendation />
                        <OffersNowRecommendation />
                        <TransportRecommendation />
                    </div>;
            }
            break;
        // IS TRANSPORT
        case "transport":
            {
                order =
                    <div>
                        <HotelRecommendation />
                        <OffersNowRecommendation />
                        <TourRecommendation />
                    </div>
            }
            break;

    }

    return (
        <div>
            {order}
        </div>
    )
}
