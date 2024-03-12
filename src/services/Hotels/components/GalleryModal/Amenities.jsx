import { useState } from "react";
import { AmenitiesConfig } from "../../../../configs/AmenitiesConfig";


export function AmenitiesIcons({ text = false, amenities }) {

  const [activeFacility, setActiveFacility] = useState(null);

  const handleFacilityHover = (index) => {
    setActiveFacility(index);
  };

  const filterAmenity = (amenity, item) => {
    const actualIcon = activeFacility === item ? 'activeIcons' : 'icons'
    return AmenitiesConfig.find((amenities) => amenities.id === amenity)[actualIcon];
  };

  const filterAmenityName = (amenity) => {
    return AmenitiesConfig.find((amenities) => amenities.id === amenity).name;
  };
  return (
    <div className="flex justify-evenly">
      {amenities.map((amenity, item) => (
        <div
          className="flex flex-col justify-center items-center mx-2 my-1 text-center  hover:text-or-100 cursor-pointer"
          style={{ maxWidth: "100px" }}
          key={item}
          onMouseOver={() => handleFacilityHover(item)}
          onMouseOut={() => setActiveFacility(null)}
        >
          <img
            width={24}
            height={24}
            src={filterAmenity(amenity, item)}
            alt="icon amenity"
          />
          {text && (
            <span className="leading-none m-m text-fs-13 pt-1">
              {filterAmenityName(amenity)}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
