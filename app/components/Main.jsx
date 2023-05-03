"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";

import Header from "./Header/Header";

import VideoBannerAndPlayer from "./VideoBannerAndPlayer";
import DisplayedMoviesContainer from "./DisplayedMoviesContainer";

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
  const [showMovieSearch, setShowMovieSearch] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showHamburguer, setShowHamburguer] = useState(true);

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
      const {
        data: { genres },
      } = await axios.get(`${URL_BASE}/genre/movie/list`, {
        params: {
          api_key: process.env.API_KEY,
        },
      });
      console.log(genres);
      setCategories(genres);
    } catch (err) {
      (err) => {
        console.log(err);
      };
    }
  };

  useEffect(() => {
    fetchMovies();
    getCategoriesFetch();
  }, []);

  return (
    <main className={darkMode ? "bg-gray-800 text-white" : "bg-gray-100"}>
   
      <Header
        URL_BASE={URL_BASE}
        setMovies={setMovies}
        setMovie={setMovie}
        oneSingleMovie={oneSingleMovie}
        categories={categories}
        showMovieSearch={showMovieSearch}
        setShowMovieSearch={setShowMovieSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        showHamburguer={showHamburguer}
        setShowHamburguer={setShowHamburguer}
        query={query}
        setQuery={setQuery}
        fetchMovies={fetchMovies}
        playing={playing}
      />

      <VideoBannerAndPlayer
        movie={movie}
        IMAGE_PATH={IMAGE_PATH}
        playing={playing}
        trailer={trailer}
        showInfo={showInfo}
        setPlaying={setPlaying}
        setShowInfo={setShowInfo}
      />

      <DisplayedMoviesContainer
        movies={movies}
        URL_IMAGE={URL_IMAGE}
        darkMode={darkMode}
        selectMovie={selectMovie}
      />

     
    </main>
  );
}

export default Main;
