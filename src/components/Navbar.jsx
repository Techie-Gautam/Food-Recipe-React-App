import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function Navbar() {
  const { setSearch, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-bold tracking-wide">
        <NavLink to={"/"}>
          Food<span className="text-blue-500">Recipes</span>
        </NavLink>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          required
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter dish name..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>

      <div className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-600 text-xl hover:text-gray-700 duration-300 font-semibold tracking-wider border-b-2 border-transparent ${
              isActive ? "border-blue-500" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `text-gray-600 text-xl hover:text-gray-700 duration-300 font-semibold tracking-wider border-b-2 border-transparent ${
              isActive ? "border-blue-500" : ""
            }`
          }
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
