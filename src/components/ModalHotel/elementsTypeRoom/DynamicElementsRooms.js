import Image from "next/image";
import React, { useContext } from "react";

import { TooltipDown } from "../../ToolTip/TooltipDown";
import { useIsMobile } from "../../../config/Mobile/isMobile";
import LanguageContext from "../../../language/LanguageContext";
import { SelectedRoomsContext } from "../../../pages/Modal/ModalHotel";

import "../../../assets/styles/web/Hotel.css";
import LowPrice from "../../../assets/icons/hotel/modal/distinguished.svg";
import BedSharpIcon from "../../../assets/icons/utils/searchBox/room-autocomplete.svg";
import Person2OutlinedIcon from "../../../assets/icons/utils/searchBox/person-autocomplete.svg";
// import { hash } from "bcryptjs";

// TITLE FUNCTION
export function TitleRoomFacility(props) {
  const { facilities, nameRoom } = props;
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="room-first-container">
      <div className="modal-room-title-h"> {nameRoom}</div>
      <ul className="list-facility-card-h">
        {facilities &&
          facilities.slice(0, 5).map((facility, index) => (
            <li key={index} className="modal-room-li">
              {facility}
            </li>
          ))}
      </ul>

      {!facilities && (
        <div className="no-available-facilities">
          {languageData.containerModalHotel.infoBed}
        </div>
      )}
    </div>
  );
}

