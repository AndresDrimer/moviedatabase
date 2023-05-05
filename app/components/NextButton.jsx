import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";

function NextButton({ nextPage, fetchMovies, fetchMoviesPag2, query }) {
  return (
    <div>
      <div className="w-full flex justify-end items-center px-4 mb-4 text-xs text-blue-800">
        {nextPage ? (
          <>
            <HiOutlineChevronDoubleRight />
            <button onClick={() => fetchMoviesPag2(query)}>
              {" "}
              <p className="px-1">next</p>{" "}
            </button>
          </>
        ) : (
          <>
            <HiOutlineChevronDoubleLeft />
            <button onClick={() => fetchMovies(query)}>
              {" "}
              <p className="px-1">back</p>{" "}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default NextButton;
