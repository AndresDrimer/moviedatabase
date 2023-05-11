import React, { useEffect } from "react";

function AditionalInfo({
  creditsOneMovie,
  english,
  movie,
  getOneCategoryFetch,
  getMoviesByDirector,
  getMoviesByIntepreter
}) {
  return (
    <>
      <hr className="w-[40px] my-4" />
      <ul className="text-white text-xs lg:text-md leading-6">
        {creditsOneMovie.crew.map(
          (it) =>
            it.job === "Director" && (
              <li key={it.credit_id}>
                {" "}
                {english ? "Director: " : "Dirección: "}
                <button
                  className="border-2 rounded-lg mx-1 px-1 hover:scale-110"
                  onClick={() => getMoviesByDirector(it.name)}
                > {it.name} </button>
              </li>
            )
        )}

        <li key="producers">
          {english ? "Producer: " : "Producción: "}
          {creditsOneMovie.crew.map(
            (it, index) =>
              it.job === "Producer" && (
                <span className="" key={it.id}>
                  {it.name}
                  {index < creditsOneMovie.crew.length - 1 ? ", " : "."}
                </span> //esto no anda, el ultimo no entra en la ultima opcion
              )
          )}
        </li>

        <li key="actors" className="mt-4">
          {english ? "Lead interpreters: " : "Elenco principal: "}
          <ul key="actors-ul">
            {creditsOneMovie.cast.slice(0, 5).map((it) => ( //muestra a los primeros 5 solamente
              <li key={it.credit_id}>
                <button  className="border-2 rounded-lg mx-1 px-1 hover:scale-105"
                onClick={() => getMoviesByIntepreter(it.name)}>{it.name}</button> as {it.character}
              </li>
            ))}
          </ul>
        </li>

        <hr className="w-[40px] my-4" />
        <li key={movie.popularity}>
          {english ? "Popularity: " : "Popularidad: "}
          <span className="font-bold">{movie.popularity}</span>
        </li>

        <li key={movie.release_date}>
          {english ? "Release date: " : "Fecha de estreno: "}
          <span className="font-bold">{movie.release_date}</span>
        </li>

        <li key={movie.id} className="py-2">
          {english ? "Genres: " : "Géneros: "}
          <span className="text-bolder">
            {movie.genres &&
              movie.genres.map((it) => (
                <button
                  className="border-2 rounded-lg mx-1 px-1 hover:scale-110"
                  key={it.name}
                  onClick={() => getOneCategoryFetch(it.id, it.name)}
                >
                  {it.name}
                </button>
              ))}
          </span>
        </li>
      </ul>
    </>
  );
}

export default AditionalInfo;
