import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function Details() {
  const {id} = useParams()
  const {recipeDetails, setRecipeDetails, handleAddToFav, favList} = useContext(GlobalContext)

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data = await response.json()
      console.log(data);
      if (data?.data) {
        setRecipeDetails(data?.data)
      }
    }

    getRecipeDetails()
  }, [])
  
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-1 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img src={recipeDetails?.recipe.image_url} alt={recipeDetails?.recipe.title} className="w-full h-full rounded-2xl object-center block group-hover:scale-105 duration-300" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-lg text-blue-500 font-medium">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.recipe?.title}
        </h3>
        <div>
          <span  className="text-xl font-semibold text-blue-600 bg-blue-300 p-1 px-3 rounded">Ingredients:</span>
          <div className="flex flex-col gap-3 mt-2">
              {recipeDetails?.recipe?.ingredients.map((ingredient) => (
                <p className="text-xl font-semibold">
                  <span >{ingredient.quantity} {ingredient.unit}</span>
                  <span >{ingredient.description}</span>
                </p>
              ))}
          </div>
        </div>
        <div>
          <button onClick={() => handleAddToFav(recipeDetails?.recipe)} className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white">
            {favList.findIndex((item) => item.id === recipeDetails?.recipe?.id) !== -1 ? "Remove From Favorites" : "Add To Favorites"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details;
