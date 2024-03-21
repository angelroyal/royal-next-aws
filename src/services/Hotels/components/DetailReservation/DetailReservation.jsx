"use client"
import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export default function DetailReservation(){
    const {languageData} = useContext(LanguageContext);
    return(
        <div className="sticky bottom-0 left-0 w-full bg-white py-6 z-[2] border-t border-gry-50">
            <Container>
                <div className="relative flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center">
                    <div className="flex flex-col gap-y-2">
                        <h4 className="m-b text-fs-16 text-black">{languageData.detailHotel.detail}</h4>
                        
                        <p className="m-0 m-s-b text-fs-8 text-gry-100">5 noches,  4 personas</p>

                        <h4 className="text-fs-20 text-black m-b "><span className="text-fs-12 text-black m-s-b">MXN</span>$00.<sup>00</sup></h4>

                        <span className="text-grn-100 text-fs-8 m-s-b rounded w-max bg-grn-50 py-1 px-2">Impuestos incluidos</span>
                    </div>

                    <h3 className="text-gry-70 text-fs-10 h-6 w-max m-s-b">Desliza para ver tus habitaciones seleccionadas</h3>

                    <button className="rounded-full py-3.5 px-[105px] bg-gry-70 text-gry-100 text-fs-12 m-s-b text-center md:py-3.5 md:px-4 h-max">Reservar ahora</button>

                    <button className="absolute left-0 right-0 mx-auto border-0 top-[-41px] w-[44px] h-[44px] flex justify-center items-center z-[1] border border-gry-100 ">
                            <img src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/up-100-cle.svg`} alt="arrows" />
                        {/* <div className="relative flex">
                        </div> */}
                    </button>
                </div>
            </Container>
        </div>
    );
}