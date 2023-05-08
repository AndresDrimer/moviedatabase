import React from 'react'

function AditionalInfo({ creditsOneMovie, english, movie }) {
  return (
    <>
    <hr className="w-[40px] my-4" />
    <ul className="text-white text-sm">

      {creditsOneMovie.crew.map(
        (it) =>
          it.job === "Director" && (
            <li key={it.credit_id}>
              {" "}
              {english ? "Director: " : "Dirección: "}
              <span className="font-bold">
                {it.name}{" "}
              </span>{" "}
            </li>
          )
      )}

      <li key="producers">
        {english ? "Producer: " : "Producción: "}
        {creditsOneMovie.crew.map(
          (it, index) =>
            it.job === "Producer" && (
              <span className="font-bold" key={it.credit_id}>
                {it.name}
                {index < creditsOneMovie.crew.length - 1 ? ", " : "."}
              </span> //esto no anda, el ultimo no entra en la ultima opcion
            )
        )}
      </li>

      <li key="actors">
        {english
          ? "Lead actors/actresses by role: "
          : "Elenco principal por rol: "}
        <ul key="actors-ul">
          {creditsOneMovie.cast.slice(0, 5).map((it) => (
            <li key={it.credit_id}>
              <span className="font-bold">
                · {it.name}
              </span>{" "}
              as {it.character}
            </li>
          ))}
        </ul>
      </li>

      <hr className="w-[40px] my-4" />
      <li key={movie.popularity}>
        {english ? "Popularity: " : "Popularidad: "}
        <span className="font-bold">
          {movie.popularity}
        </span>
      </li>

      <li key={movie.release_date}>
        {english
          ? "Release date: "
          : "Fecha de estreno: "}
        <span className="font-bold">
          {movie.release_date}
        </span>
      </li>

      <li key={movie.id} className="py-2">
        {english ? "Genres: " : "Géneros: "}
        <span className="text-bolder">
          {movie.genres &&
            movie.genres.map((it) => (
              <button
                className="border-2 rounded-lg mx-1 px-2 hover:scale-110"
                key={it.name}
               //aqui hay que agregarle el fetch por una categoria, pero necesito alojar el metodo que lo controla en el parent común. Quizas seria mejor tener una funcion nueva que traiga las del género, pero que deje la actual como [0]....                         
              >
                {it.name}
              </button>
            ))}
        </span>
      </li>
    </ul>
  </>
  )
}

export default AditionalInfo