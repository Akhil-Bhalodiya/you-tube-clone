import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResult] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories)
  },[selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({contents})=> {
      console.log({contents})
      setSearchResult(contents)
      setLoading(false)
    })
  }
 
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        setSearchResult,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
