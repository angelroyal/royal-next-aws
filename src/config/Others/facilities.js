import { ReactComponent as GolfIcon } from "../../assets/icons/hotel/listing/golf.svg";
import { ReactComponent as GolfActiveIcon } from "../../assets/icons/hotel/listing/golf-active.svg";
import { ReactComponent as GymIcon } from "../../assets/icons/hotel/listing/gym.svg";
import { ReactComponent as GymActiveIcon } from "../../assets/icons/hotel/listing/gym-active.svg";
import { ReactComponent as KidsIcon } from "../../assets/icons/hotel/listing/kids-club.svg";
import { ReactComponent as KidsActiveIcon } from "../../assets/icons/hotel/listing/kids-club-active.svg";
import { ReactComponent as PoolIcon } from "../../assets/icons/hotel/listing/pool.svg";
import { ReactComponent as PoolActive } from "../../assets/icons/hotel/listing/pool-active.svg";
import { ReactComponent as RestaurantIcon } from "../../assets/icons/hotel/listing/restaurant.svg";
import { ReactComponent as RestaurantActiveIcon } from "../../assets/icons/hotel/listing/restaurant-active.svg";
import { ReactComponent as RoomService } from "../../assets/icons/hotel/listing/service-room.svg";
import { ReactComponent as RoomServiceActive } from "../../assets/icons/hotel/listing/service-room-active.svg";
import { ReactComponent as SpaIcon } from "../../assets/icons/hotel/listing/spa.svg";
import { ReactComponent as SpaActiveIcon } from "../../assets/icons/hotel/listing/spa-active.svg";
import { ReactComponent as WifiIcon } from "../../assets/icons/hotel/listing/wifi.svg";
import { ReactComponent as WifiActiveIcon } from "../../assets/icons/hotel/listing/wifi-active.svg";

export const facilities = {
  "wi-fi": {
    default: WifiIcon,
    active: WifiActiveIcon,
    label: "wifi",
  },
  golf: {
    default: GolfIcon,
    active: GolfActiveIcon,
    label: "golf",
  },
  pool: {
    default: PoolIcon,
    active: PoolActive,
    label: "pool",
  },
  restaurant: {
    default: RestaurantIcon,
    active: RestaurantActiveIcon,
    label: "restaurant",
  },
  gym: {
    default: GymIcon,
    active: GymActiveIcon,
    label: "gym",
  },
  spa: {
    default: SpaIcon,
    active: SpaActiveIcon,
    label: "spa",
  },
  "kids-club": {
    default: KidsIcon,
    active: KidsActiveIcon,
    label: "kids",
  },
  "room-service": {
    default: RoomService,
    active: RoomServiceActive,
    label: "roomService",
  },
};
