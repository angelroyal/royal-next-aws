
import CardTourItinerary from "../CardsItineraryWeb/CardTourItinerary";
import CardHotelItinerary from "../CardsItineraryWeb/CardHotelItinerary";
import CardMovingItinerary from "../CardsItineraryWeb/CardMovingItinerary";

export default function CardsItinerary(props) {
  const { dataItinerary } = props;

  return (
    <div className="flex flex-col gap-y-6">
      {dataItinerary.items.map((item, index) => {
        if (item.type === "transport" || item.type === "transportation") {
          return (
            <div key={index}>
              <CardMovingItinerary itemTransport={item} />
            </div>
          );
        } else if (item.type === "activity") {
          return (
            <div key={index}>
              <CardTourItinerary key={index} itemActivity={item} />
            </div>
          );
        } else if (item.type === "hotel") {
          return (
            <div key={index}>
              <CardHotelItinerary itemHotel={item} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
