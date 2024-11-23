export function TitleTransport({ transportInfo }) {
  return (
    <h2 className="text-fs-16 m-b text-black pt-[13px] pb-[10px] truncate">
      {transportInfo.title}
    </h2>
  );
}
