import React from 'react'
import noPosterCover from "../../../public/noposter.png";

function SearchMovie({ showMovieSearch,query, setQuery, fetchMovies, playing }) {
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
          View Trailer Movies
        </h2>
        <form
          className="w-full  my-8 flex justify-center"
          onSubmit={searchMovies}
        >
          <input
            className="border-2 rounded-lg p-2 capitalize"
            type="text"
            placeholder="Search movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={playing}
          />
          <button className="bg-blue-800 text-white px-6 rounded-lg py-0 ml-1 ">
            Search
          </button>
        </form>
      </>
    )}
 </div>
    
   
  )
}

export default SearchMovie