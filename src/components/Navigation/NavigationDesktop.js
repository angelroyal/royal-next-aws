import React, { useContext } from "react";

import LanguageContext from "../../language/LanguageContext";
import NavigationOptions from "../../pages/others/RouterPages";

import HeaderBlue from "./HeaderBlue";
import { Container } from "@/config/Others/Container";
import { SelectCurrency } from "./SelectCurrency";
import { LanguageSelector } from "@/language/LanguageSelector";
import Cart from "@/hooks/Cart";

export default function NavigationDesktop() {

  return (
    <div className="md:h-[140px] mb-2">
      <HeaderBlue />

      <Container>
        <header className="relative pt-0 pb-5 flex flex-col gap-y-5">
          <div className="hidden md:flex  justify-end">
            <SelectCurrency />
            
            <LanguageSelector />

            <Cart/>
          </div>

          <nav
            className="flex w-full items-center justify-between "
            aria-label="Global"
          >
            <div className="flex md:flex-1">
              <a
                href={`${process.env.NEXT_PUBLIC_HOME}`}
                className="-m-1.5 p-1.5"
              >
                <span className="sr-only">Your Company</span>
                <img
                  src="https://sandboxmexico.com/assets/royal/logo.svg"
                  alt="Royal Vacations Mexico"
                  width={200}
                  height={100}
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>

            <NavigationOptions />

          </nav>
        </header>
      </Container>
    </div>
  );
}
