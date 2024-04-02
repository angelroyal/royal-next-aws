import React, { useState, useContext } from "react";
import { useModalTourContext } from "../../Context/ModalTourContext";

import { OccupancyTour } from "./OccupancyTours";
import "../../../assets/styles/web/GalleryTour.css";
import LanguageContext from "../../../language/LanguageContext";
import { PriceModalTour } from "../../../config/Tour/PriceModalTour";

export default function SelectOptionModalTour(props) {
  const { combinedRates } = props;
  const { active } = useModalTourContext();
  const { languageData } = useContext(LanguageContext);
  const [saveValueTour, setSaveValueTour] = useState(null);
  const [changeSelectionTour, setChangeSelectionTour] = useState(false);

  const clickSelection = (value) => {
    setChangeSelectionTour(true);
    setSaveValueTour(value);
  };

  // console.log(combinedRates[active].rates);

  return (
    <div>
      {changeSelectionTour === false ? (
        <div>
          <div>
            <b className="b-time">
              {/* TEXT MODALITY /LP 15-02-24*/}
              {languageData.containerModalTour.topModality}
            </b>
          </div>

          {combinedRates.length > 0 &&
            [...Array(Math.ceil(combinedRates[active].rates.length / 3))].map(
              (value, key) => (
                <div className="d-flex container-modality-tour" key={key}>
                  {combinedRates[active].rates.slice(key * 3 , (key +1) * 3 ).map((rate, keyRate) => (
                    <div className="modality-tour" key={keyRate}>
                      <div className="contend-tour-title-price">
                        <div className="title-modality-tour">
                          {rate.nameTour}
                        </div>

                        <div className="cont-price-modality-card">
                          <div className="BodyModalityTour">
                            {/* TEXT PRICES /LP 15-02-24 */}
                            <b className="black-price">
                              {languageData.modalTour.prices}
                            </b>
                            <div className="d-flex flex-column gap-2 mt-2">
                              {rate.categories.map(
                                (category, keyCategory) =>
                                  category.text && (
                                    <div
                                      className="row align-items-center"
                                      key={keyCategory}
                                    >
                                      <div className="col-5 grey-price-s">
                                        {category.text}
                                      </div>
                                      <div className="col-7 d-flex justify-content-end grey-price">
                                        <PriceModalTour
                                          price={category.price}
                                        />
                                      </div>
                                    </div>
                                  )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="btn-selected-modality">
                        <button
                          className="btn-modality-tour"
                          onClick={() => clickSelection(rate)}
                        >
                          <b>{languageData.containerModalTour.topSelection}</b>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
        </div>
      ) : (
        <OccupancyTour
          setChangeSelectionTour={() => setChangeSelectionTour(false)}
          saveValueTour={saveValueTour}
        />
      )}
    </div>
  );
}
