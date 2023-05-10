"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import Header from "./Header/Header";
import VideoBannerAndPlayer from "./VideoBannerAndPlayer/VideoBannerAndPlayer";
import DisplayedMoviesContainer from "./DisplayedMoviesContainer";
import Footer from "./Footer";

import NextButton from "./NextButton";




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
  const [nextPage, setNextPage] = useState(true);
  const [english, setEnglish] = useState(false);
  const lang = english ? "en" : "es-ES";
  const [creditsOneMovie, setCreditsOneMovie] = useState({
    cast: [
      { name: "loading", character: "", credit_id: 1 },
    ],
    crew: [
      { name: "loading", credit_id: 2, job: "Director" },
      { name: "loading", credit_id: 3, job: "Producer" },
    ],
  });

  //metodo que pide todas las peliculas y actualiza con ellas el estado "movies"
  //le agregué page: 1 a los params para probar de probar paginacion. Creo que no cambia nada, por default trae solo pag=1
  const fetchMovies = async (query) => {
    const type = query ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${URL_BASE}/${type}/movie`, {
      params: {
        api_key: process.env.API_KEY,
        query: query,
        page: 1,
        language: lang,
      },
    });

    setMovies(results);
    setMovie(results[0]);
    console.log(movie.backdrop_path)
    setNextPage(true);

    if (results.length) {
      await oneSingleMovie(results[0].id);
      await getCreditsOneMovie(results[0].id);
    }
  };

  //metodo para traer pag2, creo que podria hacerse todo con una segunda variable page que se le pase al llamar el método, incluso en el primer fetch, pero no me funcionó. Dejo esta solución andando, pero a mejorar... para poder traer todas las pags que ofrezca, siempre que no devuelvan null

  const fetchMoviesPag2 = async (query) => {
    const type = query ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${URL_BASE}/${type}/movie`, {
      params: {
        api_key: process.env.API_KEY,
        query: query,
        page: 2,
        language: lang,
      },
    });

    setMovies(results);
    setMovie(results[0]);
    setNextPage(false); //cambia el boton

    if (results.length) {
      await oneSingleMovie(results[0].id);
    }
  };

  //pide una sola pelicula y muestra el trailer
  const oneSingleMovie = async (id) => {
    try{
    const { data } = await axios.get(`${URL_BASE}/movie/${id}`, {
      params: {
        api_key: process.env.API_KEY,
        append_to_response: "videos",
        language: lang,
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (it) => it.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setMovie(data);
   getCreditsOneMovie(id)
    console.log(data)

  } catch(error){
    console.log(error)
  }
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
          language: lang,
        },
      });

      setCategories(genres);
    } catch (err) {
      (err) => {
        console.log(err);
      };
    }
  };

  // metodo para traer los creditos de una pelicula en concreto que se pasa por parametro
  const getCreditsOneMovie = async (id) => {
    try {
      const {
        data: { credits },
      } = await axios.get(`${URL_BASE}/movie/${id}`, {
        params: {
          api_key: process.env.API_KEY,
          append_to_response: "credits",
          language: lang,
        },
      });
      setCreditsOneMovie(credits);
    } catch (err) {
      (err) => {
        console.log(err);
      };
    }
  };


  // Get a list of movies by genre
  async function getOneCategoryFetch(id, name) {
    try {
      const {
        data: { results },
      } = await axios.get(`${URL_BASE}/discover/movie`, {
        params: {
          api_key: process.env.API_KEY,
          with_genres: id,
        },
      });
      console.log(results);
      setMovies(results);
      setMovie(results[0]);
      if (results.length) {
        await oneSingleMovie(results[0].id);
        setShowCategories(false);
        setSelectedCategory(name);
      }
    } catch (err) {
      (err) => {
        console.log(err);
      };
    }
  }


  useEffect(() => {
    fetchMovies();
    getCategoriesFetch();
  }, []);


  return (
    <main className={darkMode ? "bg-gray-800 text-white" : "transparent"  } 
    >

    
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
        english={english}
        setEnglish={setEnglish}
        getOneCategoryFetch={getOneCategoryFetch}
      />

      <VideoBannerAndPlayer
        movie={movie}
        IMAGE_PATH={IMAGE_PATH}
        playing={playing}
        trailer={trailer}
        showInfo={showInfo}
        setPlaying={setPlaying}
        setShowInfo={setShowInfo}
        english={english}
        creditsOneMovie={creditsOneMovie}
      />

      <NextButton
        nextPage={nextPage}
        fetchMovies={fetchMovies}
        fetchMoviesPag2={fetchMoviesPag2}
        query={query}
      />

      <DisplayedMoviesContainer
        movies={movies}
        URL_IMAGE={URL_IMAGE}
        darkMode={darkMode}
        selectMovie={selectMovie}
      />

      <Footer darkMode={darkMode} />
    </main>
  );
}

export default Main;
