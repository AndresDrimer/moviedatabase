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
  setEnglish,
  getOneCategoryFetch,
}) {
  return (
    <Fragment>
      <div className="shadow-md rounded-lg flex justify-center items-center">
        
      <HeaderHamburguer
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          showHamburguer={showHamburguer}
          setShowHamburguer={setShowHamburguer}
          english={english}
          setEnglish={setEnglish}
        />

        <div className="w-100 mx-0 my-auto ">
          <Image
            src={darkMode ? "/logo3white.png" : "/logo3.png"}
           alt="logo img"
            width={200}
            height={200}
            priority
            className=" object-contain object-center w-[50vw] md:w-[30vw] 2xl:w-[20vw] py-4"
          />
        </div>
      </div>

      <CategoriesSelector
        URL_BASE={URL_BASE}
        setMovies={setMovies}
        setMovie={setMovie}
        oneSingleMovie={oneSingleMovie}
        categories={categories}
        setShowMovieSearch={setShowMovieSearch}
        english={english}
        getOneCategoryFetch={getOneCategoryFetch}
      />

      <SearchMovie
        showMovieSearch={showMovieSearch}
        query={query}
        setQuery={setQuery}
        fetchMovies={fetchMovies}
        playing={playing}
        english={english}
      />
    </Fragment>
  );
}

export default Header;
