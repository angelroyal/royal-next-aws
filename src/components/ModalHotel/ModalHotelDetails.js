import Image from "next/image";
import { Rating } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";

import TypeRoom from "./TypeRoom";
import SearchRoom from "../Search/SearchRoom";
import ReservationDetails from "./ReservationDetails";
import ModalHotelOptions from "../Modal/ModalHotelOptions";
import LanguageContext from "../../language/LanguageContext";
import { transformDistance } from "../../utils/hotel/helpers";
import SkeletonModal from "../../utils/skeleton/SkeletonModal";
import { SkeletonRooms } from "../../utils/skeleton/SkeletonRoom";
import { SelectedRoomsContext } from "../../pages/Modal/ModalHotel";
import { GalleryHotel, InformationModalHotel } from "./GalleryHotel";

import Line from "../../assets/images/others/group 75.jpg";
import CloseIcon from "../../assets/icons/hotel/modal/close_active.svg";

export function ModalHotelDetails(props) {
  const {
    show,
    onHide,
    showContent,
    modalBodyRef,
    hotelModal,
    selectedRooms,
    setSelectedRooms,
    showTooltip,
    handleDataUpdate,
    setChangeDate,
    changeDate,
    handleAddDetail,
    isTrueChangeDate,
    newRequestBody,
    handleShowContentChange,
    showNestedModal,
    setShowNestedModal,
    loading,
  } = props;

  const { languageData } = useContext(LanguageContext);

  const[isRoomSelected, setIsRoomSelected] = useState(false)
  useEffect(()=>{
    if(selectedRooms.length > 0){
      setIsRoomSelected(true);
    }else{
      setIsRoomSelected(false);
    }
  },[selectedRooms])

  const [totalRoomsSelected,setTotalRoomsSelected] = useState(null)
  useEffect(()=>{
    if(newRequestBody !== null){
      setTotalRoomsSelected(newRequestBody.occupancies.length);
    }
  }, [newRequestBody]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-90w animate__animated "
      className="modal-hotel-all"
    >
      <div className="line-principal-home position-relative">
        <Image
          src={Line}
          alt={languageData.allAlt.altBannerNavigation}
        />
      </div>
      <>
        {showContent === 1 ? (
          <Modal.Body ref={modalBodyRef}>
            <div className="container">
              {hotelModal && hotelModal.hotel ? (
                <>
                  <div className="close-icon-title-hotel-modal d-flex flex-column">
                    <div className="d-flex justify-content-end">
                      <button
                        className="bg-transparent border border-0 pe-auto"
                        onClick={onHide}
                      >
                        <Image src={CloseIcon} />
                      </button>
                    </div>

                    <h1 className="modal-hotel-title" data-aos="fade-right">
                      {hotelModal.hotel.name}
                    </h1>
                  </div>

                  <div className="container-start-modal">
                    <span>
                      <Rating
                      data-aos="fade-right"
                        name="size-small"
                        style={{ padding: "5px 0px" }}
                        defaultValue={0}
                        value={hotelModal.hotel.stars}
                        size="small"
                        max={hotelModal.hotel.stars}
                        readOnly
                      />
                    </span>

                    <span className="modal-hotel-destination">
                      {`${hotelModal.hotel.destination}, México.`}{" "}
                      {hotelModal.hotel.address}{" "}
                    </span>

                    {hotelModal.hotel.closestInterestPointDistance && (
                      <span
                        className="modal-hotel-subtext"
                        style={{ padding: "1px 0px" }}
                      >
                        {`${languageData.cardHotel.to} ${transformDistance(
                          hotelModal.hotel.closestInterestPointDistance
                        )} ${languageData.cardHotel.from} ${
                          hotelModal.hotel.closestInterestPointName
                        }`}
                      </span>
                    )}
                  </div>

                  <Row className="row-gallery-information-hotel">
                    <Col sm={8}>
                      <GalleryHotel hotelModal={hotelModal.hotel} />
                    </Col>

                    <Col sm={4}>
                      <div
                        className="information-hotel-border"
                        style={{
                          maxHeight: "584px",
                          overflowY: "auto",
                        }}
                      >
                        <SelectedRoomsContext.Provider
                          value={[selectedRooms, setSelectedRooms]}
                        >
                          <InformationModalHotel
                            hotelModal={hotelModal.hotel}
                          />
                        </SelectedRoomsContext.Provider>
                      </div>
                    </Col>
                  </Row>

                  {showTooltip === true && (
                    <>
                      <div className="dialog-box-modal-tooltip">
                        {languageData.modalHotel.showTooltip}
                      </div>
                    </>
                  )}

                  <SearchRoom
                    onDataUpdate={handleDataUpdate}
                    setChangeDate={setChangeDate}
                    changeDate={changeDate}
                  />
                  
                  <Row>
                    <SelectedRoomsContext.Provider
                      value={[selectedRooms, setSelectedRooms]}
                    >
                      {loading ? (
                        <Col sm={8}>
                          <SkeletonRooms />
                        </Col>
                      ) : (
                        <Col sm={8}>
                          <TypeRoom
                            hotelModal={hotelModal.hotel}
                            onAddDetail={handleAddDetail}
                            isRoomSelected={isRoomSelected}
                          />
                        </Col>
                      )}

                      <Col sm={4} style={{ paddingBottom: "2rem" }}>
                        <div className="element-detail-modal">
                          <ReservationDetails
                            details={{ selectedRooms }}
                            isTrueChangeDate={isTrueChangeDate}
                            requestBody={newRequestBody}
                            handleShowContentChange={handleShowContentChange}
                            changeDate={changeDate}
                            showNestedModal={showNestedModal}
                            setShowNestedModal={setShowNestedModal}
                            isRoomSelected={isRoomSelected}
                            totalRoomsSelected ={totalRoomsSelected}
                          />
                        </div>
                      </Col>
                    </SelectedRoomsContext.Provider>
                  </Row>
                </>
              ) : (
                <SkeletonModal />
              )}
            </div>
          </Modal.Body>
        ) : showContent === 2 ? (
          <Modal.Body ref={modalBodyRef} className="modal-hotel-h">
            {hotelModal && (
              <div>
                <SelectedRoomsContext.Provider
                  value={[selectedRooms, setSelectedRooms]}
                >
                  <ModalHotelOptions
                    hotelModal={hotelModal.hotel}
                    dataBody={newRequestBody}
                    room={selectedRooms}
                  />
                </SelectedRoomsContext.Provider>
              </div>
            )}
          </Modal.Body>
        ) : null}
      </>
    </Modal>
  );
}
