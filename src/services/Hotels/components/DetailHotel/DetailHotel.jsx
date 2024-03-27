import { useContext } from "react";
import RoomsDetails from "./RoomsDetails";
import { SearchModalHotel } from "../GalleryModal/SearchModalHotel";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export default function DetailsHotel(codeHotel) {


  return (
    <div className="bg-white pl-9 py-6 rounded-lg mt-2">
      <SearchModalHotel  />
      <RoomsDetails codeHotel={codeHotel.codeHotel} />
    </div>
  );
}
