
import React from 'react'

import { useIsMobileNew } from "../config/Mobile/isMobile";

import { ReactComponent as CloseIcon } from '../assets/alerts/close.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/utils/searchBox/location-autocomplete.svg';
import { ReactComponent as IconLocationBorder } from '../assets/icons/utils/others/location-border.svg';

export default function TestTour() {
  const isMobile = useIsMobileNew()
  return (
    <div className='father-tour-card-i'>
      <IconLocationBorder className="icon-location-border" />
      {/* {
        isMobile && (<h3>hola</h3>)
      } */}
      <div className='father-container-tour-i'>

        <div className='date-itinerary'>
          <span className='text-tour-or-i'>Martes</span>
          <span className='text-loc-tour-grey-i'>01/23/2024</span>
          <span className='text-loc-tour-grey-i'>|</span>
          <span className='text-loc-tour-grey-i'>02:00pm</span>
        </div>

        {/* ITINERARY CARD */}

        <div className='container-tour-i'>

          <div className='close-icon-tour-i'><CloseIcon /></div>

          <div className='cont-image-tour-i'>
            <img className='image-tour-i' src='https://sandboxmexico.com/assets/banners/desktop/banner-about-us.webp' alt='tour-test-banner-abaut-us' />
            {isMobile &&
              <div className='d-flex flex-column'>
                <h2 className='title-tour-card-i'>Jolly Roger display de piratas, cena Deluxe piratas, cena Deluxe</h2>
                <div className='cont-name-location-tour'>

                  <div className='text-tour-grey-i-m'>
                    Telefono: 9999999999
                  </div>

                  <div className='d-flex d-grid gap-2 icon-location-text-tour'>
                    <div><LocationIcon className="icons-tour-card" /></div>
                    <div className='text-tour-bl-i'>Blvd Kukulkan Km 4.5 Zona Hotelera Embarcadero Playa Linda,Cancun,Q.R.</div>
                  </div>
                  <div className='d-flex d-grid gap-2 icon-adult-text-tour'>
                    <img className='icons-tour-card' src='https://sandboxmexico.com/assets/icons/adult/adult-b.svg' alt='icon-adult'></img>
                    <span className='text-tour-grey-i-m'>2 adultos, 2 niños</span>
                  </div>
                </div>
              </div>
            }

          </div>

          <div className='d-flex container-description-tour-card-i flex-column'>
            {!isMobile &&
              <h2 className='title-tour-card-i'>Jolly Roger display de piratas, cena Deluxe piratas, cena Deluxe</h2>
            }

            <div className='d-flex cont-location-hours-price-tour-card'>

              {!isMobile &&
                <div className='cont-name-location-tour'>

                  <div className='text-tour-grey-i-m'>
                    Telefono: 9999999999
                  </div>

                  <div className='d-flex d-grid gap-2 icon-location-text-tour'>
                    <div><LocationIcon className="icons-tour-card" /></div>
                    <div className='text-tour-bl-i'>Blvd Kukulkan Km 4.5 Zona Hotelera Embarcadero Playa Linda,Cancun,Q.R.</div>
                  </div>
                  <div className='d-flex d-grid gap-2 icon-adult-text-tour'>
                    <img className='icons-tour-card' src='https://sandboxmexico.com/assets/icons/adult/adult-b.svg' alt='icon-adult'></img>
                    <span className='text-tour-grey-i-m'>2 adultos, 2 niños</span>
                  </div>
                </div>
              }




              <div className='d-flex mobile-tour-test-two'>

                <div className='cont-hours-tour'>
                  <span className='text-tour-grey-i-s'>Duración</span>
                  <span className='text-tour-black-s'>4 horas</span>
                </div>

                <div className='cont-price-taxes-tour'>
                  <span className='text-tour-grey-i-s'>impuestos incluido</span>
                  <span className='text-tour-black-m'>MXN $10,000.<sup>00</sup></span>
                  <span className='text-tour-bl-i-s'>Politicas de cancelación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