export function MinPriceRoom(props) {
  const { room } = props;
  const { languageData } = useContext(LanguageContext);
  const url = process.env.REACT_APP_URL_SITE + "/policy";
  const [selectedRooms, setSelectedRooms] = useContext(SelectedRoomsContext);
  const isMobile = useIsMobile();

  const handleAddDetailHotel = (room) => {
    const persons = parseInt(room.adultChildren.split(".")[0]);
    const data = {
      code: room.code,
      idRoom: room.idRoom,
      name: room.name,
      eatingPlan: room.rates.min.eatingPlan,
      persons: room.adultChildren,
      adults: persons,
      children: room.childrenAges,
      price: room.rates.min.price,
      netPrice: room.rates.min.netPrice,
      rateKey: room.rates.min.rateKey,
      facilities: (room.facilities && room.facilities[0]) || null,
      rateIndex: room.rates.min.rateIndex,
      boardCode: room.rates.min.boardCode,
      hash: room.rates.min.hash,
    };

    const updatedSelectedRooms = [...selectedRooms, data];
    setSelectedRooms(updatedSelectedRooms);
  };

  return (
    <div
      className={`room-option-modal ${
        selectedRooms.some(
          (selectedRoom) => selectedRoom.rateIndex === room.rates.min.rateIndex
        )
          ? "selected-room"
          : ""
      }`}
    >
      <div className="room-option-divider">
        <div className="container-info-room">
          <Image src={Person2OutlinedIcon} alt="Person2OutlinedIcon" />
          {/* Room information for how many adults and children */}
          <div className="divider-info-person">
            {`${parseInt(room.adultChildren.split(".")[0])} ${
              parseInt(room.adultChildren.split(".")[0]) > 1
                ? languageData.containerModalHotel.adults
                : languageData.containerModalHotel.adult
            }${
              parseInt(room.adultChildren.split(".")[1]) !== 0
                ? `, ${parseInt(room.adultChildren.split(".")[1])} ${
                    parseInt(room.adultChildren.split(".")[1]) > 1
                      ? languageData.containerModalHotel.children
                      : languageData.containerModalHotel.child
                  }`
                : ""
            } ${languageData.containerModalHotel.room}`}
          </div>
        </div>
        {/* Bed information  */}

        <div className="container-info-room">
          <Image src={BedSharpIcon} alt="BedSharpIcon" />
          <div>
            {room.beds && room.beds.length > 0 ? (
              room.beds.map((bed, index) => (
                <div key={index} className="divider-info-bed">
                  {bed.number} {bed.type}
                </div>
              ))
            ) : (
              <div className="divider-info-bed">
                {languageData.containerModalHotel.infoBed}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="room-second-divider">
        <div className="distinguished-svg">
          <Image className="icon-low-price-modal" src={LowPrice} alt="LowPrice" />
        </div>

        <div>
          {" "}
          <span className="modal-hotel-price">{room.currency}$</span>
          <span className="card-hotel-price-number">
            {Math.floor(room.rates.min.price)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .
            <sup className="sup-price-card">
              {(room.rates.min.price % 1).toFixed(2).slice(2)}
            </sup>
          </span>
        </div>

        <div className="card-hotel-taxes">
          {languageData.containerModalHotel.taxesInf}
        </div>

        <TooltipDown
          // interactive
          disableFocusListener
          disableTouchListener
          title={
            room.rates.min.cancellationPolicies ? (
              <React.Fragment>
                {languageData.roomsCancellations.percentage}{" "}
                {room.rates.min.cancellationPolicies.from}{" "}
                {languageData.roomsCancellations.from}{" "}
                {room.rates.min.cancellationPolicies.percentage}%{" "}
                {languageData.roomsCancellations.total}{" "}
                <a
                  className="label-link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {languageData.roomsCancellations.terms}{" "}
                </a>
              </React.Fragment>
            ) : (
              languageData.cancellationPolicies[room.rates.min.cancellationCode]
            )
          }
        >
          <div className="tooltipUp-cancellations">
            {languageData.containerModalHotel.policies}
          </div>
        </TooltipDown>

        {room.rates.min.eatingPlan && (
          <li className="booking-li-room">{room.rates.min.eatingPlan}</li>
        )}

        {isMobile && (
          <div className="room-option-button">
            <button
              className={`room-add-button ${
                selectedRooms.some(
                  (selectedRoom) => selectedRoom.idRoom === room.idRoom
                )
                  ? "disabled"
                  : ""
              }`}
              onClick={() => handleAddDetailHotel(room)}
              disabled={selectedRooms.some(
                (selectedRoom) => selectedRoom.idRoom === room.idRoom
              )}
            >
              {languageData.containerModalHotel.buttonModal}
            </button>
          </div>
        )}
      </div>

      {!isMobile && (
        <div className="room-option-button">
          <button
            className={`room-add-button ${
              selectedRooms.some(
                (selectedRoom) => selectedRoom.idRoom === room.idRoom
              )
                ? "disabled"
                : ""
            }`}
            onClick={() => handleAddDetailHotel(room)}
            disabled={selectedRooms.some(
              (selectedRoom) => selectedRoom.idRoom === room.idRoom
            )}
          >
            {languageData.containerModalHotel.buttonModal}
          </button>
        </div>
      )}
    </div>
  );
}

export function MaxPriceRoom(props) {
  const { room } = props;
  const { languageData } = useContext(LanguageContext);
  const url = process.env.REACT_APP_URL_SITE + "/policy";
  const [selectedRooms, setSelectedRooms] = useContext(SelectedRoomsContext);
  const isMobile = useIsMobile();

  const handleAddDetailHotelMaxPrice = (room) => {
    const persons = parseInt(room.adultChildren.split(".")[0]);
    const data = {
      code: room.code,
      idRoom: room.idRoom,
      name: room.name,
      eatingPlan: room.rates.max.eatingPlan,
      persons: room.adultChildren,
      adults: persons,
      children: room.childrenAges,
      price: room.rates.max.price,
      netPrice: room.rates.max.netPrice,
      rateKey: room.rates.max.rateKey,
      facilities: (room.facilities && room.facilities[0]) || null,
      rateIndex: room.rates.max.rateIndex,
      boardCode: room.rates.max.boardCode,
      hash: room.rates.max.hash,
    };
    const updatedSelectedRooms = [...selectedRooms, data];
    setSelectedRooms(updatedSelectedRooms);
  };

  return (
    <div
      className={`room-option-modal ${
        selectedRooms.some(
          (selectedRoom) => selectedRoom.rateIndex === room.rates.max.rateIndex
        )
          ? "selected-room"
          : ""
      }`}
    >
      <div className="room-option-divider">
        <div className="container-info-room">
        <Image src={Person2OutlinedIcon} alt="Person2OutlinedIcon" />
          <div className="divider-info-person">
            {`${parseInt(room.adultChildren.split(".")[0])} ${
              parseInt(room.adultChildren.split(".")[0]) > 1
                ? languageData.containerModalHotel.adults
                : languageData.containerModalHotel.adult
            }${
              parseInt(room.adultChildren.split(".")[1]) !== 0
                ? `, ${parseInt(room.adultChildren.split(".")[1])} ${
                    parseInt(room.adultChildren.split(".")[1]) > 1
                      ? languageData.containerModalHotel.children
                      : languageData.containerModalHotel.child
                  }`
                : ""
            } ${languageData.containerModalHotel.room}`}
          </div>
        </div>

        <div className="container-info-room">
          <Image src={BedSharpIcon} alt="BedSharpIcon" />
          <div>
            {room.beds && room.beds.length > 0 ? (
              room.beds.map((bed, index) => (
                <div key={index} className="divider-info-bed">
                  {bed.number} {bed.type}
                </div>
              ))
            ) : (
              <div className="divider-info-bed">
                {languageData.containerModalHotel.infoBed}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="room-second-divider">
        {room.rates.max.price && room.currency ? (
          <>
            <div>
              <span className="modal-hotel-price">{room.currency}$</span>
              <span className="card-hotel-price-number">
                {Math.floor(room.rates.max.price)
                  .toLocaleString("es-MX", {
                    currency: "MXN",
                  })
                  .replace(".00", "")}
                .
                <sup className="sup-price-card">
                  {(room.rates.max.price % 1).toFixed(2).slice(2)}
                </sup>
              </span>
            </div>
            <div className="card-hotel-taxes">
              {languageData.containerModalHotel.taxesInf}
            </div>

            <TooltipDown
              // interactive
              disableFocusListener
              disableTouchListener
              title={
                room.rates.max.cancellationPolicies ? (
                  <React.Fragment>
                    {languageData.roomsCancellations.percentage}{" "}
                    {room.rates.max.cancellationPolicies.from}{" "}
                    {languageData.roomsCancellations.from}{" "}
                    {room.rates.max.cancellationPolicies.percentage}%{" "}
                    {languageData.roomsCancellations.total}{" "}
                    <a
                      className="label-link"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {languageData.roomsCancellations.terms}{" "}
                    </a>
                  </React.Fragment>
                ) : (
                  languageData.cancellationPolicies[
                    room.rates.max.cancellationCode
                  ]
                )
              }
            >
              <div className="tooltipUp-cancellations">
                {languageData.containerModalHotel.policies}
              </div>
            </TooltipDown>

            {room.rates.max.eatingPlan && (
              <li className="booking-li-room">{room.rates.max.eatingPlan}</li>
            )}
            {isMobile && (
              <button
                className={`room-add-button ${
                  selectedRooms.some(
                    (selectedRoom) => selectedRoom.idRoom === room.idRoom
                  )
                    ? "disabled"
                    : ""
                }`}
                onClick={() => handleAddDetailHotelMaxPrice(room)}
                disabled={selectedRooms.some(
                  (selectedRoom) => selectedRoom.idRoom === room.idRoom
                )}
              >
                {languageData.containerModalHotel.buttonModal}
              </button>
            )}
          </>
        ) : (
          <div className="center-text unavailable-card ">
            {languageData.containerModalHotel.InfDisponibility}
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="room-option-button">
          <button
            className={`room-add-button ${
              selectedRooms.some(
                (selectedRoom) => selectedRoom.idRoom === room.idRoom
              )
                ? "disabled"
                : ""
            }`}
            onClick={() => handleAddDetailHotelMaxPrice(room)}
            disabled={selectedRooms.some(
              (selectedRoom) => selectedRoom.idRoom === room.idRoom
            )}
          >
            {languageData.containerModalHotel.buttonModal}
          </button>
        </div>
      )}
    </div>
  );
}

export function IndividualPriceRoom(props) {
  const { room } = props;
  const { languageData } = useContext(LanguageContext);
  const url = process.env.REACT_APP_URL_SITE + "/policy";
  const [selectedRooms, setSelectedRooms] = useContext(SelectedRoomsContext);
  const isMobile = useIsMobile();

  const handleAddDetailHotel = (room) => {
    const persons = parseInt(room.adultChildren.split(".")[0]);

    // const data = {
    //   code: room.code,
    //   idRoom: room.idRoom,
    //   name: room.name,
    //   // eatingPlan: room.rates.min.eatingPlan,
    //   eatingPlan: room.rates.min?.eatingPlan ?? "",
    //   persons: room.adultChildren,
    //   adults: persons,
    //   children: room.childrenAges,
    //   price: room.rates.min.price,
    //   netPrice: room.rates.min.netPrice,
    //   rateKey: room.rates.min.rateKey,
    //   facilities: (room.facilities && room.facilities[0]) || null,
    //   rateIndex: room.rates.min.rateIndex,
    //   boardCode: room.rates.min.boardCode,
    //   hash: room.rates.min.hash,
    // };

    const { rates: { min = {} } = {} } = room;

    const data = {
      code: room.code,
      idRoom: room.idRoom,
      name: room.name,
      eatingPlan: min.eatingPlan ?? "",
      persons: room.adultChildren,
      adults: persons,
      children: room.childrenAges,
      price: min.price ?? "",
      netPrice: min.netPrice ?? "",
      rateKey: min.rateKey ?? "",
      facilities: (room.facilities && room.facilities[0]) || null,
      rateIndex: min.rateIndex ?? "",
      boardCode: min.boardCode ?? "",
      hash: min.hash ?? "",
    };
    const updatedSelectedRooms = [...selectedRooms, data];
    setSelectedRooms(updatedSelectedRooms);
  };

  return (
    <div
      className={`room-option-individual ${
        selectedRooms.some(
          (selectedRoom) => selectedRoom.rateIndex === room.rates.min?.rateIndex
        )
          ? "selected-room"
          : ""
      }`}
    >
      <div className="room-individual-h">
        <div className="container-info-room">
        <Image src={Person2OutlinedIcon} alt="Person2OutlinedIcon" />
          {/* Room information for how many adults and children */}
          <div className="divider-info-person">
            {`${parseInt(room.adultChildren.split(".")[0])} ${
              parseInt(room.adultChildren.split(".")[0]) > 1
                ? languageData.containerModalHotel.adults
                : languageData.containerModalHotel.adult
            }${
              parseInt(room.adultChildren.split(".")[1]) !== 0
                ? `, ${parseInt(room.adultChildren.split(".")[1])} ${
                    parseInt(room.adultChildren.split(".")[1]) > 1
                      ? languageData.containerModalHotel.children
                      : languageData.containerModalHotel.child
                  }`
                : ""
            } ${languageData.containerModalHotel.room}`}
          </div>
        </div>
        {/* Bed information  */}

        <div className="container-info-room">
          <Image src={BedSharpIcon} alt="BedSharpIcon" />
          <div>
            {room.beds && room.beds.length > 0 ? (
              room.beds.map((bed, index) => (
                <div key={index} className="divider-info-bed">
                  {bed.number} {bed.type}
                </div>
              ))
            ) : (
              <div className="divider-info-bed">
                {languageData.containerModalHotel.infoBed}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="room-second-individual">
        <div className="distinguished-svg-individual">
          <Image className="icon-low-price-modal" src={LowPrice} alt="LowPrice" />
        </div>

        <div>
          {" "}
          <span className="modal-hotel-price">{room.currency}$</span>
          {room.rates &&
            room.rates.min &&
            room.rates.min.price(
              <span className="card-hotel-price-number">
                {Math.floor(room.rates.min.price)
                  .toLocaleString("es-MX", { currency: "MXN" })
                  .replace(".00", "")}
                .
                <sup className="sup-price-card">
                  {(room.rates.min.price % 1).toFixed(2).slice(2)}
                </sup>
              </span>
            )}
        </div>

        <div className="card-hotel-taxes">
          {languageData.containerModalHotel.taxesInf}
        </div>

        <TooltipDown
          // interactive
          disableFocusListener
          disableTouchListener
          title={
            room.rates.min && room.rates.min.cancellationPolicies ? (
              <React.Fragment>
                {languageData.roomsCancellations.percentage}{" "}
                {room.rates.min.cancellationPolicies.from}{" "}
                {languageData.roomsCancellations.from}{" "}
                {room.rates.min.cancellationPolicies.percentage}%{" "}
                {languageData.roomsCancellations.total}{" "}
                <a
                  className="label-link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {languageData.roomsCancellations.terms}{" "}
                </a>
              </React.Fragment>
            ) : (
              <>
                {room.rates.min &&
                  room.rates.min.cancellationPolicies &&
                  languageData.cancellationPolicies[
                    room.rates.min.cancellationCode
                  ]}
              </>
            )
          }
        >
          <div className="tooltipUp-cancellations">
            {languageData.containerModalHotel.policies}
          </div>
        </TooltipDown>

        {room.rates.min && room.rates.min.eatingPlan && (
          <li className="booking-li-room">{room.rates.min.eatingPlan}</li>
        )}

        {isMobile && (
          <div className="room-individual-button">
            <button
              className={`room-add-button ${
                selectedRooms.some(
                  (selectedRoom) => selectedRoom.idRoom === room.idRoom
                )
                  ? "disabled"
                  : ""
              }`}
              onClick={() => handleAddDetailHotel(room)}
              disabled={selectedRooms.some(
                (selectedRoom) => selectedRoom.idRoom === room.idRoom
              )}
            >
              {languageData.containerModalHotel.buttonModal}
            </button>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="room-individual-button">
          <button
            className={`room-add-button ${
              selectedRooms.some(
                (selectedRoom) => selectedRoom.idRoom === room.idRoom
              )
                ? "disabled"
                : ""
            }`}
            onClick={() => handleAddDetailHotel(room)}
            disabled={selectedRooms.some(
              (selectedRoom) => selectedRoom.idRoom === room.idRoom
            )}
          >
            {languageData.containerModalHotel.buttonModal}
          </button>
        </div>
      )}
    </div>
  );
}
