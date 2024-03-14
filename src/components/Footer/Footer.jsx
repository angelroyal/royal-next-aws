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
                <Image src={`${process.env.NEXT_PUBLIC_URL}general/line-footer-or.svg`} alt="line-footer-or" width={100} height={100}/>
            </div>

            <footer className="bg-bl-100 flex flex-col text-white max-w-full py-8">
                {/* LOGO AND SOCIAL ICONS */}
                <div className="flex justify-center justify-items-center max-md:grid grid-cols-1 max-md:text-center ">
                    <div className="basis-1/2 justify-center">
                        <ul>
                            <li className=" grid place-items-center">
                                {/* LOGO-W */}
                                <img src={`${process.env.NEXT_PUBLIC_URL}royal/logo-w.svg`} alt="logo-w" width='300px' height='100px' />

                                {/*SOCIAL ICONS*/}
                                <div className="m-5 flex justify-center ">
                                    <a>
                                        <img className="mx-2 cursor-pointer" src={`${process.env.NEXT_PUBLIC_URL}icons/face/face-w.svg`} alt="icon-facebook" width='30px' height='80%' />
                                    </a>
                                    <a>
                                        <img className="mx-2 cursor-pointer" src={`${process.env.NEXT_PUBLIC_URL}icons/insta/insta-w.svg`} alt="icon-instagram" width='30px' height='80%' />
                                    </a>
                                    <a>
                                        <img className="mx-2 cursor-pointer" src={`${process.env.NEXT_PUBLIC_URL}icons/in/in-w.svg`} alt="icon-linkedin" width='30px' height='80%' />
                                    </a>
                                    <a>
                                        <img className="mx-2 cursor-pointer" src={`${process.env.NEXT_PUBLIC_URL}icons/tiktok/tiktok-w.svg`} alt="icon-tiktok" width='30px' height='80%' />
                                    </a>
                                </div>

                                {/* PAYMENTS ICONS */}
                                <div className=" mt-5 mb-4 mx-1 flex justify-center ">
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
                        <div className="m-b text-fs-22 m-1 mb-4">{languageData.footer.contact.titleContact}</div>
                        <div className="max-md:grid place-items-center pr-16">
                            <div className="flex max-2xl:grid grid-cols-1">
                                <a className="flex cursor-pointer">
                                    <img className="mx-1 " src={`${process.env.NEXT_PUBLIC_URL}icons/tel/tel-w.svg`} alt="icon-telephone" width="22px" height="30px" />
                                    <span className="hover:text-or-100 mx-2">{languageData.footer.contact.phone}</span>
                                </a>
                                <a className="flex cursor-pointer">
                                    <img className="mx-1" src={`${process.env.NEXT_PUBLIC_URL}icons/whats/whats-w.svg`} alt="icon-whatsapp" width="22px" height="30px" />
                                    <span className="hover:text-or-100 ml-2">{languageData.footer.contact.whatsApp}</span>
                                </a>
                            </div>
                            <a className="flex cursor-pointer">
                                <img className="mx-1" src={`${process.env.NEXT_PUBLIC_URL}icons/mail/mail-w.svg`} alt="icon-whatsapp" width="22px" height="30px" />
                                <span className="hover:text-or-100 ml-2">{languageData.footer.contact.email}</span>
                            </a>
                            <a className="flex cursor-pointer mt-2">
                                <img className="mx-1" src={`${process.env.NEXT_PUBLIC_URL}location/location-w.svg`} alt="icon-location" width="22px" height="30px" />
                                <span className="hover:text-or-100 leading-5">{languageData.footer.contact.location}</span>
                            </a>
                        </div>
                    </div>

                    {/* ABOUT */}
                    <div className="basis-1/4 leading-8">
                        <div className="m-b text-fs-22 m-1 mb-4">{languageData.footer.about.titleAbout}</div>
                        <div className="flex flex-col m-m text-fs-14 cursor-pointer">
                            <a className="hover:text-or-100">{languageData.footer.about.titleHistory}</a>
                            <a className="hover:text-or-100">{languageData.footer.about.titleConditions}</a>
                            <a className="hover:text-or-100">{languageData.footer.about.titlePrivacy}</a>
                            <a className="hover:text-or-100">{languageData.footer.about.titleQuestions}</a>
                        </div>
                    </div>

                    {/* HOTELS-IN-MEXICO */}
                    <div className="basis-1/4 leading-8 cursor-pointer ">
                        <div className="m-b m-1 text-fs-22 mb-4">{languageData.footer.hotelsMexico.titleHotel}</div>
                        <div className="m-m text-fs-14 flex flex-col">
                            <a className="hover:text-or-100">{languageData.footer.hotelsMexico.hotelAcapulco}</a>
                            <a className="hover:text-or-100">{languageData.footer.hotelsMexico.hotelCancun}</a>
                            <a className="hover:text-or-100">{languageData.footer.hotelsMexico.hotelMazatlan}</a>
                            <a className="hover:text-or-100">{languageData.footer.hotelsMexico.hotelPuertoVallarta}</a>
                        </div>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="w-full pt-10 text-center text-white m-m text-fsw-12 max-lg:text-fs-14 max-sm:text-fs-10">
                    {languageData.footer.contact.copyright} {year}{" "}
                    {languageData.footer.contact.royalVacations}{" "}
                    {languageData.footer.contact.rightsReserved}
                </div>

            </footer>

        </>
    )
}