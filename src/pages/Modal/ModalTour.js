import Modal from "react-bootstrap/Modal";
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
} from "react";

// import MetaModalT from "../../components/Meta/MetaModalT";
import SkeletonModal from "../../utils/skeleton/SkeletonModal";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
// import ModalInformationTour from "../../components/Tour/ModalInformationTour";
// PENDING
// import ModalActivitiesOptions from "../../components/Modal/Tour/ModalActivitiesOptions";
// PENDING

const ShowContentContext = createContext();
export const useShowContentTour = () => useContext(ShowContentContext);

export default function ModalTour(props) {

  const modalBodyRef = useRef(null);
  const { show, onHide, tourKey } = props;
  const [tourModal, setTourModal] = useState(null);

  // SECOND MODAL
  const [showContent, setShowContent] = useState(1);

  // PARAMS URL
  const searchParams = new URLSearchParams(window.location.search);
  const dateStart = searchParams.get("dateStart");
  const adults = searchParams.get("adults");
  const children = searchParams.get("children");

  const handleShowContentChange = () => {
    // Move the modal body upward when showContent changes
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    setTourModal(null);

    const newRequestBody = {
      "date-start": dateStart,
      adults: adults,
      children: children,
    };

    axiosWithInterceptor
      .post(`v1/tour-destinations/${tourKey}/availability`, newRequestBody)
      .then((response) => {
        setTimeout(() => {
          setTourModal(response);
        }, 500);
      })
      .catch((error) => {
        // console.log(error);
      });

    handleShowContentChange();
  }, [tourKey, dateStart, adults, children, modalBodyRef, showContent]);

  return (
    <>
      <ShowContentContext.Provider value={{ showContent, setShowContent }}>
        <Modal
          show={show}
          onHide={onHide}
          dialogClassName="modal-90w animate__animated animate__fadeInUpBig"
          className="modal-hotel-all"
        >
          <Modal.Header closeButton></Modal.Header>
          <>
            {showContent === 1 ? (
              <Modal.Body ref={modalBodyRef}>
                <div className="container">
                  {tourModal && tourModal ? (
                    <>
                      {/* <GalleryTour tourModal={tourModal.data} /> */}
                      {/* <ModalInformationTour tourModal={tourModal.data} /> */}
                    </>
                  ) : (
                    <SkeletonModal />
                  )}
                </div>
              </Modal.Body>
            ) : showContent === 2 ? (
              <Modal.Body ref={modalBodyRef}>
                {/* {tourModal && (
                  <ModalActivitiesOptions tourModal={tourModal.data} />
                )} */}
              </Modal.Body>
            ) : null}
          </>
        </Modal>
      </ShowContentContext.Provider>
    </>
  );
}
