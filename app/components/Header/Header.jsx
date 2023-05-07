import Image from "next/image";
import React, { Fragment } from "react";
import CategoriesSelector from "./CategoriesSelector";

import HeaderHamburguer from "./HeaderHamburguer";
import SearchMovie from "./SearchMovie";

function Header({
  URL_BASE,
  setMovies,
  setMovie,
  oneSingleMovie,
  categories,
  showMovieSearch,
  setShowMovieSearch,
  darkMode,
  setDarkMode,
  showHamburguer,
  setShowHamburguer,
  query,
  setQuery,
  fetchMovies,
  playing,
  english, 
  setEnglish
}) {


  return (
    <Fragment>
      <div className="shadow-md flex justify-center items-center rounded-lg " >
        <HeaderHamburguer
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          showHamburguer={showHamburguer} 
          setShowHamburguer={setShowHamburguer}
          english={english}
          setEnglish={setEnglish}
        />
<div className="w-300 h-100 ">
        <Image
          src={darkMode ? "/logo3white.png" : "/logo3.png"}
          width={200}
          height={200}
          alt="logo"
          className="p-2"
        /></div>
      </div>

      <CategoriesSelector
        URL_BASE={URL_BASE}
        setMovies={setMovies}
        setMovie={setMovie}
        oneSingleMovie={oneSingleMovie}
        categories={categories}
        setShowMovieSearch={setShowMovieSearch}
        english={english}
      />

      <SearchMovie showMovieSearch={showMovieSearch} query={query} setQuery={setQuery} fetchMovies={fetchMovies} playing={playing} english={english}/>
    </Fragment>
  );
}

export default Header;
