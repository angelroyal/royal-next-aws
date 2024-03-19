"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { Accordion } from "react-bootstrap";

import { faqsConfig } from "@/config/Others/faqsConfig";
import LanguageContext from "@/language/LanguageContext";

import IconAdd from "../../assets/icons/utils/others/add.svg";
import IconRemove from "../../assets/icons/utils/others/remove.svg";
import "../../assets/styles/web/About.css";

export function FaqsWeb(props) {
  const { setOpenSection, openSection, activeKey, handleAccordionClick } =
    props;
  // console.log(openSection);
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col lg:w-3/5 max-lg:pb-6">
        <h2 className="text-[1.25rem] m-b mb-[0.9rem]">
          {languageData.faqs.subtitleFaqs}
        </h2>

        <div className="flex flex-wrap">
          {Object.keys(faqsConfig).map((sectionKey, index) => (
            <div
              key={index}
              className={`text-[0.875rem] m-b lg:mb-[1rem] max-lg:border-r max-lg:border-gry-100  max-lg:pr-[17px] ${
                openSection === sectionKey && "text-or-100"
              }`}
              onClick={() => setOpenSection(sectionKey)}
            >
              {languageData.faqs[sectionKey]}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <Accordion activeKey={activeKey}>
          {faqsConfig[openSection].map((item, index) => (
            <Accordion.Item
              key={item.id}
              eventKey={index.toString()}
              className="!border-b !border-r-0 !border-l-0 !border-gyr-100"
            >
              <Accordion.Header
                onClick={() =>
                  handleAccordionClick(openSection, index.toString())
                }
              >
                <div
                  className={`${
                    activeKey === index.toString() && "text-or-100"
                  } m-b`}
                >
                  {languageData.faqs.questions[item.question]}
                </div>
                <div className="w-max">
                  {activeKey === index.toString() ? (
                    <Image src={IconRemove} />
                  ) : (
                    <Image src={IconAdd} />
                  )}
                </div>
              </Accordion.Header>

              <Accordion.Body className="m-m text-fs-14">
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
    </div>
  );
}

