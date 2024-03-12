import React from "react";

import { ReactComponent as LogoFlyRoyal } from "../assets/icons/utils/payment/icon-royal-vacations.svg";
import { ReactComponent as IconCreditCart } from "../assets/images/others/credit-card.svg";

export default function ItineraryInfoTest() {
  return (
    <div className="father-info-itinerary">
      {/* TITLE AND LOGO */}
      <div className="cont-icon-logo-details-payment">
        <LogoFlyRoyal className="logo-fly-info-i" />
        <span className="text-black-info-i">Detalles de pago</span>
      </div>

      {/* INFO PRICE AND TOTAL*/}
      <div className="cont-info-price-info-itinerary">
        <div className="info-hotel-flex-colum">
          <div className="info-hotel-flex-colum">
            <span className="text-grey-info-i">Hotel</span>
            <span className="text-black-info-i-s">
              Paradisus Cancún All inclusive
            </span>
          </div>

          <div className="info-hotel-flex-colum-border">
            <span className="text-or-info-i-s">Habitaciones</span>
            <div className="spa-bet-col">
              <div className="spa-bet">
                <span className="text-black-info-i-s">
                  x2 Suite junior con Vista al Mar
                </span>
                <span className="text-black-info-i-m">
                  $00,000.<sup>00</sup>
                </span>
              </div>

              <div className="spa-bet">
                <span className="text-black-info-i-s">
                  x2 Suite junior con Vista al Mar
                </span>
                <span className="text-black-info-i-m">
                  $00,000.<sup>00</sup>
                </span>
              </div>

              <div className="spa-bet">
                <span className="text-black-info-i-s">Suite Premium</span>
                <span className="text-black-info-i-m">
                  $00,000.<sup>00</sup>
                </span>
              </div>

              <div className="spa-bet">
                <span className="text-black-info-i-s">Suite Premium</span>
                <span className="text-black-info-i-m">
                  $00,000.<sup>00</sup>
                </span>
              </div>
            </div>
          </div>

          <div className="info-hotel-flex-colum-border">
            <span className="text-grey-info-i">Tour</span>
            <div className="spa-bet-col">
              <div className="spa-bet">
                <span className="text-black-info-i-s w-forty">
                  jolly roger displey de Piratas, Cena Deluxe
                </span>
                <span className="text-black-info-i-m">
                  $00,000.<sup>00</sup>
                </span>
              </div>

              <div className="spa-bet">
                <span className="text-black-info-i-s w-forty">
                  jolly roger displey de Piratas, Cena Deluxe
                </span>
                <span className="text-black-info-i-m">
                  $00,000.<sup>00</sup>
                </span>
              </div>
            </div>
          </div>

          <div className="info-hotel-flex-colum-border">
            <span className="text-grey-info-i">Traslado</span>
            <div className="spa-bet-col">
              <div className="spa-bet">
                <span className="text-black-info-i-s">viaje redondo</span>
                <span className="text-black-info-i-m">
                  $00,000.<sup>00</sup>
                </span>
              </div>

              <div className="spa-bet">
                <span className="text-black-info-i-s">viaje redondo</span>
                <span className="text-black-info-i-m">
                  $00,000.<sup>00</sup>
                </span>
              </div>
            </div>
          </div>

          <div className="info-hotel-flex-colum-border">
            <span className="text-grey-info-i">Impuestos</span>
            <div className="spa-bet-col">
              <div className="spa-bet">
                <span className="text-black-info-i-s">IVA</span>
                <span className="text-black-info-i-m">
                  $00,000.<sup>00</sup>
                </span>
              </div>
            </div>
          </div>

          <div className="info-hotel-flex-colum">
            <div className="spa-bet">
              <span className="text-black-info-i-g">Total</span>
              <span className="text-black-info-i">
                $00,000.<sup>00</sup>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ICONS PAYMENTS */}
      <div className="cont-icons-payments-itinerary">
        <IconCreditCart className="icons-payments-tour" />
      </div>

      {/* COMPLETE PAYMENT */}
      <div className="cont-share-to-complete-payment">
        <div className="share-i-tour">
          <img
            className="icons-info-tour"
            src="https://sandboxmexico.com/assets/icons/share/share-o.svg"
            alt="share-icon"
          />
          <span className="text-or-info-i">Compartir itinerario</span>
        </div>
        <div className="complete-payment-i">
          <span className="text-black-info-i-m-payment">Completar pago</span>
          <img
            className="icons-info-tour"
            src="https://sandboxmexico.com/assets/icons/arrows/right-100.svg"
            alt="arrow-right-icon"
          />
        </div>
      </div>
    </div>
  );
}
