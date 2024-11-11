import React from "react";

export default function page() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <CartAxiosProvider>
          <BookingProviderContext>
            <Token />

            <Navigation />

            <PaymentProviderContext>
              <></>
            </PaymentProviderContext>
            <ModalTaxesNotInclude />

            <FooterT />
          </BookingProviderContext>
        </CartAxiosProvider>
      </TokenProvider>
    </LanguageProvider>
  );
}
