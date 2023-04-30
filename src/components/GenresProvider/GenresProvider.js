import React, { useState, useCallback, useMemo, createContext } from "react";
import axios from "axios";

const GenresContext = createContext();

const GenresProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);

  const fetchGenres = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/genres`
      );
      setGenres(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      loading,
      error,
      genres,
      fetchGenres,
    }),
    [loading, error, genres, fetchGenres]
  );

  return (
    <GenresContext.Provider value={value}>{children}</GenresContext.Provider>
  );
};

export { GenresProvider, GenresContext };
