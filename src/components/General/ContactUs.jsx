"use client";
import Image from 'next/image'
import React, { useContext } from 'react'
import LanguageContext from '@/language/LanguageContext'

export default function ContactUs() {
    const { languageData } = useContext(LanguageContext);
    return (

        <a
            className='fixed bottom-[2rem] right-[2rem] flex items-center gap-2 bg-white h-[50px] mb-[10px] w-fit rounded-tr-2xl rounded-l-3xl shadow-3xl cursor-pointer no-underline z-10 max-md:rounded-full hover:transform hover:scale-105 transition-transform duration-300 '
            href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className='left-0 bg-bl-100 w-[60px] h-[60px] rounded-full flex justify-center items-center '>
                <div className='bg-bl-100 p-3 rounded-full border border-white'>
                    <Image
                        src="https://sandboxmexico.com/assets/icons/call/call-w.svg"
                        alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} call icon`}
                        width={18}
                        height={18}
                    />
                </div>
            </div>

            <span className='m-b text-gry-100 pl-2 pr-6 text-fs-12 max-md:hidden'>{languageData.navBar.contact}</span>


        </a>
    )
}
