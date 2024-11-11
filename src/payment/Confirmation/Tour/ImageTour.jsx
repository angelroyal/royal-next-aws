export function ImageTour({ tourInfo }) {
  return (
    <img
      className="w-[133px] h-[117.7px] max-sm:h-[80px] max-sm:w-[90px] object-cover rounded-lg"
      src={tourInfo.image ? tourInfo.image : ""}
      alt="gallery tour"
      width={133}
      height={117}
    />
  );
}
