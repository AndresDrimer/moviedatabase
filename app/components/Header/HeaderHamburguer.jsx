"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import DarkModeContainer from "./DarkModeContainer";
import Login from "./Login";

function HeaderHamburguer({
  darkMode,
  setDarkMode,
  showHamburguer,
  setShowHamburguer,
  english,
  setEnglish
}) {

  function handleLanguage(){
    setEnglish(prev=>!prev)
  }

  return (
    <div className="flex w-full justify-end absolute top-0">
      {showHamburguer ? (
        <div className="w-full flex justify-end items-center m-4">
          <HiMenu
            className="w-[44px] h-[44px] hover:scale-105 cursor-pointer"
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
              <Login />
            </li>

            <li>
              <p className="hover:scale-110" onClick={()=>handleLanguage()}><span className={english ? "text-blue-800 text-bolder text-2xl" : "text-sm"}>EN </span>/ <span className={!english ? "text-blue-800 text-bolder text-2xl" : "text-sm"}>ES</span> </p>
            </li>
          </ul>
        </section>
      )}
    </div>
  );
}

export default HeaderHamburguer;
