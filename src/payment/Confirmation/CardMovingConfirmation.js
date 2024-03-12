import moment from "moment";
import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import LanguageContext from "../../language/LanguageContext";
import { ReactComponent as IconMoving } from "../../assets/icons/utils/payment/transportation-orange.svg";

export default function CardMovingConfirmation(props) {
  const { itemMoving } = props;

  const { languageData } = useContext(LanguageContext);

  const dateDepartureDate = moment(itemMoving.departureDate).format("DD/MM/YY");
  const dateComebackDate = moment(itemMoving.comebackDate).format("DD/MM/YY");

  return (
    <Container className="card-confirmation-moving margin-bottom">
      <Row>
        {/* COL ICON */}
        <Col sm={1} className="text-center">
          <IconMoving />
        </Col>

        {/* COL DESCRIPTION MOVING */}
        <Col sm={4}>
          <div className="ch-confirmation">
            {languageData.confirmation.cardMoving.titleMoving}
          </div>
          <div className="cht-confirmation">{itemMoving.vehicleType}</div>

          <div className="th-confirmation padding-bottom">
            {languageData.confirmation.cardMoving.model}{" "}
            {itemMoving.vehicleModel}
          </div>

          <div className="thl-confirmation">
            {languageData.confirmation.cardMoving.typeTravel}
          </div>

          {itemMoving.round === "10" ? (
            <div className="rh-confirmation padding-bottom">
              {languageData.confirmation.cardMoving.airportHotel}
            </div>
          ) : itemMoving.round === "01" ? (
            <div className="rh-confirmation padding-bottom">
              {languageData.confirmation.cardMoving.hotelAirport}
            </div>
          ) : itemMoving.round === "11" ? (
            <div className="rh-confirmation padding-bottom">
              {languageData.confirmation.cardMoving.round}
            </div>
          ) : (
            <div className="rh-confirmation padding-bottom">
              {languageData.confirmation.cardMoving.notInf}
            </div>
          )}
        </Col>

        {/* COL INFO MOVING */}
        <Col sm={4}>
          <Container>
            <Row>
              <Col>
                <div className="thl-confirmation">
                  {languageData.confirmation.cardMoving.from}
                </div>
                <div className="rh-confirmation padding-bottom line-he">
                  {languageData.confirmation.cardMoving.airport}
                </div>
              </Col>
          
              <Col>
                <div className="thl-confirmation">
                  {languageData.confirmation.cardMoving.to}
                </div>
                <div className="rh-confirmation padding-bottom">
                  {itemMoving.hotel}
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="thl-confirmation">
                  {languageData.confirmation.cardMoving.arrive}
                </div>
                <div className="rh-confirmation padding-bottom">
                  {dateDepartureDate} | {itemMoving.departureTime}
                </div>

                <div className="thl-confirmation">
                  {languageData.confirmation.cardMoving.peopleNumber}
                </div>
                <div className="rh-confirmation padding-bottom">
                  {itemMoving.passengers}{" "}
                  {languageData.confirmation.cardMoving.people}
                </div>
              </Col>
          
              <Col>
                <div className="thl-confirmation">
                  {languageData.confirmation.cardMoving.comeBack}
                </div>
                <div className="rh-confirmation">
                  {dateComebackDate} | {itemMoving.comebackTime}
                </div>
              </Col>
            </Row>
          </Container>
        </Col>

        {/* PRICE CARD */}
        <Col sm={3} className="p-relative">
          <div className="price-container">
            <span className="price-confirmation">
              {languageData.confirmation.cardMoving.priceTotal}{" "}
            </span>
            <span className="price-num-confirmation">
              {languageData.confirmation.cardMoving.letter}
              {Math.floor(itemMoving.price)
                .toLocaleString("es-MX", { currency: "MXN" })
                .replace(".00", "")}
              .{(itemMoving.price % 1).toFixed(2).slice(2)}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
