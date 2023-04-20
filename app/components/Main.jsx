"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import Image from "next/image";

function Main() {
  const URL_BASE = "https://api.themoviedb.org/3";
  
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async (query) => {
    const type = query ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${URL_BASE}/${type}/movie`, {
      params: {
        api_key: process.env.API_KEY,
        query: query,
      },
    });

    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await oneSingleMovie(results[0].id);
    }
  };

  //pide una sola pelicula y muestra el trailer
  const oneSingleMovie = async (id) => {
    const { data } = await axios.get(`${URL_BASE}/movie/${id}`, {
      params: {
        api_key: process.env.API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (it) => it.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    oneSingleMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  //funcion para buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="w-full mt-8">
        <h2 className="font-3xl font-bold text-center mb-8"> Trailer Movies</h2>

        <form
          className="w-full  my-8 flex justify-center"
          onSubmit={searchMovies}
        >
          <input
            className="border-2 rounded-lg p-2 capitalize"
            type="text"
            placeholder="Search movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-blue-800 text-white px-6 rounded-lg py-0 ml-1 ">
            Search
          </button>
        </form>

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
                  <>
                    <YouTube
                      videoId={trailer.key}
                      className="w-full h-[600px]"
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
                      className="bg-[#0F1014] text-white outline-none border-1 border-white py-1 px-2 cursor-pointer mb-1"
                    >
                      Close
                    </button>
                  </>
                ) : (
                  <div className="container">
                    <div>
                      {trailer ? (
                        <button
                        className="bg-[#0F1014] text-white outline-none border-1 border-white py-1 px-2 cursor-pointer mb-1"
                        onClick={() => setPlaying(true)}
                        > Play Trailer
                        </button>
                        ) : (
                          "Sorry, no trailer available"
                      )}
                      <h1 className="text-white">{movie.title}</h1>
                      <p className="text-white">{movie.overview}</p>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </main>
        </div>

        {/* contendor de las peliculas actuales */}
        <div className="w-full text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  2xl:max-w-[2200px] 2xl:mx-auto gap-8 px-8">
          {movies.map((it) => (
            <div key={it.id} className="flex flex-col items-center cursor-pointer" onClick={()=>selectMovie(movie)}>
              <Image
                src={`${URL_IMAGE + it.poster_path}`}
                alt="movie-poster"
                height={200}
                width={300}
                unoptimized={true}
              />
              <h4 className="text-bold">{it.title}</h4>
              <h4 className="text-gray-500">
                {it.release_date.substring(0, 4)}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
