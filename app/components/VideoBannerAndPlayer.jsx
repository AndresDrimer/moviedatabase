import YouTube from "react-youtube";

function VideoBannerAndPlayer({
  movie,
  IMAGE_PATH,
  playing,
  trailer,
  showInfo,
  setPlaying,
  setShowInfo,
  english,
  creditsOneMovie,
}) {
  return (
    <div>
      {/* aqui va el contenedor del banner y reproductor del video */}
      <div className="mb-4">
        <main>
          {movie ? (
            <div
              className="min-h-[700px] bg-cover bg-center flex items-end"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <div className="w-full relative">
                  <YouTube
                    videoId={trailer.key}
                    className="w-full h-[600px] "
                    containerClassName={"youtube-container"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button
                    onClick={() => setPlaying(false)}
                    className="bg-blue-800 text-white outline-none border-1 border-white py-1 px-2 cursor-pointer mb-1 absolute top-[70px] right-[8px] z-[3] animate-pulse "
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="container">
                  <div>
                    {trailer ? (
                      <div className="flex">
                        <button
                          className="bg-blue-800 text-white outline-none border-1 border-white py-1 px-2 cursor-pointer mb-1 hover:scale-110"
                          onClick={() => setPlaying(true)}
                        >
                          {english ? "Play Trailer" : "Ver Trailer"}
                        </button>
                        <button
                          className="bg-black text-white ml-2 py-1 px-2 outline-none border-1 mb-1 hover:scale-110"
                          onClick={() => setShowInfo((prev) => !prev)}
                        >
                          {showInfo ? "X" : "+ info"}
                        </button>
                      </div>
                    ) : (
                      <button className="bg-blue-800 text-white outline-none border-1 border-white py-1 px-2  mb-1">
                        {english
                          ? "Sorry, no trailer available"
                          : "Disculpas, no hay trailer disponible"}
                      </button>
                    )}
                    <div className="bg-black bg-opacity-70 p-2">
                      <h1 className="text-white text-bolder text-2xl">
                        {movie.title}
                      </h1>
                      <p className="text-white text-sm">{movie.overview}</p>
                      {showInfo && (
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
                                     //aqui hay que agregarle el fetch por una categoria
                                    >
                                      {it.name}
                                    </button>
                                  ))}
                              </span>
                            </li>
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
}

export default VideoBannerAndPlayer;
