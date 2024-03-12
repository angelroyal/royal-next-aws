import { useState } from "react";

export function HotelInfo({ hotelInfo }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescriptionPreview = (description) => {
    const words = description.split(" ");
    return words.slice(0, 30).join(" ");
  };
  return (
    <div className="flex flex-column border-black py-3 px-2">
      <div className="block">
        <h3 className="mb-2 m-b text-fs-20">Conoce más de este hotel:</h3>
        <div className="text-fs-14 m-m text-justify">
          {showFullDescription ? (
            <div className="flex flex-col ">
              {hotelInfo.description}
              <span>
                <button
                  className="flex gap-1 items-center m-b text-fs-15 text-bl-100"
                  onClick={handleToggleDescription}
                >
                  Ver menos
                  <img src="https://sandboxmexico.com/assets/icons/arrows/up-bl.svg" alt="show less" />
                </button>
              </span>
            </div>
          ) : (
            <div className="flex flex-col">
              {getDescriptionPreview(hotelInfo.description)}...
              <span>
                <button
                  className=" flex items-center gap-1 m-b text-fs-15 text-bl-100"
                  onClick={handleToggleDescription}
                >
                  Ver más
                  <img src="https://sandboxmexico.com/assets/icons/arrows/down-bl.svg" alt="show more" />
                </button>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
