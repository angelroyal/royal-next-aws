import { SearchModalHotel } from "../GalleryModal/SearchModalHotel";
import RoomsDetails from "./RoomsDetails";

export default function DetailsHotel() {
  return (
    <div className="bg-white pl-9 py-6 rounded-lg mt-2">
      <SearchModalHotel />
      <RoomsDetails />
    </div>
  );
}
