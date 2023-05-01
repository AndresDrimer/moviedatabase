"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function CategoriesSelector({URL_BASE, setMovies, setMovie, oneSingleMovie, categories,setShowMovieSearch}) {
  //con este selector tengo que
  //1- conseguir el array de categorias -OK
  //2- inyectarlo en el nav - OK
  //3- agregarle a cada li su metodo para hacer un nuevo fecth que busque resultados de la categoria seleccionada y devuelva a main la variable updated. Creo que siemplemente al actualizarse ya se pintarian de forma automatica. Probar


  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState()
 
  


// el valor de BASE_URL y los metodos para actualizar los estados me los traje como una prop, al padre de este componente y despues a ste mismo
  


 
  // Get a list of movies by genre

 async function getOneCategoryFetch(id, name) {
    try {
      const {data: { results }, } = await axios.get(`${URL_BASE}/discover/movie`, {
        params: {
          api_key: process.env.API_KEY,
          with_genres: id, 
        },
      });
      console.log(results)
    setMovies(results);
    setMovie(results[0])
    if (results.length) {
    await oneSingleMovie(results[0].id);
    setShowCategories(false)
    setSelectedCategory(name)
    }} catch(err)  { err=>{
      console.log(err)
    }
  };
};

function handleSearch(){
  setShowCategories(prev => !prev)
  setSelectedCategory(null)
}

function handleSearchMovie() {
  setShowMovieSearch(prev=>!prev);
  setShowCategories(prev=>!prev);

}


  return (
    <div>
      <nav className="py-4 px-8 w-full ">
      
      <div className="mb-4 flex justify-center gap-2 max-w-[300px] mx-auto">
      <button 
      className="rounded-lg border-4 px-2 bg-red-800 text-white flex-1"
      onClick={() => handleSearchMovie()}
      >Search Movie</button>
      <button 
      className="rounded-lg border-4 px-2 bg-blue-800 text-white"
      onClick={()=> handleSearch() }
      >{showCategories ? "X" : "Search Genres"}</button>
</div>{showCategories && (
    
    
    
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-4">
          {categories.map(it => (
            <button 
                key={it.id} 
                className="text-sm flex justify-center border-4 rounded-lg hover:scale-x-95  active:border-blue-800"
                onClick={()=>getOneCategoryFetch(it.id, it.name)} 
                > 
                    {it.name}
            </button>))}

        </div>)
          }   
         {selectedCategory && (<h3 className="text-2xl w-full bg-gray-300 text-center uppercase border-2 rounded-lg drop-shadow-lg max-w-[300px] mx-auto">{selectedCategory}</h3>)}
          
          
      </nav>
    </div>
  );
}

export default CategoriesSelector;
