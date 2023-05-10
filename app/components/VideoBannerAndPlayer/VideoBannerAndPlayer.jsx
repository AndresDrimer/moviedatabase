import YouTube from "react-youtube";
import AditionalInfo from "./AditionalInfo";

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
  getOneCategoryFetch,
  getMoviesByDirector,
  getDirectorId ,
  getMoviesByIntepreter
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
                    <div className="flex">
                      {trailer ? (
                        <div className="flex">
                          <button
                            className="bg-blue-800 text-white outline-none border-1 border-white py-1 px-2 cursor-pointer mb-1 hover:scale-110"
                            onClick={() => setPlaying(true)}
                          >
                            {english ? "Play Trailer" : "Ver Trailer"}
                          </button>
                        </div>
                      ) : (
                        <button className="bg-blue-800 text-white outline-none border-1 border-white py-1 px-2  mb-1">
                          {english
                            ? "No trailer available"
                            : "No hay trailer disponible"}
                        </button>
                      )}
                      <button
                        className="bg-black text-white ml-2 py-1 px-2 outline-none border-1 mb-1 hover:scale-110"
                        onClick={() => setShowInfo((prev) => !prev)}
                      >
                        {showInfo ? "X" : "+ info"}
                      </button>
                    </div>
                    <div className="bg-black bg-opacity-70 p-2 leading-12">
                      <h1 className="text-white text-bolder text-2xl uppercase">
                        {movie.title}
                      </h1>
                      <h3 className="text-white text-bolder text-lg pb-2">
                        {movie.tagline}
                      </h3>
                      <p className="text-white text-sm">{movie.overview}</p>
                      {showInfo && (
                        <AditionalInfo
                          creditsOneMovie={creditsOneMovie}
                          english={english}
                          movie={movie}
                          getOneCategoryFetch={getOneCategoryFetch}
                          getMoviesByDirector={getMoviesByDirector}
                          getDirectorId={getDirectorId}
                          getMoviesByIntepreter={getMoviesByIntepreter}
                        />
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
