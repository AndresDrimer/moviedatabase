import YouTube from "react-youtube";

function VideoBannerAndPlayer({ movie,IMAGE_PATH, playing, trailer, showInfo, setPlaying, setShowInfo }) {
  return (
    <div>
    
    
          {/* aqui va el contenedor del banner y reproductor del video */}
          <div className="mb-8">
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
                              className="bg-blue-800 text-white outline-none border-1 border-white py-1 px-2 cursor-pointer mb-1"
                              onClick={() => setPlaying(true)}
                            >
                              {" "}
                              Play Trailer
                            </button>
                            <button
                              className="bg-black text-white ml-2 py-1 px-2 outline-none border-1 mb-1"
                              onClick={() => setShowInfo((prev) => !prev)}
                            >
                              {showInfo ? "X" : "+ info"}
                            </button>
                          </div>
                        ) : (
                          <button className="bg-blue-800 text-white outline-none border-1 border-white py-1 px-2  mb-1">
                            "Sorry, no trailer available"
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
                                <li>
                                  Popularity:{" "}
                                  <span className="text-bolder">
                                    {movie.popularity}
                                  </span>
                                </li>
                                <li>
                                  Genres:{" "}
                                  <span className="text-bolder">
                                    {movie.genres &&
                                      movie.genres.map((it) => `${it.name} `)}
                                  </span>
                                </li>
                                <li>
                                  Release date:{" "}
                                  <span className="text-bolder">
                                    {movie.release_date}
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
  )
}

export default VideoBannerAndPlayer