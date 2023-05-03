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
  playing
}) {


  return (
    <Fragment>
      <div className="shadow-md flex flex-col justify-center items-center rounded-lg" >
        <HeaderHamburguer
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          showHamburguer={showHamburguer} 
          setShowHamburguer={setShowHamburguer}
        />

        <Image
          src={darkMode ? "/logo3white.png" : "/logo3.png"}
          width={400}
          height={400}
          alt="logo"
          className="p-2"
        />
      </div>

      <CategoriesSelector
        URL_BASE={URL_BASE}
        setMovies={setMovies}
        setMovie={setMovie}
        oneSingleMovie={oneSingleMovie}
        categories={categories}
        setShowMovieSearch={setShowMovieSearch}
      />

      <SearchMovie showMovieSearch={showMovieSearch} query={query} setQuery={setQuery} fetchMovies={fetchMovies} playing={playing}/>
    </Fragment>
  );
}

export default Header;
