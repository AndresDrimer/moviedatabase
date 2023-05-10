import React from 'react'
import noPosterCover from "../../../public/noposter.png";

function SearchMovie({ showMovieSearch, query, setQuery, fetchMovies, playing, english }) {
  //funcion para buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    
    
    <div className="w-full">
    {showMovieSearch && (
      <>
        <h2 className="font-3xl font-bold text-center mb-8 m-w-[1024px]">
          {english ? "View Trailer Movies" : " Ver Trailers"}
        </h2>
        <form
          className="w-full  my-8 flex justify-center"
          onSubmit={searchMovies}
        >
          <input
            className="border-2 rounded-lg p-2 capitalize"
            type="text"
            placeholder={english ? "Search movie" : "Buscar pelicula"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={playing}
          />
          <button className="bg-blue-800 text-white px-6 rounded-lg py-0 ml-1 ">
            {english ? "Search" : "Buscar"}
          </button>
        </form>
      </>
    )}
 </div>
    
   
  )
}

export default SearchMovie