
export default function FilterHomeBlog() {
  return (
    <>
      <div className="border border-[#ebebeb] rounded-lg p-6 flex flex-col gap-4">
        <h3 className="m-s-b text-fs-16">Categoría</h3>

        <div className="flex gap-4 flex-wrap">
          {[...Array(6)].map((_, index) => (
            <button className="rounded-full px-4 py-2 border border-[#ebebeb] text-fs-12 m-m text-gry-100 focus:bg-bl-100 focus:text-white">
              Cancún
            </button>
          ))}
        </div>

        <div className="flex gap-1">
          <button className="text-bl-100 m-b text-fs-12 underline">Ver más</button>
          <img src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-bl.svg`} alt="icon arrow bl" width={7} height={3.5} />
        </div>
      </div>
    </>
  );
}
