import TourRecommendation from "@/components/Recommended/Tour/TourRecommendation";
import HotelRecommendation from "@/components/Recommended/Hotel/HotelRecommendation";
import OffersNowRecommendation from "@/components/Recommended/OffersNowRecommendation";
import TransportRecommendation from "@/components/Recommended/Transport/TransportRecommendation";

export default function OrderRecommendation() {

    let order;
    const service = "tour";

    if (service === 'hotel') {
        order =
            <div>
                <TourRecommendation />
                <OffersNowRecommendation />
                <TransportRecommendation />
            </div>;
    } else if (service === 'tour') {
        order =
            <div>
                <HotelRecommendation />
                <OffersNowRecommendation />
                <TransportRecommendation />
            </div>;
    } else if (service === 'transport') {
        order =
            <div>
                <HotelRecommendation />
                <OffersNowRecommendation />
                <TourRecommendation />
            </div>;

    }

    return (
        <div>
            {order}
        </div>
    )
}
