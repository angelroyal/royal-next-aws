
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
} from "react";

// import MetaModalH from "../../components/Meta/MetaModalH";
import { useIsMobile } from "../../config/Mobile/isMobile";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import { ModalHotelDetails } from "../../components/ModalHotel/ModalHotelDetails";
import { DialogModalHotel } from "../../components/Mobile/Hotel/General/DialogModalHotel";


const API_ENDPOINT = `v1/rooms/availability`;

// CONTEXT MODAL SECOND
const ShowContentContext = createContext();
export const useShowContentHotel = () => useContext(ShowContentContext);

export const SelectedRoomsContext = createContext([]);

export default function ModalHotel(props) {
  const isMobile = useIsMobile();

  const [showNestedModal, setShowNestedModal] = useState(false);
  const [isTrueChangeDate, setIsTrueChangeRequest] = useState(false);

  const { show, onHide, hotelKey, showTooltip, requestBodyHome, nameHotel } = props;

  // SAVE REQUEST BODY STATE
  const [newRequestBody, setNewRequestBody] = useState(null);
  const [changeDate, setChangeDate] = useState(0);
  const [loading, setLoading] = useState(false);

  // LOGIC SEND DATA MODAL
  const [hotelModal, setHotelModal] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);

  // MODAL SECOND
  const [showContent, setShowContent] = useState(1);

  // SCROLL UP
  const modalBodyRef = useRef(null);
  const handleShowContentChange = () => {
    // Move the modal body upward when showContent changes
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
  };

  const handleAddDetail = ({ selectedRooms: updatedSelectedRooms }) => {
    setSelectedRooms(updatedSelectedRooms);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (
      searchParams.has("check-in") &&
      searchParams.has("check-out") &&
      searchParams.has("occupancies")
    ) {
      const searchParams = new URLSearchParams(window.location.search);
      const checkInUrl = searchParams.get("check-in");
      const checkOutUrl = searchParams.get("check-out");
      const occupanciesUrl = searchParams.get("occupancies");

      // DECODE OCCUPANCIES
      const decodedOccupancies = JSON.parse(decodeURIComponent(occupanciesUrl));

      const newRequestData = {
        code: hotelKey,
        type: "hotel",
        "check-in": checkInUrl,
        "check-out": checkOutUrl,
        occupancies: decodedOccupancies,
      };
      setNewRequestBody(newRequestData);
    } else {
      const newRequestData = {
        code: requestBodyHome.code,
        type: "hotel",
        "check-in": requestBodyHome.checkIn,
        "check-out": requestBodyHome.checkOut,
        occupancies: requestBodyHome.occupancies,
      };
      setNewRequestBody(newRequestData);
    }
  }, []);

  useEffect(() => {
    if (newRequestBody) {
      handleAxiosPost();
    }
  }, [newRequestBody]);

  const newFunctionTest = (updatedData) => {
    const newRequestData = {
      code: newRequestBody.code,
      type: "hotel",
      "check-in": updatedData.checkIn,
      "check-out": updatedData.checkOut,
      occupancies: updatedData.occupancies,
    };
    setNewRequestBody(newRequestData);
    setSelectedRooms([]);
  };

  // FUNCTION SET SEARCH ROOM
  const handleDataUpdate = (updatedData) => {
    if (selectedRooms.length === 0) {
      setLoading(true);
      newFunctionTest(updatedData);
      setIsTrueChangeRequest(false);
    }
    if (selectedRooms.length > 0) {
      setLoading(true);
      setShowNestedModal(true);
      setTimeout(() => {
        newFunctionTest(updatedData);
      }, 1000);
      setIsTrueChangeRequest(true);
    }
  };

  // FUNCTION AXIOS POST
  const handleAxiosPost = () => {
    axiosWithInterceptor
      .post(API_ENDPOINT, newRequestBody)
      .then((response) => {
        setLoading(false);
        setHotelModal(response.data);
        setTimeout(() => {
          setShowNestedModal(false);
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {/* <MetaModalH nameHotel={nameHotel} /> */}
      <ShowContentContext.Provider value={{ showContent, setShowContent }}>

        {isMobile ? (
          <DialogModalHotel
            show={show}
            onHide={onHide}
            showContent={showContent}
            hotelModal={hotelModal}
            handleDataUpdate={handleDataUpdate}
            setChangeDate={setChangeDate}
            changeDate={changeDate}
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
            handleAddDetail={handleAddDetail}
            newRequestBody={newRequestBody}
            handleShowContentChange={handleShowContentChange}
            showTooltip={showTooltip}
            loading={loading}
          />
        ) : (
          <ModalHotelDetails
            show={show}
            onHide={onHide}
            showContent={showContent}
            modalBodyRef={modalBodyRef}
            hotelModal={hotelModal}
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
            showTooltip={showTooltip}
            handleDataUpdate={handleDataUpdate}
            setChangeDate={setChangeDate}
            changeDate={changeDate}
            handleAddDetail={handleAddDetail}
            isTrueChangeDate={isTrueChangeDate}
            newRequestBody={newRequestBody}
            handleShowContentChange={handleShowContentChange}
            showNestedModal={showNestedModal}
            setShowNestedModal={setShowNestedModal}
            loading={loading}
          />
        )}
      </ShowContentContext.Provider>
    </>
  );
}
