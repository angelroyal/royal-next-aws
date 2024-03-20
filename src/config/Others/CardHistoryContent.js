
<<<<<<< HEAD
// import { ReactComponent as HotelIcon } from "../../assets/icons/utils/others/hotelIcon.svg";
// import { ReactComponent as MoveIcon } from "../../assets/icons/utils/others/moveIcon.svg";
// import { ReactComponent as TourIcon } from "../../assets/icons/utils/others/tourIcon.svg";
=======
import HotelIcon from "../../assets/icons/utils/others/hotelIcon.svg";
import MoveIcon from "../../assets/icons/utils/others/moveIcon.svg";
import TourIcon from "../../assets/icons/utils/others/tourIcon.svg";
>>>>>>> be22036f9bf15ff3bfa429a00966d596b5b0f471

export const CardHistoryConfig = [
    {
        image:`${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-o.svg`,
        title:"hotel",
        description:"textHotelService"
    },
    {
        image:`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-o.svg`,
        title:"transportation",
        description:"textTransportationService"
    },
    {
        image:`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-o.svg`,
        title:"tour",
        description:"textTourService"
    }
]