import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("cake");
  const [loading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);
  const [error, setError] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favList, setFavList] = useState([]);

  const navigate = useNavigate();

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setError(null);
      } else {
        setRecipeList([]);
        setError(data.message);
      }
      setLoading(false);
      navigate('/');
      console.log(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchRecipes();
  };

  const handleAddToFav = (getCurrentItem) => {
    let copyFavList = [...favList];
    const index = copyFavList.findIndex((item) => item.id === getCurrentItem.id);

    if (index === -1) {
      copyFavList.push(getCurrentItem);
    } else {
      copyFavList.splice(index, 1);
    }
    setFavList(copyFavList);
    localStorage.setItem('favList', JSON.stringify(copyFavList))
  };

  useEffect(() => {
    const storedFavList = localStorage.getItem('favList')
    if (storedFavList) {
        setFavList(JSON.parse(storedFavList))
    }
    fetchRecipes();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        loading,
        recipeList,
        recipeDetails,
        setRecipeDetails,
        handleAddToFav,
        favList,
        error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
