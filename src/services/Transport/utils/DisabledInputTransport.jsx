export function DisabledInputTransport({languageData, isSearch}) {
  return (
    <div className="relative">
      <img
        className="absolute left-4 bottom-0 top-0 my-auto W-[16px] h-[20px]"
        width="16px"
        height="20px"
        src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
        alt="transport-b"
      />

      <p className="m-0 top-2.5 left-[2.5rem] absolute text-gry-70 m-m text-fs-10">
        {languageData.SearchBox.tabHotel.autocomplete}
      </p>
      <input
        type="text"
        disabled
        className="placeholder:m-m placeholder:text-gry-70 m-b font-extrabold w-full lg:w-[290px] h-[56px] border-2 border-gray-200 rounded bg-white pb-2.5 pt-[22px] pr-4 pl-[32px] shadow-sm focus:outline-none text-fs-12 cursor-not-allowed	"
        placeholder={
          isSearch
            ? "Buscando rutas..."
            : languageData.SearchBox.tabHotel.textDestination
        }
      />
    </div>
  );
}