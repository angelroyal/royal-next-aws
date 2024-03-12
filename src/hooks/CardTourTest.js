import React from 'react'

import Rating from '@mui/material/Rating';

import { ReactComponent as IconLocationBlue } from "../assets/icons/utils/others/location-blue.svg";
import { ReactComponent as IconWater } from "../assets/icons/transport/listing/water.svg"
import { ReactComponent as IconBaggage } from "../assets/icons/transport/listing/baggage.svg"

export default function CardTourTest() {

    const descriptionCard = "Explora el sorprendente mundo subacuático del arrecife El Meco en una divertida experiencia de snorkel, únete a nuestra tripulación y al divertido, disfruta";

    const maxLength = 110;
    return (
        <>
            {[...Array(5)].map((value, index) => (
            <div key={index} className='container'>

                {/* CARD TOUR */}
                <div className='cont-card-tour-test d-flex'>
                    <div className='cont-image-card-tour-test'>
                        <img className='image-card-tour-test' src='https://sandboxmexico.com/assets/banners/desktop/banner-about-us.webp' alt='tour-test-banner-abaut-us' />
                    </div>

                    <div className='cont-card-info-star-loc-price'>
                        <h2 className='title-card-tour-test'>Tour Xcaret Catamarán Prime </h2>
                        <Rating className='stars-card-tour-font-size' name="size-small" defaultValue={null} size="small" />

                        <div className='d-flex cont-mobile-loc-price'>
                            <div className='cont-info-card-tour-test'>

                                <div className='d-flex gap-1'>
                                    <IconLocationBlue className="icons-card-tour-w-s" />
                                    <span className='text-blue-card-tour-test'>Culiacan, a 1km de Centro Histórico  a 1km de Centro Histórico</span>
                                </div>

                                <span className='text-grey-card-tour-test-s'>{
                                    descriptionCard.length > maxLength ? descriptionCard.substring(0, maxLength) + "..." : descriptionCard
                                }</span>

                                <div className='cont-icons-water-and-baggage'>
                                    <IconWater className="icons-card-tour-w" />
                                    <IconBaggage className="icons-card-tour-w" />
                                </div>

                                <div className='cont-duration-card-tour'>
                                    <span className='text-grey-card-tour-test-m'>Duracion: 7 horas</span>
                                </div>
                            </div>

                            <div className='line-card-tour-grey'></div>

                            <div className='cont-price-percentage-details'>
                                <div className='content-card-tour-gap-percentage'>
                                    <h2 className='text-black-card-tour-test-m'>desde <span className='text-black-card-tour-test-g'>MXN $10,000</span></h2>

                                    <div className='d-flex cont-text-percentage'>
                                        <del className='text-grey-card-tour-test-g'>MXN $11,000</del>
                                        <div className='cont-percentage-red'>10%</div>
                                    </div>

                                    <div className='cont-taxes-included-green'>Impuestos incluidos</div>
                                </div>

                                    <div className='cont-see-details-tour width100'>Ver detalles</div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        ))}
        </>
    )
}
