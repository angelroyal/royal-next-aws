"use client";

import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LanguageContext from "@/language/LanguageContext";
import { SocialNetworks, creditsCard } from "./Config";
import Link from "next/link";

export default function Footer() {
  const { languageData } = useContext(LanguageContext);
  const year = new Date().getFullYear();
  const router = useRouter();

  //   const aboutRout = (routerNavigation)=>{
  //    router.push(routerNavigation) 
  //   }

  return (
    <>

      <Image
        src={`${process.env.NEXT_PUBLIC_URL}general/line-footer-or.svg`}
        alt="line-footer-or"
        className="w-full"
        width={1136}
        height={32}
      />


      <footer className="bg-bl-100 flex flex-col text-white max-w-full pt-[21px] pb-[1rem]">
        {/* LOGO AND SOCIAL ICONS */}
        <div className="flex justify-center justify-items-center max-md:grid grid-cols-1 max-md:text-center ">
          <div className="basis-1/2 justify-center">
            <ul>
              <li className=" grid place-items-center">
                {/* LOGO-W */}
                <img
                  className="mb-[1rem]"
                  src={`${process.env.NEXT_PUBLIC_URL}royal/logo-w.svg`}
                  alt="logo-w"
                  width="239px"
                  height="51px"
                />

                {/*SOCIAL ICONS*/}
                <div className="flex gap-x-[17px] justify-center ">
                  {SocialNetworks.map((network, index) => (
                    <a key={index}
                      target="_blank"
                      href={network.href}
                    >
                      <img
                        className="cursor-pointer"
                        src={`${process.env.NEXT_PUBLIC_URL}${network.url}`}
                        alt={network.alt}
                        width="25px"
                        height="25px"
                      />
                    </a>
                  ))}
                </div>

                {/* PAYMENTS ICONS */}
                <div className=" mt-[31px] mb-4 mx-1 flex justify-center ">
                  {creditsCard.map((card, index) => (
                    <img
                      key={index}
                      className="mx-1"
                      src={`${process.env.NEXT_PUBLIC_URL}${card.image}`}
                      alt={card.alt}
                      width="50px"
                      height="100%"
                    />
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="basis-1/2 leading-10 ">
            <div className="m-b text-fs-16 mb-[1rem]">
              {languageData.footer.contact.titleContact}
            </div>
            <div className="max-md:grid place-items-center lg:pr-16">
              <div className="flex gap-x-6">
                <a
                  className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5"
                  href="tel:8009530342"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/tel/tel-w.svg`}
                    alt="icon-telephone"
                    width="14px"
                    height="14px"
                  />
                  <span className="hover:!text-or-100 no-underline text-white">
                    {languageData.footer.contact.phone}
                  </span>
                </a>
                <a
                  className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5"
                  href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/whats/whats-w.svg`}
                    alt="icon-whatsapp"
                    width="14px"
                    height="14px"
                  />
                  <span className="hover:!text-or-100 no-underline text-white">
                    {languageData.footer.contact.whatsApp}
                  </span>
                </a>
              </div>
              <a
                className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5"
                target="_blank"
                href="mailto:info@royalvacationsmexico.com"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/mail/mail-w.svg`}
                  alt="icon-whatsapp"
                  width="15px"
                  height="11px"
                />
                <span className="hover:!text-or-100 no-underline text-white">
                  {languageData.footer.contact.email}
                </span>
              </a>
              <a
                className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5 items-start"
                href="https://www.google.com/maps/place/Royal+Vacations+M%C3%A9xico/@21.1627042,-86.8270667,17z/data=!4m10!1m2!2m1!1sRoyal+Vacations+M%C3%A9xico!3m6!1s0x8f4c2df6381c1c45:0x2a631cb9dd8567ff!8m2!3d21.1652997!4d-86.8250255!15sChdSb3lhbCBWYWNhdGlvbnMgTcOpeGljb5IBDXRyYXZlbF9hZ2VuY3ngAQA!16s%2Fg%2F11rv1nkff4?entry=ttu"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-w.svg`}
                  alt="icon-location"
                  width="11px"
                  height="14px"
                />
                <span className="hover:!text-or-100 no-underline text-white leading-5">
                  {languageData.footer.contact.location}
                </span>
              </a>
            </div>
          </div>

          {/* ABOUT */}
          <div className="basis-1/4 leading-8">
            <div className="m-b text-fs-16 mb-[1rem]">
              {languageData.footer.about.titleAbout}
            </div>
            <div className="flex flex-col m-m text-fs-12 cursor-pointer">

              <Link href="/ourHistory" className="hover:!text-or-100 no-underline text-white">
                {languageData.footer.about.titleHistory}
              </Link>

              <Link href="/tyc" className="hover:!text-or-100 no-underline text-white">
                {languageData.footer.about.titleConditions}
              </Link>

              <Link href="/privacy" className="hover:!text-or-100 no-underline text-white">
                {languageData.footer.about.titlePrivacy}
              </Link>

              <Link href="/faqs" className="hover:!text-or-100 no-underline text-white">
                {languageData.footer.about.titleQuestions}
              </Link>
            </div>
          </div>

          {/* HOTELS-IN-MEXICO */}
          <div className="basis-1/4 leading-8 cursor-pointer ">
            <div className="m-b text-fs-16 mb-[1rem]">
              {languageData.footer.hotelsMexico.titleHotel}
            </div>
            <div className="m-m text-fs-12 flex flex-col">
              <a className="hover:!text-or-100 no-underline text-white">
                {languageData.footer.hotelsMexico.hotelAcapulco}
              </a>
              <a className="hover:!text-or-100 no-underline text-white">
                {languageData.footer.hotelsMexico.hotelCancun}
              </a>
              <a className="hover:!text-or-100 no-underline text-white">
                {languageData.footer.hotelsMexico.hotelMazatlan}
              </a>
              <a className="hover:!text-or-100 no-underline text-white">
                {languageData.footer.hotelsMexico.hotelPuertoVallarta}
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="w-full pt-[121px] text-center text-white m-m text-fsw-12 max-lg:text-fs-14 max-sm:text-fs-10">
          {languageData.footer.contact.copyright} {year}{" "}
          {languageData.footer.contact.royalVacations}{" "}
          {languageData.footer.contact.rightsReserved}
        </div>
      </footer>
    </>
  );
}
