import React, { useContext } from "react";
import { Accordion, Col, Row } from "react-bootstrap";

import LanguageContext from "../../language/LanguageContext";

import { faqsConfig } from "../../config/Others/faqsConfig";
import { ReactComponent as IconAdd } from "../../assets/icons/utils/others/add.svg";
import { ReactComponent as IconRemove } from "../../assets/icons/utils/others/remove.svg";

export function FaqsWeb(props) {
  const { setOpenSection, openSection, activeKey, handleAccordionClick } =
    props;
  const { languageData } = useContext(LanguageContext);
  return (
    <Row>
      <Col xs={4} className="text-info-faqs">
        <h2 className="title-popular padding-bottom">
          {languageData.faqs.subtitleFaqs}
        </h2>
        {Object.keys(faqsConfig).map((sectionKey, index) => (
          <div
            key={index}
            className={`faqs-subtext padding-bottom ${
              openSection === sectionKey ? "active-section" : "inactive-section"
            }`}
            // onClick={setOpenSection(sectionKey)}
            onClick={() => setOpenSection(sectionKey)}
          >
            {languageData.faqs[sectionKey]}
          </div>
        ))}
      </Col>

      <Col xs={8}>
        <Accordion activeKey={activeKey}>
          {faqsConfig[openSection].map((item, index) => (
            <Accordion.Item key={item.id} eventKey={index.toString()}>
              <Accordion.Header
                className="title-question"
                // onClick={handleAccordionClick(openSection, index.toString())}
                onClick={() =>
                  handleAccordionClick(openSection, index.toString())
                }
              >
                <div className="item-header-accordion">
                  {languageData.faqs.questions[item.question]}
                </div>
                <div style={{ width: "0" }}>
                  {activeKey === index.toString() ? (
                    <IconRemove className="icon-inactive-add" />
                  ) : (
                    <IconAdd className="icon-inactive-add" />
                  )}
                </div>
              </Accordion.Header>

              <Accordion.Body className="text-question">
                {languageData.faqs.questions[item.answer]}
                {item.listItem && (
                  <ul>
                    {item.listItem.map((listItemKey, listItemIndex) => (
                      <li key={listItemIndex}>
                        {languageData.faqs.questions[listItemKey]}
                      </li>
                    ))}
                  </ul>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Col>
    </Row>
  );
}

export function FaqsMobile(props) {
  const { setOpenSection, openSection, activeKey, handleAccordionClick } =
    props;
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="d-flex flex-column">
      <div className="text-info-faqs">
        <h2 className="title-popular padding-bottom">
          {languageData.faqs.subtitleFaqs}
        </h2>
        <div className="titles-faqs-m">
          {Object.keys(faqsConfig).map((sectionKey, index) => (
            <div
              key={index}
              className={`faqs-subtext padding-bottom ${
                openSection === sectionKey
                  ? "active-section"
                  : "inactive-section"
              }`}
              onClick={() => setOpenSection(sectionKey)}
            >
              {languageData.faqs[sectionKey]}
            </div>
          ))}
        </div>
      </div>
      <Accordion activeKey={activeKey}>
        {faqsConfig[openSection].map((item, index) => (
          <Accordion.Item key={item.id} eventKey={index.toString()}>
            <Accordion.Header
              className="title-question"
              // onClick={handleAccordionClick(openSection, index.toString())}
              onClick={() =>
                handleAccordionClick(openSection, index.toString())
              }
            >
              <div className="item-header-accordion">
                {languageData.faqs.questions[item.question]}
              </div>
              <div style={{ width: "0" }}>
                {activeKey === index.toString() ? (
                  <IconRemove className="icon-inactive-add" />
                ) : (
                  <IconAdd className="icon-inactive-add" />
                )}
              </div>
            </Accordion.Header>

            <Accordion.Body className="text-question">
              {languageData.faqs.questions[item.answer]}
              {item.listItem && (
                <ul>
                  {item.listItem.map((listItemKey, listItemIndex) => (
                    <li key={listItemIndex}>
                      {languageData.faqs.questions[listItemKey]}
                    </li>
                  ))}
                </ul>
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
