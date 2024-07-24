import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import RecipeItem from "../components/RecipeItem";

function Home() {
  const { recipeList, loading, error } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {loading ? (
        <h1 className="text-2xl text-black tracking-wider">Loading... Please Wait!</h1>
      ) : error ? (
        <h1 className="text-2xl text-black tracking-wider"> Bhai Error Aa Gaya, Sorry! Refresh Karle ({error})</h1>
      ) : recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} index={index} />)
      ) : (
        <h1 className="text-2xl text-black tracking-wider">No recipes found</h1>
      )}
    </div>
  );
}

export default Home;
