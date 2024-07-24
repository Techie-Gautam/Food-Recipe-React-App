import React from "react";
import { Link } from "react-router-dom";

function RecipeItem({item, index}) {
  return (
    <div key={index} className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 border-white rounded-2xl">
        <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
            <img className="w-full h-full object-center" src={item?.image_url} alt="" />
        </div>
        <div>
            <span className="text-sm text-cyan-700 font-medium">{item?.publisher}</span>
            <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
            <Link to={`/recipe-item/${item?.id}`} className="text-sm p-3 px-8 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white">Recipe Details</Link>
        </div>
    </div>
  )
}

export default RecipeItem;
