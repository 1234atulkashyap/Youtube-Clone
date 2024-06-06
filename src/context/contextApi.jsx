
import { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [selectCategories, setselectCategories] = useState("New");
  const [searchResults, setSearchResults] = useState();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        selectCategories,
        setselectCategories,
        searchResults,
        setSearchResults,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

