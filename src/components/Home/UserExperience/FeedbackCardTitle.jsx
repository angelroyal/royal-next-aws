export function FeedbackCardTitle() {
  return (
    <div className="mb-9 flex  max-lg:gap-y-2 max-lg:items-start max-lg:flex-col justify-between items-end">
      <div className="flex flex-col gap-y-2">
        {/* MAIN TITLE */}
        <div className=" flex flex-row top-reviews__title">
          <p className="text-or-100 text-fs-28 m-b ">Experencias</p>
          <p className="ml-2 text-white text-fs-28 m-b ">de los usuarios</p>
        </div>

        <div className="text-fs-16 text-white m-m text-clip">
          Estamos muy contentos porque tenemos clientes satisfechos
        </div>
      </div>

      {/* LEGEND AND TRIPADVISOR BUTTON */}
      <button className="p-2 rounded-xl border border-gry-70 flex items-center gap-x-2">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}img/general/tripadvisor-logo-circle-green.png`}
          alt="logo-Tripadvisor"
          className="relative"
          loading="lazy"
          width={30}
          height={30}
        />

        <p className="text-fs-12 text-white m-m">
          Valoración general en Tripadvisor
        </p>

        <img
          className="w-[17px] h-[18px]"
          src={`${process.env.NEXT_PUBLIC_URL}icons/general/help-grn.svg`}
          alt="question icon"
          width={17}
          height={17}
        />
      </button>
    </div>
  );
}
