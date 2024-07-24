import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import RecipeItem from "../components/RecipeItem";

function Home() {
  const {favList} = useContext(GlobalContext)

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {favList && favList.length > 0 ? (
            favList.map((item, index) => <RecipeItem item={item} index={index} />)
        ) : (
          <p className="text-black font-semibold text-2xl tracking-wider">Your Favourite List Is Empty!</p>
        )}
    </div>
  )
}

export default Home;
