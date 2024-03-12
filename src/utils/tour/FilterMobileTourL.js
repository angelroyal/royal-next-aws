import React, { useContext } from "react";

import LanguageContext from "../../language/LanguageContext";

export function FilterTourML() {
  const { languageData } = useContext(LanguageContext);
  
  return (
    <div className="m-flex-btn">
      <button
        className="m-btn-dev"
        //   onClick={() => setDialogSearch(true)}
      >
        {languageData.ListingPhrases.find}
      </button>

      <button
        className="m-btn-dev"
        //   onClick={handleShowDialogF}
      >
        {languageData.ListingPhrases.filter}
      </button>

      <button
        className="m-btn-dev"
        //   onClick={handleShowDialog}
      >
        {languageData.ListingPhrases.order}
      </button>
    </div>
  );
}
