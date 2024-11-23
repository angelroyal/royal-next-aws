export function TourImages({ tourInfo }) {
  return (
    <div className={` rounded-[8px] w-[133px] h-[117.7px] max-sm:h-[80px] max-sm:w-[90px]`}>
      <img
        className="w-full h-full rounded-[8px] object-cover select-none"
        src={tourInfo.image ? tourInfo.image : ""}
        alt="tour gallery"
      />
    </div>
  );
}
