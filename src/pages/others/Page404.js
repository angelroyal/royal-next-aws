import React, { useContext } from "react";
import Lottie from "lottie-react";

import { Container, Row, Col,  } from "react-bootstrap";
import LanguageContext from "../../language/LanguageContext";
import animationData from "../../assets/animations/error-404.json";


export default function Page404() {
  const {languageData} = useContext(LanguageContext)
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" sm={6}>
          <Lottie className="animation-404" animationData={animationData} />
        </Col>

        <Col sm={6} className="container-text-404">
          <div className="title-404-page">{languageData.pageError.titleAlert}</div>
          <div className="subtitle-404-page">{languageData.pageError.textAlert}</div>
          <button className="button-404-home">{languageData.pageError.confirmButton}</button>
        </Col>
      </Row>
    </Container>
  );
}
