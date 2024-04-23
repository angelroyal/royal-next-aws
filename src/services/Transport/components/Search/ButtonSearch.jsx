import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";
import { getListingTransports } from "../../Api/requestTransport";

export function ButtonSearch(props) {
  const { selectedAutoComplete, selectDestinationA, selectDestinationB } = props;
  const { languageData, language } = useContext(LanguageContext);

  const getTransportsLists = async () => {
    const ids = {
      destinationId: selectedAutoComplete.id,
      zoneFromId: selectDestinationA.id,
      zoneToId: selectDestinationB.id,
    };
    // const response = await getListingTransports(language, ids);
    // console.log(response);
  };

  return (
    <button
      className={`w-full lg:w-auto rounded-[50px] flex gap-2 items-center justify-center m-b text-fs-12 text-white py-[20px] px-4 ${
        !selectedAutoComplete || !selectDestinationA || !selectDestinationB
          ? "bg-or-50 cursor-not-allowed"
          : "bg-or-100 hover:!bg-or-110"
      }`}
      variant="contained"
      color="primary"
      size="large"
      disabled={!selectedAutoComplete || !selectDestinationA || !selectDestinationB}
      sx={{ mt: 2 }}
      onClick={getTransportsLists}
    >
      {languageData.SearchBox.tabTour.button}
      <img
        className="h-4 w-4"
        src={`${process.env.NEXT_PUBLIC_URL}icons/search/search-w.svg`}
        alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon search`}
      />
    </button>
  );
}