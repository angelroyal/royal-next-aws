export function PaymentBannerMobile(){
    return (
        <div className="relative hidden xl:block w-[403px] right-[-25px]">
          <img
            className="absolute object-contain left-[50px] top-0 bottom-0 z-0 my-auto -rotate-6 w-full h-[370px] "
            src={`${process.env.NEXT_PUBLIC_URL}img/home/payment-step/phone-banner-payment.png`}
            alt="phone-banner-payment"
          />
    
          <img
            className="z-10 absolute bottom-0 right-0"
            src={`${process.env.NEXT_PUBLIC_URL}img/home/payment-step/payment-banner.png`}
            alt="payment-banner"
          />
        </div>
      );
}