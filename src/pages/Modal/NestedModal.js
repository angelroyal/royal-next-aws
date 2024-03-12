import React, { useContext } from "react";

import LanguageContext from "../../language/LanguageContext";

import { ReactComponent as Close } from "../../assets/icons/hotel/modal/close.svg";

export const NestedModal = ({ show, onHide, setIsTrueRequest }) => {
  setIsTrueRequest(false);
  const { languageData } = useContext(LanguageContext);

  const SetRequest = () => {
    setIsTrueRequest(true);
    onHide();
  };
  return (
    <div>
      <div className="alert-update-room margin-top">
        <button className="close-button-amount">
          <Close width="20px" height="20px" />
        </button>

        <div className="alert-text-room">
          {languageData.nestedModal.alertTitle}
        </div>

        <div className="alert-subtext-declined">
          {languageData.nestedModal.alertText}
        </div>

        <button
          className="button-confirmation-alert"
          variant="primary"
          onClick={SetRequest}
        >
          {languageData.nestedModal.confirmButton}
        </button>

        <button
          className="button-cancellation-alert"
          variant="danger"
          onClick={onHide}
        >
          {languageData.nestedModal.cancelButton}
        </button>
      </div>
    </div>
  );
};
