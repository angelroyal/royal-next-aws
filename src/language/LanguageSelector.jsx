"use client";

import { useState, useContext, useEffect, Fragment } from "react";

import LanguageContext from "./LanguageContext";
// LP
import { Listbox, Transition } from "@headlessui/react";

const country = [
  {
    name: "ESP",
    value: "es",
    img: `${process.env.NEXT_PUBLIC_URL}icons/leng/es.svg`,
  },
  {
    name: "ENG",
    value: "en",
    img: `${process.env.NEXT_PUBLIC_URL}icons/leng/en.svg`,
  },
];
// end lp

function getLanguageFromPath(path) {
  const match = path.match(/^\/([a-z]{2})\//);
  return match ? match[1] : null;
}

export function LanguageSelector() {
  const { setLanguage } = useContext(LanguageContext);
  const [actualLanguage, setActualLanguage] = useState();

  useEffect(() => {
    const storedLanguage =
      localStorage.getItem("language") ||
      getLanguageFromPath(window.location.pathname) ||
      "en";
    setActualLanguage(storedLanguage);
    setLanguage(storedLanguage);
  }, [setLanguage]);

  // const handleChange = (event) => {
  //   const newLanguage = event.target.value;
  //   const currentPath = window.location.pathname;
  //   const currentSearch = window.location.search;
  //   localStorage.setItem("language", newLanguage);
  //   setActualLanguage(newLanguage);

  //   if (currentPath === "/") {
  //     window.location.reload();
  //   } else {
  //     const newPath = `/${newLanguage}${currentPath.replace(
  //       /^\/[a-z]{2}(\/|$)/,
  //       "/"
  //     )}${currentSearch}`;
  //     window.location.href = newPath;
  //   }
  //   setLanguage(newLanguage);
  // };

  // LP
  const [selected, setSelected] = useState(country[0]); 

  useEffect(() => {
   
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage) {
        const savedLanguageObject = country.find((person) => person.value === savedLanguage);
        if (savedLanguageObject) {
          setSelected(savedLanguageObject);
        }
      }
    }
  }, []);

  const handleChange = (newSelected) => {
    const newLanguage = newSelected.value;
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("language", newLanguage);
    }
    setSelected(newSelected);

    if (currentPath === "/") {
      window.location.reload();
    } else {
      const newPath = `/${newLanguage}${currentPath.replace(
        /^\/[a-z]{2}(\/|$)/,
        "/"
      )}${currentSearch}`;
      window.location.href = newPath;
    }
  };

  // END LP

  return (
    <>
      {/* <div className="flex">
        {actualLanguage === "es" ? (
          <img
            src={`${process.env.NEXT_PUBLIC_URL}icons/leng/es.svg`}
            alt="spanish"
            className="icon-spanish"
          />
        ) : (
          <img
            src={`${process.env.NEXT_PUBLIC_URL}icons/leng/en.svg`}
            alt="spanish"
            className="icon-spanish"
          />
        )}
        <select
          className="w-max block border-0 bg-transparent focus:outline-none m-s-b text-gry-100 appearance-none px-[3px]"
          name="select"
          onChange={handleChange}
          value={actualLanguage}
        >
          <option className="appearance-none " value="es">
            ESP
          </option>
          <option className="appearance-none" value="en">
            ENG
          </option>
        </select>
        <img
          src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-100.svg`}
          alt="icon arrow down"
          width={8}
          height={8}
        />
      </div> */}

      {/* LP TAILWIND */}
      <div className="w-max block m-s-b text-gry-100">
        <Listbox value={selected} onChange={handleChange}>
          <div className="relative">
            <Listbox.Button
              onChange={handleChange}
              className="relative flex gap-1 w-full cursor-default rounded-lg bg-transparent pl-3 pr-7 text-left focus:outline-none items-center"
            >
              {actualLanguage === "es" ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/leng/es.svg`}
                  alt="spanish"
                  className="icon-spanish"
                />
              ) : (
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/leng/en.svg`}
                  alt="spanish"
                  className="icon-spanish"
                />
              )}
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute right-0 flex items-center justify-center pr-2">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-100.svg`}
                  alt="icon arrow down"
                  width={9}
                  height={8}
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="ml-[10px] absolute mt-1 w-[90%] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {country.map((countries, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-1 ${
                        active ? "bg-bl-100 text-white" : "text-gray-900"
                      }`
                    }
                    value={countries}
                  >
                    <div className="pl-1 flex gap-1">
                      <img
                        src={countries.img}
                        alt={`icon ${countries.name} `}
                        width={25}
                        height={17}
                        className="aspect-[25/17]"
                      />
                      <span className={`block truncate m-b pl-2`}>
                        {countries.name}
                      </span>
                    </div>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      {/* END LP */}
    </>
  );
}
