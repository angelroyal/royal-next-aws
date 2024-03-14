"use client";

import React, { useState } from "react";

import Cart from "@/hooks/Cart";
import { HamburgerMenu } from "./HamburgerMenu";
import { Container } from "@/config/Others/Container";
import NavigationOptions from "../../pages/others/RouterPages";
import { LanguageSelector } from "@/language/LanguageSelector";

import { SelectCurrency } from "./SelectCurrency";

export default function NavigationDesktop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative md:top-[-22px] mt-[38px] md:mt-0">
      <Container>
        {/* fix tailwind */}
        <header className="relative pt-0 pb-[20px] flex flex-col gap-y-[1rem]">
          <div className="hidden md:flex justify-end ">
            <SelectCurrency />
            <span className="pl-[19px] pr-[19px]">|</span>
            <LanguageSelector />

            <Cart />
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

            <div className="flex gap-x-[18px] md:hidden">
              <Cart />

              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="flex flex-col gap-y-[3px]">
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                </div>
              </button>
            </div>

            <NavigationOptions />

            <HamburgerMenu
              open={mobileMenuOpen}
              setMobileMenuOpen={() => setMobileMenuOpen(false)}
            />
          </nav>
        </header>
      </Container>
    </div>
  );
}
