"use client";

export default function PolicyCardTransportWhite({ dataDialogWhite }) {
  return (
    <div className="absolute bottom-[1.7rem] md:right-[-38px]">
      <div
        className={`relative bg-white rounded-md p-4 shadow-3xl ${
          dataDialogWhite?.width ? dataDialogWhite?.width : w - max
        }`}
      >
        <img
          className="absolute bottom-[-9px] max-md:left-0 max-md:right-0 md:right-[90px] max-md:mx-auto rotate-180"
          src={`${process.env.NEXT_PUBLIC_URL}icons/general/ellipse.svg`}
          alt="ellipse white"
          width={22}
          height={22}
        />
        <h1 className="text-fs-14 m-b text-black">{dataDialogWhite.text}</h1>
      </div>
    </div>
  );
}
