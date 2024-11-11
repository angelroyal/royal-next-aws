export function TitleTour({ tourInfo }) {
  return (
    <h2 className="text-fs-16 m-b text-black pt-[13px] pb-[10px] truncate">
      {tourInfo.title}
    </h2>
  );
}
