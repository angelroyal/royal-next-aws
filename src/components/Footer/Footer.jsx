"use client";

import { useContext } from "react";
import Image from "next/image";
import LanguageContext from "@/language/LanguageContext";

export default function Footer() {

    const { languageData } = useContext(LanguageContext);
    const year = new Date().getFullYear();
    return (
        <>
            <div>
                <Image src={`${process.env.NEXT_PUBLIC_URL}general/line-footer-or.svg`} alt="line-footer-or" width={1136} height={32}/>
            </div>

            <footer className="bg-bl-100 flex flex-col text-white max-w-full pt-[21px] pb-[1rem]">
                {/* LOGO AND SOCIAL ICONS */}
                <div className="flex justify-center justify-items-center max-md:grid grid-cols-1 max-md:text-center ">
                    <div className="basis-1/2 justify-center">
                        <ul>
                            <li className=" grid place-items-center">
                                {/* LOGO-W */}
                                <img className="mb-[1rem]" src={`${process.env.NEXT_PUBLIC_URL}royal/logo-w.svg`} alt="logo-w" width='239px' height='51px' />

                                {/*SOCIAL ICONS*/}
                                <div className="flex gap-x-[17px] justify-center ">
                                    <a>
                                        <img className="cursor-pointer" src={`${process.env.NEXT_PUBLIC_URL}icons/face/face-w.svg`} alt="icon-facebook" width='25px' height='25px' />
                                    </a>
                                    <a>
                                        <img className="cursor-pointer" src={`${process.env.NEXT_PUBLIC_URL}icons/insta/insta-w.svg`} alt="icon-instagram" width='25px' height='25px' />
                                    </a>
                                    <a>
                                        <img className="cursor-pointer" src={`${process.env.NEXT_PUBLIC_URL}icons/in/in-w.svg`} alt="icon-linkedin" width='25px' height='25px' />
                                    </a>
                                    <a>
                                        <img className="cursor-pointer" src={`${process.env.NEXT_PUBLIC_URL}icons/tiktok/tiktok-w.svg`} alt="icon-tiktok" width='25px' height='25px' />
                                    </a>
                                </div>

                                {/* PAYMENTS ICONS */}
                                <div className=" mt-[31px] mb-4 mx-1 flex justify-center ">
                                    <img className="mx-1" src={`${process.env.NEXT_PUBLIC_URL}icons/payment/visa.svg`} alt="payment-visa" width='50px' height='100%' />
                                    <img className="mx-1" src={`${process.env.NEXT_PUBLIC_URL}icons/payment/master.svg`} alt="payment-master-card" width='50px' height='100%' />
                                    <img className="mx-1" src={`${process.env.NEXT_PUBLIC_URL}icons/payment/amex.svg`} alt="payment-amex" width='50px' height='100%' />
                                    <img className="mx-1" src={`${process.env.NEXT_PUBLIC_URL}icons/payment/spei.svg`} alt="payment-spei" width='60px' height='100%' />
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="basis-1/2 leading-10 ">
                        <div className="m-b text-fs-16 mb-[1rem]">{languageData.footer.contact.titleContact}</div>
                        <div className="max-md:grid place-items-center pr-16">
                            <div className="flex gap-x-6">
                                <a className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5">
                                    <img src={`${process.env.NEXT_PUBLIC_URL}icons/tel/tel-w.svg`} alt="icon-telephone" width="14px" height="14px" />
                                    <span className="hover:text-or-100 no-underline text-white">{languageData.footer.contact.phone}</span>
                                </a>
                                <a className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5">
                                    <img src={`${process.env.NEXT_PUBLIC_URL}icons/whats/whats-w.svg`} alt="icon-whatsapp" width="14px" height="14px" />
                                    <span className="hover:text-or-100 no-underline text-white">{languageData.footer.contact.whatsApp}</span>
                                </a>
                            </div>
                            <a className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5">
                                <img src={`${process.env.NEXT_PUBLIC_URL}icons/mail/mail-w.svg`} alt="icon-whatsapp" width="15px" height="11px" />
                                <span className="hover:text-or-100 no-underline text-white">{languageData.footer.contact.email}</span>
                            </a>
                            <a className="flex cursor-pointer mt-2 no-underline text-fs-12 gap-x-2.5 items-start">
                                <img src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-w.svg`} alt="icon-location" width="11px" height="14px" />
                                <span className="hover:text-or-100 no-underline text-white leading-5">{languageData.footer.contact.location}</span>
                            </a>
                        </div>
                    </div>

                    {/* ABOUT */}
                    <div className="basis-1/4 leading-8">
                        <div className="m-b text-fs-16 mb-[1rem]">{languageData.footer.about.titleAbout}</div>
                        <div className="flex flex-col m-m text-fs-12 cursor-pointer">
                            <a className="hover:text-or-100 no-underline text-white">{languageData.footer.about.titleHistory}</a>
                            <a className="hover:text-or-100 no-underline text-white">{languageData.footer.about.titleConditions}</a>
                            <a className="hover:text-or-100 no-underline text-white">{languageData.footer.about.titlePrivacy}</a>
                            <a className="hover:text-or-100 no-underline text-white">{languageData.footer.about.titleQuestions}</a>
                        </div>
                    </div>

                    {/* HOTELS-IN-MEXICO */}
                    <div className="basis-1/4 leading-8 cursor-pointer ">
                        <div className="m-b text-fs-16 mb-[1rem]">{languageData.footer.hotelsMexico.titleHotel}</div>
                        <div className="m-m text-fs-12 flex flex-col">
                            <a className="hover:text-or-100 no-underline text-white">{languageData.footer.hotelsMexico.hotelAcapulco}</a>
                            <a className="hover:text-or-100 no-underline text-white">{languageData.footer.hotelsMexico.hotelCancun}</a>
                            <a className="hover:text-or-100 no-underline text-white">{languageData.footer.hotelsMexico.hotelMazatlan}</a>
                            <a className="hover:text-or-100 no-underline text-white">{languageData.footer.hotelsMexico.hotelPuertoVallarta}</a>
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
    )
}