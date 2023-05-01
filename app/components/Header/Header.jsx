import Image from "next/image";
import React, { Fragment } from "react";
import CategoriesSelector from "./CategoriesSelector";



function Header({
  URL_BASE,
  setMovies,
  setMovie,
  oneSingleMovie,
  categories,
  setShowMovieSearch,
}) {
  return (
    <Fragment>
      <div className="border-2 shadow-md flex justify-center items-center rounded-lg p-4 ">
        
    
          <Image
            src="/logo3.png"
            width={400}
            height={400}
            alt="logo"
            className="p-2 "
          /></div>
       
      

      <CategoriesSelector
        URL_BASE={URL_BASE}
        setMovies={setMovies}
        setMovie={setMovie}
        oneSingleMovie={oneSingleMovie}
        categories={categories}
        setShowMovieSearch={setShowMovieSearch}
      />
    </Fragment>
  );
}

export default Header;
