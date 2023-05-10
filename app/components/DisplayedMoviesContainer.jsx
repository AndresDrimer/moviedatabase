import Image from "next/image"
import noPosterCover from "../../public/noposter.png";


function DisplayedMoviesContainer({ movies, URL_IMAGE, darkMode, selectMovie}) {

  


  return (
    <div>
    
    {/* contendor de las peliculas actuales */}
    <div className="w-full text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  2xl:max-w-[2200px] 2xl:mx-auto gap-8 px-8">
    {movies.map((it) => (
      <div
        key={it.id}
        className="flex flex-col items-center cursor-pointer relative"
        onClick={() => selectMovie(it)}
      >
      <div>
        <Image
          src={
            it.poster_path
              ? `${URL_IMAGE + it.poster_path}`
              : noPosterCover
          }
          alt="movie-poster"
          width={300}
          height={200}
          unoptimized={true}
          className="hover:scale-105 hover:duration-700 w-full h-auto "
        />


        <div 
        className="border-4 border-red-800 rounded-full p-2 absolute left-[80%] bottom-[90%]  h-100 font-bold text-2xl bg-gray-100 opacity-90">
          {it.vote_average.toFixed(1)*10}
        </div>
        </div>
        
        <h4 className="text-bolder text-xl mt-4 text-center uppercase w-full  leading-none py-2 flex flex-col justify-center">
          <span className={darkMode ? "text-white" : "text-black" }>{it.title}</span> <br />
          {it.release_date && (
            <span className="text-gray-500">
              ({it.release_date.substring(0, 4)})
            </span>
          )}
        </h4>
      </div>
    ))}
  </div>
    
    
    </div>
  )
}

export default DisplayedMoviesContainer

