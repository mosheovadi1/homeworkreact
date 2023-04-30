import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  SEARCH_PAGE_PATH,
  MOVIES_PAGE_PATH,
} from "./constants/routes.constants";

import SearchPage from "./components/SearchPage";
import MoviesProvider from "./components/GenresProvider";
import MoviesPage from "./components/MoviesPage";

function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <Routes>
          <Route path={SEARCH_PAGE_PATH} element={<SearchPage />} />
          <Route path={MOVIES_PAGE_PATH} element={<MoviesPage />} />
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;
