import React from 'react'

export default function ButtonConfirmation() {
    return (
        <div className='d-flex cont-button-confirm-total-share'>
            <div className='circ-button-confirm-mobile'>
                <img
                    className="icons-info-tour"
                    src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/up-w.svg`}
                    alt="arrow-up-w"
                />
            </div>
            <div className='confirm-total-text-w-t'>
                <span className='text-confirm-total-w-s'>Total</span>
                <span className='text-confirm-total-w-s'>MXN <b className='text-confirm-total-w'>$00,000.<sup>00</sup></b></span>
            </div>
            <div className="share-confirm-test-tour">
                <img
                    className="icons-info-tour"
                    src={`${process.env.NEXT_PUBLIC_URL}icons/share/share-w.svg`}
                    alt="share-icon"
                />
                <span className='text-confirm-share-w'>Compartir</span>
            </div>
        </div>
    )
}
