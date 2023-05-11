import Image from "next/image";
import noPosterCover from "../../public/noposter2.png";

function DisplayedMoviesContainer({
  movies,
  URL_IMAGE,
  darkMode,
  selectMovie,
}) {
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
            <div className="hover:scale-105 hover:duration-700 ">
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
                className="w-full h-auto"
              />
              <div className="border-4 border-blue-800 rounded-full p-2 h-[55px] max-w-[55px] font-bold text-2xl bg-gray-100 opacity-90 mr-4 absolute top-5 right-0">
                {it.vote_average.toFixed(1) * 10}{" "}
              </div>{" "}

              <section className=" px-2 w-full flex h-auto items-center justify-between ">
                <div className="w-full">
                  <h4 className="text-bolder text-xl my-4 text-left uppercase w-full leading-none h-auto flex justify-between">
                  <span className={darkMode ? "text-white" : "text-black"}>
           
                      "{it.title}" {"    "}
                    </span>

                    {it.release_date && (
                      <span className="text-gray-500 text-sm">
                        ({it.release_date.substring(0, 4)})
                      </span>
                    )}
                  </h4>
                </div>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayedMoviesContainer;
