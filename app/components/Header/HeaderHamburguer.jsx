"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import DarkModeContainer from "./DarkModeContainer";

function HeaderHamburguer({
  darkMode,
  setDarkMode,
  showHamburguer,
  setShowHamburguer,
}) {
  return (
    <div className="flex w-full justify-end absolute top-0">
      {showHamburguer ? (
        <div className="w-[20vw] flex justify-center items-center">
          <HiMenu
            className="w-[44px] h-[44px] hover:scale-105 cursor-pointer mt-8"
            onClick={() => setShowHamburguer((prev) => !prev)}
          />
        </div>
      ) : (
        <section className="flex flex-col justify-start items-center bg-black text-white w-[25vw] h-screen">
          <HiX
            className="border-2 w-[40px] h-[40px] rounded-lg mt-8 hover:scale-105 cursor-pointer"
            onClick={() => setShowHamburguer((prev) => !prev)}
          />

          <ul className="flex flex-col items-center mt-16">
            <li className="flex">
              <DarkModeContainer
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                setShowHamburguer={setShowHamburguer}
              />
            </li>
            <li className="py-10">
              <p className="text-lg">login</p>
            </li>

            <li>
              <p className="text-lg">register</p>
            </li>
          </ul>
        </section>
      )}
    </div>
  );
}

export default HeaderHamburguer;
