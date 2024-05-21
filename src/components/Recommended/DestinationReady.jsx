import Image from "next/image"

export default function DestinationReady() {
    return (
        <div className='h-[180px] rounded-lg p-[36px] bg-white mb-[28px] flex justify-between items-center'>
            <div className="flex flex-col gap-[8px]">
                <span className="m-b text-fs-24">!Tu próximo destino está listo!</span>

                <span className="text-fs-14 text-gry-100 m-m">Revisa los detalles completos en tu carrito.</span>

                <button className="m-b text-fs-12 flex items-center w-fit px-[24px] py-[10px] bg-bl-100 rounded-full gap-[8px] text-white hover:!bg-bl-110">
                    Ver detalles
                    <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/arrow-right-w.svg`}
                        width={16}
                        height={12}
                        alt="icon-arrow"
                    />
                </button>
            </div>

            <div className="h-[88px] w-[277] bg-gry-50 flex flex-col p-[16px] gap-[8px] rounded-lg">
                <span className="m-b text-fs-16">Gran Hotel Ciudad De Mexico</span>
                <span className="m-m text-gry-100 text-fs-14">Fecha reserva: 12/03/2024</span>
            </div>

        </div>
    )
}
