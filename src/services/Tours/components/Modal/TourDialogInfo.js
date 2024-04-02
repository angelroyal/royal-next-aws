import React /*, { useEffect }*/ from "react";
import { Modal } from "react-bootstrap";

import ModalTour from "./ModalTour";
import { ProviderModalTour } from "../../Context/ModalTourContext";

import LineBlTour from "../../../assets/images/others/line-bl-tour.jpg";
// import { ReactComponent as CloseIcon } from "../../../assets/icons/hotel/modal/close.svg";

export function TourDialogInfo(props) {
  const { open, onClose } = props;

  const closeDialog = () => {
    onClose();
  };

  return (
    <Modal
      show={open}
      onHide={closeDialog}
      dialogClassName="animate__animated "
      // dialogClassName="modal-90w animate__animated "
      id="modal-tour-l"
    >
      <img src={LineBlTour} alt="line-bl" />
      <Modal.Body>
        <div className="container-modal-tour-reservation">
          <ProviderModalTour>
            <ModalTour open={open} closeDialog={closeDialog} />
          </ProviderModalTour>
        </div>
      </Modal.Body>
    </Modal>
  );
}
