import Modal from "react-bootstrap/Modal";
import React, { useContext } from "react";

import MetaModalM from "../../components/Meta/MetaModalM";
import RoundModal from "../../components/Moving/RoundModal";
import LanguageContext from "../../language/LanguageContext";
import ArriveModal from "../../components/Moving/ArriveModal";
import ComeBackModal from "../../components/Moving/ComeBackModal";

export default function ModalMoving(props) {
  const { languageData } = useContext(LanguageContext);

  const { show, onHide, movingKey, priceVehicle, route, transport } = props;

  const searchParams = new URLSearchParams(window.location.search);
  const typeMoving = parseInt(searchParams.get("type"));

  const modalComponents = {
    1: (
      <ArriveModal
        vehicleCode={movingKey}
        totalPriceVehicle={priceVehicle}
        routeTransport={route}
        transport={transport}
      />
    ),
    2: (
      <ComeBackModal
        vehicleCode={movingKey}
        totalPriceVehicle={priceVehicle}
        routeTransport={route}
        transport={transport}
      />
    ),
    3: (
      <RoundModal
        vehicleCode={movingKey}
        totalPriceVehicle={priceVehicle}
        routeTransport={route}
        transport={transport}
      />
    ),
  };

  return (
    <>
      <MetaModalM />
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="modal-90w animate__animated animate__fadeInUpBig"
        className="modal-hotel-all"
      >
        <Modal.Body className="modal-moving-body-p">
          {modalComponents[typeMoving] || (
            <div>{languageData.modalMoving.modalTextInf}</div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
