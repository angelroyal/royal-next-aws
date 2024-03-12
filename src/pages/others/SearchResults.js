import { isNumber } from "lodash";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState, useEffect, useContext } from "react";
import { FormControl, MenuItem, Pagination, Select } from "@mui/material";

import Filters from "../hooks/Filters";
import { images_es } from "../../language/images_es";
import { images_en } from "../../language/images_en";
import MetaResultH from "../components/Meta/MetaResultH";
import SkeletonChildren from "../utils/SkeletonChildren";
import HotelCard from "../components/HotelCard/HotelCard";
import LanguageContext from "../language/LanguageContext";
import axiosWithInterceptor from "../config/Others/axiosWithInterceptor";
import SearchBoxMobile from "../components/searchMobil/SearchBoxMobile";

import noAvailabilityImage from "../assets/images/others/no-availability-hotel.jpg";

const buildQueryParams = (filtersObject) => {
  const queryParams = {};

  Object.keys(filtersObject).forEach((filterGroup) => {
    queryParams[`${filterGroup}[]`] = filtersObject[filterGroup].items
      .filter((filterItem) => filterItem.checked && filterItem.value > 0)
      .map((item) => item.value);
  });

  return queryParams;
};

function Hotel() {
  const resultsPerPage = 10;
  const location = useLocation();
  const [newValSelectOrder, setnewValSelectOrder] = useState("");
  const [numNights, setNumNights] = useState(0);
  let { availableTotal, hotels } =
    location.state && location.state.data ? location.state.data : {};
  const [showCards, setShowCards] = useState(true);
  const numPages = Math.ceil(availableTotal / resultsPerPage);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const totalPeople = JSON.parse(localStorage.getItem("totalPeople"));
  const selectedDates = JSON.parse(localStorage.getItem("selectedDates"));
  const [keyIndexGroupHotels, setkeyIndexGroupHotels] = useState(0);

  const [dataReady, setDataReady] = useState(false);


  useEffect(() => {
    setDataReady(false);
  }, [hotels]);

  useEffect(() => {
    if (!dataReady) {
      setkeyIndexGroupHotels(0);
      setDataReady(true);
    }
  }, [dataReady]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (!location.state || Object.keys(location.state).length === 0) {
      // window.location.href = `${process.env.REACT_APP_BASE_URL}/home`;
    }
  }, []);

  const { filters, isReady, ordering, pagination, pricing } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    if (selectedDates && selectedDates.length >= 2) {
      const checkInDate = new Date(selectedDates[0]);
      const checkOutDate = new Date(selectedDates[1]);
      const oneDay = 24 * 60 * 60 * 1000;
      const diffDays = Math.round(
        Math.abs((checkInDate - checkOutDate) / oneDay)
      );
      setNumNights(diffDays);
    } else {
      setNumNights(2);
    }
  }, [selectedDates]);

  useEffect(() => {
    if (isReady) {
      requestAvailability();
    }
  }, [filters, isReady, ordering, pagination.current]);

  const filterGroupOrderHotels = (selectOrder) => {
    setnewValSelectOrder(selectOrder.toString());
    const arrayUnido = [].concat(...hotels);

    if (selectOrder === 1) {
      arrayUnido.sort((a, b) => a.exclusiveDeal - b.exclusiveDeal);
    }

    if (selectOrder === 2) {
      arrayUnido.sort((a, b) => {
        if (a.isTop && !b.isTop) {
          return -1;
        } else if (!a.isTop && b.isTop) {
          return 1;
        }
        return 0;
      });
    }

    if (selectOrder === 3) {
      arrayUnido.sort((a, b) => parseFloat(b.minRate) - parseFloat(a.minRate));
    }
    if (selectOrder === 4) {
      arrayUnido.sort((a, b) => parseFloat(a.minRate) - parseFloat(b.minRate));
    }

    const grupos = [];
    for (let i = 0; i < arrayUnido.length; i += 10) {
      grupos.push(arrayUnido.slice(i, i + 10));
    }

    location.state.data.hotels = grupos;
  };

  const handleOrderingFilters = (event) => {
    filterGroupOrderHotels(parseInt(event.target.value));
  };

  const handlePageChange = (event, page) => {
    setkeyIndexGroupHotels(page - 1);
  };

  const requestAvailability = async () => {
    // console.log("entro aqui");
    const requestBody = JSON.parse(localStorage.getItem("requestBody"));
    let startTime = new Date().getTime();

    setShowSkeleton(true);
    setShowCards(false);

    const params = buildQueryParams(filters);
    params.page = pagination.current;
    params.items = resultsPerPage;

    if (isNumber(ordering.selected)) {
      params["order-by"] = ordering.selected;
    }

    if (pricing.max !== "" && isNumber(pricing.max)) {
      params["max-price"] = pricing.max;
    }

    if (pricing.min !== "" && isNumber(pricing.min)) {
      params["min-price"] = pricing.min;
    }

    try {
      const response = await axiosWithInterceptor.post(
        `v1/hotels/availability`,
        requestBody,
        {
          params: params,
        }
      );

      const { data } = response;

      location.state.data.hotels = data.hotels;
      location.state.data.total = data.availableTotal;
    } catch (error) {
      console.error("Error paginacion");
    } finally {
      const endTime = new Date().getTime();
      const responseTime = endTime - startTime;
      const timeout = responseTime < 500 ? 500 - responseTime : 0;
      setTimeout(() => {
        setShowSkeleton(false);
        setShowCards(true);
      }, timeout);
    }
  };
  const { languageData } = useContext(LanguageContext);

  const language = localStorage.getItem('language') || 'es';
  const images = language === "es" ? images_es : images_en;

  return (
    <div className="container">
      <MetaResultH/>
      <Row className="display-flex-center">
        <Col sm={3} className="col-padding">
          <h1 className="hotel-title-filters">
            {languageData.filtersHotel.titleFilter}
          </h1>
          <SearchBoxMobile />
          <Filters sendWithPrice={requestAvailability} />
        </Col>

        <Col sm={8}>
          {location.state && hotels.length > 0 && (
            <>
              <h2 className="hotel-page-title">
                {languageData.filtersHotel.results} {availableTotal}{" "}
                {availableTotal > 1
                  ? languageData.filtersHotel.resultsHotelEn
                  : languageData.filtersHotel.resultsHotel}
              </h2>

              {/* FORM ORDERING FILTERS  */}
              <>
                {ordering.items.length > 0 && (
                  <div className="ordering-filter-box">
                    <div className="order-title">
                      {languageData.filtersHotel.order}
                    </div>
                    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                      <Select
                        labelId="ordering-filters"
                        id="ordering-filters-select"
                        value={newValSelectOrder}
                        onChange={handleOrderingFilters}
                        displayEmpty
                      >
                        <MenuItem value="" disabled>
                          {languageData.filtersHotel.selection}
                        </MenuItem>
                        {ordering.items.map((item, index) => (
                          <MenuItem
                            key={`selector_item_${index}`}
                            value={item.value}
                          >
                            {languageData.orderByHotel[item.label]}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                )}
              </>
            </>
          )}

          {location.state && hotels.length > 0 ? (
            <>
              {showSkeleton && <SkeletonChildren />}
              {showCards && hotels[keyIndexGroupHotels] ? (
                <Row xs={1} md={1} className="g-6 p-3">
                  {hotels[keyIndexGroupHotels].map((hotel, index) => (
                    <HotelCard
                      key={`card_hotel_${index}_${hotel.id}`}
                      hotel={hotel}
                      availableNights={numNights}
                      availablePeople={totalPeople}
                    />
                  ))}
                </Row>
              ) : (
                <SkeletonChildren />
              )}

              {/* Paginación */}
              <div className="pagination pagination-cards-hotel">
                <Pagination
                  defaultPage={1}
                  count={numPages}
                  // count={13}
                  // page={pagination.current}
                  // Pruebas de Adrian
                  page={keyIndexGroupHotels + 1}
                  //-----
                  onChange={handlePageChange}
                  color="primary"
                />
              </div>
            </>
          ) : (
            <>
              <div className="image-no-availability-h">
                {languageData.filtersTour.noAvailability}
              </div>
              <img src={noAvailabilityImage} alt="No Availability" />
            </>
          )}
        </Col>
      </Row>
      
      <div className="container content-image-comunication">
        <img
          src={images.others.faqs.bannerCallCenter.src}
          alt={images.others.faqs.bannerCallCenter.alt}
          width="100%"
        />
      </div>
    </div>
  );
}

export default Hotel;
