"use client";

import { useRouter } from "next/navigation";

export default function ReturnButton() {
  const router = useRouter();

  return (
    <>
      <div className="w-20 h-5 mb-9 m-s-b my-9">
        <button
          className="flex items-center gap-3 w-5 h-5"
          type="button"
          onClick={() => router.back()}
        >
          <img
            src="https://sandboxmexico.com/assets/icons/arrows/left-70.svg"
            alt="ícono de retorno"
            className="w-[9.4px] h-5"
          />
          <span className="text-fs-12 text-gry-100 m-s-b">Regresar</span>
        </button>
      </div>
    </>
  );
}
