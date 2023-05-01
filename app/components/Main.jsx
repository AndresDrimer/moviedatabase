"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import Image from "next/image";
import Header from "./Header/Header";
import noPosterCover from '../../public/noposter.png'


function Main() {
  const URL_BASE = "https://api.themoviedb.org/3";

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showMovieSearch, setShowMovieSearch] = useState(true)


  //metodo que pide todas las peliculas y actualiza con ellas el estado "movies"
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


  /// metodo para traer las categorias
 const getCategoriesFetch = async () => {
    try {
      const {data: { genres }, } = await axios.get(`${URL_BASE}/genre/movie/list`, {
        params: {
          api_key: process.env.API_KEY,
        },
      });
      console.log(genres)
      setCategories(genres); 
    } 
    catch(err)  { err=>{
      console.log(err)
    }
  };
};





  useEffect(() => {
    fetchMovies();
    getCategoriesFetch();
  }, []);

  return (
    <>      
    <Header URL_BASE={URL_BASE} setMovies={setMovies} setMovie={setMovie} oneSingleMovie={oneSingleMovie} categories={categories} setShowMovieSearch={setShowMovieSearch} />
      
    
    
    <div className="w-full">
   
       


{  showMovieSearch && 
  ( <><h2 className="font-3xl font-bold text-center mb-8 m-w-[1024px]">View Trailer Movies</h2>
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
          />
          <button className="bg-blue-800 text-white px-6 rounded-lg py-0 ml-1 ">
            Search
          </button>
        </form></>
  )
}


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
                          onClick={()=> setShowInfo(prev=> !prev)}
                        >{showInfo ? "X" :"+ info"}</button></div>
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
                        {showInfo && (<><hr className="w-[40px] my-4"/>
                          <ul className="text-white text-sm">
                            <li>Popularity: <span className="text-bolder">{movie.popularity}</span></li>
                            <li>Genres: <span className="text-bolder">{movie.genres && movie.genres.map(it=>`${it.name} `)}</span></li>
                            <li>Release date: <span className="text-bolder">{movie.release_date}</span></li>
                            </ul></>)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </main>
        </div>




        {/* contendor de las peliculas actuales */}
        <div className="w-full text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  2xl:max-w-[2200px] 2xl:mx-auto gap-8 px-8">
          {movies.map((it) => 
            (
            <div
              key={it.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => selectMovie(it)}
            >
              <Image
              //  src={`${URL_IMAGE + it.poster_path}`}
              src={it.poster_path ? `${URL_IMAGE + it.poster_path}` :noPosterCover}
                alt="movie-poster"
                width={300}
                height={200}
                
                unoptimized={true}
                className="hover:scale-105 w-full h-auto"
              />
              <h4 className="text-bolder text-md pt-6 text-center uppercase">
                {it.title}{" "}<br />
                {it.release_date && (
                <span className="text-gray-500">
                   ({it.release_date.substring(0, 4)})
                </span>)}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;